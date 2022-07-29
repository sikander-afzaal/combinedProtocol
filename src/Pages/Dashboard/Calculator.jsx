import React, { useState } from "react";
import styles from "./styles/Calculator.module.css";
function Calculator() {
  const [scale, setScale] = useState(0);
  return (
    <div className={styles.calc}>
      <h1>Calculator</h1>
      <div className={styles.inputRow}>
        <div className={styles.inputWrapper}>
          <label htmlFor="amount">$PTX amount</label>
          <div className={styles.inputDiv}>
            <input placeholder="0.00" type="text" id="amount" />
            <button>Max</button>
          </div>
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="apy">APY (%)</label>
          <input
            className={styles.sepInput}
            type="text"
            id="apy"
            placeholder="0.00"
          />
        </div>
      </div>
      <div
        style={{ width: "calc(50% - 10px)" }}
        className={styles.inputWrapper}
      >
        <label htmlFor="amount">future $PTX market price ($)t</label>
        <div className={styles.inputDiv}>
          <input type="text" id="amount" placeholder="0.00" />
          <button>Max</button>
        </div>
      </div>
      <div className={styles.scaleDiv}>
        <div className={styles.row}>
          <p>365 days</p>
          <h3>
            <span>{scale}</span> days
          </h3>
        </div>
        <input
          type="range"
          min="0"
          max="365"
          step={1}
          value={scale}
          className={styles.scaleInput}
          onChange={(e) => setScale(e.target.value)}
        />
        <div className={styles.row}>
          <h4>0</h4>
          <h4>365</h4>
        </div>
      </div>
      <div className={styles.lastPart}>
        <h6>Potential Returns</h6>
        <h4>NAN</h4>
      </div>
    </div>
  );
}

export default Calculator;
