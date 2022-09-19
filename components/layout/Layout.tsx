import Navbar from './Navbar';
import Head from 'next/head';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>POK NFTs - Homepaage</title>
        <meta name="og:title" content="POK NFTs" key="title" />
        <meta
          name="description"
          content="POK NFTs - All your POK of knowledge NFTs in a single place"
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
