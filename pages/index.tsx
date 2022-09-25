import CollectionList from 'components/CollectionList';
import NftList from 'components/NftList';
import NftListLoading from 'components/NftListLoading';
import { useOwnerNftsApi } from 'hooks/useOwnerNftsApi';
import { useAtom } from 'jotai';
import type { NextPage } from 'next';
import Head from 'next/head';
import { userAtom } from 'utils/atoms';
import { collections, OWNER_NFT_FRONT_PAGE } from 'utils/constants';
import ConnectWalletButton from '../components/ConnectWalletButton';

const Home: NextPage = () => {
  const [user] = useAtom(userAtom);

  const { nfts, nftCount, isLoading } = useOwnerNftsApi(OWNER_NFT_FRONT_PAGE);

  return (
    <>
      <Head>
        <title>POK NFTs - Homepage</title>
      </Head>

      <div className="flex flex-col gap-y-10">
        <div className="flex flex-col items-center gap-y-8 text-center">
          <h2 className="lie text-5xl leading-none sm:text-7xl lg:text-8xl">
            All your{' '}
            <span className=" bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text font-extrabold leading-none text-transparent">
              Proof of Knowledge NFTs
            </span>{' '}
            in a single place
          </h2>
          {!user && <ConnectWalletButton />}
        </div>
        <div>
          {' '}
          <h3 className="mb-4">Your NFTs</h3>
          {isLoading && <NftListLoading />}
          {nfts && <NftList nfts={nfts} nftCount={nftCount} />}
        </div>
        <CollectionList
          title="Featured Collections"
          collections={collections}
        />
      </div>
    </>
  );
};

export default Home;
