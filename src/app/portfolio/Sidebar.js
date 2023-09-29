import Image from "next/image";
import Link from "next/link";
import styles from "./portfolio.module.css";

const Sidebar = ({ pathname }) => {
  return (
    <>
      <h4
        style={{
          position: "absolute",
          left: 16,
          top: 13,
          fontSize: 19,
          fontWeight: "800",
          fontFamily: "HelveticaNeue-Medium",
          color: "black",
        }}
      >
        PORTFOLIO
      </h4>
      {/* <div style={{height: 20}} /> */}
      <div
        className={styles.sidebar}
        style={{
          paddingTop: 36,
          top: -20,
          position: "sticky",
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
          className={styles.sidebar__link}
          href="/portfolio"
          target="_blank"
          style={{
            color: pathname === "/portfolio" ? "#363636" : "#777",
            fontFamily: "HelveticaNeue-Medium",
          }}
        >
          <span style={{ fontFamily: "HelveticaNeue-Medium", fontSize: 10 }}>
            •{" "}
          </span>
          <u>Vibe-based Computing</u>
        </Link>
        <Link
          className={styles.sidebar__link}
          href="/portfolio/30000-under-30"
          target="_blank"
          style={{
            color: pathname === "/portfolio/30000-under-30" ? "#000" : "#777",
            // fontFamily: "HelveticaNeue-Medium",
          }}
        >
          <span style={{ fontFamily: "HelveticaNeue-Medium", fontSize: 10 }}>
            •{" "}
          </span>
          <u>30000 under 30</u>
        </Link>
        <Link
          className={styles.sidebar__link}
          href="/portfolio/e-conomy"
          target="_blank"
          style={{
            color: pathname === "/portfolio/e-conomy" ? "#000" : "#777",
            // fontFamily: "Helvetica Neue",
          }}
        >
          <span style={{ fontFamily: "HelveticaNeue-Medium", fontSize: 10 }}>
            •{" "}
          </span>
          <u>E-conomy</u>
        </Link>
        <Link
          className={styles.sidebar__link}
          href="/portfolio/e-conomy"
          target="_blank"
          style={{
            color: pathname === "/portfolio/e-conomy" ? "#000" : "#777",
            // fontFamily: "HelveticaNeue-Medium",
          }}
        >
          <span style={{ fontFamily: "HelveticaNeue-Medium", fontSize: 10 }}>
            •{" "}
          </span>
          <u>Nexus Lost</u>
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
