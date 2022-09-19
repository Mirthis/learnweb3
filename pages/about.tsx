import { NextPage } from 'next';
import Head from 'next/head';
import ContactIcons from '../components/ContactIcons';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>POK NFTs - About</title>
      </Head>

      <h3>About</h3>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h6>The project</h6>
          <p>
            This simple web app allows to browse POK of knowlege NFTs and
            display the one owned by the user based on their wallet address.
          </p>
          <h6>Features</h6>
          <p>
            <ul className="list-disc">
              <li>Web3 wallet connection</li>
              <li>
                Browse user owned NFTs, based on connected wallet, for the
                supported collections
              </li>
              <li>Browse all the NFTs for the supported collections</li>
              <li>NFT details for each token</li>
              <li>Basic pagination</li>
              <li>Media playback for video NFTs</li>
            </ul>
          </p>
          <h6>Tech</h6>
          <p>
            <ul className="list-disc">
              <li>
                <span className="font-bold">JavaScript / TypeScript -</span>{' '}
                main coding language
              </li>
              <li>
                <span className="font-bold">NextJ S / React JS -</span> Web-app
                framework
              </li>
              <li>
                <span className="font-bold">Tailwind CSS -</span> styling
              </li>
              <li>
                <span className="font-bold">Rainboww Kit / WAGMI -</span> wallet
                connection
              </li>
              <li>
                <span className="font-bold">Alchemy-SDK -</span> NFT retrieval
              </li>
              <li>
                <span className="font-bold">Vercel -</span> Hosting
              </li>
            </ul>
          </p>
        </div>
        <div>
          <h6>About the author</h6>
          <p>Application created by Andrea Cardinale</p>
          <div className="flex flex-col justify-center">
            <div className="mt-4">
              <picture>
                <source srcSet="/images/about/author.jpg" />
                <img
                  className="h-[300px] rounded-lg border-2 border-sky-700"
                  src="/images/about/author.jpg"
                  alt="author"
                />
              </picture>
            </div>
            <ContactIcons />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
