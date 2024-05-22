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
    <>
      <VisibilitySensor onChange={(isVisible) => setIsVisible(isVisible)}>
        <div className={styles.videowrapper}>
          <video
            id="video"
            className={styles.demovideo}
            preload="none"
            autoPlay
            playsInline
            muted
            // loop
            ref={videoRef}
            controls={false}
            poster="/vibe-based-computing/demoplaceholder.png"
            src="/vibe-based-computing/vibevideo.mp4"
          />
        </div>
      </VisibilitySensor>
      <VisibilitySensor onChange={(isVisible) => setIsVisible(isVisible)}>
        <div className={styles.videowrapper_mobile}>
          <video
            id="video2"
            className={styles.demovideo_mobile}
            preload="none"
            autoPlay
            playsInline
            muted
            loop
            controls={false}
            ref={videoRef}
            poster="/vibe-based-computing/demoplaceholdermobile.png"
            src="/vibe-based-computing/demomobile.mp4"
          ></video>
        </div>
      </VisibilitySensor>
    </>
  );
};

export default DemoVideo;
