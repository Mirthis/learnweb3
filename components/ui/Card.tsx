const Card = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="flex h-full flex-col items-center justify-between rounded-lg border-2 border-sky-400 bg-sky-900 p-4">
      {children}
    </div>
  );
};

export default Card;
