import Image from 'next/image';
import { MEDIA_VIDEO_EXNTESIONS } from 'utils/constants';
import Video from './Video';

const Media = ({ url }: { url: string }) => {
  const mediaExtension = /[^.]*$/.exec(url)?.[0];

  const video =
    mediaExtension && MEDIA_VIDEO_EXNTESIONS.includes(mediaExtension)
      ? true
      : false;

  return (
    <div className="h-full w-full duration-300 ease-in hover:scale-[1.03]">
      <div className="relative h-[300px] ">
        {/* TODO: parametrised image and video extension */}
        {video ? (
          <Video url={url} />
        ) : (
          <Image
            loader={() => url}
            src={url}
            alt="sbt"
            layout="fill"
            objectFit="cover"
          />
          // <picture>
          //   <source srcSet={url} />
          //   <img src={url} alt="Nft image" />
          // </picture>
        )}
      </div>
    </div>
  );
};

export default Media;
