import { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import WalletContextProvider from '../components/WalletContextProvider'
import { AppBar } from '../components/AppBar'
import { BalanceDisplay } from '../components/BalanceDisplay'
import { SendSolForm } from '../components/SendSolForm'
import Head from 'next/head'
import { CandyMint } from '../components/CandyMint'

const Home: NextPage = (props) => {

  return (
    <div className="bg-gradient-to-br from-rose-900 via-red-700 to-orange-500">
    <div className={styles.App}>
      <Head>
        <title>HeeHee NFT</title>
        <link rel="icon" href="/heeheeLogo.webp" />
        <meta
          name="description"
          content="HeeHee NFT"
        />
      </Head>
      <WalletContextProvider>
        <AppBar />
        <div className={styles.AppBody}>
        
          <CandyMint/>
        </div>
      </WalletContextProvider >
    </div>
    </div>
  );
}

export default Home;