import React from "react";
import styles from "../BoxRow1/BoxRow1.module.css";
import circle1 from "../../../Assets/circle3.svg";
import circle2 from "../../../Assets/circle4.svg";
import Box from "../../../Components/Box/Box";
import img from "../../../Assets/row2bg.svg";
function BoxRow2() {
  return (
    <div className="row2-cont">
      <img src={img} className={styles.patt} alt="" />
      <div style={{ padding: "0px" }} className={styles.row}>
        <Box
          aos={"fade-right"}
          img={circle1}
          title={"FARMING"}
          red={" & STAKING"}
          desc={
            "We will implement farming and liquidity pools for single-stake XSWAP to earn wPTX, and vice versa. Farm token (XSWAP) with a variable APR to coincide with a fixed emissions rate (5B tokens emitted per year over 10 years, max supply of 50B XSWAP)"
          }
        />
        <Box
          aos={"fade-left"}
          img={circle2}
          title={"X"}
          red={"SWAP"}
          desc={
            "Implement the DEX and platform. This will allow us to utilize fees to conduct buybacks, burns, and other revenue streamlining methods for the advancement of the protocol. We can also directly partner with other protocols, hosting pre-sales and providing a platform for new or established protocols."
          }
        />
      </div>
    </div>
  );
}

export default BoxRow2;
