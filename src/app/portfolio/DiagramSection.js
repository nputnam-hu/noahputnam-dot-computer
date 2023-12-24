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

const DIAGRAM_FINAL_HEIGHT = 643;
const DIAGRAM_FINAL_WIDTH = 940;
const DIAGRAM_ID = "diagram";

const DiagramSection = () => {
  const scrollY = useScrollPosition(120);
  // console.log({ scrollY });
  const [scrollAnimation, setAnimation] = useState(0);
  const [diagramTop, setDiagramTop] = useState();
  // none | people | music
  const [selectedDiagram, setSelectedDiagram] = useState("none");
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

  useEffect(() => {
    const _setOffsets = () => {
      const _diagramTop = document.getElementById(DIAGRAM_ID).offsetTop;
      setDiagramTop(_diagramTop);
    };
    _setOffsets();
    window.addEventListener("resize", _setOffsets);
    return () => window.removeEventListener("resize", _setOffsets);
  }, []);

  const triggerPoint = diagramTop - windowHeight + DIAGRAM_FINAL_HEIGHT + 60;
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
    if (scrollY > diagramTop - 250) {
      const _scrollAnimation = Math.min(scrollY - diagramTop + 250, 130) / 130;
      setAnimation(_scrollAnimation);
    } else {
      setAnimation(0);
    }
  }, [scrollY, diagramTop]);

  const dimScale = isSafari ? 1 : (1 / 5) * scrollAnimation + 4 / 5;

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
      <div style={{ height: 24 }} />
      <div className={styles.col} style={{ alignItems: "center" }}>
        <div
          id={DIAGRAM_ID}
          style={{
            height: DIAGRAM_FINAL_HEIGHT + 100,
            position: "absolute",
            zIndex: 10,
          }}
          className={styles.webkitfix}
        >
          <div
            className={styles.absolutecenter}
            style={{
              // position: "sticky",
              // top: 64 - 40 * scrollAnimation,
              width: DIAGRAM_FINAL_WIDTH,
              top: 60,
              // ((windowHeight - DIAGRAM_FINAL_HEIGHT * 1.1 - 100) / 2) *
              // scrollAnimation,
              // left: 0.1 * DIAGRAM_FINAL_WIDTH * dimScale,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Image
              src={VibeDiagram}
              placeholder="blur"
              alt="Vibe Diagram"
              className={cs(styles.diagram_img, styles.webkitfix)}
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
                transform: "translateZ(0)",
                // transform: `scale(${dimScale}) translateZ(0) translateY(${
                //   (DIAGRAM_FINAL_HEIGHT / 2) * dimScale * 0
                // })`,
                // bottom:
                // (scrollAnimation *
                //   (windowHeight - DIAGRAM_FINAL_HEIGHT * dimScale)) /
                //   2 -
                // 120,
                // marginTop: -5,
              }}
            />
            <Image
              src={MusicVibeDiagram}
              placeholder="blur"
              alt="An example of a music vibe"
              className={cs(styles.diagram_img, styles.webkitfix)}
              width={DIAGRAM_FINAL_WIDTH * dimScale}
              height={DIAGRAM_FINAL_HEIGHT * dimScale}
              style={{
                // transform: `scale(${dimScale}) translateZ(0) translateY(${
                //   (DIAGRAM_FINAL_HEIGHT / 2) * dimScale * 0
                // })`,
                zIndex: 15,
                // position: "absolute",
                opacity: selectedDiagram === "music" ? 1 : 0,
                transition: "opacity .3s ease-in-out",
                // top: 0,
                position: "absolute",
                transform: "translateZ(0)",
              }}
            />
            <Image
              src={PeopleVibeDiagram}
              placeholder="blur"
              alt="An example of a people vibe"
              className={cs(styles.diagram_img, styles.webkitfix)}
              width={DIAGRAM_FINAL_WIDTH * dimScale}
              height={DIAGRAM_FINAL_HEIGHT * dimScale}
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
              src={NewsVibeDiagram}
              placeholder="blur"
              alt="An example of a news vibe"
              className={cs(styles.diagram_img, styles.webkitfix)}
              width={DIAGRAM_FINAL_WIDTH * dimScale}
              height={DIAGRAM_FINAL_HEIGHT * dimScale}
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
              src={PhotosVibeDiagram}
              placeholder="blur"
              alt="An example of a photos vibe"
              className={cs(styles.diagram_img, styles.webkitfix)}
              width={DIAGRAM_FINAL_WIDTH * dimScale}
              height={DIAGRAM_FINAL_HEIGHT * dimScale}
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
              src={MoneyVibeDiagram}
              placeholder="blur"
              alt="An example of a money vibe"
              className={cs(styles.diagram_img, styles.webkitfix)}
              width={DIAGRAM_FINAL_WIDTH * dimScale}
              height={DIAGRAM_FINAL_HEIGHT * dimScale}
              style={{
                zIndex: 15,
                // position: "absolute",
                opacity: selectedDiagram === "money" ? 1 : 0,
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
        </div>
      </div>
      <div style={{ height: DIAGRAM_FINAL_HEIGHT + 100 }} />
    </div>
  );
};

export default DiagramSection;
