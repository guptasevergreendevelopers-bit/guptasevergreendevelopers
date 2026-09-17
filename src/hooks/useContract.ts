import { useState, useEffect, useCallback } from "react";
import { Contract, parseUnits, formatUnits } from "ethers";
import { useWallet } from "../contexts/WalletContext";
import { CONTRACTS, TRIAL_SUBSCRIPTION_ABI, MOCK_USDT_ABI } from "../config";

export interface Subscription {
  startedAt: bigint;
  futurePaymentTime: bigint;
  trialPaid: boolean;
  futurePaid: boolean;
  active: boolean;
}

export interface ContractInfo {
  usdt: string;
  merchant: string;
  automation: string;
  trialAmount: bigint;
  futureAmount: bigint;
  totalAuthorization: bigint;
  delay: bigint;
}

export function useContract() {
  const { signer, provider, account } = useWallet();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getSubscriptionContract = useCallback(
    (signerOrProvider?: any) => {
      if (!CONTRACTS.trialSubscription) return null;
      return new Contract(
        CONTRACTS.trialSubscription,
        TRIAL_SUBSCRIPTION_ABI,
        signerOrProvider || signer || provider
      );
    },
    [signer, provider]
  );

  const getUSDTContract = useCallback(
    (signerOrProvider?: any) => {
      if (!CONTRACTS.usdt) return null;
      return new Contract(
        CONTRACTS.usdt,
        MOCK_USDT_ABI,
        signerOrProvider || signer || provider
      );
    },
    [signer, provider]
  );

  const getContractInfo = useCallback(async (): Promise<ContractInfo | null> => {
    const contract = getSubscriptionContract();
    if (!contract) return null;

    try {
      const [usdt, merchant, automation, trialAmount, futureAmount, totalAuthorization, delay] =
        await Promise.all([
          contract.usdt(),
          contract.merchant(),
          contract.automation(),
          contract.TRIAL_AMOUNT(),
          contract.FUTURE_AMOUNT(),
          contract.TOTAL_AUTHORIZATION(),
          contract.DELAY(),
        ]);

      return { usdt, merchant, automation, trialAmount, futureAmount, totalAuthorization, delay };
    } catch (err: any) {
      setError(err.message || "Failed to get contract info");
      return null;
    }
  }, [getSubscriptionContract]);

  const getSubscription = useCallback(
    async (customerAddress: string): Promise<Subscription | null> => {
      const contract = getSubscriptionContract();
      if (!contract) return null;

      try {
        const [startedAt, futurePaymentTime, trialPaid, futurePaid, active] =
          await contract.getSubscription(customerAddress);
        return { startedAt, futurePaymentTime, trialPaid, futurePaid, active };
      } catch (err: any) {
        setError(err.message || "Failed to get subscription");
        return null;
      }
    },
    [getSubscriptionContract]
  );

  const getAllowance = useCallback(
    async (ownerAddress: string): Promise<bigint> => {
      const usdtContract = getUSDTContract();
      if (!usdtContract) return 0n;

      try {
        return await usdtContract.allowance(ownerAddress, CONTRACTS.trialSubscription);
      } catch {
        return 0n;
      }
    },
    [getUSDTContract]
  );

  const getUSDTBalance = useCallback(
    async (address: string): Promise<bigint> => {
      const usdtContract = getUSDTContract();
      if (!usdtContract) return 0n;

      try {
        return await usdtContract.balanceOf(address);
      } catch {
        return 0n;
      }
    },
    [getUSDTContract]
  );

  const approve = useCallback(
    async (amount: bigint): Promise<string | null> => {
      const usdtContract = getUSDTContract(signer);
      if (!usdtContract || !signer) return null;

      setLoading(true);
      setError(null);
      try {
        const tx = await usdtContract.approve(CONTRACTS.trialSubscription, amount);
        const receipt = await tx.wait();
        return receipt.hash;
      } catch (err: any) {
        setError(err.message || "Approval failed");
        return null;
      } finally {
        setLoading(false);
      }
    },
    [getUSDTContract, signer]
  );

  const subscribe = useCallback(
    async (): Promise<string | null> => {
      const contract = getSubscriptionContract(signer);
      if (!contract || !signer) return null;

      setLoading(true);
      setError(null);
      try {
        const tx = await contract.subscribe();
        const receipt = await tx.wait();
        return receipt.hash;
      } catch (err: any) {
        setError(err.message || "Subscribe failed");
        return null;
      } finally {
        setLoading(false);
      }
    },
    [getSubscriptionContract, signer]
  );

  const cancelSubscription = useCallback(
    async (): Promise<string | null> => {
      const contract = getSubscriptionContract(signer);
      if (!contract || !signer) return null;

      setLoading(true);
      setError(null);
      try {
        const tx = await contract.cancelSubscription();
        const receipt = await tx.wait();
        return receipt.hash;
      } catch (err: any) {
        setError(err.message || "Cancel failed");
        return null;
      } finally {
        setLoading(false);
      }
    },
    [getSubscriptionContract, signer]
  );

  const collectFuturePayment = useCallback(
    async (customerAddress: string): Promise<string | null> => {
      const contract = getSubscriptionContract(signer);
      if (!contract || !signer) return null;

      setLoading(true);
      setError(null);
      try {
        const tx = await contract.collectFuturePayment(customerAddress);
        const receipt = await tx.wait();
        return receipt.hash;
      } catch (err: any) {
        setError(err.message || "Collection failed");
        return null;
      } finally {
        setLoading(false);
      }
    },
    [getSubscriptionContract, signer]
  );

  return {
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
    collectFuturePayment,
    getSubscriptionContract,
    getUSDTContract,
  };
}
