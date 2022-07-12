import React from "react";
import styles from "./styles/Lottery.module.css";
import ticket from "../../../Assets/lottery/ticket.svg";
import radialGr from "../../../Assets/radialGr.svg";
function Lottery() {
  return (
    <div className={styles.lotteryCont}>
      <div className={styles.sec1}>
        <img src={radialGr} alt="" className={styles.radial} />
        <div className={styles.lottery}>
          <h2>The Pancake Swap Lottery</h2>
          <h1>$94,122</h1>
          <h2>in prizes</h2>
          <div className={styles.btnDiv}>
            <img src={ticket} alt="" />
            <button>Buy Tickets</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lottery;
