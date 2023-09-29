"use client";
import Image from "next/image";
import Link from "next/link";
import cs from "classnames";
import styles from "./portfolio.module.css";
import { useParams } from "next/navigation";
import { useRef } from "react";

const Topbar = ({ dark }) => {
  const { from } = useParams();
  const prevbg = useRef(
    typeof window !== "undefined" && localStorage.getItem("prevbg")
  ).current;
  const wasLightmode = prevbg === "light";
  const wasDarkmode = prevbg === "dark";

  return (
    <div>
      <div
        className={cs(
          dark && (wasLightmode ? "animatedDarkBg" : styles.dark),
          !dark && wasDarkmode && "animatedWhiteBg"
        )}
        style={{
          paddingTop: 20,
          paddingBottom: 12,
          paddingLeft: 14,
          // padding: "16px 20px 16px",
          borderBottom: dark
            ? "1px solid rgba(255,255,255,0.15)"
            : "1px solid rgba(0,0,0,0.15)",
          background: dark ? "#1a1a1a" : "white",
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
          }}
        >
          <Image
            src="/nporb.png"
            alt="Icon of an orb"
            width={32}
            height={32}
            priority
            loading="eager"
            style={{
              borderRadius: 32,
            }}
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
      {from === "home" && <div className={cs("bordercover", dark && "dark")} />}
    </div>
  );
};

export default Topbar;
