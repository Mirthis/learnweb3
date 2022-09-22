import { Nft, OwnedNftsResponse } from 'alchemy-sdk';
import { useEffect, useState } from 'react';
import { collectionAddresses, OWNER_NFT_ITEMS } from 'utils/constants';
import { useAccount } from 'wagmi';

export const useOwnerNftsApi = (items = OWNER_NFT_ITEMS) => {
  const [nftCount, setNftCount] = useState<number>(0);
  const [nfts, setNfts] = useState<Nft[]>();
  const [pageKey, setPageKey] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<Error>();
  const { address } = useAccount();

  const getNfts = async (address: string, append = false) => {
    setIsLoading(true);

    try {
      const resNfts: OwnedNftsResponse = await (
        await fetch(
          `/api/ownerNfts?address=${address}&collectionAddresses=${collectionAddresses.join(
            ','
          )}&pageSize=${items}${append ? `&pageKey=${pageKey}` : ''}`
        )
      ).json();
      setNfts(
        append && nfts ? nfts.concat(resNfts.ownedNfts) : resNfts.ownedNfts
      );
      setNftCount(resNfts.totalCount);

      setPageKey(resNfts.pageKey);
    } catch (err) {
      setIsError(true);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (address) {
      getNfts(address);
    }
  }, [address, items]);

  const loadMoreItems = () => {
    if (address) {
      getNfts(address, true);
    }
  };

  return { nfts, nftCount, isLoading, pageKey, loadMoreItems, isError, error };
};
