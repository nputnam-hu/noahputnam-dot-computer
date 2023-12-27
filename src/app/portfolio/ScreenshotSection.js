import { useState, useEffect } from "react";
import Image from "next/image";
import useScrollPosition from "@react-hook/window-scroll";
import cs from "classnames";

import styles from "./portfolio.module.css";
import Link from "next/link";

const SECTION_ID = "section";

import PeopleSS1 from "/public/vibe-based-computing/peopless1.png";
import PeopleSS2 from "/public/vibe-based-computing/peopless2.png";
import MusicSS1 from "/public/vibe-based-computing/musicss1.png";
import MusicSS2 from "/public/vibe-based-computing/musicss2.png";

const MOBILE_SECTION2_ID = "mobilesection2";
const MOBILE_SECTION3_ID = "mobilesection3";
const MOBILE_SECTION4_ID = "mobilesection4";

const MobileScreenshotSection = () => {
  const scrollY = useScrollPosition(120);
  const [section2Top, setSection2Top] = useState();
  const [section3Top, setSection3Top] = useState();
  const [section4Top, setSection4Top] = useState();

  useEffect(() => {
    const _setOffsets = () => {
      const _section2Top =
        document.getElementById(MOBILE_SECTION2_ID)?.offsetTop +
        document.getElementById(MOBILE_SECTION2_ID)?.offsetParent?.offsetTop -
        0.95 * window.innerHeight;
      const _section3Top =
        document.getElementById(MOBILE_SECTION3_ID)?.offsetTop +
        document.getElementById(MOBILE_SECTION3_ID)?.offsetParent?.offsetTop -
        0.95 * window.innerHeight;
      const _section4Top =
        document.getElementById(MOBILE_SECTION4_ID)?.offsetTop +
        document.getElementById(MOBILE_SECTION4_ID)?.offsetParent?.offsetTop -
        0.95 * window.innerHeight;
      setSection2Top(_section2Top);
      setSection3Top(_section3Top);
      setSection4Top(_section4Top);
    };
    setTimeout(_setOffsets, 100);
    window.addEventListener("resize", _setOffsets);
    return () => window.removeEventListener("resize", _setOffsets);
  }, []);

  console.log({ section2Top, section3Top, section4Top, scrollY });

  const isMusicScreenshotTwoVisible = scrollY > section4Top;
  const isMusicScreenshotOneVisible =
    !isMusicScreenshotTwoVisible && scrollY > section3Top;
  const isGenScreenshotTwoVisible =
    !isMusicScreenshotOneVisible &&
    !isMusicScreenshotTwoVisible &&
    scrollY > section2Top;
  const isGenScreenshotOneVisible =
    !isGenScreenshotTwoVisible &&
    !isMusicScreenshotOneVisible &&
    !isMusicScreenshotTwoVisible;

  return (
    <div
      className={cs(styles.mobile_screenshotsection, styles.overextendpadding)}
      style={{ zIndex: 1000000000, background: "white" }}
    >
      <div>
        {/* <div style={{ position: "absolute", height: 2000 }}> */}
        <div
          className={styles.col}
          style={{
            // justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div className={cs("mobile_screenshots", styles.overextendpadding)}>
            <div style={{ height: 820 }} />
            <Image
              src={PeopleSS1}
              alt="Screenshot of a people vibe in a mobile app"
              width={342}
              height={700}
              style={{
                opacity: isGenScreenshotOneVisible ? 1 : 0,
                // transition: "opacity .5s ease-in",
              }}
              className={styles.mobilescreenshot}
            />
            <Image
              src={PeopleSS2}
              alt="Screenshot of a people vibe in a mobile app"
              width={342}
              height={700}
              style={{
                opacity: isGenScreenshotTwoVisible ? 1 : 0,
                // transition: "opacity .5s ease-in",
              }}
              className={styles.mobilescreenshot}
            />
            <Image
              src={MusicSS2}
              alt="Screenshot of a music vibe in a mobile app"
              width={342}
              height={700}
              style={{
                opacity: isMusicScreenshotOneVisible ? 1 : 0,
              }}
              className={styles.mobilescreenshot}
            />
            <Image
              src={MusicSS1}
              alt="Screenshot of a music vibe in a mobile app"
              width={342}
              height={700}
              style={{
                opacity: isMusicScreenshotTwoVisible ? 1 : 0,
              }}
              className={styles.mobilescreenshot}
            />
            <div className={styles.mobilescreenshotbg} />
            {/* <div
              className={styles.overextendpadding}
              style={{
                // width: "100vw",
                background: "rgba(0,0,0,0.1)",
                height: 1,
              }}
            /> */}
          </div>
          <div
            className={cs(
              styles.col
              // styles.withpadding
            )}
            style={
              {
                // background: "rgba(0,0,0,0.03)",
              }
            }
          >
            <div style={{ height: 48 }} />
            <div className={styles.sscard}>
              <h4
                style={{
                  width: "auto",
                  color: "#b744fe",
                }}
                className={styles.screenshot_headertext}
              >
                Vibe-powered Creation
              </h4>
              <p>
                When you hire a designer or artist to make something for you,
                you don't have to manually specify every detail of what you
                want. Instead, you give them different references that gesture
                at the “vibe” of what it should look like, and then they use
                their own creativity to map that to a completed work. By
                composing different generative models together under the Vibe
                interface, developers can enable that same kind of experience
                but at software scale.
              </p>
            </div>
            <div className={styles.sscard} id={MOBILE_SECTION2_ID}>
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
                For example, image an app that creates a personalized playlist
                for a user based off a social media account that they connect.
                This could be implemented by first taking the Media Objects from
                the connected account and pushing them to an AI model that
                learns an understanding of their content, and then mapping to a
                music model that produces a list of related song Media Objects,
                which then get pulled into a new Vibe and presented to the user.
              </p>
            </div>
            <div className={styles.sscard} id={MOBILE_SECTION3_ID}>
              <h4
                style={{
                  width: "auto",
                  color: "#b744fe",
                }}
                className={styles.screenshot_headertext}
              >
                A Music Vibe UI
              </h4>
              <p>
                In a Vibe-powered music app, the top level interface moves from
                the library of playlists to the queue of songs. Music Vibes at
                first glance look similar to the "Radio" feature on Spotify,
                able to create an algorithmically generated list of songs
                derived from a selected playlist/artist/album—but unlike a radio
                station the Vibe is a living object that can change form in
                response to its owner.
              </p>
            </div>
            <div className={styles.sscard} id={MOBILE_SECTION4_ID}>
              <h4
                style={{
                  width: "auto",
                  color: "#b744fe",
                }}
                className={styles.screenshot_headertext}
              >
                A Tamagotchi for Music
              </h4>
              <p>
                The Music Vibe evolves continuously with user interaction. If
                the user skips through tracks from a certain artist, the Vibe
                will exclude that artist from future recommendations. If they
                are playing the same couple of tracks on repeat, the Vibe may
                stop pulling new song objects altogether and just loop those
                songs on repeat. Every new Vibe is brought to life in this
                co-creative process between user and AI.
              </p>
            </div>
            <div style={{ height: 100 }} className={styles.desktoponly} />
          </div>
        </div>
      </div>
      {/* <div
        className={styles.absolutecenter}
        style={{ marginTop: -1, background: "red", height: 1, zIndex: 100 }}
      /> */}
    </div>
  );
};
const ScreenshotSection = () => {
  const scrollY = useScrollPosition(120);
  const [sectionTop, setSectionTop] = useState();
  const [screenWidth, setScreenWidth] = useState();
  const [screenHeight, setScreenHeight] = useState();

  useEffect(() => {
    const _setOffsets = () => {
      const _sectionTop = document.getElementById(SECTION_ID).offsetTop;
      console.log({ _sectionTop });
      setSectionTop(_sectionTop);
      const _screenWidth = window.innerWidth;
      setScreenWidth(_screenWidth);
      const _screenHeight = window.innerHeight;
      setScreenHeight(_screenHeight);
    };
    _setOffsets();
    window.addEventListener("resize", _setOffsets);
    return () => window.removeEventListener("resize", _setOffsets);
  }, []);

  const SECTION_HEIGHT = 1700;

  const isMusicVisible =
    scrollY > sectionTop + 450 + (screenWidth > 1300 ? 0 : 250);
  const isGenScreenshotTwoVisible =
    !isMusicVisible && scrollY > sectionTop + 100;
  const isGenScreenshotOneVisible =
    !isMusicVisible && !isGenScreenshotTwoVisible;
  const isMusicScreenshotTwoVisible = false;
  const isMusicScreenshotOneVisible =
    isMusicVisible && !isMusicScreenshotTwoVisible;

  return (
    <div
      id={SECTION_ID}
      className={cs(styles.row, styles.screenshotsection)}
      style={{ position: "relative" }}
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
            Vibe-based Computing enables a creative model for apps that mirrors
            the experience of working with a human professional. When you hire a
            designer or artist to make something for you, you don't have to
            manually specify every detail of what you want. Instead, you give
            them different references that gesture at the “vibe” of what it
            should look like, and then they use their own creativity to map that
            to a completed work. By composing different generative models
            together under the Vibe interface, developers can enable that same
            kind of experience but at software scale.
          </p>
          {/* <p>
              While the different people Vibes start out being defined by the
              user, as the AI infers different meta-properties on each
              relationship it can begin to automatically categorize new contacts
              into the appropriate Vibe.
            </p> */}
          <p>
            Consider, for example, the concept of an app that creates a
            personalized playlist for a user based off a social media account
            that they connect. This functionality could be implemented by first
            taking the Media Objects from the connected account and pushing them
            to an AI model that learns an understanding of their content, and
            then mapping that understanding to a music model that produces a
            list of related song Media Objects. From there, the generated list
            can be pulled into a new Vibe and presented to the user. This app
            would let anyone see what kinds of songs matched their Instagram, a
            task that would require a human curator today.
            {/* But while new newly generated playlist is just the starting point
              the Music Vibe. */}
            {/* And while generating a custom playlist from your social media is
              already a pretty magical experience, it is just the starting point
              for the Music Vibe. */}
          </p>
        </div>
        <div className={styles.row__text} style={{ paddingBottom: 200 }}>
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
            In a Vibe-powered music app, the top level interface moves from the
            library of playlists to the queue of songs. Music Vibes at first
            glance look similar to the "Radio" feature on Spotify, able to
            create an algorithmically generated list of songs derived from a
            selected playlist/artist/album—but unlike a radio station the Vibe
            is a living object that can change form in response to its owner.
          </p>
          <p>
            The Music Vibe evolves its song queue continuously with user
            interaction. If the user skips through tracks from a certain artist,
            the Vibe will exclude that artist from future recommendations. If
            they are playing the same couple of tracks on repeat, the Vibe may
            stop pulling new song objects altogether and just loop those songs
            on repeat. The UI surfaces different recommended artists, albums,
            and songs in a widget to the right of the queue, which operates like
            a{" "}
            <Link
              href="https://en.wikipedia.org/wiki/Conveyor_belt_sushi"
              target="_blank"
            >
              sushi converyor belt
            </Link>
            , letting the user pick objects off it and drag them into the Vibe
            to shape its direction. The recommendations the user selects in turn
            inform the new song Media Objects that get pulled into the end of
            the queue.
          </p>
        </div>
      </div>
      <div
        className={styles.screenshotwrapper}
        style={{
          height: SECTION_HEIGHT - 700,
          position: "relative",
          width: 0,
        }}
      >
        <div className={cs(styles.stickyscreenshots)}>
          <div style={{ position: "absolute" }} className={styles.row}>
            <Image
              src={PeopleSS1}
              alt="Screenshot of a people vibe in a mobile app"
              width={342}
              height={700}
              style={{
                opacity:
                  screenWidth > 1300
                    ? !isMusicVisible
                      ? 1
                      : 0
                    : isGenScreenshotOneVisible
                    ? 1
                    : 0,
                // transition: "opacity .5s ease-in",
              }}
              className={styles.screenshot}
            />
            <div style={{ width: 16 }} />
            <Image
              src={PeopleSS2}
              alt="Screenshot of a people vibe in a mobile app"
              width={342}
              height={700}
              style={{
                opacity:
                  screenWidth > 1300
                    ? !isMusicVisible
                      ? 1
                      : 0
                    : isGenScreenshotTwoVisible
                    ? 1
                    : 0,
                // transition: "opacity .5s ease-in",
              }}
              className={styles.screenshot}
            />
          </div>
          <div
            style={{
              position: "absolute",
            }}
            className={styles.row}
          >
            <Image
              src={MusicSS1}
              alt="Screenshot of a music vibe in a mobile app"
              width={342}
              height={700}
              style={{
                opacity:
                  screenWidth > 1300
                    ? isMusicVisible
                      ? 1
                      : 0
                    : isMusicScreenshotTwoVisible
                    ? 1
                    : 0,
              }}
              className={styles.screenshot}
            />
            <div style={{ width: 16 }} />
            <Image
              src={MusicSS2}
              alt="Screenshot of a music vibe in a mobile app"
              width={342}
              height={700}
              style={{
                opacity:
                  screenWidth > 1300
                    ? isMusicVisible
                      ? 1
                      : 0
                    : isMusicScreenshotOneVisible
                    ? 1
                    : 0,
              }}
              className={styles.screenshot}
            />
          </div>
          <div
            style={{
              position: "absolute",
            }}
            className={styles.row}
          >
            <div
              className={styles.screenshotbg}
              style={{
                width: 334,
                height: 700,
                background: "#1a1a1a",
                marginBottom: "auto",
                zIndex: -1,
                borderRadius: 60,
                marginLeft: 4,
              }}
            />
            <div style={{ width: 16 }} />
            <div
              className={styles.screenshotbg2}
              style={{
                width: 334,
                height: 700,
                background: "#1a1a1a",
                marginBottom: "auto",
                zIndex: -1,
                borderRadius: 60,
                marginLeft: 4,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ParentSection = () => (
  <>
    <MobileScreenshotSection />
    <ScreenshotSection />
  </>
);

export default ParentSection;
