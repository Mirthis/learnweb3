import { Nft } from 'alchemy-sdk';
import { useEffect, useState } from 'react';
import { alchemyClient } from 'utils/alchemySdk';
import { NFT_COLLECTION_ITEMS } from 'utils/constants';

export const useCollectionNfts = (
  collectionAddress: string | undefined,
  items: number = NFT_COLLECTION_ITEMS
) => {
  const [nfts, setNfts] = useState<Nft[]>();

  useEffect(() => {
    const getNfts = async (collectionAddress: string) => {
      const nfts = await alchemyClient.nft.getNftsForContract(
        collectionAddress,
        {
          omitMetadata: false,
          pageSize: items,
          // tokenUriTimeoutInMs: 0,
        }
      );
      setNfts(nfts.nfts);
    };
    if (collectionAddress) {
      getNfts(collectionAddress);
    }
  }, [collectionAddress, items]);

  return nfts;
};
