const { default: Link } = require("next/link");
const { default: DemoVideo } = require("./DemoVideo");
import styles from "./portfolio.module.css";

const EngineSection = () => {
  return (
    <div>
      <div className={styles.row}>
        <div className={styles.row__text}>
          <p>
            Generative models break down the traditional boundaries between
            content on the web. They translate fluidly between different
            mediums: text becomes image, image becomes music, music becomes
            video, and video transmute back to text. This capability provides
            the foundation for the Vibe as a computational object.
          </p>
          <p>
            The most straightforward app built on top of a Vibe is an image
            studio that given a selected Vibe applies techniques like{" "}
            <Link href="https://huggingface.co/blog/lora" target="_blank">
              LoRA
            </Link>{" "}
            to extract the underlying style of images in that Vibe. This lets
            users generate and remix images in different aesthetics depending on
            the Vibe that is plugged into the app. And with the development of
            multimodal models, over time AI will be able to infer implicit
            properties like style and mood from not just images but all forms of
            media, unlocking the ability to use any of your Vibes for this
            function.
          </p>
          <p>
            As we apply Vibes to more complex arrangements of models, use cases
            emerge beyond simple content creation. For example, consider a
            series of generative models each fed the same Vibe as an input where
            the first model generates a color scheme, the next generates a
            typography pairing, and so on for all of the components of a design
            system. This constitutes an AI-powered theming engine that a user
            composes a Vibe with to generate the design for a personalized web
            page. Now imagine how this technique can be generalized to other
            forms of artistic creation: a playlist generated from an Instagram
            account, a movie generated from a moodboard. The potential is
            limitless.
          </p>
          <p></p>
        </div>
        <div style={{ width: 44 }} />
        <div className={styles.videowrapper}>{/* <DemoVideo /> */}</div>
      </div>
    </div>
  );
};

export default EngineSection;
