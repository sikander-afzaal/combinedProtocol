import React, { useEffect, useRef, useState } from "react";
import styles from "./PreSale.module.css";
import Button from "../../../Components/Button/Button";
function PreSale() {
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  const [timerDays, setTimerDays] = useState("00");
  let interval = useRef();
  const startTimer = () => {
    let end = new Date("10/15/2022 3:00 PM");
    interval = setInterval(() => {
      let _second = 1000;
      let _minute = _second * 60;
      let _hour = _minute * 60;
      let _day = _hour * 24;
      let now = new Date();
      let nowUTC = new Date(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        now.getUTCHours(),
        now.getUTCMinutes(),
        now.getUTCSeconds()
      );
      let distance = end - nowUTC;
      var days = Math.floor(distance / _day);
      var hours = Math.floor((distance % _day) / _hour);
      var minutes = Math.floor((distance % _hour) / _minute);
      var seconds = Math.floor((distance % _minute) / _second);
      if (distance < 0) {
        clearInterval(interval.current);
        return;
      } else {
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
        setTimerDays(days);
      }
    });
  };
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });
  return (
    <div className={styles.preSale}>
      <div className={styles.preSaleBox}>
        <div className={styles.topBox}>
          <div className={styles.timerDiv}>
            <div className={styles.timeBox}>
              <h2>{timerDays}</h2>
              <p>Days</p>
            </div>
            <div className={styles.timeBox}>
              <h2>{timerHours}</h2>
              <p>Hours</p>
            </div>
            <div className={styles.timeBox}>
              <h2>{timerMinutes}</h2>
              <p>Minutes</p>
            </div>
            <div className={styles.timeBox}>
              <h2>{timerSeconds}</h2>
              <p>Seconds</p>
            </div>
          </div>
        </div>
        <div className={styles.sliderDiv}>
          <div className={styles.line}></div>
        </div>
        <div className={styles.inputDiv}>
          <div className={styles.row}>
            <h4>amount (BNB)</h4>
            <h4>amount </h4>
          </div>
          <div className={styles.row}>
            <div className={styles.inputCol}>
              <div className={styles.inputRow}>
                <input type="number" placeholder="0.00" />
                <button className={styles.max}>MAX</button>
              </div>
              <div className={styles.row}>
                <p>min buy: 0.01 BNB</p>
                <p>Max buy: 45 BNB</p>
              </div>
            </div>
            <h5>= 0.00</h5>
          </div>
          <Button text={"approve BNB"} />
        </div>
        <div className={styles.statusDiv}>
          <div className={styles.row}>
            <h3>status</h3>
            <p>in progress</p>
          </div>
          <div className={styles.row}>
            <h3>fair launch price</h3>
            <p>0.0001825 BNB</p>
          </div>
          <div className={styles.row}>
            <h3>total raise (BNB)</h3>
            <p>3650</p>
          </div>
        </div>
        <div className={styles.btnDiv}>
          <Button text={"Connect Wallet"} />
          <Button text={"Claim"} />
        </div>
      </div>
    </div>
  );
}

export default PreSale;
