import { Nft, NftExcludeFilters } from 'alchemy-sdk';
import NftList from 'components/NftList';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { alchemyClient } from 'utils/alchemySdk';
import { collectionAddresses } from 'utils/constants';
import { useAccount } from 'wagmi';

const MyNftPage: NextPage = () => {
  const [nfts, setNfts] = useState<Nft[]>();
  const { address } = useAccount();

  useEffect(() => {
    if (address) {
      const getNfts = async () => {
        const ownerAddress = '0x4A40Eb870DcF533D4dC097c3d87aaFE9f64490A1';
        const nfts = await alchemyClient.nft.getNftsForOwner(ownerAddress, {
          contractAddresses: collectionAddresses,
          omitMetadata: false,
          excludeFilters: [NftExcludeFilters.SPAM],
        });
        setNfts(nfts.ownedNfts);
      };
      getNfts();
    }
  }, [address]);

  console.log('nfts');
  console.log(nfts);

  return (
    <div>
      <div className="flex gap-4">
        <h3>Your NFTs</h3>
        <p>{nfts?.length} nft found</p>
      </div>
      {/* TODO: manage loading status, errors, walllet not connected  */}
      {nfts && <NftList nfts={nfts} />}
    </div>
  );
};

export default MyNftPage;
