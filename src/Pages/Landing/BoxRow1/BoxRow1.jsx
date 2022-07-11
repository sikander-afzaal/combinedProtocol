import React from "react";
import styles from "./BoxRow1.module.css";
import bulb from "../../../Assets/bulb.png";
import circle1 from "../../../Assets/circle1.svg";
import circle2 from "../../../Assets/circle2.svg";
import Box from "../../../Components/Box/Box";
function BoxRow1() {
  return (
    <div className={styles.boxCont}>
      <div className={styles.row}>
        <img src={bulb} className={styles.bulb} alt="" />
        <Box
          aos={"fade-right"}
          img={circle1}
          title={"PROTOCOL"}
          red={"X BUYBACK"}
          desc={
            "The entirety of all PxBB (ProtocolX Buy Back) funds go to buybacks of X-Share NFTs and the PTX token, providing them both with a direct deflationary pressure."
          }
        />
        <Box
          aos={"fade-left"}
          img={circle2}
          title={"X"}
          red={"SHARE"}
          desc={
            "Owning a ProtocolX NFT chest (XShare) is your direct share to the company's revenue stream as a whole. This includes a revenue share model from the NFT Marketplace, ProtocolX, and any other future developments under the ProtocolX umbrella."
          }
        />
      </div>
    </div>
  );
}

export default BoxRow1;
