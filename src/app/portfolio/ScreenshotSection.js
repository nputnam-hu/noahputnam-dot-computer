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

  console.log({ musicTop, scrollY });
  const isMusicVisible = scrollY > musicTop - 600;
  const SECTION_HEIGHT = 1450;

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
            left: 475 + 216 + 56,
          }}
        >
          <div style={{ position: "sticky", top: 80 }}>
            <div style={{ position: "absolute" }} className={styles.row}>
              <Image
                src="/p/peopless1.png"
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
                src="/p/peopless2.png"
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
                src="/p/musicss1.png"
                alt="Screenshot of a music vibe in a mobile app"
                width={342}
                height={700}
                style={{ opacity: isMusicVisible ? 1 : 0 }}
                className={styles.screenshot}
              />
              <div style={{ width: 16 }} />
              <Image
                src="/p/musicss2.png"
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
