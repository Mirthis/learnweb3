import type { NextPage } from 'next';
import Link from 'next/link';
import { useAccount } from 'wagmi';
import ConnectWalletButton from '../components/ConnectWalletButton';

const Home: NextPage = () => {
  const { address } = useAccount();

  // const [nfts, setNfts] = useState<Nft[]>();

  // useEffect(() => {
  //   const getNfts = async () => {
  //     const nfts = await alchemyClient.nft.getNftsForContract(
  //       LEARNWEB3_NFT_CONTRACT_ADDRESS
  //     );
  //     setNfts(nfts.nfts);
  //   };
  //   getNfts();
  // }, []);

  return (
    <div className="flex flex-col items-center gap-8 text-center">
      <h1>All your achievemtns NFTs in a single place</h1>
      <div className={`${address ? 'hidden' : 'inline-block}'}`}>
        <ConnectWalletButton />
      </div>
      <div className={`${!address ? 'hidden' : 'inline-block}'}`}>
        <button className="rounded-xl border-2 border-sky-300 p-4 text-xl font-bold">
          <Link href="nfts">
            <a className="no-underline">See your NFTs</a>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
