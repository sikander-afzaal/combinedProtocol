import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./styles/Lottery.module.css";
import ticket from "../../../Assets/lottery/ticket.svg";
import Button from "../../../Components/Button/Button";
import s1 from "../../../Assets/lottery/s1.png";
import s2 from "../../../Assets/lottery/s2.png";
import s3 from "../../../Assets/lottery/s3.png";
import t1 from "../../../Assets/lottery/t1.png";
import t2 from "../../../Assets/lottery/t2.png";
import radialGr from "../../../Assets/radialGr.svg";
import circ1 from "../../../Assets/circles/circ1.svg";
import circ2 from "../../../Assets/circles/circ2.svg";
import circ3 from "../../../Assets/circles/circ3.svg";
import circ4 from "../../../Assets/circles/circ4.svg";
import circ5 from "../../../Assets/circles/circ5.svg";
import circ6 from "../../../Assets/circles/circ6.svg";
import win1 from "../../../Assets/win1.svg";
import win2 from "../../../Assets/win2.svg";
import chart from "../../../Assets/chart.svg";

function LotteryCol({ head, desc, sub, his, tickets }) {
  return (
    <div className={styles.lotCol}>
      <h2>{head}</h2>
      <h1>{desc}</h1>
      <p>{sub}</p>
      {his && <p>{tickets}</p>}
    </div>
  );
}

