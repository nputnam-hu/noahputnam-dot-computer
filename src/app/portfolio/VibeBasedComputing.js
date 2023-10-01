"use client";
import Image from "next/image";
import cs from "classnames";
import { Playfair_Display } from "next/font/google";

import DemoVideo from "./DemoVideo";
import DiagramSection from "./DiagramSection";
import ScreenshotSection from "./ScreenshotSection";
import styles from "./portfolio.module.css";
import { useEffect, useRef } from "react";

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
      <div style={{ height: 72 }} />
      {introSection}
      <div style={{ height: 120 }} />
      <h3>Omnidirectional Media Engine</h3>
      <div className={styles.row}>
        <div className={styles.row__text}>
          <p>
            LLMs break down the traditional boundaries between content on the
            web. They can translate fluidly between different forms of media:
            text becomes image, image becomes music, music becomes video, and
            video transmute back to text. This capability provides the
            foundation for the Vibe as a computational object.
          </p>
          <p></p>
          <p>
            As we apply Vibes to more complex arrangements of models, powerful
            use cases begin to emerge. For example, consider a series of
            language models each fed the same Vibe as an input where the first
            model generates a color scheme, the next generates a typography
            pairing, and so on for all of the components of a design system.
            This constitutes an AI-powered theming engine that a user composes a
            Vibe with to generate the design for a personalized web page. This
            technique can be generalized to other forms of artistic creation: a
            playlist generated from an Instagram account, a movie generated from
            a moodboard. The potential is limitless.
          </p>
          <p></p>
        </div>
        <div style={{ width: 44 }} />
        <div className={styles.videowrapper}>
          <DemoVideo />
        </div>
      </div>
      <div style={{ height: 140 }} />
      <h3>Dynamic Media Ontoloy</h3>
      {ontologySection}
      <div style={{ height: 80 }} />
      <h3>Generative UI</h3>
      <DiagramSection />
      <div style={{ height: 140 }} />
      <ScreenshotSection />
      <div style={{ height: 180 }} />
      <h3
        style={{
          fontSize: 40,
          marginLeft: -2,
        }}
      >
        The Paradigm Shift
      </h3>
      <div style={{ height: 36 }} />
      <Image
        alt="From walled gardens to vibes"
        src="/vibe-based-computing/paradigmshift.png"
        // style={{ marginLeft: `calc(50vw - 375px - 72px)` }}
        style={{ margin: "auto" }}
        width={750 * 1.1}
        height={147 * 1.1}
      />
      <div style={{ height: 80 }} />
      <div className={styles.row}>
        <div className={styles.row__text}>
          <h4>Aligned Algorithms</h4>
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
      <div style={{ height: 72 }} />
      <div className={styles.row}>
        <div className={styles.row__text}>
          <h4>Personalized, Private, Permissionless.</h4>
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
        <Image
          src="/vibe-based-computing/vibeperson.png"
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
      <div style={{ height: 80 }} />
      {/* <Image
        alt="From walled gardens to vibes"
        src="/vibe-based-computing/paradigmshift.png"
        // style={{ marginLeft: `calc(50vw - 375px - 72px)` }}
        style={{
          margin: "auto",
          // marginRight: "auto",
          paddingRight: "calc(210px - 7vw)",
        }}
        width={750 * 1.1}
        height={147 * 1.1}
      />
      <div style={{ height: 72 }} /> */}
      <h3 style={{}}>A New Way of Being, Online</h3>
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
      <p style={{ fontFamily: "HelveticaNeue-Medium" }}>
        Current State of Development
      </p>
      <div className={styles.fulltext}>
        <p>
          At it&#8217;s most basic, The Vibe primitive is an object that can
          hold any number and any kind of digital media. People can import any
          account they have on a platform—Tik Tok, Instagram, Twitter, etc.—into
          a Vibe they own, or they can manually create one by uploading
          different pieces of media one by one. This collection of media becomes
          a standardized interface for language models to read in, understand,
          and transform their content.
        </p>
        <p>
          But at scale, The Vibe has potential to fundamentally redefine the
          relationship we have with the internet. Instead of your online
          identity being splintered across an array of walled gardens designed
          to extract maximum profit for you, The Vibe creates a new ecology
          where creativiy is owned by the user, and where the inherent
          multiplicty of being is reified in cyberspace.
        </p>
      </div>
    </div>
  );
};

export default VibeBasedComputing;
