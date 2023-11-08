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
        <div className={styles.fulltext} style={{ width: 750 }}>
          <p>
            Algorithms on the modern internet have become an increasingly
            negative force in our lives. Across every platform, they predict and
            influence our behavior, nudging us towards addiction, constant
            emotional activation, and passive consumption. Content is
            recommended not by what is best for our wellbeing or what we “want”
            at a deeper level, but instead by what will be the most
            attention-absorbing in the moment. Meanwhile, platforms hide the
            workings of these algorithms from us, submerging them beneath their
            interface to more easily divert our will to profit-maximizing ends.
          </p>
          <p>
            Vibe-based Computing seeks to put the user back in the driver's
            seat. The Vibe as metaphor and UI object gives tangible form to the
            algorithm, reshaping its spectral presence into a more familiar
            rhythm. The uni-algorithm of the platform is decomposed into an
            assortment of objects, each owned by the user. Users shape the
            evolutionary direction of the Vibes they interact with, adding and
            removing content, merging Vibes, seeding new Vibes. Algorithms
            become agentifying, providing power for the users to direct their
            own experience.
            {/* At different
            moments, users decide which pieces of themselves to call forth when
            they set their system to a particular Vibe. */}
            {/* Vibes decompose the uni-algorithm of the platform into
            different parts, each owned by the user. */}
          </p>
        </div>
        <div style={{ width: 56 }} />
        <Image
          src="/vibe-based-computing/w2v.png"
          alt="Algorithm based off of user interaction with content"
          width={300 * 1}
          height={489 * 1}
          style={{
            marginRight: "auto",
            // marginTop: "auto",
            marginTop: 20,
            // margin: "auto",
            marginBottom: "auto",
          }}
        />
      </div>
      <div className={styles.row}>
        <div className={styles.row__text}>
          <p>
            Vibe-based computing is a new paradigm for the internet that breaks
            apart the homogenous acknowledges the multiplicities inherent in how
            we interact with the internet. My goal with Vibe-based computing is
            to imagine a new internet My goal with Vibe-based computing is to
            imagine a new internet
          </p>
          <p>
            Vibe-based computing is a new paradigm for the internet that breaks
            apart the homogenous acknowledges the multiplicities inherent in how
            we interact with the internet. My goal with Vibe-based computing is
            to imagine a new internet My goal with Vibe-based computing is to
            imagine a new internet
          </p>
        </div>
        <div style={{ width: 56 }} />
        <div className={styles.col}>
          {/* <div style={{ height: 80 }} />
          <Image
            src="/vibe-based-computing/3dmatrix.png"
            alt="Algorithm based off of different vibes user selects and their interaction with content"
            width={250}
            height={250}
            style={{
              marginRight: "auto",
              // marginTop: "auto",
              // marginBottom: "auto",
            }}
          /> */}
        </div>
      </div>
      <div style={{ height: 140 }} />
      {/* <div
        style={{
          margin: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <blockquote
          style={{
            fontSize: 64,
            // fontStyle: "italic",
            fontFamily: "HelveticaNeue-Italic",
            marginRight: "auto",
            marginTop: 20,
            marginBottom: 10,
            marginLeft: 0,
            // marginBottom: "auto",
            marginBlockEnd: 0,
            marginBlockStart: 0,
            marginBlock: 0,
            lineHeight: 1.3,
            width: "80vw",
          }}
          // className={playfairMed.className}
        >
          “The web is more a social creation
          <br />
          than a technical one”
        </blockquote>
        <div
          className={styles.row}
          style={{
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontSize: 36,
              // fontStyle: "italic",
              fontFamily: "HelveticaNeue",
              padding: 0,
            }}
            // className={playfairBold.className}
          >
            Tim-Berners Lee
          </span>
          <Image
            src="/vibe-based-computing/tbl.jpeg"
            alt="photo of Tim Berners-Lee"
            width={1200 * 0.55}
            height={630 * 0.55}
            style={{ marginTop: 16, borderRadius: 4 }}
          />
        </div>
        <div style={{ width: 6 }} />
      </div> */}
      {/* <div style={{ height: 80 }} /> */}
      <h2>Towards a Liberatory Internet</h2>
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
        <div style={{ width: 48 }} />
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
