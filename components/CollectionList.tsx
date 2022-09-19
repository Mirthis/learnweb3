import { Collection } from 'tyoes/types';
import CollectionItem from './CollectionItem';

const CollectionsList = ({
  title,
  collections,
}: {
  title: string;
  collections: Collection[];
}) => {
  return (
    <div>
      <h3>{title}</h3>
      <div className="grid gap-x-4 gap-y-10  sm:grid-cols-2 lg:grid-cols-3">
        {collections.map((c) => (
          <CollectionItem key={`collection-${c.address}`} collection={c} />
        ))}
      </div>
    </div>
  );
};

export default CollectionsList;
