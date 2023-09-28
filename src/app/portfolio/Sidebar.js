import Image from "next/image";
import Link from "next/link";
import styles from "./portfolio.module.css";

const Sidebar = ({ scrollY, pathname, showLinks }) => {
  const topbarPadding = 52;
  const sidebarTop =
    40 + topbarPadding * (1 - Math.min(scrollY, topbarPadding) / topbarPadding);
  // console.log({ scrollY, sidebarTop });
  return (
    <div style={{}}>
      <div
        style={{
          paddingTop: 20,
          paddingBottom: 12,
          paddingLeft: 14,
          // padding: "16px 20px 16px",
          borderBottom: "1px solid rgba(0,0,0,0.2)",
        }}
      >
        <Link
          href="/"
          className={styles.row}
          style={{
            alignItems: "center",
            // height: 48,
            // background:
            //   "linear-gradient(to bottom, rgba(195,195,195,0.6), rgba(195,195,195,0.1))",
            zIndex: 10,
            color: "black",
            padding: 4,
            display: "inline-flex",
            textDecoration: "none",
            fontWeight: "300",
          }}
        >
          <Image
            src="/nporb.png"
            alt="Icon of an orb"
            width={32}
            height={32}
            priority
            loading="eager"
            // style={{ borderRadius: 4, border: "1px solid #ccc" }}
          />
          <div style={{ width: 10 }} />
          <h2
            style={{
              fontSize: 30,
              fontFamily: "Times New Roman",
              // fontWeight: 500,
              margin: 0,
              marginBottom: 1,
              fontWeight: "300",
              // color: "#111",
            }}
          >
            noahputnam.computer
          </h2>
        </Link>
      </div>
      <div className="bordercover" />
      {showLinks && (
        <>
          <div style={{ height: 72 }} />
          <div
            className={styles.sidebar}
            style={{
              top: sidebarTop,
            }}
          >
            {/* <div style={{ height: 8 }} /> */}
            <h4>Portfolio</h4>
            <div style={{ height: 14 }} />
            <Link
              className={styles.sidebar__link}
              href="/portfolio"
              target="_blank"
              style={{
                color: pathname === "/portfolio" ? "#222" : "#777",
                fontFamily: "HelveticaNeue-Medium",
              }}
            >
              <span
                style={{ fontFamily: "HelveticaNeue-Medium", fontSize: 10 }}
              >
                •{" "}
              </span>
              <u>Vibe-based Computing</u>
            </Link>
            <Link
              className={styles.sidebar__link}
              href="/portfolio/30000-under-30"
              target="_blank"
              style={{
                color:
                  pathname === "/portfolio/30000-under-30" ? "#000" : "#777",
                // fontFamily: "HelveticaNeue-Medium",
              }}
            >
              <span
                style={{ fontFamily: "HelveticaNeue-Medium", fontSize: 10 }}
              >
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
              <span
                style={{ fontFamily: "HelveticaNeue-Medium", fontSize: 10 }}
              >
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
              <span
                style={{ fontFamily: "HelveticaNeue-Medium", fontSize: 10 }}
              >
                •{" "}
              </span>
              <u>Nexus Lost</u>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
