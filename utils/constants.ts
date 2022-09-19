import { slugify } from './formatters';
import collectionsData from '../data/collections.json';

// add slug to data imported from JSON file
export const collections = collectionsData.map((c) => ({
  ...c,
  slug: slugify(c.name),
}));

export const collectionAddresses = collections.map((c) => c.address);

// NavBarLinks. Items with login:true are filterd out if user is not logged in
export const navBarItems = [
  {
    text: 'Home',
    path: '/',
    login: false,
  },
  {
    text: 'My NFTs',
    path: '/nfts',
    login: true,
  },
  {
    text: 'Browse Collections',
    path: '/browse',
    login: false,
  },
  {
    text: 'About',
    path: '/about',
    login: false,
  },
];

export const OWNER_NFT_FRONT_PAGE = 3; // Number of owned NFTs shown on the home page
export const OWNER_NFT_ITEMS = 30; // Number of owned NFTs shown on the your nfts page
export const NFT_COLLECTION_ITEMS = 30; // number of NFTs shown when browing collection
export const MEDIA_VIDEO_EXNTESIONS = ['mp4']; // Filter for video format
