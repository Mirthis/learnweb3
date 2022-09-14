import Link from 'next/link';
import { collections } from 'utils/constants';

const index = () => {
  return (
    <div className="grid grid-cols-3">
      {collections.map((c) => (
        <div key={c.address}>
          <button>
            <Link href={`/browse/${c.slug}`}>{c.name}</Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default index;
