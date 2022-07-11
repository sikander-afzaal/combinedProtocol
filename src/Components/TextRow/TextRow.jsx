import React from "react";
import styles from "./TextRow.module.css";
function TextRow({ title, desc, aos, delay }) {
  return (
    <div className={styles.textRow} data-aos={aos} data-aos-delay={delay}>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
}

export default TextRow;
