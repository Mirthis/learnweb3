import Link from 'next/link';
import { Collection } from 'tyoes/types';
import Card from './ui/Card';

const CollectionItem = ({ collection }: { collection: Collection }) => {
  return (
    <Link href={`/browse/${collection.slug}`}>
      <div className="cursor-pointer">
        <Card>
          <>
            <picture>
              <source srcSet={`/images/collections/${collection.imgLogo}`} />
              <img
                src={`/images/collections/${collection.imgLogo}`}
                alt="Nft image"
              />
            </picture>
            <div className="p-2 text-xl font-bold">{collection.name}</div>
          </>
        </Card>
      </div>
    </Link>
  );
};

export default CollectionItem;
