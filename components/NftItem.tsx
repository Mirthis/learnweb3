import { Nft } from 'alchemy-sdk';
import Card from './ui/Card';
import Media from './Media';

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
            <Media url={nft.media[0].gateway} />
          )}
          <div className="p-2 text-xl font-bold text-sky-300">{nft.title}</div>
        </>
      </Card>
    </div>
  );
};

export default NftItem;
