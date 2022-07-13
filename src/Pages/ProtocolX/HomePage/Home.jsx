import React from "react";
import { Link } from "react-router-dom";
// import patt from "../../../Assets/hero-patt.svg";
import Button from "../../../Components/Button/Button";
// import Slider from "../../../Components/Slider/Slider";
// import Cake from "./Cake";
// import Connect from "./Connect";
// import Earn from "./Earn";
// import Hero from "./Hero";
// import Prizes from "./Prizes";
import styles from "./styles/Home.module.css";
// import Trade from "./Trade";
// import Users from "./Users";
function Home() {
  return (
    <div className={styles.home}>
      {/* <div className={styles.heroBg}>
        <Slider />
        <Hero />
        <img src={patt} className={styles.heroPatt} alt="" />
      </div>
      <Users />
      <Trade />
      <Earn />
      <Prizes />
      <Cake />
      <Connect /> */}
      <Link to="/PancakeSwap/Trade">
        <Button text={"Trade Now"} inverse />
      </Link>
      <Button text={"Connect Wallet"} />
    </div>
  );
}

export default Home;
