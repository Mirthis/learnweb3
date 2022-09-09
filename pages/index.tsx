import { Nft } from 'alchemy-sdk';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import ConnectWalletButton from '../components/ConnectWalletButton';
import NftList from '../components/NftList';
import { alchemyClient } from '../utils/alchemySdk';

const Home: NextPage = () => {
  const [nfts, setNfts] = useState<Nft[]>();

  // useEffect(() => {
  //   const getNfts = async () => {
  //     const nfts = await alchemyClient.nft.getNftsForContract(
  //       LEARNWEB3_NFT_CONTRACT_ADDRESS
  //     );
  //     setNfts(nfts.nfts);
  //   };
  //   getNfts();
  // }, []);

  return (
    <div>
      <Head>
        <title>Learn Web3 NFT viewer</title>
        <meta name="description" content="Learn Web3 NFT viewer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ConnectWalletButton />
        {nfts && <NftList nfts={nfts} />}
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
