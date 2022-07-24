import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import Swap from "./Swap";
import styles from "./styles/Trade.module.css";
// import Limit from "./Limit";
import Liquidity from "./Liquidity";
function Trade() {
  return (
    <div className={styles.trade}>
      <div className={styles.tradeHeader}>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/Protocol/Trade/"}
        >
          Swap
        </NavLink>
        {/* <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/Protocol/Trade/Limit"}
        >
          Stake
        </NavLink> */}
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/Protocol/Trade/Liquidity"}
        >
          Liquidity
        </NavLink>
      </div>
      <Routes>
        <Route path="/" element={<Swap />} />
        {/* <Route path="/Limit" element={<Limit />} /> */}
        <Route path="/Liquidity" element={<Liquidity />} />
      </Routes>
    </div>
  );
}

export default Trade;
