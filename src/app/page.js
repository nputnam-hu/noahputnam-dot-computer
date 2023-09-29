import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main
      className={styles.main}
      style={{
        paddingTop: 24,
        paddingBottom: 8,
        paddingLeft: 18,
        height: "calc(100vh - 48px)",
      }}
    >
      <div
        className={styles.row}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          // height: 48,
          // paddingTop: 20,
          // paddingBottom: 16,
          // padding: "16px 20px 16px",
          // borderBottom: "1px solid rgba(0,0,0,0.2)",
          marginBottom: 12,
          // background:
          //   "linear-gradient(to bottom, rgba(195,195,195,0.6), rgba(195,195,195,0.1))",
          zIndex: 10,
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
            fontWeight: 500,
            margin: 0,
            marginBottom: 1,
            // color: "#111",
          }}
        >
          noahputnam.computer
        </h2>
      </div>
      <div style={{ marginLeft: 0, display: "flex", flexDirection: "column" }}>
        <Link
          href="/about"
          style={{
            fontFamily: "Times New Roman",
            fontSize: 17,
            color: "blue",
          }}
        >
          About
        </Link>
        <Link
          href="/portfolio"
          style={{
            fontFamily: "Times New Roman",
            fontSize: 17,
            marginTop: 6,
            color: "blue",
          }}
        >
          Portfolio
        </Link>
        <Link
          href="https://e-conomy.la"
          target="_blank"
          style={{
            fontFamily: "Times New Roman",
            fontSize: 17,
            marginTop: 6,
            color: "blue",
          }}
        >
          Essays
        </Link>
        <Link
          href="https://twitter.com/noah_putnam"
          target="_blank"
          style={{
            fontFamily: "Times New Roman",
            fontSize: 17,
            marginTop: 6,
            color: "blue",
          }}
        >
          Twitter
        </Link>
        {/* <Link
          href="https://based.fashion"
          target="_blank"
          style={{ fontFamily: "Times New Roman", fontSize: 17, marginTop: 6 }}
        >
          American Dialectic
        </Link> */}
      </div>
      <p
        style={{
          width: 550,
          fontFamily: "Times New Roman",
          fontStyle: "italic",
          fontSize: 18,
          marginTop: "auto",
          marginBottom: 24,
          marginLeft: "auto",
          marginRight: 36,
        }}
      >
        &quot;The closer we come to the danger, the more brightly do the ways
        into the saving power begin to shine and the more questioning we become.
        For questioning is the piety of thought.&quot;
      </p>
    </main>
  );
}
