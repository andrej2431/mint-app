import { FC, ReactNode, useEffect, useState } from "react";
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import * as web3 from '@solana/web3.js';
import { LedgerWalletAdapter, PhantomWalletAdapter, SafePalWalletAdapter, SolflareWalletAdapter, TorusWalletAdapter } from '@solana/wallet-adapter-wallets';
require('@solana/wallet-adapter-react-ui/styles.css');

const WalletContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [isClient, setIsClient] = useState(false);

    // Set isClient to true when the component is mounted on the client side
    useEffect(() => {
        setIsClient(true);
    }, []);

    const wallets = [new PhantomWalletAdapter(), new SolflareWalletAdapter(), new TorusWalletAdapter(), new LedgerWalletAdapter(), new SafePalWalletAdapter()];

    const endpoint = web3.clusterApiUrl('devnet');

    if (!isClient) {
        return null;  // Prevents rendering during SSR
    }

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets}>
                <WalletModalProvider>
                    {children}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
}

export default WalletContextProvider;