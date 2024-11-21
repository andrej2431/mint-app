import { FC } from 'react'
import styles from '../styles/Home.module.css'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import Image from 'next/image'

export const AppBar: FC = () => {
    return (
  <div className="min-h-[90px] flex flex-col sm:flex-row items-center justify-between text-xl sm:text-3xl md:text-5xl text-white p-4 sm:p-6 bg-[#b30b0a] shadow-2xl rounded-full w-full sm:w-auto">
    <div className="flex items-center sm:mr-[118px]">
      <Image alt="heehee logo" src="/heeheeLogo.webp" height={50} width={50} className="object-contain" />
    </div>
    <span className="text-center font-saira font-bold flex-grow text-lg sm:text-xl  md:text-3xl lg:text-4xl px-2">$HeeHee x Revolware NFT collection</span>
    <div className="w-full sm:w-auto mt-2 sm:mt-0 flex justify-center min-w-[150px]">
      <WalletMultiButton className='' />
    </div>
  </div>
    )
}