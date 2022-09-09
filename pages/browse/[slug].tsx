import { Nft } from 'alchemy-sdk';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import NftList from '../../components/NftList';
import { alchemyClient } from '../../utils/alchemySdk';
import { collections } from '../../utils/constants';

const Browse: NextPage = () => {
  const [nfts, setNfts] = useState<Nft[]>();
  const router = useRouter();

  useEffect(() => {
    // const getNfts = async () => {
    //   const nfts = await alchemyClient.nft.getNftsForContract(
    //     LEARNWEB3_NFT_CONTRACT_ADDRESS
    //   );
    //   setNfts(nfts.nfts);
    // };
    // getNfts();
    // if (!(router.query?.slug in collections)) {
    //   router.push('/');
    // }
  }, [router]);

  console.log('nfts');
  console.log(nfts);

  return (
    <div>
      <Head>
        <title>Learn Web3 NFT viewer</title>
        <meta name="description" content="Learn Web3 NFT viewer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{nfts && <NftList nfts={nfts} />}</main>

      <footer></footer>
    </div>
  );
};

export default Browse;
