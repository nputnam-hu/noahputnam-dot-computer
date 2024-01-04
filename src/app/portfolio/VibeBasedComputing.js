"use client";
import Image from "next/image";
import cs from "classnames";

import DemoVideo from "./DemoVideo";
import DiagramSection from "./DiagramSection";
import ScreenshotSection from "./ScreenshotSection";
import styles from "./portfolio.module.css";
import { useEffect, useRef } from "react";
import Link from "next/link";
import EndSection from "./EndSections";
import VibeHeader from "/public/vibe-based-computing/vibeheader.png";
import MobileVibeHeader from "/public/vibe-based-computing/vibeheader_mobile.png";
import ParadigmShift from "/public/vibe-based-computing/paradigmshift.png";
import ParadigmShiftMobile from "./ParadigmShift";

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

  // return (
  //   <div className={cs(styles.content, wasDarkmode && "animatedWhiteBg")}>
  //     <div style={{ height: 100 }} />
  //     <h2>Testaew</h2>
  //     <div style={{ height: 100 }} />
  //     <ScreenshotSection />
  //     <div
  //       className={cs(styles.absolutecenter, styles.mobileonly)}
  //       style={{ marginTop: -1, background: "white", height: 1, zIndex: 100 }}
  //     />
  //     <div style={{ height: 200 }} />
  //     <h2>Testaew</h2>
  //     <div style={{ height: 200 }} />
  //   </div>
  // );

  return (
    <>
      <div className={cs(styles.content, wasDarkmode && "animatedWhiteBg")}>
        <div style={{ height: 108 }} />
        <div className={styles.intropadding}>
          <h5>CASE 1</h5>
          <h1>Vibe-based Computing</h1>
        </div>
        <Image
          // fill
          src={VibeHeader}
          alt="A vibe computer"
          className={cs(styles.vibeheader_img, "animateOpacity")}
          // sizes="(max-width: 1200px) 800px, 900px"
          // width={900}
          // height={362}
          placeholder="blur"
          priority
          // style={{ marginLeft: "calc(16vw - 450px)" }}
        />
        <Image
          src={MobileVibeHeader}
          alt="A vibe computer"
          className={cs(styles.mobilevibeheader_img, "animateOpacity")}
          // sizes="(max-width: 1200px) 800px, 900px"
          // width={900}
          // height={362}
          placeholder="blur"
          priority
          // style={{ marginLeft: "calc(16vw - 450px)" }}
        />
        <div className={styles.intropadding}>
          <span
            className={styles.intro__description}
            // style={{
            //   fontSize: 31,
            //   marginBottom: 8,
            //   width: 820,
            //   fontFamily: "HelveticaNeue-Light",
            //   lineHeight: 1.45,
            // }}
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
          </span>
          <div style={{ height: 120 }} />
          <div className={styles.mobileonly} style={{ height: 40 }} />
          {introSection}
        </div>
        <div className={styles.desktoponly} style={{ height: 180 }} />
        <div className={styles.mobileonly} style={{ height: 80 }} />
        <div>
          <Image
            alt="From walled gardens to vibes"
            src={ParadigmShift}
            className={cs(styles.desktoponly, styles.paradigmshift_img)}
          />
          <ParadigmShiftMobile />
        </div>
        <div className={styles.desktoponly3} style={{ height: 280 }} />
        {ontologySection}
        <div style={{ height: 60 }} />
        <h3>Generative UI</h3>
        <DiagramSection />
        <div className={styles.desktoponly} style={{ height: 200 }} />
        <ScreenshotSection />
        <div
          className={cs(styles.overextendpadding, styles.mobileonly)}
          style={{
            marginTop: -1.5,
            background: "white",
            height: 3,
            zIndex: 10000000000,
          }}
        />
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
            plenty of work left to do there, the next phase of the project I
            have been working on lately is creating a working prototype of a
            Vibe-based Computing system that can demonstrate a proof of concept
            for the idea, and serve as a foundation for a fully developed
            framework to be released in the future.
          </p>
          <p>
            To this end, there are 2 major research areas I have been pursuing:
          </p>
          <p>
            <b>1) Multi-modal generative models</b> To fully implement the Vibe
            as described in the above write-up, we will need a general media AI
            architecture than can create a mathematical semantic understanding
            of any piece of media, and be able to map that understanding to
            other models.
          </p>
          <p>
            The rise of multimodal LLMs, as well as the innovation made with the
            RAG (Retrieval Augmented Generation) design, enable such an
            architecture to exist in theory. However, how to implement this
            architecture is still very much an open question, as well how
            effective the current state of the art AI models will be at creating
            a deep semantic understanding of any arbitrary piece of media fed
            into it.
          </p>
          <p>
            Given the rapid acceleration of the field I expect many of these
            problems to have clear solutions developed over the next year or
            two. But devising a system that can piece them together in the right
            way will be a technical challenge that needs to be engaged with.
          </p>
          <p>
            <b>2) Privacy and data model</b> Another key part of Vibe-based
            Computing is creating a new data framework for online media that
            gives users complete control over their data. Cryptographic identity
            is the obvious starting point for building this system, with a
            Public/Prviate key generated for each user. However, this still
            leaves the questions of:
          </p>
          <p>
            a) Where will a user's data and media be stored (Local to the user's
            device? In a cloud service operated by a coroporation?)
          </p>
          <p>
            b) How will communication between users work in a privacy-perserving
            way?
          </p>
          <p>
            c) How can the data framework be designed to have minimal, if not 0,
            impact on the user-facing experience?
          </p>
          <p>
            All of these problems have been well-researched in fields like
            cryptography, networking, and cryptocurrency design, but Vibe-based
            Computing introduces new challenges that will require a novel system
            design.
          </p>
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
          Attribution
        </h4>
        <div className={styles.fulltext}>
          <p>
            The concept of Vibe-based Computing is original to me, as are the UI
            designs depicted under the "Generating a Music Vibe" and "A Music
            Vibe UI" sections.
          </p>
          <p>
            The graphics and Vibe gif shown interspered throughout this
            portfolio page were made in collaboration between me and outside
            designers I hired to better illustrate the different components of
            the concept I formulated. Further details available upon request.
          </p>
        </div>
      </div>
    </>
  );
};

export default VibeBasedComputing;
