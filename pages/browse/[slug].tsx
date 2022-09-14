import { Nft } from 'alchemy-sdk';
import NftList from 'components/NftList';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { alchemyClient } from 'utils/alchemySdk';
import { collections } from 'utils/constants';

const MyNftPage: NextPage = () => {
  const [nfts, setNfts] = useState<Nft[]>();
  const {
    query: { slug },
  } = useRouter();

  const collection = collections.find((c) => c.slug === slug);

  useEffect(() => {
    if (slug) {
      console.log('retrieving nfts...');
      const getNfts = async (collectionAddress: string) => {
        const nfts = await alchemyClient.nft.getNftsForContract(
          collectionAddress,
          {
            omitMetadata: false,
            pageSize: 15,
            tokenUriTimeoutInMs: 0,
          }
        );
        setNfts(nfts.nfts);
      };
      if (collection) {
        getNfts(collection.address);
      }
    }
  }, [slug]);

  console.log('nfts');
  console.log(nfts);

  return (
    <div>
      <div className="flex items-baseline gap-4">
        <h3>{collection?.name}</h3>
        <p>{nfts?.length} nft found</p>
      </div>
      {/* TODO: manage loading status, errors, walllet not connected  */}
      {nfts && <NftList nfts={nfts} />}
    </div>
  );
};

export default MyNftPage;
