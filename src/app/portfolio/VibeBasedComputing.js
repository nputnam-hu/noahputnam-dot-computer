"use client";
import Image from "next/image";

import DemoVideo from "./DemoVideo";
import DiagramSection from "./DiagramSection";
import ScreenshotSection from "./ScreenshotSection";
import styles from "./portfolio.module.css";

const VibeBasedComputing = ({
  serverComponents: { introSection, ontologySection },
}) => {
  return (
    <div className={styles.content}>
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
