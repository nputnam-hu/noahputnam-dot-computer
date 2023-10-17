"use client";
import Image from "next/image";
import Link from "next/link";
import cs from "classnames";
import styles from "./portfolio.module.css";
import { useParams } from "next/navigation";
import { useRef } from "react";

const Select = () => {
  return (
    <div>
      <label for="cars">Choose a car:</label>

      <select name="cars" id="cars">
        <option value="volvo">Vibe-based Computing</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  );
};

const Topbar = ({ dark, isHome = false, children }) => {
  const { from } = useParams();
  const prevbg = useRef(
    typeof window !== "undefined" && localStorage.getItem("prevbg")
  ).current;
  const wasLightmode = prevbg === "light";
  const wasDarkmode = prevbg === "dark";

  console.log({ isHome });
  return (
    <div>
      <div
        className={cs(
          styles.row,
          dark && (wasLightmode ? "animatedDarkBg" : styles.dark),
          !dark && wasDarkmode && "animatedWhiteBg"
        )}
        style={{
          ...{
            height: 64,
            marginTop: 12,
            paddingLeft: 14,
            display: "flex",
            alignItems: "center",
          },
          ...(!isHome
            ? {
                // padding: "16px 20px 16px",
                borderBottom: dark
                  ? "1px solid rgba(255,255,255,0.15)"
                  : "1px solid rgba(0,0,0,0.15)",
                background: dark ? "#1a1a1a" : "white",
              }
            : {}),
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
            color: dark ? "#ddd" : "black",
            padding: 4,
            display: "inline-flex",
            textDecoration: "none",
            fontWeight: "300",
            cursor: isHome ? "default" : "pointer",
          }}
          disabled={isHome}
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
            className={isHome ? "animate_smaller_orb" : "animate_bigger_orb"}
          />
          {true && (
            <>
              <div
                style={{
                  width: 10,
                }}
              />
              <h2
                style={{
                  fontSize: 30,
                  fontFamily: "Times New Roman",
                  margin: 0,
                  marginBottom: 0.5,
                  fontWeight: "300",
                }}
              >
                noahputnam.computer
              </h2>
            </>
          )}
        </Link>
        <div style={{ width: 16 }} />
        {/* {children} */}
      </div>
      {!isHome && from === "home" && (
        <div className={cs("bordercover", dark && "dark")} />
      )}
    </div>
  );
};

export default Topbar;
