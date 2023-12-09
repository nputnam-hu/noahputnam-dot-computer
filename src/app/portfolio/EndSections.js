import Image from "next/image";
import styles from "./portfolio.module.css";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";

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
      <div className={styles.fulltext}>
        <p>
          Across every platform on the modern web, algorithms are constantly
          working to predict and influence our behavior. They nudge us towards
          addiction, emotional activation, and passive consumption. And at the
          same time, platforms hide the workings of these algorithms away from
          us, submerging them beneath their UI to more easily divert our will
          towards profit-maximizing ends.
        </p>
        <p>
          Vibe-based Computing seeks to put the user back in the driver's seat.
          The Vibe as metaphor and UI object decomposes the opaque uni-algorithm
          of the platform into a collection of friendly, intuitive objects owned
          by the user. Algorithms become agentifying, providing power for users
          to direct their own experience.
        </p>
      </div>
      <div className={styles.row}>
        <div className={styles.row__text}>
          <p>
            Take the previous example of a music app built on top of Vibes.
            Users can split their music listening between many of these Vibes:
            one Vibe for lo fi study music and one for 2000s hip hop, one for
            Friday night pregames and another for Saturday morning hangovers.
            The user is placed in control of the algorithm and can differentiate
            the ways they want to access their content.
          </p>
          <p>
            If a Vibe’s recommendations become stale the user can reset its
            parameters or discard the Vibe altogether to start fresh. And like
            all Vibes in a Vibe-based Computing ecosystem, the created music
            Vibes are natively shareable with other people, letting users borrow
            and swap algorithms with each other.
          </p>
        </div>
        <div style={{ width: 48 }} />
        <Image
          src="/vibe-based-computing/tangiblealgos.jpeg"
          alt="Algorithm based off of user interaction with content"
          width={500 * 1.05}
          height={398 * 1.05}
          style={{
            marginRight: "auto",
            marginTop: "auto",
            // marginTop: 24,
            marginBottom: "auto",
            // paddingBottom: 22,
            borderRadius: 4,
          }}
        />
      </div>
      <div style={{ height: 140 }} />
      <h2>Towards a Liberatory Internet</h2>
      <div style={{ height: 2 }} />
      <div className={styles.fulltext}>
        <p>
          All revolutions in computing rely on new organizing metaphors to make
          their capabilities accessible to a nontechnical audience: x86 had the
          desktop, the internet had the browser, smartphones had the app. Vibes
          represent the next stage in that evolution. In a world of monopoly
          platforms and surveillance capitalism, Vibes promise to return the web
          to an era of truly personal computing.
        </p>
      </div>
      <div className={styles.row}>
        <div className={styles.row__text}>
          <p>
            In this new internet, users shape the emergent direction of the
            Vibes they interact with, adding and removing content, merging
            Vibes, seeding new Vibes, connecting with others.
          </p>
          <p>
            Vibes layer on top of the ordered, simplified representations of
            other people as a collection of ideas and labels that characterize
            the modern internet. They provide a glimpse of the full multiplicity
            of being behind each person’s otherwise constrained and channeled
            online persona and create a new media ecology where creativity is
            owned by the user.
          </p>
          <p>...a new way of being, online.</p>
        </div>
        <div style={{ width: 52 }} />

        <div className={styles.row__quote} style={{ marginTop: 8 }}>
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
              width={132}
              height={132}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EndSection;
