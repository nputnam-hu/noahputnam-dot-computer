import Sidebar from "./Sidebar";
import styles from "./portfolio.module.css";
import Link from "next/link";

export const metadata = {
  title: "Portfolio | noahputnam.computer",
  description: "A computer owned by Noah Putnam",
};

export default function Portfolio() {
  return (
    <main className={styles.main}>
      <div
        className={styles.row}
        style={{
          position: "absolute",
          display: "relative",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Sidebar />
        <div
          className="row"
          style={{
            justifyContent: "center",
            alignItems: "center",
            // position: "absolute",
            // top: "50%",
            // left: "50%",
            marginTop: 124,
            paddingLeft: 20,
          }}
        >
          <h2
            style={{
              color: "white",
              background: "red",
              padding: "4px 8px",
              fontSize: 36,
              width: 119,
              fontWeight: "500",
            }}
          >
            Stealth
          </h2>
          <p style={{ fontSize: 22, maxWidth: 740 }}>
            This case is currently in stealth due to its relevancy to an ongoing
            corporate project. If you are interested in seeing it, please{" "}
            <Link href="/about">contact</Link> me to get access to the full
            portfolio.
          </p>
        </div>
      </div>
    </main>
  );
}
