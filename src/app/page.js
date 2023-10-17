import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Topbar from "./portfolio/Topbar";

export default function Home() {
  return (
    <main
      className={styles.main}
      style={{
        height: "100vh",
      }}
    >
      <Topbar isHome />
      <div
        style={{
          marginTop: -4,
          paddingBottom: 8,
          paddingLeft: 18,
          zIndex: 100000,
        }}
      >
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
      </div>
      <p
        style={{
          width: 550,
          fontFamily: "Times New Roman",
          fontStyle: "italic",
          fontSize: 18,
          marginTop: "auto",
          marginBottom: 36,
          marginLeft: "auto",
          marginRight: 24,
        }}
      >
        &quot;The closer we come to the danger, the more brightly do the ways
        into the saving power begin to shine and the more questioning we become.
        For questioning is the piety of thought.&quot;
      </p>
    </main>
  );
}
