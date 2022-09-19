import CollectionList from 'components/CollectionList';
import { collections } from 'utils/constants';

const index = () => {
  return <CollectionList title="All collections" collections={collections} />;
};

export default index;
