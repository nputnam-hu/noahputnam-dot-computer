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

  const textOpacity = Math.min(scrollY - sectionTop, 400) / 400;

  return (
    <div
      className={cs(styles.mobileonly, styles.col)}
      style={{
        width: "100%",
        paddingBottom: 20,
        alignItems: "center",
        display: "flex",
        width: "100%",
        marginBottom: -100,
      }}
      id={SECTION_ID}
    >
      <text
        style={{
          textAlign: "center",
          // paddingTop: 24,
          fontFamily: "Times",
          fontSize: 28,
          marginBottom: 48,
          marginLeft: -12,
        }}
        // className={playfairMed.className}
      >
        Walled Gardens
      </text>
      <Image
        priority
        alt="From walled gardens to vibes"
        src={MobileParadigmShift}
        className={cs(styles.mobileonly)}
        style={{
          height: "auto",
          width: 187,
          // margin: "-120px auto -80px",
        }}
      />
      <text
        style={{
          textAlign: "center",
          marginLeft: 8,
          paddingTop: 48,
          fontFamily: "HelveticaNeue-MediumItalic",
          // fontFamily: "Times",
          fontSize: 28,
          marginTop: -2,
          marginLeft: -2,
          width: 128,
          display: "block",
          opacity: textOpacity,
          transition: "opacity 0.5 ease-out",
          color: "#b744fe",
          // letterSpacing: 0.5,
          // fontStyle: "italic",
        }}
        // className={playfairMed.className}
      >
        Vibes
      </text>
    </div>
  );
};

export default ParadigmShiftMobile;
