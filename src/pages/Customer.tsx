import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { formatUnits, parseUnits } from "ethers";
import ConnectWallet from "../components/ConnectWallet";
import QRCodeDisplay from "../components/QRCodeDisplay";
import SubscriptionStatus from "../components/SubscriptionStatus";
import { useWallet } from "../contexts/WalletContext";
import { useContract, type Subscription } from "../hooks/useContract";
import { CONTRACTS, BSC_TESTNET } from "../config";

export default function Customer() {
  const { account, isCorrectNetwork } = useWallet();
  const {
    loading,
    error,
    setError,
    getContractInfo,
    getSubscription,
    getAllowance,
    getUSDTBalance,
    approve,
    subscribe,
    cancelSubscription,
  } = useContract();

  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [allowance, setAllowance] = useState<bigint>(0n);
  const [balance, setBalance] = useState<bigint>(0n);
  const [merchantAddress, setMerchantAddress] = useState("");
  const [txHash, setTxHash] = useState<string | null>(null);
  const [autoRefresh, setAutoRefresh] = useState(false);

  const refresh = useCallback(async () => {
    if (!account || !isCorrectNetwork) return;
    const [sub, allow, bal, info] = await Promise.all([
      getSubscription(account),
      getAllowance(account),
      getUSDTBalance(account),
      getContractInfo(),
    ]);
    setSubscription(sub);
    setAllowance(allow);
    setBalance(bal);
    if (info) setMerchantAddress(info.merchant);
  }, [account, isCorrectNetwork, getSubscription, getAllowance, getUSDTBalance, getContractInfo]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  useEffect(() => {
    if (!autoRefresh || !account) return;
    const interval = setInterval(refresh, 5000);
    return () => clearInterval(interval);
  }, [autoRefresh, account, refresh]);

  const handleApprove = async () => {
    if (!CONTRACTS.trialSubscription) {
      setError("Subscription contract address not configured. Set VITE_SUBSCRIPTION_CONTRACT in .env");
      return;
    }
    const hash = await approve(parseUnits("1001", 6));
    if (hash) {
      setTxHash(hash);
      await refresh();
    }
  };

  const handleSubscribe = async () => {
    if (!CONTRACTS.trialSubscription) {
      setError("Subscription contract address not configured. Set VITE_SUBSCRIPTION_CONTRACT in .env");
      return;
    }
    const hash = await subscribe();
    if (hash) {
      setTxHash(hash);
      await refresh();
    }
  };

  const handleCancel = async () => {
    const hash = await cancelSubscription();
    if (hash) {
      setTxHash(hash);
      await refresh();
    }
  };

  const needsApproval = allowance < parseUnits("1001", 6);
  const hasBalance = balance >= parseUnits("1001", 6);
  const canSubscribe = !needsApproval && hasBalance && (!subscription || !subscription.active);
  const isSubscribed = subscription && subscription.active;

  return (
    <div className="min-h-screen gradient-bg">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl">💎</span>
          <span className="text-xl font-bold">BNB Subscription</span>
        </Link>
        <ConnectWallet />
      </nav>

      <main className="container mx-auto px-6 py-10">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Customer Portal</h1>
            <button
              onClick={() => setAutoRefresh(!autoRefresh)}
              className={`text-sm px-3 py-1 rounded-lg ${
                autoRefresh ? "bg-green-500/20 text-green-400" : "bg-gray-700 text-gray-400"
              }`}
            >
              {autoRefresh ? "Auto-refresh ON" : "Auto-refresh OFF"}
            </button>
          </div>

          {!account ? (
            <div className="card-glass rounded-2xl p-8 text-center">
              <p className="text-gray-400 mb-4">Connect your wallet to subscribe</p>
              <ConnectWallet />
            </div>
          ) : !isCorrectNetwork ? (
            <div className="card-glass rounded-2xl p-8 text-center">
              <p className="text-yellow-400 mb-4">Please switch to BSC Testnet</p>
              <ConnectWallet />
            </div>
          ) : (
            <div className="space-y-6">
              {/* Balance Info */}
              <div className="card-glass rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4">Your Wallet</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-400 text-sm">USDT Balance</p>
                    <p className="text-xl font-bold">{formatUnits(balance, 6)} mUSDT</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Allowance</p>
                    <p className="text-xl font-bold">{formatUnits(allowance, 6)} mUSDT</p>
                  </div>
                </div>
              </div>

              {/* Subscription Status */}
              <SubscriptionStatus subscription={subscription} contractAddress={CONTRACTS.trialSubscription} />

              {/* Actions */}
              <div className="card-glass rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4">Actions</h3>
                <div className="space-y-3">
                  {needsApproval ? (
                    <button onClick={handleApprove} disabled={loading} className="btn-primary w-full">
                      {loading ? "Processing..." : "Approve 1,001 mUSDT"}
                    </button>
                  ) : !hasBalance ? (
                    <div className="text-center py-4">
                      <p className="text-yellow-400">Insufficient balance. Need at least 1,001 mUSDT.</p>
                      <p className="text-gray-500 text-sm mt-2">
                        Current balance: {formatUnits(balance, 6)} mUSDT
                      </p>
                    </div>
                  ) : isSubscribed ? (
                    <div className="space-y-3">
                      <div className="text-center py-2">
                        <p className="text-green-400">You have an active subscription</p>
                      </div>
                      <button onClick={handleCancel} disabled={loading} className="btn-danger w-full">
                        {loading ? "Processing..." : "Cancel Subscription"}
                      </button>
                    </div>
                  ) : (
                    <button onClick={handleSubscribe} disabled={loading} className="btn-primary w-full">
                      {loading ? "Processing..." : "Subscribe Now (1 USDT)"}
                    </button>
                  )}
                </div>

                {txHash && (
                  <div className="mt-4 p-3 bg-gray-800 rounded-xl">
                    <p className="text-gray-400 text-xs">Last transaction:</p>
                    <a
                      href={`${BSC_TESTNET.blockExplorer}/tx/${txHash}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-bsc-500 hover:text-bsc-400 text-sm break-all"
                    >
                      {txHash}
                    </a>
                  </div>
                )}

                {error && (
                  <div className="mt-4 p-3 bg-red-500/10 border border-red-500/30 rounded-xl">
                    <p className="text-red-400 text-sm">{error}</p>
                    <button onClick={() => setError(null)} className="text-red-400 text-xs mt-1">
                      Dismiss
                    </button>
                  </div>
                )}
              </div>

              {/* QR Code */}
              <QRCodeDisplay
                value={`${window.location.origin}/customer?contract=${CONTRACTS.trialSubscription}`}
                label="Share this QR to let others subscribe"
                size={180}
              />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
