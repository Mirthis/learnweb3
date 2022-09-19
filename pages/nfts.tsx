import NftList from 'components/NftList';
import { useOwnerNfts } from 'hooks/useOwnerNfts';
import { NextPage } from 'next';
import Head from 'next/head';

const MyNftPage: NextPage = () => {
  const { nfts, nftCount } = useOwnerNfts();

  return (
    <>
      <Head>
        <title>K-NFTs - Your NFTs</title>
      </Head>

      <div>
        {nfts && <NftList nfts={nfts} title="Your NFTs" nftCount={nftCount} />}
      </div>
    </>
  );
};

export default MyNftPage;
