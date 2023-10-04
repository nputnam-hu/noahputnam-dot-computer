import { useRef, useState, useEffect } from "react";
import VisibilitySensor from "react-visibility-sensor";
import styles from "./portfolio.module.css";

export const DemoVideo = () => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      videoRef.current.play();
    }
  }, [isVisible]);

  return (
    <VisibilitySensor onChange={(isVisible) => setIsVisible(isVisible)}>
      <video
        id="video"
        className={styles.demovideo}
        preload="none"
        autoPlay
        playsInline
        muted
        loop
        ref={videoRef}
        controls={false}
        poster="/vibe-based-computing/demoplaceholder.png"
        src="/vibe-based-computing/vibevideo.mp4"
      />
    </VisibilitySensor>
  );
};

export default DemoVideo;
