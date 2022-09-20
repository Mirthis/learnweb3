// This script demonstrates access to the NFT API via the Alchemy SDK.
import { Network, Alchemy } from 'alchemy-sdk';

const settings = {
  apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
  network: Network.MATIC_MAINNET,
};

export const alchemyClient = new Alchemy(settings);
