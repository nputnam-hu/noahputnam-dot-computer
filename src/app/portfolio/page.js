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
import Topbar from "./Topbar";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Sidebar from "./Sidebar";
import DiagramSection from "./DiagramSection";
import ScreenshotSection from "./ScreenshotSection";
import DemoVideo from "./DemoVideo";

const playfairBold = Playfair_Display({
  weight: "600",
  subsets: ["latin"],
});
const playfairMed = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

const OntologySection = () => {
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

  return (
    <main className={styles.main}>
      <Topbar />
      <div className={styles.row} style={{ position: "absolute" }}>
        <Sidebar pathname={pathname} />
        <div style={{ width: 16 }} />
        <div className={styles.content}>
          {/* <h1>Noah Putnam Portfolio</h1> */}
          <div style={{ height: 72 }} />
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
          <OntologySection />
          <div style={{ height: 80 }} />
          <h3>Generative UI</h3>
          <DiagramSection scrollY={scrollY} windowHeight={windowHeight} />
          <div style={{ height: 140 }} />
          <ScreenshotSection scrollY={scrollY} />
          <div style={{ height: 180 }} />
          <h3
            style={{
              fontSize: 40,
              marginLeft: -2,
            }}
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
