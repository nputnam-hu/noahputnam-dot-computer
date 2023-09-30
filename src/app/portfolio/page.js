import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import styles from "./portfolio.module.css";
import OntologySection from "./OntologySection";
import IntroSection from "./IntroSection";
import VibeBasedComputing from "./VibeBasedComputing";

export default function Portfolio() {
  return (
    <main className={styles.main}>
      <Topbar />
      <div
        className={styles.row}
        style={{ position: "absolute", display: "relative" }}
      >
        <Sidebar />
        <VibeBasedComputing
          serverComponents={{
            ontologySection: <OntologySection />,
            introSection: <IntroSection />,
          }}
        />
      </div>
    </main>
  );
}
