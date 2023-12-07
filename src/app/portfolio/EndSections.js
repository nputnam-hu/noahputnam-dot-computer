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
      <div className={styles.row}>
        <div className={styles.fulltext}>
          <p>
            With the rise of the modern internet, algorithms have become an
            increasingly unsavoury force in our lives. Across every platform,
            they work to predict and influence our behavior, nudging us towards
            addiction, constant emotional activation, and passive consumption.
            At the same time, platforms hide the workings of these algorithms
            away from us, submerging them beneath their interfaces to more
            easily divert our will to profit-maximizing ends.
          </p>
          <p>
            Vibe-based Computing seeks to put the user back in the driver's
            seat. The Vibe as metaphor and UI object decomposes the
            uni-algorithm of the platform into an assortment of objects, each
            owned by the user. Instead of passively doomscrolling through
            content feeds, users can . Algorithms become agentifying, providing
            power for users to direct their own experience.
          </p>
        </div>
        <div style={{ width: 56 }} />
        {/* <Image
          src="/vibe-based-computing/algodiagram.png"
          alt="Algorithm based off of user interaction with content"
          width={300 * 1.0 - 0.03}
          height={495 * 1.0 - 0.03}
          style={{
            marginRight: "auto",
            marginTop: "auto",
            // marginTop: 36,
            marginBottom: "auto",
            paddingBottom: 22,
            borderRadius: 2,
          }}
        /> */}
      </div>
      <div className={styles.row}>
        <div className={styles.row__text}>
          <p>
            This shift is deeper than just a UI update: it speaks to the
            technical foundations of how content is surfaced to us on the web.
            Today's internet platforms all generally employ content
            recommendation algorithms that operate under some variant of{" "}
            <Link
              href="https://en.wikipedia.org/wiki/Collaborative_filtering"
              target="_blank"
            >
              collaborative filtering
            </Link>{" "}
            . Collaborative filtering generates recommendations for a user by
            looking at all of the content they have engaged with in the past,
            and then cross-referencing that history across the entire database
            of user-content interactions. By finding other users who have
            engaged with the same content as the recomendee, the algorithm can
            surface new content to the recomendee that the related users have
            postively engaged with, but the recommendee has not seen yet.
          </p>
          <p>
            However, while collaborative filtering has proven to be succesful
            for incumbent platforms, it also has a number of inherent problems.
            New users face a steep cold-start problem (poor recommendations when
            there is little data to compare against), recommendations become
            stale over time (over-indexing on user history),
          </p>
          <p>Vibes introduce a third dimension to user-content matrix.</p>
        </div>
        <div style={{ width: 48 }} />
        <div
          className={styles.col}
          style={{
            marginRight: "auto",
            marginTop: "auto",
            // marginBottom: "auto",
            // paddingBottom: 22,
            // paddingTop: 44,
          }}
        >
          <Image
            src="/vibe-based-computing/usercontentmatrix.png"
            alt="Algorithm based off of user interaction with content"
            width={500 * 1.0}
            height={210 * 1.0}
          />
          <div style={{ height: 120 }} />
          <Image
            src="/vibe-based-computing/3dmatrix.png"
            alt="Algorithm based off of different vibes user selects and their interaction with content"
            width={250 * 1.0}
            height={250 * 1.0}
          />
        </div>
      </div>
      <div style={{ height: 140 }} />
      <h2>Towards a Liberatory Internet</h2>
      <div style={{ height: 2 }} />
      <div className={styles.fulltext}>
        <p>
          But at scale, The Vibe has potential to fundamentally redefine the
          relationship we have with the internet. Instead of your online
          identity being splintered across an array of walled gardens designed
          to extract maximal profit, The Vibe creates a new ecology where
          creativiy is owned by the user, and where the inherent multiplicty of
          being is reified in cyberspace.
        </p>
      </div>
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
        <div style={{ width: 52 }} />
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
