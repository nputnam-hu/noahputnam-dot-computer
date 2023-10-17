"use client";
import Image from "next/image";
import cs from "classnames";
import { Playfair_Display } from "next/font/google";

import DemoVideo from "./DemoVideo";
import DiagramSection from "./DiagramSection";
import ScreenshotSection from "./ScreenshotSection";
import styles from "./portfolio.module.css";
import { useEffect, useRef } from "react";
import Link from "next/link";
import VibeHeader from "/public/vibe-based-computing/vibeheader.png";

const playfairBold = Playfair_Display({
  weight: "600",
  subsets: ["latin"],
});
const playfairMed = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

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
      <div style={{ height: 30 }} />
      <h5>CASE 1</h5>
      <h1>Vibe-based Computing</h1>
      <div style={{ height: 40 }} />
      <Image
        src={VibeHeader}
        alt="A vibe computer"
        className={cs(styles.vibeheader_img, "animateOpacity")}
        width={900}
        height={362}
        placeholder="blur"
        priority
      />
      <div style={{ height: 40 }} />
      <p
        style={{
          fontSize: 31,
          marginBottom: 8,
          width: 800,
          fontFamily: "HelveticaNeue-Light",
          lineHeight: 1.45,
        }}
      >
        Vibe-based Computing is an attempt to reimagine what the internet could
        be by constructing a new primitive for online media,{" "}
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
      <div style={{ height: 100 }} />
      <Image
        alt="From walled gardens to vibes"
        src="/vibe-based-computing/paradigmshift.png"
        // style={{ marginLeft: `calc(50vw - 375px - 72px)` }}
        style={{ margin: "auto" }}
        width={750 * 1.0}
        height={147 * 1.0}
      />{" "}
      <div style={{ height: 130 }} />
      <h3>Dynamic Media Ontoloy</h3>
      {ontologySection}
      <div style={{ height: 64 }} />
      <h3>Generative UI</h3>
      <DiagramSection />
      <div style={{ height: 140 }} />
      <ScreenshotSection />
      <div style={{ height: 240 }} />
      <div className={styles.row}>
        <div className={styles.row__text}>
          <h3>Tangible Algorithms</h3>
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
        <div style={{ width: 56 }} />
        <div className={styles.col}>
          <Image
            src="/vibe-based-computing/usercontentmatrix.png"
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
            src="/vibe-based-computing/3dmatrix.png"
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
      <div style={{ height: 120 }} />
      <h2>Towards a Liberatory Internet</h2>
      <div style={{ height: 2 }} />
      <div className={styles.row}>
        <div className={styles.row__text}>
          <p>
            At it&#8217;s most basic, The Vibe is an object that can hold any
            number and any kind of digital media. People can import any account
            they have on a platform—Tik Tok, Instagram, Twitter, etc.—into a
            Vibe they own, or they can manually create one by uploading
            different pieces of media one by one. This collection of media
            becomes a standardized interface for language models to read in,
            understand, and transform their content.
          </p>
          <p>
            But at scale, The Vibe has potential to fundamentally redefine the
            relationship we have with the internet. Instead of your online
            identity being splintered across an array of walled gardens designed
            to extract maximal profit, The Vibe creates a new ecology where
            creativiy is owned by the user, and where the inherent multiplicty
            of being is reified in cyberspace.
          </p>
          <p>...a new way of being, online.</p>
        </div>
        <div style={{ width: 24 }} />
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
              Walt Whitman, Song of Myself{" "}
              <span style={{ fontSize: 20, marginTop: -2 }}>51</span>
            </span>
            <Image
              src="/vibe-based-computing/ww.jpeg"
              alt="photo of Walt Whitman"
              width={140}
              height={140}
            />
          </div>
        </div>
      </div>
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
      <h2 style={{ fontFamily: "HelveticaNeue-Medium", color: "black" }}>
        Current State of Development
      </h2>
      <div style={{ height: 4 }} />
      <div className={styles.fulltext}>
        <p>
          To date most of my work on Vibe-based Computing has been at the
          conceptual level in trying to explore the possiblities of the Vibe
          inteface from an Human-Computer Interaction lens. While there is
          plenty of work left to do there, the next phase of the project I have
          been working on lately is creating a working prototype of a Vibe-based
          Computing system that can demonstrate a proof of concept for the idea
          and serve as a foundation for a fully developed framework to release
          in the future.
        </p>
        <p>
          To this end, there are 3 major research areas I have been pursuing:
        </p>
        <p>1. Multi-modal language models</p>
        <p>2. Category theory as an ontological framework</p>
        <p>3. Privacy and data model</p>
        <div style={{ height: 12 }} />
        <h4
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
        <p>The long term deliverable is</p>
      </div>
      <div style={{ height: 24 }} />
      <Image
        src="/vibe-based-computing/rnetdark.png"
        style={{
          margin: "auto",
          filter: "drop-shadow(8px 12px 7px rgba(0,0,0,0.3))",
          borderRadius: 4,
        }}
        width={700 * 1.5}
        height={452 * 1.5}
        alt="rNet: the open protocol for Vibe-based Computing"
      />
    </div>
  );
};

export default VibeBasedComputing;
