/// <reference types="vite/client" />
/// <reference types="@web3modal/ethers/react" />

interface ImportMetaEnv {
  readonly VITE_SUBSCRIPTION_CONTRACT: string;
  readonly VITE_USDT_ADDRESS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
