import cs from "classnames";
import Topbar from "../Topbar";
import Sidebar from "../Sidebar";
import styles from "../portfolio.module.css";
import IntroSection from "./IntroSection";
import ThirtyK from "./ThirtyK";

export default function Portfolio() {
  return (
    <main className={cs(styles.main, styles.dark)}>
      <div className={styles.row} style={{ position: "absolute" }}>
        <Sidebar />
        <ThirtyK serverComponents={{ introSection: <IntroSection /> }} />
      </div>
    </main>
  );
}
