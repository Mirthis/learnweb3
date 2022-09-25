import NftItemLoading from './NftItemLoading';

const NftListLoading = () => {
  return (
    <div>
      <div className="grid gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((key) => (
          <NftItemLoading key={key} />
        ))}
      </div>
    </div>
  );
};

export default NftListLoading;
