import Link from 'next/link';
import { Collection } from 'tyoes/types';
import Media from './Media';
import Card from './ui/Card';

const CollectionItem = ({ collection }: { collection: Collection }) => {
  return (
    <Link href={`/browse/${collection.slug}`}>
      <div className="cursor-pointer">
        <Card>
          <>
            <Media url={`/images/collections/${collection.imgLogo}`} />
            <div className="p-2 text-xl font-bold">{collection.name}</div>
          </>
        </Card>
      </div>
    </Link>
  );
};

export default CollectionItem;
