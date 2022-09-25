import NftList from 'components/NftList';
import { useOwnerNftsApi } from 'hooks/useOwnerNftsApi';
import { useAtom } from 'jotai';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { userAtom } from 'utils/atoms';

const MyNftPage: NextPage = () => {
  const { nfts, nftCount, loadMoreItems, isLoading, pageKey } =
    useOwnerNftsApi();
  const [user] = useAtom(userAtom);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace({ pathname: '/' });
    }
  }, [user]);

  return (
    <>
      <Head>
        <title>POK NFTs - Your NFTs</title>
      </Head>

      <div>
        <h3 className="mb-2">Your NFTs</h3>
        {nfts && (
          <NftList
            nfts={nfts}
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
