"use client";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import cs from "classnames";
import styles from "./portfolio.module.css";
import { useRef } from "react";

const Sidebar = ({ dark = false }) => {
  const prevbg = useRef(
    typeof window !== "undefined" && localStorage.getItem("prevbg")
  ).current;
  const wasLightmode = prevbg === "light";
  const wasDarkmode = prevbg === "dark";
  const pathname = usePathname();

  return (
    <>
      <h4
        style={{
          position: "absolute",
          left: 18,
          top: 16,
          fontSize: 18,
          fontWeight: "800",
          fontFamily: "HelveticaNeue-Medium",
          color: dark ? "#ddd" : "#1d1d1d",
          zIndex: 1,
        }}
      >
        PORTFOLIO
      </h4>
      {/* <div style={{height: 20}} /> */}
      <div
        className={cs(
          styles.sidebar,
          dark && (wasLightmode ? "animatedDarkBg" : styles.dark),
          !dark && wasDarkmode && "animatedWhiteBg"
        )}
        style={{
          paddingTop: 36,
          top: -16,
          position: "sticky",
          // height: "calc(100vh - 200px)",
        }}
      >
        {/* <div style={{ height: 8 }} /> */}
        {/* <div
            style={{
              height: 1.75,
              background: "#222",
              width: 89,
              marginTop: -1.5,
            }}
          /> */}
        <div style={{ height: 6 }} />
        <Link
          className={cs(
            styles.sidebar__link,
            pathname === "/portfolio" && styles.active,
            dark && styles.dark
          )}
          href={{
            pathname: "/portfolio",
          }}
        >
          <u>Vibe-based Computing</u>
        </Link>
        <Link
          className={cs(
            styles.sidebar__link,
            pathname === "/portfolio/30000-under-30" && styles.active,
            dark && styles.dark
          )}
          href={{
            pathname: "/portfolio/30000-under-30",
          }}
        >
          <u>30000 under 30</u>
        </Link>
        <Link
          className={cs(
            styles.sidebar__link,
            pathname === "/portfolio/e-conomy" && styles.active,
            dark && styles.dark
          )}
          href={{
            pathname: "/portfolio/e-conomy",
          }}
        >
          <u>E-conomy</u>
        </Link>
        <Link
          className={cs(
            styles.sidebar__link,
            pathname === "/portfolio/e-conomy" && styles.active,
            dark && styles.dark
          )}
          href={{
            pathname: "/portfolio/e-conomy",
          }}
        >
          <u>Nexus Lost</u>
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
