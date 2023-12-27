import { useState, useEffect } from "react";
import useScrollPosition from "@react-hook/window-scroll";
import { isSafari } from "react-device-detect";

import Image from "next/image";
import cs from "classnames";

import styles from "./portfolio.module.css";
import VibeDiagram from "/public/vibe-based-computing/vibediagram.png";
import PeopleVibeDiagram from "/public/vibe-based-computing/vibediagram-people.png";
import MusicVibeDiagram from "/public/vibe-based-computing/vibediagram-music.png";
import NewsVibeDiagram from "/public/vibe-based-computing/vibediagram-news.png";
import PhotosVibeDiagram from "/public/vibe-based-computing/vibediagram-photos.png";
import MoneyVibeDiagram from "/public/vibe-based-computing/vibediagram-money.png";
import VibeDiagramMobile from "/public/vibe-based-computing/vibediagram_mobile.png";
import PeopleVibeDiagramMobile from "/public/vibe-based-computing/vibediagram_mobile-people.png";
import MusicVibeDiagramMobile from "/public/vibe-based-computing/vibediagram_mobile-music.png";
import NewsVibeDiagramMobile from "/public/vibe-based-computing/vibediagram_mobile-news.png";
import PhotosVibeDiagramMobile from "/public/vibe-based-computing/vibediagram_mobile-photos.png";
import MoneyVibeDiagramMobile from "/public/vibe-based-computing/vibediagram_mobile-money.png";

const DIAGRAM_ID = "diagram";

const DIAGRAM_FINAL_WIDTH = 940;
const DIAGRAM_FINAL_HEIGHT = 643;

