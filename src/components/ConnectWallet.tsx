import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { useWallet } from "../contexts/WalletContext";

export default function ConnectWallet() {
  const { account, isCorrectNetwork, isConnecting, error, connect, disconnect, switchToBSCTestnet } =
    useWallet();
  const [showQR, setShowQR] = useState(false);

  const metamaskDeepLink = `https://metamask.app.link/dapp/${window.location.host}${window.location.pathname}`;

  if (account && isCorrectNetwork) {
    return (
      <div className="flex items-center gap-3">
        <button
          onClick={disconnect}
          className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-xl px-4 py-2 hover:bg-green-500/20 transition-colors"
        >
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-green-400 text-sm font-medium">
            {account.slice(0, 6)}...{account.slice(-4)}
          </span>
        </button>
        <button onClick={disconnect} className="btn-secondary text-sm py-2 px-4">
          Disconnect
        </button>
      </div>
    );
  }

  if (account && !isCorrectNetwork) {
    return (
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-xl px-4 py-2">
          <span className="text-yellow-400 text-sm font-medium">Wrong Network</span>
        </div>
        <button onClick={switchToBSCTestnet} className="btn-primary text-sm py-2 px-4">
          Switch to BSC Testnet
        </button>
        <button onClick={disconnect} className="btn-secondary text-sm py-2 px-4">
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="flex items-center gap-2">
        <button onClick={connect} disabled={isConnecting} className="btn-primary">
          {isConnecting ? "Connecting..." : "Connect MetaMask"}
        </button>
        <button
          onClick={() => setShowQR(!showQR)}
          className="btn-secondary text-sm py-3 px-3"
          title="Connect via mobile wallet"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
            />
          </svg>
        </button>
      </div>

      {showQR && (
        <div className="absolute top-full right-0 mt-2 z-50">
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-2xl w-72">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold">Scan with Mobile</h3>
              <button onClick={() => setShowQR(false)} className="text-gray-400 hover:text-white text-xl">
                &times;
              </button>
            </div>
            <div className="bg-white p-4 rounded-xl flex justify-center">
              <QRCodeSVG value={metamaskDeepLink} size={180} level="M" />
            </div>
            <p className="text-gray-400 text-xs text-center mt-3">
              Open MetaMask mobile and scan this QR code
            </p>
            <p className="text-gray-500 text-xs text-center mt-1 break-all">{metamaskDeepLink}</p>
          </div>
        </div>
      )}

      {error && <p className="text-red-400 text-sm mt-2 absolute top-full left-0">{error}</p>}
    </div>
  );
}
