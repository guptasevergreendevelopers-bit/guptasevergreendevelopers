import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";

interface QRCodeDisplayProps {
  value: string;
  label: string;
  size?: number;
}

export default function QRCodeDisplay({ value, label, size = 200 }: QRCodeDisplayProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="card-glass rounded-2xl p-6 flex flex-col items-center gap-4">
      <p className="text-gray-400 text-sm font-medium">{label}</p>
      <div className="bg-white p-4 rounded-xl">
        <QRCodeSVG value={value} size={size} level="M" />
      </div>
      <div className="w-full">
        <p className="text-xs text-gray-500 text-center truncate" title={value}>
          {value}
        </p>
        <button
          onClick={handleCopy}
          className="mt-2 w-full text-sm text-bsc-500 hover:text-bsc-400 transition-colors"
        >
          {copied ? "Copied!" : "Copy Address"}
        </button>
      </div>
    </div>
  );
}
