import Image from "next/image";
import cs from "classnames";
import { Playfair_Display } from "next/font/google";

import VibeHeader from "/public/vibe-based-computing/vibeheader.png";
import styles from "./portfolio.module.css";

const playfairBold = Playfair_Display({
  weight: "600",
  subsets: ["latin"],
});
const playfairMed = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

const IntroSection = () => {
  return (
    <>
      <h5>CASE 1</h5>
      <h2>Vibe-based Computing</h2>
      <div style={{ height: 48 }} />
      <Image
        src={VibeHeader}
        alt="A vibe computer"
        className={cs(styles.vibeheader_img, "animateOpacity")}
        width={900}
        height={376}
        placeholder="blur"
        priority
      />
      <div style={{ height: 36 }} />
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
              src="/vibe-based-computing/ww.jpeg"
              alt="photo of Walt Whitman"
              width={140}
              height={140}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroSection;