const DiagramSection = () => {
  const scrollY = useScrollPosition(120);
  // console.log({ scrollY });
  const [scrollAnimation, setAnimation] = useState(0);
  const [diagramTop, setDiagramTop] = useState();
  // none | people | music
  const [selectedDiagram, setSelectedDiagram] = useState("none");
  const [windowHeight, setWindowHeight] = useState();
  const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
    const _getAndSetWindowHeight = () => {
      const _windowHeight = window.innerHeight;
      const _windowWidth = window.innerWidth;
      setWindowHeight(_windowHeight);
      setWindowWidth(_windowWidth);
    };
    _getAndSetWindowHeight();
    window.addEventListener("reisze", _getAndSetWindowHeight);
    // return () => window.removeEventListener("resize", _getAndSetWindowHeight);
  }, []);

  useEffect(() => {
    const _setOffsets = () => {
      const _diagramTop =
        document.getElementById(DIAGRAM_ID)?.offsetTop +
        document.getElementById(DIAGRAM_ID)?.offsetHeight;

      console.log(_diagramTop);
      setDiagramTop(_diagramTop);
    };
    _setOffsets();
    window.addEventListener("resize", _setOffsets);
    return () => window.removeEventListener("resize", _setOffsets);
  }, []);

  const triggerPoint = diagramTop - windowHeight - 72;
  useEffect(() => {
    if (scrollY > triggerPoint) {
      if (selectedDiagram === "none") {
        setSelectedDiagram("music");
      }
    } else {
      setSelectedDiagram("none");
    }
  }, [scrollY, triggerPoint, selectedDiagram]);

  useEffect(() => {
    if (scrollY > diagramTop - windowHeight - 140) {
      const _scrollAnimation =
        Math.min(scrollY - diagramTop + windowHeight + 140, 130) / 130;
      setAnimation(_scrollAnimation);
    } else {
      setAnimation(0);
    }
  }, [scrollY, diagramTop, windowHeight]);

  console.log({ diagramTop, scrollY });

  const dimScale = windowWidth < 600 ? 1 : (1 / 5) * scrollAnimation + 4 / 5;
  const translateScale = windowWidth < 600 ? 0.5 : scrollAnimation - 0.5;

  return (
    <div className={styles.diagramsection}>
      <div className={styles.fulltext}>
        <p>
          Now that The Vibe has been formally defined, we can begin to consider
          its implications for Human-Computer Interaction. For example, when
          applied to UI/UX, Vibes operate as a powerful new organizing principle
          for software applications that can be explored in a variety of
          domains.
        </p>
      </div>
      <div className={styles.mobileonly} style={{ height: 80 }} />
      <div
        style={{
          position: "absolute",
          zIndex: 10,
        }}
        id={DIAGRAM_ID}
        className={styles.diagramcol}
      >
        <Image
          src={VibeDiagram}
          placeholder="blur"
          alt="Vibe Diagram"
          className={cs(
            styles.diagram_img,
            styles.webkitfix,
            styles.desktoponly
          )}
          style={{
            opacity: selectedDiagram === "none" ? 1 : 0,
            transition: "opacity .3s ease-in-out",
            zIndex: 16,
            position: "absolute",
            transform: `scale(${dimScale}) translateZ(0) translateY(${
              10 * translateScale
            }%)`,
          }}
        />
        <Image
          src={MusicVibeDiagram}
          placeholder="blur"
          alt="An example of a music vibe"
          className={cs(
            styles.diagram_img,
            styles.webkitfix,
            styles.desktoponly
          )}
          // width={DIAGRAM_FINAL_WIDTH * dimScale}
          // height={DIAGRAM_FINAL_HEIGHT * dimScale}
          style={{
            transform: `scale(${dimScale}) translateZ(0) translateY(${
              10 * translateScale
            }%)`,
            zIndex: 15,
            opacity: selectedDiagram === "music" ? 1 : 0,
            transition: "opacity .3s ease-in-out",
            position: "absolute",
          }}
        />
        <Image
          src={PeopleVibeDiagram}
          placeholder="blur"
          alt="An example of a people vibe"
          className={cs(
            styles.diagram_img,
            styles.webkitfix,
            styles.desktoponly
          )}
          style={{
            transform: `scale(${dimScale}) translateY(${10 * translateScale}%)`,
            opacity: selectedDiagram === "people" ? 1 : 0,
            transition: "opacity .3s ease-in-out",
            zIndex: 15,
            // position: "absolute",
            position: "absolute",
            // marginTop: -5,
          }}
        />
        <Image
          src={NewsVibeDiagram}
          placeholder="blur"
          alt="An example of a news vibe"
          className={cs(
            styles.diagram_img,
            styles.webkitfix,
            styles.desktoponly
          )}
          style={{
            zIndex: 15,
            transform: `scale(${dimScale}) translateY(${10 * translateScale}%)`,
            // position: "absolute",
            opacity: selectedDiagram === "news" ? 1 : 0,
            transition: "opacity .3s ease-in-out",
            // top: 0,
            position: "absolute",
          }}
        />
        <Image
          src={PhotosVibeDiagram}
          placeholder="blur"
          alt="An example of a photos vibe"
          className={cs(
            styles.diagram_img,
            styles.webkitfix,
            styles.desktoponly
          )}
          style={{
            zIndex: 15,
            transform: `scale(${dimScale}) translateY(${10 * translateScale}%)`,
            // position: "absolute",
            opacity: selectedDiagram === "photos" ? 1 : 0,
            transition: "opacity .3s ease-in-out",
            // top: 0,
            position: "absolute",
          }}
        />
        <Image
          src={MoneyVibeDiagram}
          placeholder="blur"
          alt="An example of a money vibe"
          className={cs(
            styles.diagram_img,
            styles.webkitfix,
            styles.desktoponly
          )}
          style={{
            transform: `scale(${dimScale}) translateY(${10 * translateScale}%)`,
            zIndex: 15,
            // position: "absolute",
            opacity: selectedDiagram === "money" ? 1 : 0,
            transition: "opacity .3s ease-in-out",
            // top: 0,
            position: "absolute",
          }}
        />
        <Image
          src={VibeDiagramMobile}
          placeholder="blur"
          alt="Vibe Diagram"
          className={cs(
            styles.diagram_img,
            styles.webkitfix,
            styles.mobileonly
          )}
          style={{
            opacity: selectedDiagram === "none" ? 1 : 0,
            transition: "opacity .3s ease-in-out",
            zIndex: 16,
            position: "absolute",
          }}
        />
        <Image
          src={MusicVibeDiagramMobile}
          placeholder="blur"
          alt="An example of a music vibe"
          className={cs(
            styles.diagram_img,
            styles.webkitfix,
            styles.mobileonly
          )}
          // width={DIAGRAM_FINAL_WIDTH * dimScale}
          // height={DIAGRAM_FINAL_HEIGHT * dimScale}
          style={{
            zIndex: 15,
            opacity: selectedDiagram === "music" ? 1 : 0,
            transition: "opacity .3s ease-in-out",
            position: "absolute",
          }}
        />
        <Image
          src={PeopleVibeDiagramMobile}
          placeholder="blur"
          alt="An example of a people vibe"
          className={cs(
            styles.diagram_img,
            styles.webkitfix,
            styles.mobileonly
          )}
          style={{
            opacity: selectedDiagram === "people" ? 1 : 0,
            transition: "opacity .3s ease-in-out",
            zIndex: 15,
            // position: "absolute",
            position: "absolute",
            // marginTop: -5,
          }}
        />
        <Image
          src={NewsVibeDiagramMobile}
          placeholder="blur"
          alt="An example of a news vibe"
          className={cs(
            styles.diagram_img,
            styles.webkitfix,
            styles.mobileonly
          )}
          style={{
            zIndex: 15,
            // position: "absolute",
            opacity: selectedDiagram === "news" ? 1 : 0,
            transition: "opacity .3s ease-in-out",
            // top: 0,
            position: "absolute",
          }}
        />
        <Image
          src={PhotosVibeDiagramMobile}
          placeholder="blur"
          alt="An example of a photos vibe"
          className={cs(
            styles.diagram_img,
            styles.webkitfix,
            styles.mobileonly
          )}
          style={{
            zIndex: 15,
            // position: "absolute",
            opacity: selectedDiagram === "photos" ? 1 : 0,
            transition: "opacity .3s ease-in-out",
            // top: 0,
            position: "absolute",
          }}
        />
        <Image
          src={MoneyVibeDiagramMobile}
          placeholder="blur"
          alt="An example of a money vibe"
          className={cs(
            styles.diagram_img,
            styles.webkitfix,
            styles.mobileonly
          )}
          style={{
            zIndex: 15,
            // position: "absolute",
            opacity: selectedDiagram === "money" ? 1 : 0,
            transition: "opacity .3s ease-in-out",
            // top: 0,
            position: "absolute",
          }}
        />

        <div className={styles.diagramspacer} />
        <div className={styles.mobileonly} style={{ height: 12 }} />
        <div className={styles.diagram__butttons}>
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
            onClick={() => setSelectedDiagram("news")}
            className={cs(
              styles.hoverbutton,
              selectedDiagram === "news" && styles.active
            )}
          >
            <span>News</span>
          </button>
          <div style={{ width: 0 }} />
          <button
            onClick={() => setSelectedDiagram("photos")}
            className={cs(
              styles.hoverbutton,
              selectedDiagram === "photos" && styles.active
            )}
          >
            <span>Photos</span>
          </button>
          <div style={{ width: 0 }} />
          <button
            onClick={() => setSelectedDiagram("money")}
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
      <div style={{ height: DIAGRAM_FINAL_HEIGHT + 100 }} />
    </div>
  );
};

export default DiagramSection;
