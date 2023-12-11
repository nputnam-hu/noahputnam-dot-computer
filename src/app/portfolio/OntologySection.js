import Image from "next/image";
import Link from "next/link";
import styles from "./portfolio.module.css";

const OntologySection = () => {
  return (
    <div>
      <div className={styles.fulltext}>
        <p>
          In order to implement The Vibe, we must build a model of the web
          flexible enough to describe all of the activity and creation that
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
          width={500 * 0.95}
          height={206 * 0.95}
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
            the platform's database schema, and abstract meta-properties that
            can be inferred by AI.
          </p>
          <p>
            By conceptualizing the content we see on the internet in terms of
            distinct Media Objects, we can begin to destructure the walled
            gardens behind every platform into their constituent parts.
          </p>
          <div style={{ height: 24 }} />
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
            Media Objects. Vibes are <em>platform transcendent</em>. All forms
            of internet content—Tik Tok videos, Pintrest boards, Spotify
            playlists, etc.—are assimilated into the universtal interface The
            Vibe defines.
          </p>
          <p>
            Vibes play a dual role in computer applications: a) as a UI object
            for users to consume, curate, and share media, and b) as a technical
            standard for developers to connect users' media with AI.
          </p>
          <p>
            Vibes have two modalities for interacting with AI models: push and
            pull. Vibes can <em>push</em> their Media Objects to a model for
            analysis, and they can <em>pull</em> new Media Objects from a model
            to add to their contents, in similar fashion to a recommendation
            algorithm filling a content feed. In a Vibe-based Computing
            ecosystem, users can take any Vibe they own and upload it to an app
            that interfaces with AI to understand and transform its contents.
          </p>
        </div>
        <div style={{ width: 32 }} />
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
      {/* <div style={{ height: 12 }} /> */}
      <div className={styles.row}>
        <div className={styles.row__smalltext}>
          <p>
            A basic example of an app built on top of a Vibe is an image studio
            that, given a selected Vibe, applies techniques like{" "}
            <Link href="https://huggingface.co/blog/lora" target="_blank">
              LoRA
            </Link>{" "}
            to extract the underlying style of the images in its Media Objects.
            This would let users generate and remix images in different
            aesthetics depending on the Vibe that is plugged into the app. And
            with the development of multimodal models, over time AI will be able
            to infer implicit properties like style and mood from not just
            images but all forms of media, unlocking the ability to use any of
            your Vibes for this kind of function.
          </p>
          <p>
            As we apply Vibes to more complex arrangements of models, use cases
            emerge beyond simple content creation. For example, imagine a series
            of generative models each fed the same Vibe as an input where the
            first model generates a color scheme, the next a typography pairing,
            and so on for all of the components of a design system. This
            constitutes an AI-powered theming engine that a user composes a Vibe
            with to generate the design for a personalized web page.
          </p>
        </div>
        <div style={{ width: 24 }} />
        <Image
          src="/vibe-based-computing/vibeperson.png"
          alt="Algorithm based off of different vibes user selects and their interaction with content"
          width={550 * 1.05}
          height={262 * 1.05}
          className={styles.media_img}
          style={{
            // marginRight: "auto",
            marginBottom: "auto",
            marginTop: "auto",
          }}
        />
      </div>
      {/* <div style={{ height: 80 }} /> */}
      <div className={styles.row}>
        <div className={styles.row__smalltext}>
          <p>
            Vibes are objects that “think fast and slow”. When a Vibe is
            created, generative models are employed to define content-specific
            meta-properties on each of its Media Objects, creating a semantic
            understanding of the content that can be harnessed by app
            developers. But then as a user interacts with a Vibe, bespoke models
            and heuristic algorithms can be used to also write more
            context-specific meta-properties to it. That contextual
            understanding can be used to change both the function of the Vibe in
            an app UX, and the form of the Vibe as new Media Objects are pulled
            into it.
          </p>
          {/* <p>
            This
            co-creative process between user and AI in constructing a Vibe is
            key to the object feeling at once intimately personal and vibrantly
            alive.
          </p> */}
          {/* <p>
            You can think of a Vibe as almost like a{" "}
            <Link
              href="https://en.wikipedia.org/wiki/Tamagotchi"
              target="_blank"
            >
              Tamagotchi
            </Link>{" "}
            for online media. Each one starts out as a blank slate but then, in
            the co-creative process between user interaction and AI inference,
            quickly begins to take on its own unique shape and character. What
            results is a media primitive that feels at once intimately personal
            and vibrantly alive.
          </p> */}
        </div>
        <div style={{ width: 64 }} />
        <Image
          src="/vibe-based-computing/vibelearn.png"
          alt="Media Elements, platform agnostic: Image, Video, Audio, Text"
          className={styles.media_img}
          width={400}
          height={524}
          style={{
            marginTop: 32,
            marginBottom: "auto",
          }}
        />
      </div>
    </div>
  );
};

export default OntologySection;
