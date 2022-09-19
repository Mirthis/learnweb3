import { Nft } from 'alchemy-sdk';
import Link from 'next/link';
import { useState } from 'react';
import NftItem from './NftItem';
import NftModal from './NftModal';

const findNft = (
  nfts: Nft[],
  address: string,
  tokenId: string
): Nft | undefined => {
  return nfts.find(
    (n) => n.contract.address === address && n.tokenId === tokenId
  );
};

const NftList = ({
  nfts,
  title,
  nftCount,
}: {
  nfts: Nft[];
  title: string;
  nftCount?: number;
}) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalNft, setModalNft] = useState<Nft>();

  const handleNftClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { address, tokenid: tokenId } = event.currentTarget.dataset;
    console.log('NFT clicked', address, tokenId);
    if (!address || !tokenId) return;
    const nft = findNft(nfts, address, tokenId);
    if (nft) {
      setModalNft(nft);
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalNft(undefined);
    setModalOpen(false);
  };

  return (
    <div>
      <div className="flex items-baseline gap-4">
        <h3>{title}</h3>
        {nftCount && (
          <p>
            {nfts.length} of {nftCount} displayed
          </p>
        )}
        {nftCount && nfts.length < nftCount && (
          <Link href="nfts">
            <a className="font-bold uppercase tracking-widest">
              See all your NFTs
            </a>
          </Link>
        )}
      </div>
      <NftModal open={modalOpen} nft={modalNft} closeModal={closeModal} />
      <div className="grid gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {nfts
          // .filter((nft) => !nft.metadataError)
          .map((nft) => (
            <NftItem
              key={`nft-${nft.tokenId}`}
              nft={nft}
              onClick={handleNftClick}
            />
          ))}
      </div>
    </div>
  );
};

export default NftList;
