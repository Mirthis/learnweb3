import { Nft } from 'alchemy-sdk';
import NftItem from './NftItem';

const NftList = ({ nfts }: { nfts: Nft[] }) => {
  return (
    <div className="grid grid-cols-3">
      {nfts.map((nft) => (
        <NftItem key={`nft-${nft.tokenId}`} nft={nft} />
      ))}
    </div>
  );
};

export default NftList;
