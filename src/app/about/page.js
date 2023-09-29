import Image from "next/image";
import Link from "next/link";
import styles from "../portfolio/portfolio.module.css";
import Sidebar from "../portfolio/Sidebar";

import BusinessCard from "/public/businesscard.png";

const About = () => {
  return (
    <main style={{}}>
      <Sidebar />
      <div style={{ paddingLeft: 21 }}>
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
          src={BusinessCard}
          placeholder="blur"
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
