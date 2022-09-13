import { Media } from 'alchemy-sdk';

const NftMedia = ({ media }: { media: Media[] }) => {
  return (
    <div className="duration-300 ease-in hover:scale-[1.03]">
      <div>
        {/* TODO: parametrised image and video extension */}
        {!media[0].gateway.endsWith('.mp4') && (
          <picture>
            <source srcSet={media[0].gateway} />
            <img src={media[0].gateway} alt="Nft image" />
          </picture>
        )}
        {media[0].gateway.endsWith('.mp4') && (
          <video>
            <source src={media[0].gateway} />
          </video>
        )}
      </div>
    </div>
  );
};

export default NftMedia;
