import { MEDIA_VIDEO_EXNTESIONS } from 'utils/constants';
import Video from './Video';

const NftMedia = ({ url }: { url: string }) => {
  const mediaExtension = /[^.]*$/.exec(url)?.[0];

  const video =
    mediaExtension && MEDIA_VIDEO_EXNTESIONS.includes(mediaExtension)
      ? true
      : false;

  return (
    <div className="duration-300 ease-in hover:scale-[1.03]">
      <div>
        {/* TODO: parametrised image and video extension */}
        {video ? (
          <Video url={url} />
        ) : (
          <picture>
            <source srcSet={url} />
            <img src={url} alt="Nft image" />
          </picture>
        )}
      </div>
    </div>
  );
};

export default NftMedia;
