"use client";
import Image from "next/image";
import cs from "classnames";

import DemoVideo from "./DemoVideo";
import DiagramSection from "./DiagramSection";
import ScreenshotSection from "./ScreenshotSection";
import styles from "./portfolio.module.css";
import { useEffect, useRef } from "react";

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
            to imagine a new internet. My goal with Vibe-based computing is to
            imagine a new internet. My goal with Vibe-based computing is to
            imagine a new internet
          </p>
          <p>My goal with Vibe-based computing is to imagine a new internet</p>
        </div>
        <div style={{ width: 56 }} />
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
      <div style={{ height: 48 }} />
      <Image
        alt="From walled gardens to vibes"
        src="/vibe-based-computing/paradigmshift.png"
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
      <div style={{ height: 72 }} />
      <h4>A New Way of Being, Online</h4>
      <div className={styles.fulltext}>
        <p>
          Vibe-based computing is a new paradigm for the internet that breaks
          apart the homogenous acknowledges the multiplicities inherent in how
          we interact with the internet. My goal with Vibe-based computing is to
          imagine a new internet
        </p>
      </div>
      <div style={{ height: 100 }} />
    </div>
  );
};

export default VibeBasedComputing;
