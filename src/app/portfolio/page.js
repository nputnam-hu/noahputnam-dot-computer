"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import useScrollPosition from "@react-hook/window-scroll";
import Head from "next/head";
import cs from "classnames";
import VisibilitySensor from "react-visibility-sensor";
import { Playfair_Display } from "next/font/google";
import styles from "./portfolio.module.css";

import VibeHeader from "/public/p/vibeheader.png";
import VibeDiagram from "/public/p/vibediagram.png";
import PeopleVibeDiagram from "/public/p/vibediagram-people.png";
import MusicVibeDiagram from "/public/p/vibediagram-music.png";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";
import Link from "next/link";

const playfairBold = Playfair_Display({
  weight: "600",
  subsets: ["latin"],
});
const playfairMed = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

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
        poster="/p/demoplaceholder.png"
        src="/p/rhizomedemo.mp4#t=1.5"
      />
    </VisibilitySensor>
  );
};

const DIAGRAM_ID = "diagram";
const PEOPLE_DIAGRAM_ID = "people-diagram";
const MUSIC__DIAGRAM_ID = "music-diagram";
const PEOPLE_ID = "people";
const MUSIC_ID = "music";

const DiagramSection = ({ scrollY, windowHeight }) => {
  const DIAGRAM_FINAL_HEIGHT = 689 * 0.94;
  const DIAGRAM_FINAL_WIDTH = 1000 * 0.94;

  const [scrollAnimation, setAnimation] = useState(0);
  const [diagramTop, setDiagramTop] = useState();
  const [peopleTop, setPeopleTop] = useState();
  const [musicTop, setMusicTop] = useState();
  // none | people | music
  const [selectedDiagram, setSelectedDiagram] = useState("none");
  useEffect(() => {
    const _setOffsets = () => {
      const _diagramTop = document.getElementById(DIAGRAM_ID).offsetTop;
      setDiagramTop(_diagramTop);
      const _peopleTop = document.getElementById(PEOPLE_ID).offsetTop;
      setPeopleTop(_peopleTop);
      const _musicTop = document.getElementById(MUSIC_ID).offsetTop;
      setMusicTop(_musicTop);
    };
    _setOffsets();
    window.addEventListener("resize", _setOffsets);
    return () => window.removeEventListener("resize", _setOffsets);
  }, []);

  const triggerPoint = diagramTop - windowHeight + DIAGRAM_FINAL_HEIGHT + 80;
  const endPoint = musicTop + 600;
  const invisblePoint = musicTop + 700 - 72;
  useEffect(() => {
    if (scrollY > triggerPoint) {
      if (selectedDiagram === "none") {
        setSelectedDiagram("people");
      }
    } else {
      setSelectedDiagram("none");
    }
  }, [scrollY, triggerPoint, selectedDiagram]);

  useEffect(() => {
    if (scrollY > diagramTop - 250) {
      const _scrollAnimation = Math.min(scrollY - diagramTop + 250, 130) / 130;
      setAnimation(_scrollAnimation);
    } else {
      setAnimation(0);
    }
  }, [scrollY, diagramTop]);

  const isSectionStarted = scrollY > diagramTop + 100; //- 150;
  const isSectionEnded = scrollY > endPoint;
  const isSectionNotVisible = scrollY > invisblePoint;
  const isMusicVisible =
    !isSectionEnded && scrollY > musicTop - windowHeight / 2;
  const isPeopleVisible =
    !isSectionEnded && !isMusicVisible && scrollY > peopleTop - 200;
  const isMusicScreenShotsSticky = scrollY > musicTop + 140;
  const isPeopleScreenShotsSticky = scrollY < peopleTop + 150;

  const isExampleDiagramsVisible = scrollY > diagramTop + 100 + 24 + 48 + 48; //+ 100;

  const isDiagramVisible =
    !isSectionStarted ||
    (isSectionStarted &&
      !isExampleDiagramsVisible &&
      !isPeopleVisible &&
      !isMusicVisible);

  const isPosFixed = false && scrollY > triggerPoint;

  const diagramMargin = 0;
  const dimScale = (1 / 5) * scrollAnimation + 4 / 5;

  return (
    <div className={styles.diagramsection}>
      <div className={styles.fulltext}>
        <p>
          Vibe-based computing is a new paradigm for the internet that breaks
          apart the homogenous acknowledges the multiplicities inherent in how
          we interact with the internet.
        </p>
      </div>
      <div style={{ height: 24 }} />
      <div className={styles.col} style={{ alignItems: "center" }}>
        <div
          id={DIAGRAM_ID}
          style={{
            height: DIAGRAM_FINAL_HEIGHT * dimScale + 100,
            position: "absolute",
            zIndex: 10,
          }}
        >
          <div
            style={{
              // position: "sticky",
              // top: 64 - 40 * scrollAnimation,
              width: DIAGRAM_FINAL_WIDTH * dimScale,
              top: 60,
              // ((windowHeight - DIAGRAM_FINAL_HEIGHT * 1.1 - 100) / 2) *
              // scrollAnimation,
              // left: 0.1 * DIAGRAM_FINAL_WIDTH * dimScale,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginLeft: `calc(-210px + 5vw)`,
            }}
          >
            <Image
              src={VibeDiagram}
              placeholder="blur"
              alt="Vibe Diagram"
              className={cs(styles.diagram_img)}
              place
              width={DIAGRAM_FINAL_WIDTH * dimScale}
              height={DIAGRAM_FINAL_HEIGHT * dimScale}
              style={{
                // paddingBottom: isPeopleVisible ? 0 : 4,
                opacity: selectedDiagram === "none" ? 1 : 0,
                transition: "opacity .3s ease-in-out",
                zIndex: 16,
                // top: 0,
                position: "absolute",
                // bottom:
                // (scrollAnimation *
                //   (windowHeight - DIAGRAM_FINAL_HEIGHT * dimScale)) /
                //   2 -
                // 120,
                // marginTop: -5,
              }}
            />
            <Image
              src={PeopleVibeDiagram}
              placeholder="blur"
              alt="An example of a people vibe"
              className={cs(styles.diagram_img)}
              width={DIAGRAM_FINAL_WIDTH * dimScale}
              height={DIAGRAM_FINAL_HEIGHT * dimScale}
              style={{
                marginLeft: diagramMargin,
                opacity: selectedDiagram === "people" ? 1 : 0,
                transition: "opacity .3s ease-in-out",
                zIndex: 15,
                // position: "absolute",
                position: "absolute",
                // marginTop: -5,
              }}
            />
            <Image
              src={MusicVibeDiagram}
              placeholder="blur"
              alt="An example of a music vibe"
              className={cs(styles.diagram_img)}
              width={DIAGRAM_FINAL_WIDTH * dimScale}
              height={DIAGRAM_FINAL_HEIGHT * dimScale}
              style={{
                marginLeft: diagramMargin,
                zIndex: 15,
                // position: "absolute",
                opacity: selectedDiagram === "music" ? 1 : 0,
                transition: "opacity .3s ease-in-out",
                // top: 0,
                position: "absolute",
              }}
            />
            <div style={{ height: DIAGRAM_FINAL_HEIGHT }} />
            <div
              className={styles.row}
              style={{
                // position: "sticky",
                alignItems: "flex-start",
                justifyContent: "center",
                marginTop: 44,
                marginLeft: 64,
                zIndex: 1000,
                // opacity:
                //   selectedDiagram === "music" || selectedDiagram === "people"
                //     ? 1
                //     : 0,
                transition: "opacity .1s ease-in-out",
                width: DIAGRAM_FINAL_WIDTH - 350,
                justifyContent: "space-between",
              }}
            >
              {/* <h4 style={{ textDecoration: "underline" }}>Media Landscape</h4>
          <div style={{ height: 16 }} /> */}
              <button
                onClick={() => setSelectedDiagram("people")}
                className={cs(
                  styles.hoverbutton,
                  selectedDiagram === "people" && styles.active
                )}
              >
                <span>People</span>
              </button>
              <div style={{ width: 0 }} />
              <button
                onClick={() => setSelectedDiagram("music")}
                className={cs(
                  styles.hoverbutton,
                  selectedDiagram === "music" && styles.active
                )}
              >
                <span>Music</span>
              </button>
              <div style={{ width: 0 }} />
              <button
                onClick={() => setSelectedDiagram("none")}
                className={cs(
                  styles.hoverbutton,
                  selectedDiagram === "money" && styles.active
                )}
              >
                <span>News</span>
              </button>
              <div style={{ width: 0 }} />
              <button
                onClick={() => setSelectedDiagram("none")}
                className={cs(
                  styles.hoverbutton,
                  selectedDiagram === "money" && styles.active
                )}
              >
                <span>Photos</span>
              </button>
              <div style={{ width: 0 }} />
              <button
                onClick={() => setSelectedDiagram("none")}
                className={cs(
                  styles.hoverbutton,
                  selectedDiagram === "money" && styles.active
                )}
              >
                <span>Money</span>
              </button>
              {/* <div style={{ width: 0 }} />
              <button
                onClick={() => setSelectedDiagram("none")}
                className={cs(
                  styles.hoverbutton,
                  selectedDiagram === "money" && styles.active
                )}
              >
                <span>Movies</span>
              </button> */}
              {/* <div style={{ width: 0 }} />
              <button
                onClick={() => setSelectedDiagram("none")}
                className={cs(
                  styles.hoverbutton,
                  selectedDiagram === "money" && styles.active
                )}
              >
                <span>Shopping</span>
              </button> */}
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: DIAGRAM_FINAL_HEIGHT * dimScale + 100 }} />
      <div style={{ height: 120 }} />
      <div
        className={styles.peoplesection}
        // style={{ top: 1000 }}
        id={PEOPLE_ID}
      >
        <div
          className={cs(styles.row, styles.peopleheader)}
          style={{
            position: "sticky",
            // bottom: (windowHeight - 650) / 2,
            left: 0,
            top: 0,
            zIndex: 1,
          }}
        >
          {isPeopleScreenShotsSticky && (
            <>
              <div
                className={styles.row}
                style={{
                  position: "absolute",
                  left: 550 + 72,
                  top: 72 + 8,
                }}
              >
                <Image
                  src="/p/peopless1.png"
                  alt="Screenshot of a people vibe in a mobile app"
                  width={342}
                  height={700}
                  style={{
                    opacity: !isMusicVisible ? 1 : 0,
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
                    opacity: !isMusicVisible ? 1 : 0,
                    // transition: "opacity .5s ease-in",
                  }}
                  className={styles.screenshot}
                />
              </div>
            </>
          )}
        </div>
        {!isPeopleScreenShotsSticky && (
          <>
            {/* <h4
              style={{
                position: "fixed",
                top: 64,
                left: 84,
                // paddingTop: 64,
                // paddingBottom: 16,
                width: "100%",
                zIndex: 100,
                opacity: isPeopleVisible ? 1 : 0,
                transition: "opacity .15s ease-in-out",
                color: "#b744fe",
              }}
            >
              A People Vibe UI
            </h4> */}
            <div
              className={cs(styles.row)}
              style={{
                position: "fixed",
                // bottom: (windowHeight - 650) / 2,
                left: 0,
                top: (windowHeight - 700) / 2,
                zIndex: 5,
              }}
            >
              <div
                className={styles.row}
                style={{
                  position: "absolute",
                  left: 550 + 72 + 84,
                }}
              >
                <Image
                  src="/p/peopless1.png"
                  alt="Screenshot of a people vibe in a mobile app"
                  width={342}
                  height={700}
                  style={{
                    opacity: isPeopleVisible ? 1 : 0,
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
                    opacity: isPeopleVisible ? 1 : 0,
                    // transition: "opacity .5s ease-in",
                  }}
                  className={styles.screenshot}
                />
              </div>
            </div>
          </>
        )}
        <div className={styles.row__text}>
          <h4
            style={{
              width: "auto",
              color: "#b744fe",
            }}
            className={styles.people_headertext}
          >
            A People Vibe UI
          </h4>
          <p>
            Vibe-based computing is a new paradigm for the internet that breaks
            apart the homogenous acknowledges the multiplicities inherent in how
            we interact with the internet. My goal with Vibe-based computing is
            to imagine a new internet
          </p>
          <p>
            Vibe-based computing is a new paradigm for the internet that breaks
            apart the homogenous acknowledges the multiplicities inherent in how
            we interact with the internet. My goal with Vibe-based computing is
            to imagine a new internet
          </p>
          <p>
            Vibe-based computing is a new paradigm for the internet that breaks
            apart the homogenous acknowledges the multiplicities inherent in how
            we interact with the internet. My goal with Vibe-based computing is
            to imagine a new internet
          </p>
        </div>
      </div>
      <div style={{ height: 800 }} />
      <div className={styles.peoplesection} id={MUSIC_ID}>
        <div
          className={cs(styles.row, styles.peopleheader)}
          style={{
            position: "sticky",
            // bottom: (windowHeight - 650) / 2,
            left: 0,
            top: 0,
            zIndex: 1,
            background: "yellow",
          }}
        >
          {isMusicScreenShotsSticky && (
            <div
              className={styles.row}
              style={{
                position: "absolute",
                left: 550 + 72,
                top: 72 + 8,
              }}
            >
              <Image
                src="/p/musicss1.png"
                alt="Screenshot of a people vibe in a mobile app"
                width={342}
                height={700}
                // style={{ opacity: isMusicVisible ? 1 : 0 }}
                className={styles.screenshot}
              />
              <div style={{ width: 16 }} />
              <Image
                src="/p/musicss2.png"
                alt="Screenshot of a people vibe in a mobile app"
                width={342}
                height={700}
                // style={{ opacity: isMusicVisible ? 1 : 0 }}
                className={styles.screenshot}
              />
            </div>
          )}
        </div>
        {!isMusicScreenShotsSticky && (
          <>
            {/* <h4
              style={{
                position: "fixed",
                top: 64,
                left: 84,
                // paddingTop: 64,
                // paddingBottom: 16,
                width: "100%",
                zIndex: 100,
                opacity: isMusicVisible ? 1 : 0,
                transition: "opacity .15s ease-in-out",
                color: "#b744fe",
                // visibility: isMusicScreenShotsSticky ? ''
              }}
            >
              A Music Vibe UI
            </h4> */}
            <div
              className={cs(styles.row)}
              style={{
                position: "fixed",
                // bottom: (windowHeight - 650) / 2,
                left: 0,
                top: (windowHeight - 700) / 2,
                zIndex: 5,
              }}
            >
              <div
                className={styles.row}
                style={{
                  position: "absolute",
                  left: 550 + 72 + 84,
                }}
              >
                <Image
                  src="/p/musicss1.png"
                  alt="Screenshot of a people vibe in a mobile app"
                  width={342}
                  height={700}
                  style={{ opacity: isMusicVisible ? 1 : 0 }}
                  className={styles.screenshot}
                />
                <div style={{ width: 16 }} />
                <Image
                  src="/p/musicss2.png"
                  alt="Screenshot of a people vibe in a mobile app"
                  width={342}
                  height={700}
                  style={{ opacity: isMusicVisible ? 1 : 0 }}
                  className={styles.screenshot}
                />
              </div>
            </div>
          </>
        )}
        <div className={styles.row__text}>
          <h4
            style={{
              width: "auto",
              // visibility: isMusicScreenShotsSticky ? "visible" : "hidden",
              color: "#b744fe",
            }}
            className={styles.people_headertext}
          >
            A Music Vibe UI
          </h4>
          <p>
            Vibe-based computing is a new paradigm for the internet that breaks
            apart the homogenous acknowledges the multiplicities inherent in how
            we interact with the internet. My goal with Vibe-based computing is
            to imagine a new internet
          </p>
          <p>
            Vibe-based computing is a new paradigm for the internet that breaks
            apart the homogenous acknowledges the multiplicities inherent in how
            we interact with the internet. My goal with Vibe-based computing is
            to imagine a new internet
          </p>
          <p>
            Vibe-based computing is a new paradigm for the internet that breaks
            apart the homogenous acknowledges the multiplicities inherent in how
            we interact with the internet. My goal with Vibe-based computing is
            to imagine a new internet
          </p>
        </div>
      </div>
      <div style={{ height: 1000 }} />
    </div>
  );
};

