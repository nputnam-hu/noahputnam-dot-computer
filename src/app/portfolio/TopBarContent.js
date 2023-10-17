import styles from "./portfolio.module.css";

const TopBarContent = () => {
  return (
    <div className={styles.col}>
      <h4
        style={{
          fontSize: 24,
          fontWeight: "800",
          fontFamily: "HelveticaNeue-Bold",
          zIndex: 1,
          margin: "auto",
        }}
      >
        PORTFOLIO
      </h4>
      {/* <select name="cases" id="cases">
        <option value="volvo">Vibe-based Computing</option>
        <option value="saab">30000 under 30</option>
        <option value="mercedes">E-conomy</option>
        <option value="audi">Nexus Lost</option>
      </select> */}
      {/* <div className={styles.row}>
        <div></div>
      </div> */}
    </div>
  );
};

export default TopBarContent;
