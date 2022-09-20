import { Nft } from 'alchemy-sdk';
import { useEffect, useState } from 'react';
import { alchemyClient } from 'utils/alchemySdk';
import { NFT_COLLECTION_ITEMS } from 'utils/constants';

export const useNftCollection = (
  collectionAddress: string | undefined,
  items: number = NFT_COLLECTION_ITEMS
) => {
  const [nfts, setNfts] = useState<Nft[]>();
  const [pageKey, setPageKey] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<Error>();

  const getNfts = async (collectionAddress: string, append = false) => {
    setIsLoading(true);
    try {
      const resNfts = await alchemyClient.nft.getNftsForContract(
        collectionAddress,
        {
          omitMetadata: false,
          pageKey: append ? pageKey : undefined,
          pageSize: items,
        }
      );
      setNfts(append && nfts ? nfts.concat(resNfts.nfts) : resNfts.nfts);
      setPageKey(resNfts.pageKey);
    } catch (err) {
      setIsError(true);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (collectionAddress) {
      getNfts(collectionAddress);
    }
  }, [collectionAddress, items]);

  const loadMoreItems = () => {
    if (collectionAddress) {
      getNfts(collectionAddress, true);
    }
  };

  return { nfts, pageKey, loadMoreItems, isLoading, isError, error };
};
