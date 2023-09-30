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
          marginBottom: 16,
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
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Link
          href={{ pathname: "/about", params: { from: "home" } }}
          style={{
            fontFamily: "Times New Roman",
            fontSize: 17,
            color: "blue",
          }}
        >
          About
        </Link>
        <Link
          href={{ pathname: "/portfolio", params: { from: "home" } }}
          style={{
            fontFamily: "Times New Roman",
            fontSize: 17,
            marginTop: 6,
            color: "blue",
          }}
        >
          Portfolio
        </Link>
        {/* <Link
          href={{ pathname: "https://e-conomy.la", params: { from: "home" } }}
          target="_blank"
          style={{
            fontFamily: "Times New Roman",
            fontSize: 17,
            marginTop: 6,
            color: "blue",
          }}
        >
          Essays
        </Link> */}
        <Link
          href={{
            pathname: "https://twitter.com/noah_putnam",
            params: { from: "home" },
          }}
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
        <h4
          style={{
            fontFamily: "Times New Roman",
            fontSize: 17,
            marginTop: 20,
            marginBottom: 0,
            fontWeight: "700",
            fontStyle: "italic",
            // textDecoration: "underline",
          }}
        >
          Essays
        </h4>
        <Link
          href={{
            pathname: "https://e-conomy.la/the-creator-middle-class/",
            params: { from: "home" },
          }}
          target="_blank"
          style={{
            fontFamily: "Times New Roman",
            fontSize: 17,
            marginTop: 6,
            color: "blue",
          }}
        >
          The Creator Middle Class
        </Link>
        <Link
          href={{
            pathname: "https://e-conomy.la/marc-andreessens-original-sin/",
            params: { from: "home" },
          }}
          target="_blank"
          style={{
            fontFamily: "Times New Roman",
            fontSize: 17,
            marginTop: 6,
            color: "blue",
          }}
        >
          Marc Andreessen’s Original Sin
        </Link>
        <Link
          href={{
            pathname: "https://e-conomy.la/the-economy-of-bits/",
            params: { from: "home" },
          }}
          target="_blank"
          style={{
            fontFamily: "Times New Roman",
            fontSize: 17,
            marginTop: 6,
            color: "blue",
          }}
        >
          The Economy of Bits
        </Link>
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
