import React from "react";
import styles from "./Box.module.css";
function Box({ img, desc, title, red, aos, anim }) {
  return (
    <div data-aos={aos} className={styles.box}>
      <div className={styles.wrapper}>
        <img className={anim} src={img} alt="" />
        <h1>
          {title}
          <span className={styles.red}>{red}</span>
        </h1>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default Box;
