import React from "react";
import styles from "./styles/Dashboard.module.css";
function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <h1>Dashboard</h1>
      <div className={styles.cardDiv}>
        <div className={styles.dashCard}>
          <h4>$PTX price</h4>
          <h3>$20.636</h3>
        </div>
        <div className={styles.dashCard}>
          <h4>$market cap</h4>
          <h3>$12,456,687.027</h3>
        </div>
        <div className={styles.dashCard}>
          <h4>apy</h4>
          <h3>916,474%</h3>
        </div>
        <div className={styles.dashCard}>
          <h4>PTX foundation</h4>
          <h3>$4,324,848.877</h3>
        </div>
        <div className={styles.dashCard}>
          <h4>insurance fund</h4>
          <h3>$5,255.826</h3>
        </div>
        <div className={styles.dashCard}>
          <h4>circulating supply</h4>
          <h3>603,633.737</h3>
          <div className={styles.percentageDiv}>
            <div className={styles.percentageBar}></div>
          </div>
        </div>
        <div className={styles.dashCard}>
          <h4>buy / sell tax</h4>
          <h3>
            <span>buying</span> 15%
          </h3>
          <h3>
            <span>selling</span> 20%
          </h3>
        </div>
        <div className={styles.dashCard}>
          <h4>token burn pit</h4>
          <h3>4.906%</h3>
          <h3>total value burnt: $611,325.726</h3>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
