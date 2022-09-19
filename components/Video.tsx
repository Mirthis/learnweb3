import { useRef, useState } from 'react';

const Video = ({ url }: { url: string }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const video = useRef<HTMLVideoElement>(null);

  const handlePlayClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (!video.current) return;
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      video.current.pause();
    } else {
      video.current.play();
    }
  };

  return (
    <div className="relative">
      <video ref={video}>
        <source src={url} />
      </video>
      <div className="absolute bottom-1 left-1   p-1 text-2xl">
        <button onClick={handlePlayClick}>
          {isPlaying ? '\u23F8' : '\u25B6'}
        </button>
      </div>
    </div>
  );
};

export default Video;
