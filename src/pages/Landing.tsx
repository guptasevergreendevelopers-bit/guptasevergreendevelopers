import { Link } from "react-router-dom";
import ConnectWallet from "../components/ConnectWallet";
import { useWallet } from "../contexts/WalletContext";

export default function Landing() {
  const { account, isCorrectNetwork } = useWallet();

  return (
    <div className="min-h-screen gradient-bg">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl">💎</span>
          <span className="text-xl font-bold">BNB Subscription</span>
        </div>
        <ConnectWallet />
      </nav>

      <main className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            BNB Smart Chain
            <span className="text-bsc-500"> Subscription</span>
          </h1>
          <p className="text-xl text-gray-400 mb-12">
            1 USDT trial now, 1,000 USDT after 24 hours. Secure, transparent, on-chain.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="card-glass rounded-2xl p-6">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="font-semibold mb-2">Exact Approval</h3>
              <p className="text-gray-400 text-sm">Only 1,001 USDT authorized. No unlimited spending.</p>
            </div>
            <div className="card-glass rounded-2xl p-6">
              <div className="text-3xl mb-3">⏱️</div>
              <h3 className="font-semibold mb-2">24-Hour Delay</h3>
              <p className="text-gray-400 text-sm">Future payment enforced by smart contract. No early collection.</p>
            </div>
            <div className="card-glass rounded-2xl p-6">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="font-semibold mb-2">No Backdoors</h3>
              <p className="text-gray-400 text-sm">No upgrade, no withdrawal, no admin. Fully immutable.</p>
            </div>
          </div>

          {account && isCorrectNetwork ? (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/customer" className="btn-primary text-lg">
                Subscribe as Customer
              </Link>
              <Link to="/merchant" className="btn-secondary text-lg">
                Merchant Dashboard
              </Link>
            </div>
          ) : (
            <p className="text-gray-500">Connect your wallet to get started</p>
          )}
        </div>
      </main>
    </div>
  );
}
