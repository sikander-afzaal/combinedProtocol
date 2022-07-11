import React from "react";
import styles from "./MetaGrid.module.css";
import connect from "../../Assets/connect.svg";
import meta from "../../Assets/meta.svg";
function MetaGrid({ setModal }) {
  return (
    <>
      <div onClick={() => setModal(false)} className={styles.overlay}></div>
      <div className={styles.popUp}>
        <div className={styles.pop}>
          <img src={meta} alt="" />
          <h2>MetaMask</h2>
        </div>
        <div className={styles.pop}>
          <img src={connect} alt="" />
          <h2>Wallet Connect</h2>
        </div>
      </div>
    </>
  );
}

export default MetaGrid;
