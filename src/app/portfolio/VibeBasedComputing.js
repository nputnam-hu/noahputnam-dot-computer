"use client";
import Image from "next/image";
import cs from "classnames";

import DemoVideo from "./DemoVideo";
import DiagramSection from "./DiagramSection";
import ScreenshotSection from "./ScreenshotSection";
import styles from "./portfolio.module.css";
import { useEffect, useRef } from "react";
import Link from "next/link";
import VibeHeader from "/public/vibe-based-computing/vibeheader.png";
import EndSection from "./EndSections";

const VibeBasedComputing = ({
  serverComponents: { introSection, ontologySection },
}) => {
  const prevbg = useRef(
    typeof window !== "undefined" && localStorage.getItem("prevbg")
  ).current;
  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("prevbg", "light");
    }, 200);
  }, []);

  const wasDarkmode = prevbg === "dark";

  return (
    <div className={cs(styles.content, wasDarkmode && "animatedWhiteBg")}>
      <div style={{ height: 108 }} />
      <div style={{ paddingLeft: 52 }}>
        <h5>CASE 1</h5>
        <h1>Vibe-based Computing</h1>
        <div style={{ height: "5vh" }} />
      </div>
      <Image
        src={VibeHeader}
        alt="A vibe computer"
        className={cs(styles.vibeheader_img, "animateOpacity")}
        width={900}
        height={362}
        placeholder="blur"
        priority
        // style={{ marginLeft: `calc(-172px - 5vw + 450px)` }}
      />
      <div style={{ height: "5.5vh" }} />
      <div style={{ paddingLeft: 52 }}>
        <p
          style={{
            fontSize: 31,
            marginBottom: 8,
            width: 820,
            fontFamily: "HelveticaNeue-Light",
            lineHeight: 1.45,
          }}
        >
          Vibe-based Computing is an attempt to reimagine what the internet
          could be by constructing a new primitive for online media,{" "}
          <span
            style={{
              // fontSize: 30,
              fontFamily: "HelveticaNeue",
              // color: "#7d59ff",
            }}
          >
            The Vibe
          </span>
          .
        </p>
        <div style={{ height: 120 }} />
        {introSection}
      </div>
      <div style={{ height: 80 }} />
      <Image
        alt="From walled gardens to vibes"
        src="/vibe-based-computing/paradigmshift.png"
        style={{ marginLeft: `calc(-172px - 5vw + 412px)` }}
        // style={{ margin: "auto" }}
        width={750 * 1.1}
        height={147 * 1.1}
      />{" "}
      <div style={{ height: 100 }} />
      <h3>Dynamic Media Ontology</h3>
      {ontologySection}
      <div style={{ height: 60 }} />
      <h3>Generative UI</h3>
      <DiagramSection />
      <div style={{ height: 140 }} />
      <ScreenshotSection />
      <div style={{ height: 240 }} />
      <EndSection />
      <div style={{ height: 60 }} />
      <div
        style={{
          height: 1,
          width: "100%",
          background: "rgba(0,0,0,0.1)",
          // marginLeft: "5%",
        }}
      />
      <div style={{ height: 40 }} />
      <h4
        style={{
          fontFamily: "HelveticaNeue-Medium",
          color: "black",
          fontSize: 30,
        }}
      >
        Current State of Development
      </h4>
      <div style={{ height: 8 }} />
      <div className={styles.fulltext}>
        <p>
          To date most of my work on Vibe-based Computing has been at the
          conceptual level in trying to explore the possiblities of the Vibe
          inteface from an Human-Computer Interaction lens. While there is
          plenty of work left to do there, the next phase of the project I have
          been working on lately is creating a working prototype of a Vibe-based
          Computing system that can demonstrate a proof of concept for the idea,
          and serve as a foundation for a fully developed framework to be
          released in the future.
        </p>
        <p>
          To this end, there are 2 major research areas I have been pursuing:
        </p>
        <p>1. Multi-modal generative models</p>
        <p>2. Privacy and data model</p>
        <div style={{ height: 12 }} />
        {/* <h4
          style={{
            fontFamily: "HelveticaNeue-Medium",
            color: "black",
            // margin: 0,
            fontSize: 24,
          }}
        >
          Target Demo
        </h4>
        <p>The target demo is</p>
        <div style={{ height: 12 }} />
        <h4
          style={{
            fontFamily: "HelveticaNeue-Medium",
            color: "black",
            marginBottom: 4,
            fontSize: 24,
          }}
        >
          Long Term Deliverable
        </h4>
        <p>The long term deliverable is</p> */}
      </div>
      <div style={{ height: 24 }} />
      <h4
        style={{
          fontFamily: "HelveticaNeue-Medium",
          color: "black",
          fontSize: 30,
        }}
      >
        Attribution & Prior Works
      </h4>
      <p>
        The concept of Vibe-based Computing is original to me, as are the UI
        designs depicted under the "Generating a Music Vibe" and "A Music Vibe
        UI" sections.
      </p>
      <p>
        The graphics and Vibe gif shown interspered throughout this portfolio
        page were made in collaboration between me and outside designers I hired
        to better illustrate the different components of the concept I
        formulated. Further details available upon request.
      </p>
    </div>
  );
};

export default VibeBasedComputing;
