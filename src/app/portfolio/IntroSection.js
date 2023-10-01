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
      <div className={styles.fulltext} style={{}}>
        <p style={{ fontSize: 24, lineHeight: 1.35 }}>
          <span
            style={{
              // color: "#B744FE",
              fontFamily: "HelveticaNeue-Medium",
              // fontStyle: "italic",
            }}
          >
            Vibe-based Computing
          </span>{" "}
          is an attempt to reimagine what the internet <br />
          can be by constructing a new primitive for online media,{" "}
          <span
            style={{
              // color: "#B744FE",
              fontFamily: "HelveticaNeue",
              // fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            “The Vibe”
          </span>
          .
        </p>
        <p style={{ fontSize: 24, lineHeight: 1.3 }}>
          Vibes are everywhere on the web. Most of the platforms we spend our
          time on are at their core about vibe curation: Pinterest boards,
          Instagram accounts, Spotify playlists, etc. rest on the idea of a
          unifying mood or theme between their content. The language of vibes
          has proliferated alongside the rise of the internet. Unlike the linear
          television episode or fixed music album, vibes match the pace and
          tenor of cyberspace: continuous, social, ever-evolving.
        </p>
        <p style={{ fontSize: 24 }}>
          But with the rise of large language models (LLMs), the idea of a vibe
          itself can now be condensed into a representation in data, as a
          permutation of weights within a language model’s latent space. LLMs
          operate on vibes, fine-tuning on rows of data to calculate where they
          cluster in concept-space, mapping the essence of a text prompt to its
          corresponding manifestation as an image. Vibe-based Computing makes
          this process legible to the user by introducing The Vibe as a new
          organizing metaphor for people to understand and interact with these
          language models.
        </p>
      </div>
      <div style={{ height: 60 }} />
      <h3>An Intuitive Interface for AI</h3>
      <div className={styles.row}>
        <div className={styles.row__text}>
          <p>
            At it&#8217;s most basic, a Vibe is an object that can hold any
            number and any kind of digital media. People can import an account
            they have on a platform into a Vibe they own, or they can manually
            create one by uploading individual content piece by piece. While
            this construction may seem trivial, a Vibe animates into something
            far more powerful through its relationship with next-gen AI models.
          </p>
          <p>
            The disruptive potential of LLMs lies in their ability to create a
            semantic understanding of media directly from its content. While
            before an image or a text post only meant something to a computer
            when crossreferenced against thousands of user interactions with it,
            now language models can build these connections with a single API
            call. This means users no longer have to share their data with
            corporate-controlled platforms for it to be made useful to them.
            Through The Vibe, a collection of media curated by a user becomes a
            standardized interface for language models to read in, understand,
            and transform its contents.
          </p>
        </div>
        <div style={{ width: 36 }} />
        <Image
          alt="A group of vibes"
          src="/vibe-based-computing/vibegroup.png"
          // style={{ marginLeft: `calc(50vw - 375px - 72px)` }}
          style={{ marginRight: "auto", marginBottom: "auto", marginTop: 16 }}
          width={400 * 1.15}
          height={294 * 1.15}
        />
      </div>
    </>
  );
};

export default IntroSection;
