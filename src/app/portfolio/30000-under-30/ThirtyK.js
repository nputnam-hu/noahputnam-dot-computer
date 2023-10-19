"use client";
import cs from "classnames";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import ThirtykHeader from "/public/30000-under-30/30kheader.png";

import styles from "../portfolio.module.css";

const ThirtyK = ({ serverComponents: { introSection } }) => {
  const prevbg = useRef(
    typeof window !== "undefined" && localStorage.getItem("prevbg")
  ).current;
  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("prevbg", "dark");
    }, 200);
  }, []);
  // console.log("prevbg.current", prevbg.current);
  const wasLightmode = prevbg === "light";

  return (
    <div
      className={cs(
        styles.content,
        wasLightmode ? "animatedDarkBg" : styles.dark
      )}
    >
      <div style={{ height: 108 }} />
      <div style={{ paddingLeft: 52 }}>
        <h5>CASE 2</h5>
        <h1>30000 under 30</h1>
        <div style={{ height: "5vh" }} />
      </div>
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
      <div style={{ height: "5.5vh" }} />
      <div style={{ paddingLeft: 52 }}>
        <p
          style={{
            fontSize: 30,
            marginBottom: 8,
            width: 820,
            fontFamily: "HelveticaNeue-Light",
            lineHeight: 1.45,
          }}
        >
          Case study coming soon
        </p>
      </div>
      {/* {introSection} */}
      <div style={{ height: "100vh" }} />
    </div>
  );
};

export default ThirtyK;
