import { Nft } from 'alchemy-sdk';
import Card from './ui/Card';
import NftMedia from './NftMedia';

const NftItem = ({
  nft,
  onClick,
}: {
  nft: Nft;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}) => {
  return (
    <div
      data-tokenid={nft.tokenId}
      data-address={nft.contract.address}
      onClick={onClick}
      className="cursor-pointer"
    >
      <Card>
        <>
          {nft.media.length > 0 && nft.media[0].gateway && (
            <NftMedia url={nft.media[0].gateway} />
          )}
          <div className="p-2 text-xl font-bold">{nft.title}</div>
        </>
      </Card>
    </div>
  );
};

export default NftItem;