const ELEMENTS_ID = "elements";
const OBJECTS_ID = "objects";
const DESTRUCTURE_ID = "destructure";
const VIBES_ID = "vibes";

const OntologySection = ({ scrollY, windowHeight }) => {
  const [elementsTop, setElementsTop] = useState();
  const [objectsTop, setObjectsTop] = useState();

  useEffect(() => {
    const _setOffsets = () => {
      const _elementsTop = document.getElementById(ELEMENTS_ID).offsetTop;
      setElementsTop(_elementsTop);
      const _objectsTop = document.getElementById(OBJECTS_ID).offsetTop;
      setObjectsTop(_objectsTop);
    };
    // _setOffsets();
    // window.addEventListener("resize", _setOffsets);
    // return () => window.removeEventListener("resize", _setOffsets);
  }, []);

  const isElementsVisible = scrollY > elementsTop - (windowHeight * 4) / 5;

  return (
    <div>
      <div className={styles.fulltext}>
        <p>
          Vibe-based computing is a new paradigm for the internet that breaks
          apart the homogenous acknowledges the multiplicities inherent in how
          we interact with the internet.
        </p>
      </div>
      <div style={{ height: 40 }} />
      <div
        className={styles.row}
        style={
          {
            // position: "fixed",
            // top: (windowHeight - 650) / 2,
            // left: 550 + 72 + 84,
            // zIndex: 10,
          }
        }
      >
        <div className={styles.row__text}>
          <p>
            Vibe-based computing is a new paradigm for the internet that breaks
            apart the homogenous acknowledges the multiplicities inherent in how
            we interact with the internet. My goal with Vibe-based computing is
            to imagine a new internet
          </p>
        </div>
        <div style={{ width: 56 }} />
        <Image
          src="/p/mediaelements.png"
          alt="Media Elements, platform agnostic: Image, Video, Audio, Text"
          className={styles.media_img}
          width={500}
          height={206}
          style={{
            // opacity: isElementsVisible ? 1 : 0,
            transition: "opacity .3s ease-in-out",
          }}
        />
      </div>
      <div style={{ height: 80 }} />
      <div className={styles.row}>
        <div className={styles.row__text}>
          <p>
            Vibe-based computing is a new paradigm for the internet that breaks
            apart the homogenous acknowledges the multiplicities inherent in how
            we interact with the internet. My goal with Vibe-based computing is
            to imagine a new internet
          </p>
          <p>Vibe-based that breaks apart the homogenous:</p>
          <div style={{ height: 16 }} />
        </div>
        <div style={{ width: 56 }} />
        <Image
          src="/p/mediaobjects.png"
          alt="Media Objects platform dependant, atomic units of multi-media content composed of Media Elements"
          className={styles.media_img}
          width={508}
          height={367}
          style={{ marginLeft: -8 }}
        />
      </div>
      <div style={{ height: 120 }} />
      <div className={styles.row}>
        <div className={styles.row__text}>
          <p>
            Vibe-based computing is a new paradigm for the internet that breaks
            apart the homogenous acknowledges the multiplicities inherent in how
            we interact with the internet. My goal with Vibe-based computing is
            to imagine a new internet
          </p>
          <p>Vibe-based that breaks apart the homogenous:</p>
        </div>
        <div style={{ width: 56 }} />
        <Image
          src="/p/destructure.png"
          alt="Destructuring platforms into different media objects"
          className={styles.media_img}
          style={{ background: "white" }}
          width={600 * 0.9}
          height={807 * 0.9}
        />
      </div>
      <div style={{ height: 64 }} />
      <div className={styles.row}>
        <div className={styles.row__text}>
          <p>
            Vibe-based computing is a new paradigm for the internet that breaks
            apart the homogenous acknowledges the multiplicities inherent in how
            we interact with the internet. My goal with Vibe-based computing is
            to imagine a new internet
          </p>
          <p>
            Vibe-based computing is a new paradigm for the internet that breaks
            apart the homogenous acknowledges the multiplicities inherent in how
            we interact with the internet. My goal with Vibe-based computing is
            to imagine a new internet
          </p>
          <p>
            Vibe-based computing is a new paradigm for the internet that breaks
            apart the homogenous acknowledges the multiplicities inherent in how
            we interact with the internet. My goal with Vibe-based computing is
            to imagine a new internet
          </p>
          <div style={{ height: 36 }} />
          <Image
            src="/p/vibelearn.png"
            alt="Media Elements, platform agnostic: Image, Video, Audio, Text"
            className={styles.inlinemedia_img}
            width={400}
            height={606}
          />
        </div>
        <div style={{ width: 56 }} />
        <Image
          src="/p/vibes.png"
          alt="Vibes platform transcendant, dynamic collections of Media Objects, rearrangable"
          className={styles.media_img}
          width={482}
          height={500}
        />
      </div>
    </div>
  );
};

