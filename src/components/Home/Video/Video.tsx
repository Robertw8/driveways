import { useEffect, useRef } from 'react';
import bgVideo from '../../../assets/images/bg-video.mp4';

const Video: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        video?.pause();
      } else {
        video?.play();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    window.innerWidth > 976 && (
      <div className="block w-full fixed left-0 -z-50">
        <video
          muted
          loop
          src={bgVideo}
          autoPlay
          className="h-full w-full"
          ref={videoRef}
        ></video>
      </div>
    )
  );
};

export default Video;
