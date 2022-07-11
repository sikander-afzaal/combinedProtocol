import React from "react";
import styles from "./Treasury.module.css";
import img from "../../../Assets/treasure.svg";
import TextRow from "../../../Components/TextRow/TextRow";
function Treasury() {
  return (
    <div className={styles.treasury}>
      <div data-aos="fade-top" className={styles.textPart}>
        <h3>Belief</h3>
        <h1>
          Protocol<span className={styles.red}>X Treasury</span>
        </h1>
      </div>
      <TextRow
        aos={"fade-right"}
        delay={200}
        title={"INVESTMENT"}
        desc={
          "The ProtocolX Treasury will be invested in various DeFi protocols with varying levels of risk in addition to being reinvested back directly into the ProtocolX parent company in order to maintain everlasting growth of the entirety of the protocol."
        }
      />
      <TextRow
        aos={"fade-right"}
        delay={400}
        title={"PROFITS"}
        desc={
          "Profits generated from the ProtocolX treasury investments are reinvested back into the treasury, utilized for buybacks/burned, and utilized directly to facilitate additional growth of the protocol"
        }
      />
      <img
        data-aos={"fade-left"}
        data-aos-delay={600}
        className={styles.orb}
        src={img}
        alt=""
      />
      <TextRow
        aos={"fade-left"}
        delay={800}
        title={"AUTOMATIC LIQUIDITY ROUTER"}
        desc={
          "Liquidity Pairs are very important for maintaining the fundamental aspects of the token and controlling price movement. Due to this being such an important aspect, 20% of pre-sale funds (in BNB) will be distributed to Liquidity Pool for Day 1."
        }
      />
    </div>
  );
}

export default Treasury;
