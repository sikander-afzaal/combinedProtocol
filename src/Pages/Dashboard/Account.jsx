import React from "react";
import styles from "./styles/Account.module.css";
function Account() {
  return (
    <div className={styles.account}>
      <h1>Your Account</h1>
      <div className={styles.cardDiv}>
        <div className={styles.dashCard}>
          <h4>Your Total Balance</h4>
          <p className={styles.dollar}>$</p>
          <h3>= 0 $PTX</h3>
        </div>
        <div className={styles.dashCard}>
          <h4>earnings per day</h4>
          <p className={styles.dollar}>$</p>
          <h3>= 0 $PTX</h3>
        </div>
        <div className={styles.dashCard}>
          <h4>5 day earnings</h4>
          <p className={styles.dollar}>$</p>
          <h3>= 0 $PTX</h3>
        </div>
        <div className={styles.dashCard}>
          <h4>30 day roi</h4>
          <p className={styles.dollar}>$</p>
          <h3>= 0 $PTX</h3>
        </div>
        <div className={styles.dashCard}>
          <h4>next rebase amount</h4>
          <p className={styles.dollar}>$</p>
          <h3>= 0 $PTX</h3>
          <h3>0%</h3>
        </div>
      </div>
    </div>
  );
}

export default Account;
