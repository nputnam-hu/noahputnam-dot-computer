import Image from "next/image";
import styles from "./portfolio.module.css";

const OntologySection = () => {
  return (
    <div>
      <div className={styles.fulltext}>
        <p>
          In order to implement The Vibe object, we must build a model of the
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
            inferred by AI.
          </p>
          <p>
            By conceptualizing the content we see on the internet in terms of
            distinct Media Objects, we can begin to destructure the walled
            gardens behind every platform into their constituent parts.
          </p>
          <div style={{ height: 32 }} />
          <Image
            src="/vibe-based-computing/destructure.png"
            alt="Destructuring platforms into different media objects"
            className={styles.inlinemedia_img}
            style={{ background: "white", marginLeft: -12 }}
            width={600 * 0.88}
            height={263 * 0.88}
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
      <div style={{ height: 72 }} />
      <div className={styles.row}>
        <div className={styles.row__smalltext}>
          <p>
            <b>Vibes</b> now arrive as the restructured collections of these{" "}
            Media Objects. Vibes are <em>platform transcendant</em>. They
            abstract over individual platforms in order to create a media
            primitive that is truly owned by the user.
          </p>
          <p>
            Vibes have two modalities for interacting with AI: push and pull.
            Vibes can push their Media Objects to models for analysis, and they
            can pull new Media Objects from models to add to their contents, in
            similar fashion to a recommendation algorithm filling a content
            feed.
          </p>
          <p>
            On a technical level, Vibes function as a technical standard for
            developers to build apps on top of Generative AI. In a Vibe-based
            Computing ecosystem, users can take any of the Vibes they own and
            upload it to an app which pushes and pulls its Media Objects in
            concert with different generative models. The strength of this model
            comes from the universal interface the Vibe defines by describing
            all content in terms of its constituent properties and Media
            Objects.
          </p>
        </div>
        <div style={{ width: 64 }} />

        <div className={styles.col}>
          <Image
            src="/vibe-based-computing/vibes.png"
            alt="Vibes platform transcendant, dynamic collections of Media Objects, rearrangable"
            className={styles.media_img}
            width={482}
            height={500}
            style={{ marginLeft: 16 }}
          />
        </div>
      </div>
      {/* <div style={{ height: 40 }} /> */}
      <div className={styles.row}>
        <div className={styles.row__smalltext}>
          <p>
            For example, imagine a music playlist generator that works by the
            user pushing a series of Instagram media objects to a model that
            builds an understanding of their content and then maps that
            understanding to a music model's latent space from which a list of
            songs is generated that gets pulled into a new Vibe. This app would
            let any user see what music matches the Vibe of their Instagram.
          </p>
        </div>
        <div style={{ width: 40 }} />
        <Image
          src="/vibe-based-computing/vibeperson.png"
          alt="Algorithm based off of different vibes user selects and their interaction with content"
          width={550 * 0.99}
          height={277 * 0.99}
          className={styles.media_img}
          style={{
            // marginRight: "auto",
            marginTop: -24,
            // marginBottom: "auto",
          }}
        />
      </div>
      <div style={{ height: 80 }} />
      <div className={styles.row}>
        <div className={styles.row__smalltext}>
          <p>
            object presented to the user which evolves with their interaction.
            This co-creative process between user and AI is key to a Vibe
            feeling at once intimately personal and vibrantly alive. Every Vibe
            begins its life by using AI to build an understanding of the initial
            Media Objects it is supplied, but then learns a deeper understanding
            over time from how the user engages with it.
          </p>
        </div>
        <div style={{ width: 64 }} />
        <Image
          src="/vibe-based-computing/vibelearn.png"
          alt="Media Elements, platform agnostic: Image, Video, Audio, Text"
          className={styles.media_img}
          width={400}
          height={524}
          style={{ marginTop: 24 }}
        />
      </div>
    </div>
  );
};

export default OntologySection;
