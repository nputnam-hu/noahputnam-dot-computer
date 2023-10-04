import Image from "next/image";
import styles from "./portfolio.module.css";

const OntologySection = () => {
  return (
    <div>
      <div className={styles.fulltext}>
        <p>
          In order to implement the Vibe primitive, we must build a model of the
          web flexible enough to describe all of the activity and creation that
          happens within it. To accomplish this, Vibe-based Computing defines a
          general ontology of online media:
        </p>
      </div>
      <div style={{ height: 36 }} />
      <div className={styles.row}>
        <div className={styles.row__smalltext}>
          <p>
            To begin, we define the base <b>Media Elements</b> that make up
            digital content: images, video, text, audio.
          </p>
        </div>
        <div style={{ width: 44 }} />
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
            the platform's database schema, and meta-properties that can be
            inferred by AI models.
          </p>
          <p>
            By conceptualizing the content we see on the internet in terms of
            distinct Media Objects, we can destructure the walled gardens behind
            every platform into their constituent parts.
          </p>
          <div style={{ height: 8 }} />
          <Image
            src="/vibe-based-computing/destructure.png"
            alt="Destructuring platforms into different media objects"
            className={styles.inlinemedia_img}
            style={{ background: "white" }}
            width={600 * 0.8}
            height={263 * 0.8}
          />
        </div>
        <div style={{ width: 44 }} />
        <Image
          src="/vibe-based-computing/mediaobjects.png"
          alt="Media Objects platform dependant, atomic units of multi-media content composed of Media Elements"
          className={styles.media_img}
          width={500}
          height={368}
          style={{ marginLeft: -4 }}
        />
      </div>
      <div style={{ height: 92 }} />
      <div className={styles.row}>
        <div className={styles.row__smalltext}>
          <p>
            <b>Vibes</b> now arrive as the restructured collections of these{" "}
            Media Objects. Vibes are <em>platform transcendant</em>. They
            abstract over the different closed platforms that make up the modern
            web to create a new media primitive that is truly owned by the user.
          </p>
          <p>
            Vibes have two modalities for interacting with AI models: push and
            pull. Vibes can <em>push</em> their media objects to AI models for
            analysis, and they can <em>pull</em> new media objects from AI
            models to add to their contents, in similar fashion to a
            recommendation algorithm filling a content feed. Some interactions
            could incorporate both modalities at the same time, e.g. a music
            playlist generator where the user pushes a series of Instagram media
            objects to a model which reads in their content to generate a list
            of song media objects that get pulled into a new Vibe.
          </p>
          <p>
            The co-creative process between user and AI is key to a Vibe feeling
            at once intimately personal and vibrantly alive. Every Vibe begins
            its life by building an understanding of the initial media it is
            supplied, but then evolves over time as the user modifies and
            interacts with it.
          </p>
          <div style={{ height: 16 }} />
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
