import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles/Lottery.module.css";
import ticket from "../../../Assets/lottery/ticket.svg";
import Button from "../../../Components/Button/Button";
import s1 from "../../../Assets/lottery/s1.png";
import s2 from "../../../Assets/lottery/s2.png";
import s3 from "../../../Assets/lottery/s3.png";
import t1 from "../../../Assets/lottery/t1.png";
import t2 from "../../../Assets/lottery/t2.png";
import radialGr from "../../../Assets/radialGr.svg";

function LotteryCol({ head, desc, sub }) {
  return (
    <div className={styles.lotCol}>
      <h2>{head}</h2>
      <h1>{desc}</h1>
      <p>{sub}</p>
    </div>
  );
}

function Lottery() {
  const [box1, setBox1] = useState(false);
  const data = [
    {
      head: "Match first 1",
      desc: "648 CAKE",
      sub: "~$1,894",
    },
    {
      head: "Match first 2",
      desc: "648 CAKE",
      sub: "~$1,894",
    },
    {
      head: "Match first 3",
      desc: "648 CAKE",
      sub: "~$1,894",
    },
    {
      head: "Match first 4",
      desc: "648 CAKE",
      sub: "~$1,894",
    },
    {
      head: "Match first 5",
      desc: "648 CAKE",
      sub: "~$1,894",
    },
    {
      head: "Match first 6",
      desc: "648 CAKE",
      sub: "~$1,894",
    },
    {
      head: "Burn",
      desc: "648 CAKE",
      sub: "~$1,894",
    },
  ];

  return (
    <div className={styles.lotteryCont}>
      <div className={styles.sec1}>
        <img src={radialGr} alt="" className={styles.radial} />
        <div className={styles.lottery}>
          <img src={s1} className={styles.s1} alt="" />
          <img src={s2} className={styles.s2} alt="" />
          <img src={s3} className={styles.s3} alt="" />
          <img src={t1} className={styles.t1} alt="" />
          <img src={t2} className={styles.t2} alt="" />
          <h2>The Pancake Swap Lottery</h2>
          <h1>$94,122</h1>
          <h2>in prizes</h2>
          <div className={styles.btnDiv}>
            <img src={ticket} alt="" />
            <button>Buy Tickets</button>
          </div>
        </div>
      </div>
      <div className={styles.sec2Cont}>
        <div className={styles.sec2}>
          <h1 className={styles.sec2Head}>Get your tickets now!</h1>
          <div className={styles.row}>
            <div className={styles.timer}>
              <div className={styles.time}>
                <h1>{3}</h1>
                <p>h</p>
              </div>
              <div className={styles.time}>
                <h1>{4}</h1>
                <p>m</p>
              </div>
            </div>
            <h2>until the draw</h2>
          </div>
          <div className={styles.drawBox}>
            <div className={styles.drawHead}>
              <h2>Next Draw</h2>
              <p>#592 | Draw: Jul 12, 2022, 5:00 PM</p>
            </div>
            <div className={styles.drawPrize}>
              <div className={styles.rowPrize}>
                <h2>Prize Pot</h2>
                <div className={styles.col}>
                  <h1>~$94,237</h1>
                  <p>32,378 CAKE</p>
                </div>
              </div>
              <div className={styles.rowPrize}>
                <h2>Your tickets</h2>
                <Button text={"Buy Tickets"} />
              </div>
            </div>
            <div className={`${styles.hiddenBox} ${box1 && styles.display}`}>
              <p>
                Match the winning number in the same order to share prizes.
                Current prizes up for grabs:
              </p>
              <div className={styles.lotGrid}>
                {data.map((elem, key) => {
                  return <LotteryCol {...elem} key={"lot" + key} />;
                })}
              </div>
            </div>
            <p
              onClick={() => {
                setBox1((prev) => !prev);
              }}
              className={`${styles.hideBtn}`}
            >
              {box1 ? "Hide" : "Details"}{" "}
              <FontAwesomeIcon
                className={`${box1 && styles.rotate}`}
                icon={faChevronDown}
              />
            </p>
          </div>
        </div>
      </div>
      <div className={styles.sec3Cont}>
        <div className={styles.sec3}>
          <img src={t1} alt="" />
          <div>
            <h2>Connect your wallet to check if you've won!</h2>
            <Button text={"Connect Wallet"} />
          </div>
          <img src={t2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Lottery;