export default function Portfolio() {
  const pathname = usePathname();
  const scrollY = useScrollPosition(120);
  const [windowHeight, setWindowHeight] = useState();
  useEffect(() => {
    const _getAndSetWindowHeight = () => {
      const windowHeight = window.innerHeight;
      setWindowHeight(windowHeight);
    };
    _getAndSetWindowHeight();
    window.addEventListener("reisze", _getAndSetWindowHeight);
    return () => window.removeEventListener("resize", _getAndSetWindowHeight);
  }, []);

  const topbarPadding = 52;
  // const sidebarTop =
  //   40 + topbarPadding * (1 - Math.min(scrollY, topbarPadding) / topbarPadding);

  return (
    <main className={styles.main}>
      <Sidebar scrollY={scrollY} pathname={pathname} showLinks />
      <div className={styles.row} style={{ position: "absolute" }}>
        <div style={{ height: 72 }} />
        <div
          className={styles.sidebar}
          style={{
            marginTop: 16,
            top: 32,
            position: "sticky",
          }}
        >
          {/* <div style={{ height: 8 }} /> */}
          <h4>Portfolio</h4>
          <div style={{ height: 12 }} />
          <Link
            className={styles.sidebar__link}
            href="/portfolio"
            target="_blank"
            style={{
              color: pathname === "/portfolio" ? "#222" : "#777",
              fontFamily: "HelveticaNeue-Medium",
            }}
          >
            <span style={{ fontFamily: "HelveticaNeue-Medium", fontSize: 10 }}>
              •{" "}
            </span>
            <u>Vibe-based Computing</u>
          </Link>
          <Link
            className={styles.sidebar__link}
            href="/portfolio/30000-under-30"
            target="_blank"
            style={{
              color: pathname === "/portfolio/30000-under-30" ? "#000" : "#777",
              // fontFamily: "HelveticaNeue-Medium",
            }}
          >
            <span style={{ fontFamily: "HelveticaNeue-Medium", fontSize: 10 }}>
              •{" "}
            </span>
            <u>30000 under 30</u>
          </Link>
          <Link
            className={styles.sidebar__link}
            href="/portfolio/e-conomy"
            target="_blank"
            style={{
              color: pathname === "/portfolio/e-conomy" ? "#000" : "#777",
              // fontFamily: "Helvetica Neue",
            }}
          >
            <span style={{ fontFamily: "HelveticaNeue-Medium", fontSize: 10 }}>
              •{" "}
            </span>
            <u>E-conomy</u>
          </Link>
          <Link
            className={styles.sidebar__link}
            href="/portfolio/e-conomy"
            target="_blank"
            style={{
              color: pathname === "/portfolio/e-conomy" ? "#000" : "#777",
              // fontFamily: "HelveticaNeue-Medium",
            }}
          >
            <span style={{ fontFamily: "HelveticaNeue-Medium", fontSize: 10 }}>
              •{" "}
            </span>
            <u>Nexus Lost</u>
          </Link>
        </div>
        <div style={{ width: 16 }} />
        <div className={styles.content}>
          {/* <h1>Noah Putnam Portfolio</h1> */}
          <div style={{ height: 84 }} />
          <h5>CASE 1</h5>
          <h2>Vibe-based Computing</h2>
          <div style={{ height: 48 }} />
          <Image
            src={VibeHeader}
            alt="A vibe computer"
            className={styles.vibeheader_img}
            width={900}
            height={376}
            placeholder="blur"
            priority
          />
          <div style={{ height: 36 }} />
          <div className={styles.row}>
            <div className={styles.row__text}>
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
            <div style={{ width: 56 }} />
            <div className={styles.row__quote}>
              <blockquote className={playfairMed.className}>
                Do I contradict myself?
                <br />
                Very well then I contradict myself,
                <br />
                (I am large, I contain multitudes.)
              </blockquote>
              <div style={{ height: 8 }} />
              <div
                className={styles.row}
                style={{ justifyContent: "space-between" }}
              >
                <span className={playfairBold.className}>
                  Walt Whitman, Song of Myself
                </span>
                <Image
                  src="/p/ww.jpeg"
                  alt="photo of Walt Whitman"
                  width={140}
                  height={140}
                />
              </div>
            </div>
          </div>
          <div style={{ height: 120 }} />
          <h3>Omnidirectional Media Engine</h3>
          <div className={styles.row}>
            <div className={styles.row__text}>
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
                Vibe-based computing is to imagine a new internet. My goal with
                Vibe-based computing is to imagine a new internet. My goal with
                Vibe-based computing is to imagine a new internet
              </p>
              <p>
                My goal with Vibe-based computing is to imagine a new internet
              </p>
            </div>
            <div style={{ width: 56 }} />
            <div className={styles.videowrapper}>
              <DemoVideo />
            </div>
          </div>
          <div style={{ height: 140 }} />
          <h3>Dynamic Media Ontoloy</h3>
          <OntologySection scrollY={scrollY} windowHeight={windowHeight} />
          <div style={{ height: 80 }} />
          <h3>Generative UI</h3>
          <DiagramSection scrollY={scrollY} windowHeight={windowHeight} />
          <h3
          // style={{ fontSize: 50 }}
          >
            The Paradigm Shift
          </h3>
          <div style={{ height: 48 }} />
          <Image
            alt="From walled gardens to vibes"
            src="/p/paradigmshift.png"
            // style={{ marginLeft: `calc(50vw - 375px - 72px)` }}
            style={{ margin: "auto" }}
            width={750 * 1.1}
            height={147 * 1.1}
          />
          <div style={{ height: 100 }} />
          <div className={styles.row}>
            <div className={styles.row__text}>
              <h4>Aligned Algorithms</h4>
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
            <div style={{ width: 56 }} />
            <div className={styles.col}>
              <Image
                src="/p/usercontentmatrix.png"
                alt="Algorithm based off of user interaction with content"
                width={500}
                height={210}
                style={{
                  marginRight: "auto",
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              />
              <div style={{ height: 60 }} />
              <Image
                src="/p/3dmatrix.png"
                alt="Algorithm based off of different vibes user selects and their interaction with content"
                width={250}
                height={250}
                style={{
                  marginRight: "auto",
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              />
            </div>
          </div>
          <div style={{ height: 72 }} />
          <div className={styles.row}>
            <div className={styles.row__text}>
              <h4>Personalized, Private, Permissionless.</h4>
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
            <div style={{ width: 56 }} />
            <Image
              src="/p/vibeperson.png"
              alt="Algorithm based off of different vibes user selects and their interaction with content"
              width={550}
              height={277}
              style={{
                marginRight: "auto",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            />
          </div>
          <div style={{ height: 72 }} />
          <h4>A New Way of Being, Online</h4>
          <div className={styles.fulltext}>
            <p>
              Vibe-based computing is a new paradigm for the internet that
              breaks apart the homogenous acknowledges the multiplicities
              inherent in how we interact with the internet. My goal with
              Vibe-based computing is to imagine a new internet
            </p>
          </div>
          <div style={{ height: 100 }} />
        </div>
      </div>
    </main>
  );
}
