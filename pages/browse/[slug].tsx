import NftList from 'components/NftList';
import { useCollectionNfts } from 'hooks/useCollectionNfts';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { collections } from 'utils/constants';

const MyNftPage: NextPage = () => {
  const {
    query: { slug },
  } = useRouter();

  const collection = collections.find((c) => c.slug === slug);

  const nfts = useCollectionNfts(collection?.address);

  return (
    <div>
      {collection && nfts && <NftList title={collection.name} nfts={nfts} />}
    </div>
  );
};

export default MyNftPage;
