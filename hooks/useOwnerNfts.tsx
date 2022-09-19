import { Nft, NftExcludeFilters } from 'alchemy-sdk';
import { useEffect, useState } from 'react';
import { alchemyClient } from 'utils/alchemySdk';
import { collectionAddresses, OWNER_NFT_ITEMS } from 'utils/constants';
import { useAccount } from 'wagmi';

export const useOwnerNfts = (items = OWNER_NFT_ITEMS) => {
  const [nfts, setNfts] = useState<Nft[]>();
  const [nftCount, setNftCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { address } = useAccount();

  useEffect(() => {
    const getNfts = async () => {
      setIsLoading(true);

      const ownerAddress = '0x4A40Eb870DcF533D4dC097c3d87aaFE9f64490A1';
      const nfts = await alchemyClient.nft.getNftsForOwner(ownerAddress, {
        contractAddresses: collectionAddresses,
        omitMetadata: false,
        excludeFilters: [NftExcludeFilters.SPAM],
        pageSize: items,
      });
      setIsLoading(false);
      setNfts(nfts.ownedNfts);
      setNftCount(nfts.totalCount);
    };
    if (address) {
      getNfts();
    }
  }, [address, items]);

  return { nfts, nftCount, isLoading };
};
