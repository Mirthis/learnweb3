import { Nft } from 'alchemy-sdk';
import Card from './Card';
import NftMedia from './NftMedia';

const NftItem = ({
  nft,
  onClick,
}: {
  nft: Nft;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <button
      data-tokenid={nft.tokenId}
      data-address={nft.contract.address}
      onClick={onClick}
    >
      <Card>
        <>
          {nft.media[0].gateway && <NftMedia url={nft.media[0].gateway} />}
          <div className="p-2 text-xl font-bold">{nft.title}</div>
        </>
      </Card>
    </button>
  );
};

export default NftItem;
