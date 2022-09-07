import type { NextPage } from 'next';
import Head from 'next/head';
import ConnectWalletButton from '../components/ConnectWalletButton';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Learn Web3 NFT viewer</title>
        <meta name="description" content="Learn Web3 NFT viewer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ConnectWalletButton />
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
