import { useState, useEffect } from "react";
import Image from "next/image";
import useScrollPosition from "@react-hook/window-scroll";
import cs from "classnames";

import styles from "./portfolio.module.css";
import Link from "next/link";

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

  const isMusicVisible = scrollY > musicTop - 500;
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
              Generating a Music Vibe
            </h4>
            <p>
              The strength of the Vibe model comes from the universal interface
              its defines. For example, imagine a music playlist generator that
              works by the user pushing a series of Instagram media objects to a
              model that builds an understanding of their content and then maps
              that understanding to a music model's latent space from which a
              list of songs is generated that gets pulled into a new Vibe. This
              app would let any user see what music matches the vibe of their
              Instagram.
            </p>
            {/* <p>
              While the different people Vibes start out being defined by the
              user, as the AI infers different meta-properties on each
              relationship it can begin to automatically categorize new contacts
              into the appropriate Vibe.
            </p> */}
            <p>
              The UI can call forth different Vibes depending on the temporal
              and emotional context of the user. On 10am on a Monday the system
              might automatically set itself to the “Coworkers” Vibe, while at
              6pm on Friday it changes to “Squad”. Or if you're mad at all of
              your friends, the AI might suggest a new “Enemies” Vibe to group
              them in. Instead of the computer being ignorant to the deeply
              personal circumstances it is being used in, Vibes enable it to
              build an affective awareness that drives the user experience.
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
              In a Vibe-powered music app, the top level interface moves from
              the library of playlists to the queue of songs. Music Vibes at
              first glance look similar to the "Radio" feature on Spotify, able
              to create an algorithmacally generated list of songs derived from
              a selected playlist/artist/album—but unlike a playlist or radio
              station the Vibe is a living object that can change form in
              response to its owner.
            </p>
            <p>
              The Music Vibe evolves its song queue continuously with user
              interaction. If the user skips through tracks from a certain
              artist, the Vibe will exclude that artist from future
              recommendations. If they are playing the same couple songs on
              repeat, the Vibe may stop pulling new song objects altogether and
              just loop those songs in its queue. The UI surfaces different
              recommended artists, albums, and songs to the right of the queue,
              which operates like a{" "}
              <Link
                href="https://en.wikipedia.org/wiki/Conveyor_belt_sushi"
                target="_blank"
              >
                sushi converyor belt
              </Link>
              , letting the user pick recommendations off it and drag them into
              the Vibe to shape its direction. The recommendations the user
              selects in turn inform the new song Media Objects that get pulled
              into the end of the queue.
            </p>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            height: SECTION_HEIGHT - 700,
            left: 540 + 150 + 48,
          }}
        >
          <div
            className={styles.sticky}
            style={{ top: "calc((100vh - 700px) / 2)" }}
          >
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
            <div
              style={{
                position: "absolute",
                paddinTop: 70,
              }}
              className={styles.row}
            >
              <div
                style={{
                  width: 334,
                  height: 700,
                  background: "#1a1a1a",
                  marginBottom: "auto",
                  zIndex: -1,
                  borderRadius: 64,
                  marginLeft: 4,
                }}
              />
              <div style={{ width: 16 }} />
              <div
                style={{
                  width: 334,
                  height: 700,
                  background: "#1a1a1a",
                  marginBottom: "auto",
                  zIndex: -1,
                  borderRadius: 64,
                  marginLeft: 4,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScreenshotSection;
