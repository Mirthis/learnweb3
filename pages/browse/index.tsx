import CollectionList from 'components/CollectionList';
import Head from 'next/head';
import { collections } from 'utils/constants';

const index = () => {
  return (
    <>
      <Head>
        <title>POK NFTs - Collections</title>
      </Head>
      <CollectionList title="All collections" collections={collections} />;
    </>
  );
};

export default index;
