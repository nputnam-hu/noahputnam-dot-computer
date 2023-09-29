import Image from "next/image";
import Link from "next/link";
import styles from "./portfolio.module.css";

const Sidebar = ({ scrollY, pathname, showLinks }) => {
  return (
    <div style={{}}>
      <div
        style={{
          paddingTop: 20,
          paddingBottom: 12,
          paddingLeft: 14,
          // padding: "16px 20px 16px",
          borderBottom: "1px solid rgba(0,0,0,0.2)",
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
            color: "black",
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
            // style={{ borderRadius: 4, border: "1px solid #ccc" }}
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
      <div className="bordercover" />
    </div>
  );
};

export default Sidebar;
