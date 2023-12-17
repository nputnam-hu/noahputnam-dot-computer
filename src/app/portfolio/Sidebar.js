"use client";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import cs from "classnames";
import styles from "./portfolio.module.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import useWindowScroll from "@react-hook/window-scroll";

const FixedBar = ({ dark }) => {
  const pathname = usePathname();
  const scrollY = useWindowScroll(120);
  const [expanded, setExpanded] = useState(false);
  const [shouldDisplay, setDisplay] = useState(false);

  const toggleExpanded = () => setExpanded((prev) => !prev);

  useEffect(() => {
    if (scrollY > 20) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  }, [scrollY]);

  return (
    <div
      className={cs(styles.fixedlinks)}
      style={{
        display: shouldDisplay ? "flex" : "none",
      }}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className={styles.row}>
        <div className={styles.col}>
          <div
            style={{
              height: expanded ? 44 : 0,
              opacity: expanded ? 1 : 0,
              transition: "all .3s",
              overflowY: "hidden",
            }}
          >
            <Link
              href="/"
              className={styles.row}
              style={{
                alignItems: "center",
                zIndex: 10,
                // padding: 4,
                textDecoration: "none",
                fontWeight: "300",
                // background: "red",
                marginRight: "auto",
                // marginTop: 4,
              }}
            >
              <Image
                src="/nporb.png"
                alt="Icon of an orb"
                width={34}
                height={34}
                priority
                loading="eager"
                style={{
                  borderRadius: 32,
                }}
              />
            </Link>
          </div>
          <span>Portfolio</span>
          <div style={{ height: 4 }} />
          <Link
            className={cs(
              styles.fixedsidebar__link,
              pathname === "/portfolio" && styles.active,
              dark && styles.dark
            )}
            href={{
              pathname: "/portfolio",
            }}
          >
            Vibe-based Computing
          </Link>
          <div
            style={{
              height: expanded ? 80 : 0,
              opacity: expanded ? 1 : 0,
              transition: "all .3s",
              overflowY: "hidden",
            }}
          >
            <Link
              className={cs(
                styles.fixedsidebar__link,
                pathname === "/portfolio/30000-under-30" && styles.active,
                dark && styles.dark
              )}
              // href={{
              //   pathname: "/portfolio/30000-under-30",
              // }}
              href="/30k_under_30.pdf"
              target="_blank"
            >
              30000 under 30
            </Link>
            {/* <Link
              className={cs(
                styles.fixedsidebar__link,
                pathname === "/portfolio/e-conomy" && styles.active,
                dark && styles.dark
              )}
              href={{
                pathname: "/portfolio/e-conomy",
              }}
            >
              Cambridge Technologists
            </Link> */}
            <Link
              className={cs(
                styles.fixedsidebar__link,
                pathname === "/portfolio/e-conomy" && styles.active,
                dark && styles.dark
              )}
              // href={{
              //   pathname: "/portfolio/e-conomy",
              // }}
              href="https://e-conomy.la"
              target="_blank"
            >
              E-conomy
            </Link>
          </div>
        </div>
        <div style={{ width: 8 }} />
        <button
          onClick={toggleExpanded}
          style={{
            marginBottom: "auto",
            cursor: "pointer",
            opacity: expanded ? 0 : 1,
            transition: "opacity 0.1s",
          }}
        >
          <svg
            width="19"
            height="17"
            viewBox="0 0 19 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.93254 5.81152C3.01528 5.73723 3.1136 5.67829 3.22185 5.63807C3.33011 5.59785 3.44618 5.57714 3.5634 5.57714C3.68062 5.57714 3.79668 5.59785 3.90494 5.63807C4.01319 5.67829 4.11151 5.73723 4.19426 5.81152L9.50015 10.5589L14.8075 5.81152C14.9749 5.66182 15.2018 5.57772 15.4384 5.57772C15.675 5.57772 15.9019 5.66182 16.0693 5.81152C16.2366 5.96122 16.3306 6.16426 16.3306 6.37597C16.3306 6.58768 16.2366 6.79072 16.0693 6.94043L10.1318 12.2529C10.049 12.3272 9.9507 12.3862 9.84244 12.4264C9.73418 12.4666 9.61812 12.4873 9.5009 12.4873C9.38368 12.4873 9.26761 12.4666 9.15935 12.4264C9.0511 12.3862 8.95278 12.3272 8.87004 12.2529L2.93254 6.94043C2.84951 6.86639 2.78363 6.77842 2.73868 6.68156C2.69372 6.5847 2.67058 6.48085 2.67058 6.37597C2.67058 6.27109 2.69372 6.16724 2.73868 6.07038C2.78363 5.97352 2.84951 5.88555 2.93254 5.81152Z"
              fill="#888888"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const Sidebar = ({ dark = false }) => {
  const prevbg = useRef(
    typeof window !== "undefined" && localStorage.getItem("prevbg")
  ).current;
  const wasLightmode = prevbg === "light";
  const wasDarkmode = prevbg === "dark";
  const pathname = usePathname();

  return (
    <>
      <FixedBar />
      <div
        className={cs(
          styles.sidebar,
          // styles.sticky,
          dark && (wasLightmode ? "animatedDarkBg" : styles.dark),
          !dark && wasDarkmode && "animatedWhiteBg"
        )}
        style={{
          // paddingTop: 20,
          // paddingBottom: 20,
          // paddingLeft: 14,
          // paddingLeft: 14,
          padding: "11px 14px 15px",
          top: 0,
          display: "block",
          // height: 230,
          // width: 580,
          borderBottomRightRadius: 8,
          border: "0 solid rgba(0, 0, 0, 0.10)",
          borderRightWidth: 1,
          borderBottomWidth: 1,
          background: "rgba(250, 249, 246, 1)",
          // backdropFilter: "blur(10px)",
          // zIndex: 3,
        }}
      >
        <div className={styles.row} style={{ alignItems: "center" }}>
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
              marginTop: 4,
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
          <div style={{ width: 10 }} />
          <div style={{}} className={styles.col}>
            <div style={{ height: 10 }} />
            <h4
              style={{
                fontSize: 20,
                fontWeight: "800",
                fontFamily: "HelveticaNeue-Medium",
                color: dark ? "#ddd" : "#1d1d1d",
                zIndex: 1,
                // marginBottom: -8,
              }}
            >
              PORTFOLIO
            </h4>
            <div style={{ height: 12 }} />
            <div className={styles.row} style={{ alignItems: "center" }}>
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
                Vibe-based Computing
              </Link>
              <Link
                className={cs(
                  styles.sidebar__link,
                  pathname === "/portfolio/30000-under-30" && styles.active,
                  dark && styles.dark
                )}
                // href={{
                //   pathname: "/portfolio/30000-under-30",
                // }}
                href="/30k_under_30.pdf"
                target="_blank"
              >
                30000 under 30
              </Link>
              {/* <Link
                className={cs(
                  styles.sidebar__link,
                  pathname === "/portfolio/e-conomy" && styles.active,
                  dark && styles.dark
                )}
                href={{
                  pathname: "/portfolio/e-conomy",
                }}
              >
                Cambridge Technologists
              </Link> */}
              <Link
                className={cs(
                  styles.sidebar__link,
                  pathname === "/portfolio/e-conomy" && styles.active,
                  dark && styles.dark
                )}
                // href={{
                //   pathname: "/portfolio/e-conomy",
                // }}
                href="https://e-conomy.la"
                target="_blank"
              >
                E-conomy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
