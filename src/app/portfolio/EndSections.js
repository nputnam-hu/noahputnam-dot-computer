import Image from "next/image";
import styles from "./portfolio.module.css";
import { Playfair_Display } from "next/font/google";

const playfairBold = Playfair_Display({
  weight: "600",
  subsets: ["latin"],
});
const playfairMed = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

const EndSection = () => {
  return (
    <>
      <h3>Tangible Algorithms</h3>
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
      <h3>Towards a Liberatory Internet</h3>
      <div style={{ height: 2 }} />
      <div className={styles.row}>
        <div className={styles.row__text}>
          <p>
            But at scale, The Vibe has potential to fundamentally redefine the
            relationship we have with the internet. Instead of your online
            identity being splintered across an array of walled gardens designed
            to extract maximal profit, The Vibe creates a new ecology where
            creativiy is owned by the user, and where the inherent multiplicty
            of being is reified in cyberspace.
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
    </>
  );
};

export default EndSection;
