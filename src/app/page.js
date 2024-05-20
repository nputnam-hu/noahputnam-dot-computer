import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main
      className={styles.main}
      style={{
        height: "calc(100vh - 42px)",
        paddingTop: 24,
        paddingLeft: 18,
        paddingBottom: 8,
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
          marginBottom: 14,
          // background:
          //   "linear-gradient(to bottom, rgba(195,195,195,0.6), rgba(195,195,195,0.1))",
          zIndex: 10,
        }}
      >
        <Image
          src="/nporb.png"
          alt="Icon of an orb"
          width={36}
          height={36}
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
            marginBottom: 0,
            // color: "#111",
          }}
        >
          noahputnam.computer
        </h2>
      </div>
      <div
        style={{
          paddingBottom: 8,
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
          {/* <Link
            href={{ pathname: "/portfolio", params: { from: "home" } }}
            style={{
              fontFamily: "Times New Roman",
              fontSize: 17,
              marginTop: 6,
              color: "blue",
            }}
          >
            Cambridge Technologists
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
              pathname:
                "https://economyofbits.substack.com/p/marc-andreessens-original-sin",
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
              pathname:
                "https://economyofbits.substack.com/p/paradoxes-in-productivity-and-inquiries",
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
            Paradoxes in Productivity
          </Link>
          <Link
            href={{
              pathname: "https://economyofbits.substack.com/p/coming-soon",
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
          <Link
            href={{
              pathname:
                "https://economyofbits.substack.com/p/the-creator-middle-class",
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
            Decks
          </h4>
          <div style={{ marginTop: 6 }}>
            •{" "}
            <Link
              href={{
                pathname: "/decks/The_Geo_of_Geopolitics.pdf",
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
              [Oct 2023] The Geo of Geopolitics
            </Link>
          </div>
          <div style={{ marginTop: 6 }}>
            •{" "}
            <Link
              href={{
                pathname: "/decks/Ownership_Culture.pdf",
                params: { from: "home" },
              }}
              target="_blank"
              style={{
                fontFamily: "Times New Roman",
                fontSize: 17,
                color: "blue",
              }}
            >
              [Sep 2022] Ownership Culture
            </Link>
          </div>
        </div>
      </div>
      <p
        className="indexquote"
        style={{
          fontFamily: "Times New Roman",
          fontStyle: "italic",
          fontSize: 18,
          marginTop: "auto",
          marginBottom: 16,
          marginLeft: "auto",
          marginRight: 24,
        }}
      >
        “The closer we come to the danger, the more brightly do the ways into
        the saving power begin to shine and the more questioning we become. For
        questioning is the piety of thought.”
      </p>
    </main>
  );
}
