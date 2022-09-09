import { Nft } from 'alchemy-sdk';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const NftItem = ({ nft }: { nft: Nft }) => {
  const [imageUrl, setImageUrl] = useState<string>();

  useEffect(() => {
    const getImageUrl = async () => {
      const tokenURI = nft.tokenUri?.gateway;
      console.log(`tokenURI: ${tokenURI}`);
      if (tokenURI) {
        // const requestURL = tokenURI.replace('ipfs://', 'https://ipfs.io/ipfs/');
        // console.log(`requestUrl: ${requestURL}`);
        // TODO: look for alternative fetch method (i.e.: axios)
        const tokenURIResponse = await (await fetch(tokenURI)).json();
        const imageURI = tokenURIResponse.image;
        console.log(`imageURI: ${imageURI}`);
        const imageUrl = imageURI.replace('ipfs://', 'https://ipfs.io/ipfs/');
        console.log(`imageUrl: ${imageUrl}`);
        setImageUrl(imageUrl);
      }
    };
    getImageUrl();
  }, []);

  return (
    <div>
      <div>{nft.title}</div>
      <div>
        {imageUrl && (
          <Image alt={nft.title} src={imageUrl} width={200} height={200} />
        )}
      </div>
    </div>
  );
};

export default NftItem;
