"use client";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import cs from "classnames";
import styles from "./portfolio.module.css";
import { useRef } from "react";
import Image from "next/image";

const Sidebar = ({ dark = false }) => {
  const prevbg = useRef(
    typeof window !== "undefined" && localStorage.getItem("prevbg")
  ).current;
  const wasLightmode = prevbg === "light";
  const wasDarkmode = prevbg === "dark";
  const pathname = usePathname();

  return (
    <div
      className={cs(
        styles.sidebar,
        // styles.sticky,
        dark && (wasLightmode ? "animatedDarkBg" : styles.dark),
        !dark && wasDarkmode && "animatedWhiteBg"
      )}
      style={{
        paddingTop: 20,
        paddingLeft: 14,
        top: 0,
        display: "block",
        height: 230,
        width: 212,
        borderBottomRightRadius: 12,
        border: "0 solid rgba(0, 0, 0, 0.10)",
        borderRightWidth: 2,
        borderBottomWidth: 2,
        background: "rgba(250, 249, 246, 0.70)",
        backdropFilter: "blur(40px)",
        zIndex: 3,
      }}
    >
      <Link
        href="/"
        className={styles.row}
        style={{
          alignItems: "center",
          zIndex: 10,
          padding: 4,
          textDecoration: "none",
          fontWeight: "300",
          // background: "red",
          marginRight: "auto",
        }}
      >
        <Image
          src="/nporb.png"
          alt="Icon of an orb"
          width={36}
          height={36}
          priority
          loading="eager"
          style={{
            borderRadius: 32,
          }}
        />
      </Link>
      <div style={{ padding: "0 4px" }}>
        <h4
          style={{
            fontSize: 20,
            fontWeight: "800",
            fontFamily: "HelveticaNeue-Medium",
            color: dark ? "#ddd" : "#1d1d1d",
            zIndex: 1,
            marginTop: 8,
          }}
        >
          PORTFOLIO
        </h4>
        <div style={{ height: 14 }} />
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
    </div>
  );
};

export default Sidebar;
