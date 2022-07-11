import React from "react";
import styles from "./Works.module.css";
import img from "../../../Assets/works/work-icon.png";
import cog from "../../../Assets/works/cog.png";
function Works() {
  return (
    <div className={`cont ${styles.workCont}`}>
      <img src={cog} className={styles.cog} alt="" />
      <div className={styles.works}>
        <div data-aos="fade-right" className={styles.leftWork}>
          <img src={img} alt="" />
        </div>
        <div data-aos="fade-left" className={styles.rightWork}>
          <h1>HOW IT WORKS</h1>
          <p>
            <span className={styles.bold}>Auto-Compouding Protocol</span> <br />
            ProtocolX $PTX begins as a 1.77% daily auto-rebasing token.{" "}
            <span className={styles.bold}>What does that mean?</span> Once you
            buy the token, it will begin to automatically rebase in your wallet.
            No work to do to make the magic happen!
          </p>
          <p>
            Just by simply holding the $PTX token in your wallet, you will
            receive rebases every 30 minutes that are directly and immediately
            added to your wallet (no claiming required).
          </p>
        </div>
      </div>
    </div>
  );
}

export default Works;
