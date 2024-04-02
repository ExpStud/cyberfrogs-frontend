import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
//solana wallet
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { useMemo } from "react";
import { Toaster } from "react-hot-toast";
import { AppProvider } from "@contexts";

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

const App = ({ Component, pageProps }: AppProps) => {
  const network = WalletAdapterNetwork.Mainnet;
  const endpoint =
    "https://mainnet.helius-rpc.com/?api-key=fd98bcfd-5344-4cc0-8ac1-db7ba9603613";

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new LedgerWalletAdapter(),
    ],
    [network]
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <AppProvider>
            <Component {...pageProps} />
            <Toaster
              position="bottom-right"
              toastOptions={{
                style: {
                  border: "2px solid #a40227",
                  padding: "10px",
                  color: "#888888",
                  backgroundColor: "#101010",
                },
                iconTheme: {
                  primary: "#a40227",
                  secondary: "#302D2E",
                },
              }}
            />
          </AppProvider>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default App;
