import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { formatUnits } from "ethers";
import ConnectWallet from "../components/ConnectWallet";
import QRCodeDisplay from "../components/QRCodeDisplay";
import { useWallet } from "../contexts/WalletContext";
import { useContract, type ContractInfo } from "../hooks/useContract";
import { CONTRACTS, BSC_TESTNET } from "../config";

export default function Merchant() {
  const { account, isCorrectNetwork } = useWallet();
  const {
    loading,
    error,
    setError,
    getContractInfo,
    getSubscription,
    getUSDTBalance,
    collectFuturePayment,
  } = useContract();

  const [contractInfo, setContractInfo] = useState<ContractInfo | null>(null);
  const [merchantBalance, setMerchantBalance] = useState<bigint>(0n);
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerSub, setCustomerSub] = useState<any>(null);
  const [txHash, setTxHash] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    if (!account || !isCorrectNetwork) return;
    const [info, bal] = await Promise.all([getContractInfo(), getUSDTBalance(account)]);
    setContractInfo(info);
    setMerchantBalance(bal);
  }, [account, isCorrectNetwork, getContractInfo, getUSDTBalance]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const lookupCustomer = async () => {
    if (!customerAddress) return;
    const sub = await getSubscription(customerAddress);
    setCustomerSub(sub);
  };

  const handleCollect = async () => {
    if (!customerAddress) return;
    const hash = await collectFuturePayment(customerAddress);
    if (hash) {
      setTxHash(hash);
      await refresh();
      await lookupCustomer();
    }
  };

  const isMerchant = contractInfo && account && contractInfo.merchant.toLowerCase() === account.toLowerCase();
  const isAutomation = contractInfo && account && contractInfo.automation.toLowerCase() === account.toLowerCase();

  const canCollect = (sub: any) => {
    if (!sub || !sub.active || sub.futurePaid) return false;
    const now = Math.floor(Date.now() / 1000);
    return now >= Number(sub.futurePaymentTime);
  };

  const formatTimeRemaining = (futurePaymentTime: bigint) => {
    const now = Math.floor(Date.now() / 1000);
    const remaining = Math.max(0, Number(futurePaymentTime) - now);
    const h = Math.floor(remaining / 3600);
    const m = Math.floor((remaining % 3600) / 60);
    return `${h}h ${m}m`;
  };

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
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Merchant Dashboard</h1>

          {!account ? (
            <div className="card-glass rounded-2xl p-8 text-center">
              <p className="text-gray-400 mb-4">Connect your wallet to access the merchant dashboard</p>
              <ConnectWallet />
            </div>
          ) : !isCorrectNetwork ? (
            <div className="card-glass rounded-2xl p-8 text-center">
              <p className="text-yellow-400 mb-4">Please switch to BSC Testnet</p>
              <ConnectWallet />
            </div>
          ) : (
            <div className="space-y-6">
              {/* Role Badge */}
              {(isMerchant || isAutomation) && (
                <div className="flex gap-3">
                  {isMerchant && (
                    <span className="bg-bsc-500/20 text-bsc-500 border border-bsc-500/30 px-3 py-1 rounded-full text-sm font-medium">
                      Merchant
                    </span>
                  )}
                  {isAutomation && (
                    <span className="bg-blue-500/20 text-blue-400 border border-blue-500/30 px-3 py-1 rounded-full text-sm font-medium">
                      Automation
                    </span>
                  )}
                </div>
              )}

              {/* Contract Info */}
              {contractInfo && (
                <div className="card-glass rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-4">Contract Details</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-400 text-sm">Your USDT Balance</p>
                      <p className="text-xl font-bold">{formatUnits(merchantBalance, 6)} mUSDT</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Trial Payment</p>
                      <p className="text-xl font-bold">{formatUnits(contractInfo.trialAmount, 6)} USDT</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Future Payment</p>
                      <p className="text-xl font-bold">{formatUnits(contractInfo.futureAmount, 6)} USDT</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Delay</p>
                      <p className="text-xl font-bold">{Number(contractInfo.delay) / 3600}h</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-700/50 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">Contract</span>
                      <a
                        href={`${BSC_TESTNET.blockExplorer}/address/${CONTRACTS.trialSubscription}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-bsc-500 hover:text-bsc-400 text-sm"
                      >
                        {CONTRACTS.trialSubscription.slice(0, 6)}...{CONTRACTS.trialSubscription.slice(-4)}
                      </a>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">Merchant</span>
                      <span className="text-white text-sm">
                        {contractInfo.merchant.slice(0, 6)}...{contractInfo.merchant.slice(-4)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">Automation</span>
                      <span className="text-white text-sm">
                        {contractInfo.automation.slice(0, 6)}...{contractInfo.automation.slice(-4)}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Customer Lookup */}
              <div className="card-glass rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4">Customer Lookup</h3>
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    placeholder="Enter customer address (0x...)"
                    className="input-field flex-1"
                  />
                  <button onClick={lookupCustomer} disabled={!customerAddress} className="btn-secondary">
                    Lookup
                  </button>
                </div>

                {customerSub && (
                  <div className="mt-4 space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gray-800 rounded-xl p-3">
                        <p className="text-gray-400 text-xs">Trial Paid</p>
                        <p className={customerSub.trialPaid ? "text-green-400" : "text-gray-500"}>
                          {customerSub.trialPaid ? "Yes" : "No"}
                        </p>
                      </div>
                      <div className="bg-gray-800 rounded-xl p-3">
                        <p className="text-gray-400 text-xs">Future Paid</p>
                        <p className={customerSub.futurePaid ? "text-green-400" : "text-gray-500"}>
                          {customerSub.futurePaid ? "Yes" : "No"}
                        </p>
                      </div>
                      <div className="bg-gray-800 rounded-xl p-3">
                        <p className="text-gray-400 text-xs">Status</p>
                        <p className={customerSub.active ? "text-green-400" : "text-gray-500"}>
                          {customerSub.active ? "Active" : "Inactive"}
                        </p>
                      </div>
                      <div className="bg-gray-800 rounded-xl p-3">
                        <p className="text-gray-400 text-xs">
                          {customerSub.active && !customerSub.futurePaid ? "Time Until Payment" : "Payment Time"}
                        </p>
                        <p className="text-white text-sm">
                          {customerSub.active && !customerSub.futurePaid
                            ? formatTimeRemaining(customerSub.futurePaymentTime)
                            : new Date(Number(customerSub.futurePaymentTime) * 1000).toLocaleString()}
                        </p>
                      </div>
                    </div>

                    {isAutomation && canCollect(customerSub) && (
                      <button onClick={handleCollect} disabled={loading} className="btn-primary w-full">
                        {loading ? "Collecting..." : "Collect 1,000 USDT"}
                      </button>
                    )}

                    {isAutomation && customerSub.active && !customerSub.futurePaid && !canCollect(customerSub) && (
                      <p className="text-yellow-400 text-sm text-center">
                        Payment not yet due. Wait {formatTimeRemaining(customerSub.futurePaymentTime)}.
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* QR Codes */}
              <div className="grid md:grid-cols-2 gap-6">
                <QRCodeDisplay
                  value={`${window.location.origin}/customer?contract=${CONTRACTS.trialSubscription}`}
                  label="Customer Subscribe Link"
                  size={160}
                />
                <QRCodeDisplay
                  value={account}
                  label="Your Merchant Address"
                  size={160}
                />
              </div>

              {txHash && (
                <div className="card-glass rounded-2xl p-4">
                  <p className="text-gray-400 text-xs mb-1">Last transaction:</p>
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
                <div className="card-glass rounded-2xl p-4 border border-red-500/30">
                  <p className="text-red-400 text-sm">{error}</p>
                  <button onClick={() => setError(null)} className="text-red-400 text-xs mt-1">
                    Dismiss
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
