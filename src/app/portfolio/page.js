import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import styles from "./portfolio.module.css";
import OntologySection from "./OntologySection";
import IntroSection from "./IntroSection";
import VibeBasedComputing from "./VibeBasedComputing";
import Head from "next/head";
import TopBarContent from "./TopBarContent";

export const metadata = {
  title: "Portfolio | noahputnam.computer",
  description: "A computer owned by Noah Putnam",
};

export default function Portfolio() {
  return (
    <main className={styles.main}>
      <Topbar>
        <TopBarContent />
      </Topbar>
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
