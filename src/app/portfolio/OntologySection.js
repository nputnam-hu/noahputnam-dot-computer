import Image from "next/image";
import styles from "./portfolio.module.css";

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
      <div className={styles.row}>
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
          src="/vibe-based-computing/mediaobjects.png"
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
          src="/vibe-based-computing/destructure.png"
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
            src="/vibe-based-computing/vibelearn.png"
            alt="Media Elements, platform agnostic: Image, Video, Audio, Text"
            className={styles.inlinemedia_img}
            width={400}
            height={606}
          />
        </div>
        <div style={{ width: 56 }} />
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
