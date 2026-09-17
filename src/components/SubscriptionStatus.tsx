import { formatUnits } from "ethers";
import type { Subscription } from "../hooks/useContract";

interface SubscriptionStatusProps {
  subscription: Subscription | null;
  contractAddress: string;
}

export default function SubscriptionStatus({ subscription, contractAddress }: SubscriptionStatusProps) {
  if (!subscription) {
    return (
      <div className="card-glass rounded-2xl p-6">
        <h3 className="text-lg font-semibold mb-4">Subscription Status</h3>
        <p className="text-gray-400">No subscription found for this address.</p>
      </div>
    );
  }

  const { startedAt, futurePaymentTime, trialPaid, futurePaid, active } = subscription;
  const now = Math.floor(Date.now() / 1000);
  const isDue = now >= Number(futurePaymentTime);
  const timeRemaining = Math.max(0, Number(futurePaymentTime) - now);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}h ${m}m ${s}s`;
  };

  const formatDate = (timestamp: bigint) => {
    if (timestamp === 0n) return "N/A";
    return new Date(Number(timestamp) * 1000).toLocaleString();
  };

  const getStatusColor = () => {
    if (futurePaid) return "text-gray-400";
    if (active && isDue) return "text-yellow-400";
    if (active) return "text-green-400";
    return "text-gray-400";
  };

  const getStatusText = () => {
    if (futurePaid) return "Completed";
    if (active && isDue) return "Payment Due";
    if (active) return "Active";
    return "Inactive";
  };

  return (
    <div className="card-glass rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Subscription Status</h3>
        <span className={`text-sm font-medium ${getStatusColor()}`}>
          {getStatusText()}
        </span>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
          <span className="text-gray-400 text-sm">Trial Payment (1 USDT)</span>
          <span className={trialPaid ? "text-green-400" : "text-gray-500"}>
            {trialPaid ? "Paid" : "Pending"}
          </span>
        </div>

        <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
          <span className="text-gray-400 text-sm">Future Payment (1,000 USDT)</span>
          <span className={futurePaid ? "text-green-400" : "text-gray-500"}>
            {futurePaid ? "Paid" : "Pending"}
          </span>
        </div>

        {active && !futurePaid && (
          <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
            <span className="text-gray-400 text-sm">Time Until Payment</span>
            <span className={isDue ? "text-yellow-400" : "text-white"}>
              {isDue ? "Due Now" : formatTime(timeRemaining)}
            </span>
          </div>
        )}

        <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
          <span className="text-gray-400 text-sm">Started</span>
          <span className="text-white text-sm">{formatDate(startedAt)}</span>
        </div>

        <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
          <span className="text-gray-400 text-sm">Future Payment Time</span>
          <span className="text-white text-sm">{formatDate(futurePaymentTime)}</span>
        </div>

        <div className="flex justify-between items-center py-2">
          <span className="text-gray-400 text-sm">Contract</span>
          <a
            href={`https://testnet.bscscan.com/address/${contractAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-bsc-500 hover:text-bsc-400 text-sm truncate max-w-[200px]"
          >
            {contractAddress.slice(0, 6)}...{contractAddress.slice(-4)}
          </a>
        </div>
      </div>
    </div>
  );
}
