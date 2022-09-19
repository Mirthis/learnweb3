import { slugify } from './formatters';
import collectionsData from '../data/collections.json';

export const collections = collectionsData.map((c) => ({
  ...c,
  slug: slugify(c.name),
}));

export const collectionAddresses = collections.map((c) => c.address);

export const navBarItems = [
  {
    text: 'Home',
    path: '/',
  },
  {
    text: 'My NFTs',
    path: '/nfts',
  },
  {
    text: 'Browse Collections',
    path: '/browse',
  },
  {
    text: 'About',
    path: '/about',
  },
];

export const OWNER_NFT_FRONT_PAGE = 3;
export const OWNER_NFT_ITEMS = 3;
export const NFT_COLLECTION_ITEMS = 30;
export const MEDIA_VIDEO_EXNTESIONS = ['mp4'];
