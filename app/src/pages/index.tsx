import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Heehee NFT</title>
        <meta
          name="description"
          content="heehee NFT"
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