function Lottery() {
  const [box1, setBox1] = useState(false);
  const [box2, setBox2] = useState(false);
  const [liveSwitch, setLiveSwitch] = useState(false);
  const data = [
    {
      head: "Match first 1",
      desc: "648 CAKE",
      sub: "~$1,894",
      tickets: "2.78 CAKE each 193 Winning Tickets",
    },
    {
      head: "Match first 2",
      desc: "648 CAKE",
      sub: "~$1,894",
      tickets: "2.78 CAKE each 193 Winning Tickets",
    },
    {
      head: "Match first 3",
      desc: "648 CAKE",
      sub: "~$1,894",
      tickets: "2.78 CAKE each 193 Winning Tickets",
    },
    {
      head: "Match first 4",
      desc: "648 CAKE",
      sub: "~$1,894",
      tickets: "2.78 CAKE each 193 Winning Tickets",
    },
    {
      head: "Match first 5",
      desc: "648 CAKE",
      sub: "~$1,894",
      tickets: "2.78 CAKE each 193 Winning Tickets",
    },
    {
      head: "Match first 6",
      desc: "648 CAKE",
      sub: "~$1,894",
      tickets: "2.78 CAKE each 193 Winning Tickets",
    },
    {
      head: "Burn",
      desc: "648 CAKE",
      sub: "~$1,894",
      tickets: "2.78 CAKE each 193 Winning Tickets",
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
      <div className={styles.sec4Cont}>
        <div className={styles.sec4}>
          <h1 className={styles.sec4Head}>Finished Rounds</h1>
          <div className={styles.finishSwitch}>
            <h2
              onClick={() => setLiveSwitch(false)}
              className={`${!liveSwitch && styles.activeLive}`}
            >
              All History
            </h2>
            <h2
              onClick={() => setLiveSwitch(true)}
              className={`${liveSwitch && styles.activeLive}`}
            >
              Your History
            </h2>
          </div>
          {liveSwitch ? (
            <div className={styles.drawBox}>
              <div className={styles.drawHead}>
                <h2>Round</h2>
              </div>
              <div className={styles.yourMidBox}>
                <p>No History Found</p>
                <h3>Buy tickets for the next round!</h3>
                <Button text={"Buy Tickets"} />
              </div>
              <div className={styles.bottomYourBox}>
                Only showing data for Lottery V2
              </div>
            </div>
          ) : (
            <div className={styles.hisBox}>
              <div className={styles.topHisBox}>
                <div className={styles.leftHisBox}>
                  <h1>
                    Round <input type="number" />
                  </h1>
                  <p>Drawn Jul 11, 2022, 5:00 AM</p>
                </div>
                <div className={styles.rightHisBox}>
                  <FontAwesomeIcon icon={faArrowLeft} />
                  <FontAwesomeIcon icon={faArrowRight} />
                  <FontAwesomeIcon
                    className={styles.line}
                    icon={faArrowRight}
                  />
                </div>
              </div>
              <div className={styles.hisBoxMid}>
                <h2>Winning Number</h2>
                <div className={styles.numbers}>
                  <div className={styles.circleDiv}>
                    <img src={circ1} alt="" />
                    <h3>0</h3>
                  </div>
                  <div className={styles.circleDiv}>
                    <img src={circ2} alt="" />
                    <h3>9</h3>
                  </div>
                  <div className={styles.circleDiv}>
                    <img src={circ3} alt="" />
                    <h3>9</h3>
                  </div>
                  <div className={styles.circleDiv}>
                    <img src={circ4} alt="" />
                    <h3>9</h3>
                  </div>
                  <div className={styles.circleDiv}>
                    <img src={circ5} alt="" />
                    <h3>1</h3>
                  </div>
                  <div className={styles.circleDiv}>
                    <img src={circ6} alt="" />
                    <h3>5</h3>
                  </div>
                </div>
                <div className={styles.latest}>
                  <p>Latest</p>
                </div>
              </div>

              <div
                className={`${styles.hiddenBoxHis} ${box2 && styles.display}`}
              >
                <div className={styles.leftHiddenBox}>
                  <div className={styles.colBox}>
                    <h2>Prize Pot</h2>
                    <h1>~$78,358</h1>
                    <p>26,846 CAKE</p>
                  </div>
                  <p>Total players this round: 397</p>
                </div>
                <div className={styles.rightHiddenBox}>
                  <p>
                    Match the winning number in the same order to share prizes.
                  </p>
                  <div className={styles.lotGrid}>
                    {data.map((elem, key) => {
                      return <LotteryCol {...elem} his key={"his" + key} />;
                    })}
                  </div>
                </div>
              </div>
              <p
                onClick={() => {
                  setBox2((prev) => !prev);
                }}
                className={`${styles.hideBtn}`}
              >
                {box2 ? "Hide" : "Details"}{" "}
                <FontAwesomeIcon
                  className={`${box2 && styles.rotate}`}
                  icon={faChevronDown}
                />
              </p>
            </div>
          )}
        </div>
      </div>
      <div className={styles.sec5Cont}>
        <div className={styles.sec5}>
          <h1 className={styles.sec5Head}>How to Play</h1>
          <p className={styles.sec5Desc}>
            If the digits on your tickets match the winning numbers in the
            correct order, you win a portion of the prize pool.Simple
          </p>
          <div className={styles.cardRow}>
            <div className={styles.card}>
              <p>Step 1</p>
              <h4>Buy Tickets</h4>
              <h5>
                Prices are set when the round starts, equal to 5 USD in CAKE per
                ticket.
              </h5>
            </div>

            <div className={styles.card}>
              <p>Step 2</p>
              <h4>Wait for the Draw</h4>
              <h5>
                There is one draw every day alternating between 0 AM UTC and 12
                PM UTC.
              </h5>
            </div>
            <div className={styles.card}>
              <p>Step 3</p>
              <h4>Check for Prizes</h4>
              <h5>
                Once the round’s over, come back to the page and check to see if
                you’ve won!
              </h5>
            </div>
          </div>
          <div className={styles.criteria}>
            <div className={styles.leftCriteria}>
              <h3>Winning Criteria</h3>
              <h4>
                The digits on your ticket must match in the correct order to
                win.
              </h4>
              <p>Here’s an example lottery draw, with two tickets, A and B.</p>
              <ul>
                <li>
                  Ticket A: The first 3 digits and the last 2 digits match, but
                  the 4th digit is wrong, so this ticket only wins a “Match
                  first 3” prize.
                </li>
                <li>
                  Ticket B: Even though the last 5 digits match, the first digit
                  is wrong, so this ticket doesn’t win a prize.
                </li>
              </ul>
              <p>
                Prize brackets don’t ‘stack’: if you match the first 3 digits in
                order, you’ll only win prizes from the ‘Match 3’ bracket, and
                not from ‘Match 1’ and ‘Match 2’.
              </p>
            </div>
            <div className={styles.rightCriteria}>
              <div className={styles.numbers}>
                <div className={styles.circleDiv}>
                  <img src={circ1} alt="" />
                  <h3>0</h3>
                </div>
                <div className={styles.circleDiv}>
                  <img src={circ2} alt="" />
                  <h3>9</h3>
                </div>
                <div className={styles.circleDiv}>
                  <img src={circ3} alt="" />
                  <h3>9</h3>
                </div>
                <div className={styles.circleDiv}>
                  <img src={circ4} alt="" />
                  <h3>9</h3>
                </div>
                <div className={styles.circleDiv}>
                  <img src={circ5} alt="" />
                  <h3>1</h3>
                </div>
                <div className={styles.circleDiv}>
                  <img src={circ6} alt="" />
                  <h3>5</h3>
                </div>
              </div>
              <div className={styles.criRow}>
                <h5>A</h5>
                <img src={win1} alt="" />
              </div>
              <div className={styles.criRow}>
                <h5>B</h5>
                <img src={win2} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.criteria}>
            <div className={styles.leftCriteria}>
              <h3>Prize Funds</h3>
              <p>The prizes for each lottery round come from three sources:</p>
              <h4>Ticket Purchases</h4>
              <ul>
                <li>
                  100% of the CAKE paid by people buying tickets that round goes
                  back into the prize pools.
                </li>
              </ul>
              <h4>Rollover Prizes</h4>
              <ul>
                <li>
                  After every round, if nobody wins in one of the prize
                  brackets, the unclaimed CAKE for that bracket rolls over into
                  the next round and are redistributed among the prize pools.
                </li>
              </ul>
              <h4>CAKE Injections</h4>
              <ul>
                <li>
                  An average total of 35,000 CAKE from the treasury is added to
                  lottery rounds over the course of a week. This CAKE is of
                  course also included in rollovers! Read more in our guide to
                  CAKE Tokenomics
                </li>
              </ul>
            </div>
            <div className={styles.chartDiv}>
              <img src={chart} alt="" />
              <div className={styles.chartRow}>
                <p>DIGITS MATCHED</p>
                <p>PRIZE POOL ALLOCATION</p>
              </div>
              <div className={styles.chartRow}>
                <div className={styles.color}>
                  <div className={styles.color1}></div>
                  <h4>Matches first 1</h4>
                </div>
                <h5>2%</h5>
              </div>
              <div className={styles.chartRow}>
                <div className={styles.color}>
                  <div className={styles.color2}></div>
                  <h4>Matches first 1</h4>
                </div>
                <h5>2%</h5>
              </div>
              <div className={styles.chartRow}>
                <div className={styles.color}>
                  <div className={styles.color3}></div>
                  <h4>Matches first 1</h4>
                </div>
                <h5>2%</h5>
              </div>
              <div className={styles.chartRow}>
                <div className={styles.color}>
                  <div className={styles.color4}></div>
                  <h4>Matches first 1</h4>
                </div>
                <h5>2%</h5>
              </div>
              <div className={styles.chartRow}>
                <div className={styles.color}>
                  <div className={styles.color5}></div>
                  <h4>Matches first 1</h4>
                </div>
                <h5>2%</h5>
              </div>
              <div className={styles.chartRow}>
                <div className={styles.color}>
                  <div className={styles.color6}></div>
                  <h4>Matches first 1</h4>
                </div>
                <h5>2%</h5>
              </div>
              <div className={styles.chartRow}>
                <div className={styles.color}>
                  <div className={styles.color7}></div>
                  <h4>Matches first 1</h4>
                </div>
                <h5>2%</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lottery;
