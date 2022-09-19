import NftList from 'components/NftList';
import { useOwnerNfts } from 'hooks/useOwnerNfts';
import { NextPage } from 'next';

const MyNftPage: NextPage = () => {
  const { nfts, nftCount } = useOwnerNfts();

  return (
    <div>
      {nfts && <NftList nfts={nfts} title="Your NFTs" nftCount={nftCount} />}
    </div>
  );
};

export default MyNftPage;
