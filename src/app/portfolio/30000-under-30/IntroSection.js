import Image from "next/image";
import cs from "classnames";

import ThirtykHeader from "/public/30000-under-30/30kheader.png";
import styles from "../portfolio.module.css";

const IntroSection = () => {
  return (
    <>
      <h5>CASE 2</h5>
      <h2>30000 under 30</h2>
      <div style={{ height: 36 }} />
      <Image
        src={ThirtykHeader}
        alt="Adam Lukasik #8 | A year ago, nobody had heard of Adam Lukasik; now, you hear his name and instantly think of his breakthrough tech company sometimes called the large hadron collider for cupcake making. He's the founder of Treatbot, which has raised $5.5 million and is backed by Andreessen Horowitz. It's a robotic arm that lets you bake cupcakes at home."
        className={cs(styles.vibeheader_img, "animateOpacity")}
        style={{ border: "1px solid rgba(255,255,255, 0.33)", borderRadius: 2 }}
        width={900 * 0.9}
        height={540 * 0.9}
        placeholder="blur"
        priority
      />
      <div style={{ height: 48 }} />
      <div className={styles.row}>
        <div className={styles.row__text}>
          <p>Case study coming soon</p>
          {/* <p>
            30000 under 30 was an AI prank me and a couple of friends built to
            satirize the Forbes 30 under 30 list. We launched the site on April
            1, 2021
          </p> */}
        </div>
        <div style={{ width: 56 }} />
      </div>
    </>
  );
};

export default IntroSection;
