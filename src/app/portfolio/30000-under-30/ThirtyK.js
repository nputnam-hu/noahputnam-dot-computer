"use client";
import cs from "classnames";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

import styles from "../portfolio.module.css";

const ThirtyK = ({ serverComponents: { introSection } }) => {
  const prevbg = useRef(localStorage.getItem("prevbg")).current;
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
      <div style={{ height: 72 }} />
      {introSection}
      <div style={{ height: "100vh" }} />
    </div>
  );
};

export default ThirtyK;
