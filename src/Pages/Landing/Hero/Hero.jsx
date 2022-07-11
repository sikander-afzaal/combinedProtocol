import React from "react";

import styles from "./Hero.module.css";
import circle from "../../../Assets/hero/circle.png";
import shield from "../../../Assets/hero/shield.png";
import icon from "../../../Assets/hero/icon.png";
function Hero() {
  return (
    <div className="cont">
      <div className={styles.hero}>
        <div
          data-aos="fade-right"
          data-aos-delay={200}
          className={styles.leftHero}
        >
          <h1>
            THE FUTURE OF <br /> DECENTRALIZED <br /> FINANCE
          </h1>
          <p>
            ProtocolX is here to change the game by implementing an
            ever-developing, expanding, and growing ecosystem that all feeds
            into each other.
          </p>
          <button className={styles.ctaBtn}>Buy $PTX</button>
        </div>
        <div className={styles.rightHero}>
          <img src={shield} className={styles.sheild} alt="" />
          <img src={icon} className={styles.icon} alt="" />
        </div>
        <img src={circle} className={styles.circle} alt="" />
      </div>
    </div>
  );
}

export default Hero;
