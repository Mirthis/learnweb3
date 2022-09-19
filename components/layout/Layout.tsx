import Navbar from './Navbar';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>K-NFTs - Homepaage</title>
        <meta name="og:title" content="The Lily Pad" key="title" />
        <meta
          name="description"
          content="K-NFTs - All your proof of knowledge NFTs in a single place"
          key="description"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <Navbar />
      </nav>
      <main className="mx-auto mt-2 min-h-[100vh] max-w-6xl">{children}</main>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Layout;
