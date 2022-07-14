import React from "react";
import { faTicket, faUser } from "@fortawesome/free-solid-svg-icons";

import PrizeBox from "../../../Components/PrizeBox/PrizeBox";
import styles from "./styles/Prizes.module.css";
function Prizes() {
  return (
    <div className={styles.prizeCont}>
      <div className={styles.prize}>
        <h1 className={styles.prizeH1}>
          <span>Win</span> millions in prizes
        </h1>
        <p className={styles.prizeDesc}>
          Provably fair, on-chain games. Win big with PanPTXSwap.
        </p>
        <div className={styles.boxRow}>
          <PrizeBox
            icon={faUser}
            text={{
              top: "Prediction",
              prize: "$150 billion",
              prizeDesc: "in BNB + PTX won so far",
              boxDesc: "Predict the price trend of BNB or PTX to win",
              btnText: "Play",
            }}
          />
          <PrizeBox
            icon={faTicket}
            color
            text={{
              top: "Lottery",
              prize: "$61,861",
              prizeDesc: "in PTX prizes this round",
              boxDesc: "Buy tickets with PTX, win PTX if your numbers match",
              btnText: "Buy Tickets",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Prizes;
