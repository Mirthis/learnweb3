import CollectionList from 'components/CollectionList';
import NftList from 'components/NftList';
import { useOwnerNfts } from 'hooks/useOwnerNfts';
import type { NextPage } from 'next';
import { collections, OWNER_NFT_FRONT_PAGE } from 'utils/constants';
import { useAccount } from 'wagmi';
import ConnectWalletButton from '../components/ConnectWalletButton';

const Home: NextPage = () => {
  const { isConnected } = useAccount();

  const { nfts, nftCount } = useOwnerNfts(OWNER_NFT_FRONT_PAGE);

  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex flex-col items-center gap-y-8 text-center">
        <h2 className="lie text-5xl leading-none sm:text-7xl lg:text-8xl">
          All your{' '}
          <span className=" bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text font-extrabold leading-none text-transparent">
            proof of knowledge NFTs
          </span>{' '}
          in a single place
        </h2>
        {!isConnected && (
          <div>
            <ConnectWalletButton />
          </div>
        )}
      </div>
      {nfts && <NftList nfts={nfts} title="Your NFTs" nftCount={nftCount} />}
      <CollectionList title="Featured Collections" collections={collections} />
    </div>
  );
};

export default Home;
