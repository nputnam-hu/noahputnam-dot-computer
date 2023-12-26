import Image from "next/image";
import cs from "classnames";
import styles from "./portfolio.module.css";
import useScrollPosition from "@react-hook/window-scroll";
import MobileParadigmShift from "/public/vibe-based-computing/paradigmshift_mobile.png";

import { Playfair_Display } from "next/font/google";
import { useEffect, useState } from "react";
const playfairBold = Playfair_Display({
  weight: "600",
  subsets: ["latin"],
});
const playfairMed = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

const SECTION_ID = "pshift";

const ParadigmShiftMobile = () => {
  const scrollY = useScrollPosition(120);
  const [sectionTop, setSectionTop] = useState();

  useEffect(() => {
    const _setOffsets = () => {
      const _sectionTop = document.getElementById(SECTION_ID).offsetTop;
      setSectionTop(_sectionTop);
    };
    _setOffsets();
    window.addEventListener("resize", _setOffsets);
    return () => window.removeEventListener("resize", _setOffsets);
  }, []);

  const textOpacity = Math.min(scrollY - sectionTop, 300) / 300;

  return (
    <div
      className={styles.mobileonly}
      style={{
        position: "relative",
        height: 868,
        width: "100%",
        paddingBottom: 60,
      }}
      id={SECTION_ID}
    >
      <Image
        priority
        alt="From walled gardens to vibes"
        src={MobileParadigmShift}
        className={cs(styles.mobileonly)}
        style={{
          height: 1000,
          width: 144,
          position: "absolute",
          // margin: "-120px auto -80px",
          left: 200,
        }}
      />
      <div
        style={{
          width: 128,
          position: "sticky",
          top: "50vh",
          marginLeft: 36,
        }}
      >
        <text
          style={{
            textAlign: "center",
            // paddingTop: 24,
            fontFamily: "Times",
            fontSize: 20,
            width: 128,
            display: "block",
            opacity: 1 - textOpacity,
            position: "absolute",
          }}
          // className={playfairMed.className}
        >
          Walled Gardens
        </text>
        <text
          style={{
            textAlign: "center",
            marginLeft: 8,
            // paddingTop: 24,
            fontFamily: "HelveticaNeue-MediumItalic",
            // fontFamily: "Times",
            fontSize: 20,
            marginTop: -2,
            marginLeft: -2,
            width: 128,
            display: "block",
            opacity: textOpacity,
            transition: "opacity 0.5 ease-out",
            position: "absolute",
            color: "#b744fe",
            // letterSpacing: 0.5,
            // fontStyle: "italic",
          }}
          // className={playfairMed.className}
        >
          Vibes
        </text>
      </div>
    </div>
  );
};

export default ParadigmShiftMobile;
