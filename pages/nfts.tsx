import NftList from 'components/NftList';
import { useOwnerNfts } from 'hooks/useOwnerNfts';
import { useAtom } from 'jotai';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { userAtom } from 'utils/atoms';

const MyNftPage: NextPage = () => {
  const { nfts, nftCount, loadMoreItems, isLoading, pageKey } = useOwnerNfts();
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
