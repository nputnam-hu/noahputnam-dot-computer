import Image from "next/image";
import Link from "next/link";
import styles from "../portfolio/portfolio.module.css";
import Topbar from "../portfolio/Topbar";

import BusinessCard from "/public/businesscard.png";

export const metadata = {
  title: "About | noahputnam.computer",
  description: "A computer owned by Noah Putnam",
};

const About = () => {
  return (
    <main style={{ paddingTop: 20, paddingLeft: 14 }}>
      <div
        className={styles.row}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          // marginBottom: 12,
          zIndex: 10,
        }}
      >
        <Link href="/" style={{ padding: 4, width: 36, height: 36 }}>
          <Image
            src="/nporb.png"
            alt="Icon of an orb"
            width={36}
            height={36}
            priority
            loading="eager"
          />
        </Link>
        <div style={{ width: 6 }} />
      </div>
      <div style={{ height: 8 }} />
      <div style={{ marginLeft: 4 }}>
        <h2
          style={{
            fontWeight: "400",
            fontSize: 40,
            fontFamily: "HelveticaNeue-Medium",
            // margin: "16px 0 12px",
            margin: 0,
          }}
          className="about"
        >
          About
        </h2>
        <div style={{ height: 12 }} />
        <Image
          src={BusinessCard}
          placeholder="blur"
          height={550 / 1.5}
          width={850 / 1.5}
          alt="Noah Putnam | Technologist. Critical Theorist. | email: noahputnam@gmail.com"
          style={{
            // boxShadow: "4px 4px 4px 1px rgba(0, 0, 0, 0.2)",
            border: "1px solid rgba(0,0,0,0.2)",
            margin: "auto",
          }}
          className="businesscard"
          priority
        />
        <p
          className={styles.desktoponly}
          style={{ fontFamily: "HelveticaNeue", fontSize: 17 }}
        >
          Resume available upon request.
        </p>
        <p
          className={styles.mobileonly}
          style={{ fontFamily: "HelveticaNeue", fontSize: 14 }}
        >
          Resume available upon request.
        </p>
      </div>
    </main>
  );
};

export default About;
