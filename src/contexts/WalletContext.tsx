import React, { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";
import { BrowserProvider, JsonRpcSigner } from "ethers";
import { BSC_TESTNET } from "../config";

interface WalletContextType {
  account: string | null;
  provider: BrowserProvider | null;
  signer: JsonRpcSigner | null;
  chainId: number | null;
  isCorrectNetwork: boolean;
  isConnecting: boolean;
  error: string | null;
  connect: () => Promise<void>;
  disconnect: () => void;
  switchToBSCTestnet: () => Promise<void>;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export function WalletProvider({ children }: { children: ReactNode }) {
  const [account, setAccount] = useState<string | null>(null);
  const [provider, setProvider] = useState<BrowserProvider | null>(null);
  const [signer, setSigner] = useState<JsonRpcSigner | null>(null);
  const [chainId, setChainId] = useState<number | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isCorrectNetwork = chainId === BSC_TESTNET.chainId;

  const connect = useCallback(async () => {
    if (!window.ethereum) {
      setError("No wallet detected. Install MetaMask or open in a wallet browser.");
      return;
    }

    setIsConnecting(true);
    setError(null);

    try {
      // Step 1: Get accounts via raw request (no ethers.js involved)
      const accounts: string[] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (!accounts || accounts.length === 0) {
        throw new Error("No accounts returned. Check your wallet.");
      }

      const address = accounts[0];

      // Step 2: Get chain ID via raw request
      const chainIdHex: string = await window.ethereum.request({
        method: "eth_chainId",
      });
      const chainIdNum = parseInt(chainIdHex, 16);

      // Step 3: Create ethers provider + signer from the already-connected window.ethereum
      // Use getSigner(address) to avoid re-triggering eth_requestAccounts
      const bp = new BrowserProvider(window.ethereum);
      const currentSigner = await bp.getSigner(address);

      setProvider(bp);
      setSigner(currentSigner);
      setAccount(address);
      setChainId(chainIdNum);
    } catch (err: any) {
      const msg = err?.message || "Failed to connect wallet";
      if (msg.includes("User rejected")) {
        setError("Connection rejected by user.");
      } else {
        setError(msg);
      }
    } finally {
      setIsConnecting(false);
    }
  }, []);

  const disconnect = useCallback(() => {
    setAccount(null);
    setProvider(null);
    setSigner(null);
    setChainId(null);
    setError(null);
  }, []);

  const switchToBSCTestnet = useCallback(async () => {
    if (!window.ethereum) return;

    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: BSC_TESTNET.chainIdHex }],
      });
    } catch (switchError: any) {
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: BSC_TESTNET.chainIdHex,
                chainName: BSC_TESTNET.name,
                nativeCurrency: BSC_TESTNET.nativeCurrency,
                rpcUrls: [BSC_TESTNET.rpcUrl],
                blockExplorerUrls: [BSC_TESTNET.blockExplorer],
              },
            ],
          });
        } catch (addError: any) {
          setError(addError.message || "Failed to add BSC Testnet");
        }
      }
    }
  }, []);

  // Listen for wallet events
  useEffect(() => {
    if (!window.ethereum) return;

    const handleAccountsChanged = (accounts: string[]) => {
      if (accounts.length === 0) {
        disconnect();
      } else {
        setAccount(accounts[0]);
      }
    };

    const handleChainChanged = (newChainId: string) => {
      setChainId(parseInt(newChainId, 16));
    };

    window.ethereum.on("accountsChanged", handleAccountsChanged);
    window.ethereum.on("chainChanged", handleChainChanged);

    return () => {
      window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
      window.ethereum.removeListener("chainChanged", handleChainChanged);
    };
  }, [disconnect]);

  return (
    <WalletContext.Provider
      value={{
        account,
        provider,
        signer,
        chainId,
        isCorrectNetwork,
        isConnecting,
        error,
        connect,
        disconnect,
        switchToBSCTestnet,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
}

declare global {
  interface Window {
    ethereum?: any;
  }
}
