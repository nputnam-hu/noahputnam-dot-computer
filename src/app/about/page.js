import Image from "next/image";
import Link from "next/link";
import styles from "../portfolio/portfolio.module.css";
import Sidebar from "../portfolio/Sidebar";

const About = () => {
  return (
    <main style={{}}>
      <Sidebar />
      <div style={{ paddingLeft: 21 }}>
        {/* <Link
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            color: "#333",
            fontSize: 20,
            // fontWeight: "600",
            // fontFamily: "HelveticaNeue-Medium",
          }}
          href="/"
          className={styles.backbutton}
        >
          <svg
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.363604 6.3636C0.0121321 6.71508 0.0121321 7.28492 0.363604 7.6364L6.09117 13.364C6.44264 13.7154 7.01249 13.7154 7.36396 13.364C7.71543 13.0125 7.71543 12.4426 7.36396 12.0912L2.27279 7L7.36396 1.90883C7.71543 1.55736 7.71543 0.987511 7.36396 0.636039C7.01249 0.284567 6.44264 0.284567 6.09117 0.636039L0.363604 6.3636ZM25 6.1L1 6.1V7.9L25 7.9V6.1Z"
              fill="black"
            />
          </svg>
          <div style={{ width: 6 }} />
          back
        </Link> */}
        <h2
          style={{
            fontWeight: "400",
            fontSize: 40,
            fontFamily: "HelveticaNeue-Medium",
            margin: "16px 0 12px",
          }}
        >
          About
        </h2>
        <Image
          src="/businesscard.png"
          height={550 / 1.5}
          width={850 / 1.5}
          alt="Noah Putnam | Technologist. Critical Theorist. | email: noahputnam@gmail.com"
          style={{
            // boxShadow: "4px 4px 4px 1px rgba(0, 0, 0, 0.2)",
            border: "1px solid rgba(0,0,0,0.2)",
          }}
          priority
        />
      </div>
    </main>
  );
};

export default About;
