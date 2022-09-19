import { slugify } from './formatters';

export const collections = [
  {
    name: 'LearnWeb3 DAO Graduates',
    imgLogo: 'learnweb3-logo.png',
    slug: slugify('LearnWeb3 DAO Graduates'),
    address: '0x1Ed25648382c2e6Da067313e5DAcb4F138Bc8b33',
  },
  {
    name: 'buildspace V2',
    slug: slugify('buildspace V2'),
    imgLogo: 'buildspace-logo.png',
    address: '0x3CD266509D127d0Eac42f4474F57D0526804b44e',
  },
];

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
export const OWNER_NFT_ITEMS = 30;
export const NFT_COLLECTION_ITEMS = 30;
