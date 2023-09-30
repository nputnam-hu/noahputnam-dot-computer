import Image from "next/image";
import styles from "./portfolio.module.css";

const OntologySection = () => {
  return (
    <div>
      <div className={styles.fulltext}>
        <p>
          In order to implement Vibe-based Computing, we must build an
          understanding of the web flexible enough to describe all of the
          activity and creation that occurs within it. To accomplish this, we
          define a general ontology of digital media:
        </p>
      </div>
      <div style={{ height: 36 }} />
      <div className={styles.row}>
        <div className={styles.row__smalltext}>
          <p>
            We start by defining the base <b>Media Elements</b> that make up
            digital content: images, video, text, and audio.
          </p>
        </div>
        <div style={{ width: 56 }} />
        <Image
          src="/vibe-based-computing/mediaelements.png"
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
      <div style={{ height: 92 }} />
      <div className={styles.row}>
        <div className={styles.row__smalltext}>
          <p>
            Next we define <b>Media Objects</b> as the core units of different
            platforms on the web. Media Objects consist of a group of Media
            Elements, alongside a set of static properties that are defined by
            the platform's database model, and meta-properties that can be
            inferred by AI models.
          </p>
        </div>
        <div style={{ width: 56 }} />
        <Image
          src="/vibe-based-computing/mediaobjects.png"
          alt="Media Objects platform dependant, atomic units of multi-media content composed of Media Elements"
          className={styles.media_img}
          width={508}
          height={367}
          style={{ marginLeft: -8 }}
        />
      </div>
      <div style={{ height: 92 }} />
      <div className={styles.row}>
        <div className={styles.row__smalltext}>
          <p>
            By thinking of digital media in terms of distinct Media Objects, we
            can destructure the walled gardens behind every platform into their
            constituent parts, and begin to return control over their content to
            the user.
          </p>
        </div>
        <div style={{ width: 32 }} />
        <Image
          src="/vibe-based-computing/destructure.png"
          alt="Destructuring platforms into different media objects"
          className={styles.media_img}
          style={{ background: "white" }}
          width={600}
          height={263}
        />
      </div>
      <div style={{ height: 92 }} />
      <div className={styles.row}>
        <div className={styles.row__smalltext}>
          <p>
            <b>Vibes</b> now arrive as the restructured collections of these{" "}
            Media Objects.
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
            src="/vibe-based-computing/vibelearn.png"
            alt="Media Elements, platform agnostic: Image, Video, Audio, Text"
            className={styles.inlinemedia_img}
            width={400}
            height={606}
          />
        </div>
        <div style={{ width: 44 }} />
        <Image
          src="/vibe-based-computing/vibes.png"
          alt="Vibes platform transcendant, dynamic collections of Media Objects, rearrangable"
          className={styles.media_img}
          width={482}
          height={500}
        />
      </div>
    </div>
  );
};

export default OntologySection;
