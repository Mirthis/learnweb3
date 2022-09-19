import Navbar from './Navbar';
import Head from 'next/head';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>Proof NFTs - Homepaage</title>
        <meta name="og:title" content="Proof NFTs" key="title" />
        <meta
          name="description"
          content="Proof NFTs - All your proof of knowledge NFTs in a single place"
          key="description"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <Navbar />
      </nav>
      <main className="mx-auto my-4 min-h-[100vh] max-w-6xl px-2">
        {children}
      </main>
    </>
  );
};

export default Layout;
