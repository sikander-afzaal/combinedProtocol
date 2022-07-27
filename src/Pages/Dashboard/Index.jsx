import React, { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import styles from "./styles/Index.module.css";
import logo from "../../Assets/logo-desk.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faChartSimple,
  faGripVertical,
  faHouse,
  faKey,
  faEnvelope,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTelegram,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import Account from "./Account";
import Calculator from "./Calculator";
function Index() {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <div className={styles.dashboardIndex}>
      <FontAwesomeIcon
        className={styles.mobile}
        icon={faBars}
        onClick={() => setOpenSidebar(true)}
      />
      <div
        onClick={() => setOpenSidebar(false)}
        className={`${styles.overlaySide} ${
          openSidebar && styles.activeOverlay
        }`}
      ></div>
      <div
        className={`${styles.sideBar} ${openSidebar && styles.activeSidebar}`}
      >
        <FontAwesomeIcon
          onClick={() => setOpenSidebar(false)}
          className={styles.mobile}
          icon={faXmark}
        />
        <img src={logo} alt="" />
        <div className={styles.sidebarLinks}>
          <NavLink
            onClick={() => setOpenSidebar(false)}
            className={({ isActive }) => (isActive ? "activeSide" : "")}
            to={"/"}
          >
            <FontAwesomeIcon icon={faHouse} /> Home
          </NavLink>
          <NavLink
            onClick={() => setOpenSidebar(false)}
            className={({ isActive }) => (isActive ? "activeSide" : "")}
            to={"/DashLanding/Dashboard"}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Dashboard
          </NavLink>
          <NavLink
            onClick={() => setOpenSidebar(false)}
            className={({ isActive }) => (isActive ? "activeSide" : "")}
            to={"/DashLanding/Account"}
          >
            <FontAwesomeIcon icon={faKey} /> Your Account
          </NavLink>
          <NavLink
            onClick={() => setOpenSidebar(false)}
            className={({ isActive }) => (isActive ? "activeSide" : "")}
            to={"/DashLanding/Calculator"}
          >
            <FontAwesomeIcon icon={faGripVertical} /> Calculator
          </NavLink>
          <a onClick={() => setOpenSidebar(false)} href="#">
            <FontAwesomeIcon icon={faChartSimple} /> Buy / Sell
          </a>
        </div>
        <div className={styles.socialLinks}>
          <a href="https://t.me/ProtocolX_PTX" target={"blank"}>
            <FontAwesomeIcon icon={faTelegram} />
          </a>
          <a href="https://twitter.com/protocolx_" target={"blank"}>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://discord.gg/protocolx" target={"blank"}>
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a href="mailto:Neal@protocol-x.io" target={"blank"}>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
      <div className={styles.rightDash}>
        <div className={styles.mainOverlay}></div>
        <Routes>
          <Route element={<Dashboard />} path="/Dashboard" />
          <Route element={<Account />} path="/Account" />
          <Route element={<Calculator />} path="/Calculator" />
        </Routes>
      </div>
    </div>
  );
}

export default Index;
