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

  const switchText = scrollY > sectionTop - 100;

  console.log({ scrollY, sectionTop });

  return (
    <div
      className={styles.mobileonly}
      style={{
        position: "relative",
        height: 912,
        width: "100%",
        paddingBottom: 0,
      }}
      id={SECTION_ID}
    >
      <Image
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
          width: 144,
          position: "sticky",
          top: "80vh",
          marginLeft: 8,
        }}
      >
        <text
          style={{
            textAlign: "center",
            // paddingTop: 24,
            fontFamily: "Times",
            fontSize: 18,
            width: 144,
            display: "block",
            opacity: switchText ? 0 : 1,
            transition: "opacity 0.5s",
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
            fontFamily: "HelveticaNeue",
            // fontFamily: "Times",
            fontSize: 20,
            marginTop: -2,
            width: 144,
            display: "block",
            opacity: switchText ? 1 : 0,
            transition: "opacity 0.5 ease-out",
            position: "absolute",
            color: "#b744fe",
            // letterSpacing: 0.5,
            fontStyle: "italic",
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
