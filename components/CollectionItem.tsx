import Link from 'next/link';
import { Collection } from 'tyoes/types';
import Card from './Card';

const CollectionItem = ({ collection }: { collection: Collection }) => {
  return (
    <Link href={`/browse/${collection.slug}`}>
      <button>
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
      </button>
    </Link>
  );
};

export default CollectionItem;
