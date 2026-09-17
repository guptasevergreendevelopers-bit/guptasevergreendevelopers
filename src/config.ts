export const BSC_TESTNET = {
  chainId: 97,
  chainIdHex: "0x61",
  name: "BSC Testnet",
  rpcUrl: "https://bsc-testnet-dataseed.bnbchain.org",
  blockExplorer: "https://testnet.bscscan.com",
  nativeCurrency: {
    name: "BNB",
    symbol: "tBNB",
    decimals: 18,
  },
};

export const BSC_MAINNET = {
  chainId: 56,
  chainIdHex: "0x38",
  name: "BSC Mainnet",
  rpcUrl: "https://bsc-dataseed.bnbchain.org",
  blockExplorer: "https://bscscan.com",
  nativeCurrency: {
    name: "BNB",
    symbol: "BNB",
    decimals: 18,
  },
};

export const CONTRACTS = {
  // Fill after deployment
  trialSubscription: import.meta.env.VITE_SUBSCRIPTION_CONTRACT || "",
  usdt: import.meta.env.VITE_USDT_ADDRESS || "",
};

export const TRIAL_SUBSCRIPTION_ABI = [
  "function usdt() view returns (address)",
  "function merchant() view returns (address)",
  "function automation() view returns (address)",
  "function TRIAL_AMOUNT() view returns (uint256)",
  "function FUTURE_AMOUNT() view returns (uint256)",
  "function TOTAL_AUTHORIZATION() view returns (uint256)",
  "function DELAY() view returns (uint256)",
  "function getSubscription(address customer) view returns (uint256 startedAt, uint256 futurePaymentTime, bool trialPaid, bool futurePaid, bool active)",
  "function subscribe()",
  "function collectFuturePayment(address customer)",
  "function cancelSubscription()",
  "function subscriptions(address) view returns (uint256 startedAt, uint256 futurePaymentTime, bool trialPaid, bool futurePaid, bool active)",
  "event SubscriptionCreated(address indexed customer, uint256 trialAmount, uint256 futureAmount, uint256 futurePaymentTime)",
  "event TrialCollected(address indexed customer, uint256 amount)",
  "event FuturePaymentCollected(address indexed customer, uint256 amount)",
  "event SubscriptionCancelled(address indexed customer)",
];

export const MOCK_USDT_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function decimals() view returns (uint8)",
  "function balanceOf(address account) view returns (uint256)",
  "function allowance(address owner, address spender) view returns (uint256)",
  "function approve(address spender, uint256 amount) returns (bool)",
  "function transfer(address to, uint256 amount) returns (bool)",
  "function mint(address to, uint256 amount)",
];
