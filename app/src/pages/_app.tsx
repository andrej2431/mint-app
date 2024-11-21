import { AppProps } from 'next/app';
import Head from 'next/head';
import { FC } from 'react';
import { ContextProvider } from '../contexts/ContextProvider';
import { AppBar } from '../components/AppBar';
import Notifications from '../components/Notification'
import { HomeView } from 'views';
import { Saira } from 'next/font/google'
require('@solana/wallet-adapter-react-ui/styles.css');
require('../styles/globals.css');

const saira = Saira({   
  subsets: ['latin'],
  variable: "--font-saira"
})

const App: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
          <Head>
            <title>HeeHee NFT</title>
          </Head>

          <ContextProvider>
            <div className="flex flex-col h-screen bg-gradient-to-br from-rose-900 via-red-700 to-orange-500">
              <Notifications />
              <AppBar/>
              <HomeView/>
            </div>
          </ContextProvider>
        </>
    );
};

export default App;
