import NftList from 'components/NftList';
import NftListLoading from 'components/NftListLoading';
import { useNftCollectionApi } from 'hooks/useNftCollectionApi';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { collections } from 'utils/constants';

const MyNftPage: NextPage = () => {
  const {
    query: { slug },
  } = useRouter();

  const collection = collections.find((c) => c.slug === slug);

  const { nfts, pageKey, loadMoreItems, isLoading } = useNftCollectionApi(
    collection?.address
  );

  // useNftCollectionApi(collection?.address);

  return (
    <>
      <Head>
        <title>POK NFTs - Collection</title>
      </Head>
      <div>
        <h3>{collection?.name}</h3>
        {isLoading && <NftListLoading />}
        {nfts && (
          <NftList
            nfts={nfts}
            moreItems={!!pageKey}
            loadMoreItems={loadMoreItems}
            isLoading={isLoading}
          />
        )}
      </div>
    </>
  );
};

export default MyNftPage;
