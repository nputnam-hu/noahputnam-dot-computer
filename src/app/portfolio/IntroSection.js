"use client";
import styles from "./portfolio.module.css";
import DemoVideo from "./DemoVideo";
import Image from "next/image";

import VibeGroup from "/public/vibe-based-computing/vibegroup.png";

const IntroSection = () => {
  return (
    <>
      <div className={styles.row_mobilecol}>
        <div className={styles.col}>
          <div className={styles.row__text}>
            <h2>A New Way of Being, Online</h2>
            <p className={styles.largefont} style={{ marginBottom: 8 }}>
              Vibes are everywhere online. Their form uniquely matches the pace
              and tenor of the web: continuous, social, ever-evolving. But with
              the advent of Generative AI, a “vibe” can take on new meaning in
              cyberspace.
            </p>
            <p className={styles.largefont}>
              The way generative models intuitively work is by “finding the
              vibe” of media they are prompted on, and translating it into the
              generated media they output. This metaphor lays the foundation for{" "}
              <b>The Vibe</b> as a new UI object and language that opens up
              unexplored territory for developers to build on top of these
              models. Vibe-based Computing develops a novel mode of
              Human-Computer Interaction between internet users and AI, with The
              Vibe as its central primitive.
            </p>
          </div>
        </div>
        <div style={{ width: 36 }} />
        <DemoVideo />
      </div>
      <div style={{ height: 120 }} />
      <div className={styles.row_mobilecol} style={{ marginTop: -4 }}>
        <div className={styles.row__text}>
          <h2>From Platforms to Vibes</h2>
          <p className={styles.largefont} style={{ marginBottom: 8 }}>
            At its most basic,{" "}
            <b>
              a Vibe is an object that can hold any number and any kind of
              digital content
            </b>
            . You can have a Vibe of your vacation photos, or a Vibe of
            longevity research papers, or a Vibe of all the tweets you've ever
            written. But while a Vibe begins its life with the media uploaded by
            its owner, it becomes richer in detail and sophistication over time
            as it builds a deeper understanding of its contents in concert with
            AI.
          </p>
        </div>
        <div style={{ width: 36 }} />
        <Image
          alt="A group of vibes"
          src={VibeGroup}
          className={styles.groupvibes_img}
        />
      </div>
      <div className={styles.fulltext}>
        <p className={styles.largefont}>
          Generative AI alters the physics of content on the internet. While
          before an image or a text post could only be understood by computers
          when it was crossreferenced against thousands of platform-specific
          user interactions with it, now generative models are able to build
          these kinds of semantic connections directly from the media itself.
          This means people can now search, discover, and transform digital
          media outside the confines of any walled garden.
          {/* </p>
        <p style={{ fontSize: 26.5 }}> */}{" "}
          Enter The Vibe as the core primitive for a post-platform web, defining
          a standardized interface between media curated by users and Generative
          AI.
        </p>
      </div>
    </>
  );
};

export default IntroSection;
