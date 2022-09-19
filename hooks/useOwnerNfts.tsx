import { Nft, NftExcludeFilters } from 'alchemy-sdk';
import { useEffect, useState } from 'react';
import { alchemyClient } from 'utils/alchemySdk';
import { collectionAddresses, OWNER_NFT_ITEMS } from 'utils/constants';
import { useAccount } from 'wagmi';

export const useOwnerNfts = (items = OWNER_NFT_ITEMS) => {
  const [nfts, setNfts] = useState<Nft[]>();
  const [nftCount, setNftCount] = useState<number>(0);
  const [pageKey, setPageKey] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { address } = useAccount();

  const getNfts = async (append = false) => {
    setIsLoading(true);

    // const ownerAddress = '0x4A40Eb870DcF533D4dC097c3d87aaFE9f64490A1';
    const ownerAddress = address || '';
    const resNfts = await alchemyClient.nft.getNftsForOwner(ownerAddress, {
      contractAddresses: collectionAddresses,
      omitMetadata: false,
      excludeFilters: [NftExcludeFilters.SPAM],
      pageKey: append ? pageKey : undefined,
      pageSize: items,
    });
    setIsLoading(false);
    setNfts(
      append && nfts ? nfts.concat(resNfts.ownedNfts) : resNfts.ownedNfts
    );
    setNftCount(resNfts.totalCount);
    setPageKey(resNfts.pageKey);
  };

  useEffect(() => {
    if (address) {
      getNfts();
    }
  }, [address, items]);

  const loadMoreItems = () => {
    if (address) {
      getNfts(true);
    }
  };

  return { nfts, nftCount, isLoading, pageKey, loadMoreItems };
};
