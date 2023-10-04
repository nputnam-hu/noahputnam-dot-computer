import { useState, useEffect } from "react";
import Image from "next/image";
import useScrollPosition from "@react-hook/window-scroll";
import cs from "classnames";

import styles from "./portfolio.module.css";

const MUSIC_ID = "music";

const ScreenshotSection = () => {
  const scrollY = useScrollPosition(120);
  const [musicTop, setMusicTop] = useState();

  useEffect(() => {
    const _setOffsets = () => {
      const _musicTop = document.getElementById(MUSIC_ID).offsetTop;
      setMusicTop(_musicTop);
    };
    _setOffsets();
    window.addEventListener("resize", _setOffsets);
    return () => window.removeEventListener("resize", _setOffsets);
  }, []);

  const isMusicVisible = scrollY > musicTop - 200;
  const SECTION_HEIGHT = 1650;

  return (
    <>
      <div
        className={cs(styles.row, styles.classsection)}
        // style={{ background: "red" }}
      >
        {/* <div style={{ position: "absolute", height: 2000 }}> */}
        <div
          className={styles.col}
          style={{
            height: SECTION_HEIGHT,
            justifyContent: "space-between",
          }}
        >
          <div className={styles.row__text}>
            <h4
              style={{
                width: "auto",
                color: "#b744fe",
              }}
              className={styles.screenshot_headertext}
            >
              A People Vibe UI
            </h4>
            <p>
              A people vibe UI would solve the social context collapse that
              plagues all messaging apps. By delineating the distinct Vibes that
              make up your contacts list, the user can be in control of which
              social universe they want to be engaging with at any given time.
              People Vibes are defined in conjunction between the user manually
              categorizing different contacts and the AI inferring different
              meta-properties to understand their relationships.
            </p>
            {/* <p>
              While the different people Vibes start out being defined by the
              user, as the AI infers different meta-properties on each
              relationship it can begin to automatically categorize new contacts
              into the appropriate Vibe.
            </p> */}
            <p>
              The UI can call forth different Vibes depending on the social
              context the user is currently in. On 10am on a Monday the system
              might automatically set itself to the “Coworkers” Vibe, while at
              6pm on Friday it changes to “Homies”. Or if you're mad at all of
              your friends, the AI might suggest a new “Enemies” Vibe to group
              them in. Instead of the computer being ignorant to the deeply
              personal application it is being used in, Vibes enable it to build
              an emotional awareness that drives the User Experience.
            </p>
          </div>
          <div
            className={styles.row__text}
            id={MUSIC_ID}
            style={{ paddingBottom: 200 }}
          >
            <h4
              style={{
                width: "auto",
                // visibility: isMusicScreenShotsSticky ? "visible" : "hidden",
                color: "#b744fe",
              }}
              className={styles.screenshot_headertext}
            >
              A Music Vibe UI
            </h4>
            <p>
              Vibe-based computing is a new paradigm for the internet that
              breaks apart the homogenous acknowledges the multiplicities
              inherent in how we interact with the internet. My goal with
              Vibe-based computing is to imagine a new internet
            </p>
            <p>
              Vibe-based computing is a new paradigm for the internet that
              breaks apart the homogenous acknowledges the multiplicities
              inherent in how we interact with the internet. My goal with
              Vibe-based computing is to imagine a new internet
            </p>
            <p>
              Vibe-based computing is a new paradigm for the internet that
              breaks apart the homogenous acknowledges the multiplicities
              inherent in how we interact with the internet. My goal with
              Vibe-based computing is to imagine a new internet
            </p>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            height: SECTION_HEIGHT - 700,
            left: 475 + 216 + 52,
          }}
        >
          <div className={styles.sticky} style={{ top: 80 }}>
            <div style={{ position: "absolute" }} className={styles.row}>
              <Image
                src="/vibe-based-computing/peopless1.png"
                alt="Screenshot of a people vibe in a mobile app"
                width={342}
                height={700}
                style={{
                  opacity: isMusicVisible ? 0 : 1,
                  // transition: "opacity .5s ease-in",
                }}
                className={styles.screenshot}
              />
              <div style={{ width: 16 }} />
              <Image
                src="/vibe-based-computing/peopless2.png"
                alt="Screenshot of a people vibe in a mobile app"
                width={342}
                height={700}
                style={{
                  opacity: isMusicVisible ? 0 : 1,
                  // transition: "opacity .5s ease-in",
                }}
                className={styles.screenshot}
              />
            </div>
            <div
              style={{
                position: "absolute",
                paddinTop: 70,
              }}
              className={styles.row}
            >
              <Image
                src="/vibe-based-computing/musicss1.png"
                alt="Screenshot of a music vibe in a mobile app"
                width={342}
                height={700}
                style={{ opacity: isMusicVisible ? 1 : 0 }}
                className={styles.screenshot}
              />
              <div style={{ width: 16 }} />
              <Image
                src="/vibe-based-computing/musicss2.png"
                alt="Screenshot of a music vibe in a mobile app"
                width={342}
                height={700}
                style={{ opacity: isMusicVisible ? 1 : 0 }}
                className={styles.screenshot}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScreenshotSection;
