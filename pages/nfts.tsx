import NftList from 'components/NftList';
import { useOwnerNfts } from 'hooks/useOwnerNfts';
import { NextPage } from 'next';
import Head from 'next/head';

const MyNftPage: NextPage = () => {
  const { nfts, nftCount, loadMoreItems, isLoading, pageKey } = useOwnerNfts();

  return (
    <>
      <Head>
        <title>Proof NFTs - Your NFTs</title>
      </Head>

      <div>
        {nfts && (
          <NftList
            nfts={nfts}
            title="Your NFTs"
            nftCount={nftCount}
            loadMoreItems={loadMoreItems}
            isLoading={isLoading}
            moreItems={!!pageKey}
          />
        )}
      </div>
    </>
  );
};

export default MyNftPage;
