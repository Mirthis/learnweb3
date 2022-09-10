import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { WagmiConfig } from 'wagmi';
import { chains, wagmiClient } from '../utils/rainbowkit';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
