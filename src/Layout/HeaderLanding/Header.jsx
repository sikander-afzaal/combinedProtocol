import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";
import logo from "../../Assets/logo.svg";
import MetaGrid from "../../Components/MetaGrid/MetaGrid";

function Header() {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [bg, setBg] = useState(false);
  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 80) {
        setBg(true);
      } else {
        setBg(false);
      }
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div className={`${styles.headerCont}  ${bg ? styles.blackBg : ""}`}>
      {modal && <MetaGrid setModal={setModal} />}
      <div className={styles.header}>
        <div
          onClick={() => setOpen(false)}
          className={`${styles.overlay}  ${open ? styles.openOverlay : ""}`}
        ></div>
        <Link to={"/"}>
          <img src={logo} className={styles.logo} alt="" />
        </Link>
        <div
          className={`${styles.rightHeader}  ${open ? styles.openHeader : ""}`}
        >
          <FontAwesomeIcon
            onClick={() => setOpen(false)}
            icon={faXmark}
            className={styles.mobile}
          />
          <Link
            onClick={() => setOpen(false)}
            to={"/Presale"}
            className={styles.navLinks}
          >
            Pre-sale
          </Link>
          <Link
            onClick={() => setOpen(false)}
            to={"/Whitepaper"}
            className={styles.navLinks}
          >
            Whitepaper
          </Link>
          <Link
            onClick={() => setOpen(false)}
            to={"/About"}
            className={styles.navLinks}
          >
            About us
          </Link>
          <Link
            onClick={() => setOpen(false)}
            to="/Contact"
            className={styles.navLinks}
          >
            Contact us
          </Link>

          <Link
            onClick={() => setOpen(false)}
            className={styles.navLinks}
            to="/PancakeSwap"
          >
            Buy PTX
          </Link>
          <Link
            onClick={() => setOpen(false)}
            to={"/PancakeSwap"}
            className={styles.navLinks}
          >
            dex
          </Link>
          <button
            onClick={() => {
              setModal(true);
              setOpen(false);
            }}
            className={styles.ctaBtn}
          >
            Connect Wallet
          </button>
        </div>
        <FontAwesomeIcon
          onClick={() => setOpen(true)}
          icon={faBars}
          className={styles.mobile}
        />
      </div>
    </div>
  );
}

export default Header;
