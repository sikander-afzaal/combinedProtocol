import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faArrowRightFromBracket,
  // faEllipsis,
  faGear,
  faGlobe,
  faMoneyBillTrendUp,
  faSackDollar,
  // faShapes,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.css";
import logoDesk from "../../Assets/logo-desk.svg";
import logoMob from "../../Assets/logo-mob.png";
import small from "../../Assets/icon.png";
function Header() {
  const [menu, setMenu] = useState("");
  const [lang, setLang] = useState(false);
  return (
    <>
      <div className={styles.header}>
        <div className={styles.leftHeader}>
          <Link className={styles.logo} to={"/"}>
            <img src={logoDesk} alt="" />
          </Link>
          <Link className={styles.logoMob} to={"/"}>
            <img src={logoMob} alt="" />
          </Link>
          <div className={`${styles.navLink}  ${styles.navLink1}`}>
            <Link className={styles.mainNav} to={"/Protocol/Trade/"}>
              Trade
            </Link>
            <div className={`${styles.dropMenu} ${styles.dropMenu1}`}>
              <Link to={"/Protocol/Trade/"}>Swap</Link>
              {/* <Link to={"/Protocol/Trade/Limit"}>Stake</Link> */}
              <Link to={"/Protocol/Trade/Liquidity"}>Liquidity</Link>
            </div>
          </div>
          <div className={`${styles.navLink}  ${styles.navLink2}`}>
            <Link className={styles.mainNav} to={"/Protocol/Earn/Farm"}>
              Earn
            </Link>
            <div className={`${styles.dropMenu} ${styles.dropMenu2}`}>
              <Link to={"/Protocol/Earn/Farm"}>Farms</Link>
              <Link to={"/Protocol/Earn/Pools"}>Pools</Link>
            </div>
          </div>
          <div className={`${styles.navLink}  ${styles.navLink3}`}>
            <Link className={styles.mainNav} to={"/Protocol/Win/Lottery"}>
              Win
            </Link>
            <div className={`${styles.dropMenu} ${styles.dropMenu3}`}>
              <Link to={"/Protocol/Win/Lottery"}>Lottery</Link>
            </div>
          </div>
          {/* <div className={`${styles.navLink}  ${styles.navLink4}`}>
            <Link className={styles.mainNav} to={"/Protocol"}>
              NFT
            </Link>
            <div className={`${styles.dropMenu} ${styles.dropMenu4}`}>
              <Link to={"/Protocol"}>Overview</Link>
              <Link to={"/Protocol"}>Collections</Link>
              <Link to={"/Protocol"}>Activity</Link>
            </div>
          </div> */}
          {/* <div className={`${styles.navLink}  ${styles.navLink5}`}>
            <div className={styles.mainNav}>
              <FontAwesomeIcon icon={faEllipsis} />
            </div>

            <div className={`${styles.dropMenu} ${styles.dropMenu5}`}>
              <Link to={"/Protocol"}>Info</Link>
              <Link to={"/Protocol"}>IFO</Link>
              <Link to={"/Protocol"}>Voting</Link>
              <Link to={"/Protocol"} className={styles.border}>
                Leaderboard
              </Link>
              <Link to={"/Protocol"}>
                Blog{" "}
                <span>
                  <FontAwesomeIcon icon={faArrowRightFromBracket} />
                </span>
              </Link>
              <Link to={"/Protocol"}>
                Docs{" "}
                <span>
                  <FontAwesomeIcon icon={faArrowRightFromBracket} />
                </span>
              </Link>
            </div>
          </div> */}
        </div>
        <div className={styles.rightHeader}>
          <div className={styles.amount}>
            <img src={small} alt="" className={styles.small} />
            <p>$3.54</p>
          </div>
          <div
            onClick={() =>
              setLang((prev) => {
                return !prev;
              })
            }
            className={styles.languageDiv}
          >
            <FontAwesomeIcon icon={faGlobe} />
            <div
              className={`${styles.languageDrop} ${
                lang ? styles.displayFlex : ""
              }`}
            >
              <p>English</p>
              <p>English</p>
              <p>English</p>
              <p>English</p>
              <p>English</p>
              <p>English</p>
              <p>English</p>
              <p>English</p>
              <p>English</p>
              <p>English</p>
              <p>English</p>
              <p>English</p>
              <p>English</p>
              <p>English</p>
              <p>English</p>
              <p>English</p>
            </div>
          </div>
          <FontAwesomeIcon icon={faGear} />
          <button className={styles.connect}>Connect Wallet</button>
        </div>
      </div>

      {/* bottom bar starts here ------------------------------  */}
      <div
        onClick={() => setMenu("")}
        className={`${styles.overlay} ${menu !== "" ? styles.openOverlay : ""}`}
      ></div>
      <div className={styles.bottomBar}>
        <div
          onClick={() =>
            setMenu((prev) => {
              if (prev === "TRADE") {
                return "";
              }
              return "TRADE";
            })
          }
          className={`${styles.mobLink} ${styles.mobLink2}`}
        >
          <FontAwesomeIcon icon={faMoneyBillTrendUp} />
          <p>Trade</p>
          <div
            className={`${styles.dropMenu}  ${
              menu === "TRADE" ? styles.openMenu : ""
            }`}
          >
            <Link to={"/Protocol/Trade/"}>Swap</Link>
            {/* <Link to={"/Protocol/Trade/Limit"}>Stake</Link> */}
            <Link to={"/Protocol/Trade/Liquidity"}>Liquidity</Link>
          </div>
        </div>
        <div
          onClick={() =>
            setMenu((prev) => {
              if (prev === "EARN") {
                return "";
              }
              return "EARN";
            })
          }
          className={`${styles.mobLink} ${styles.mobLink2}`}
        >
          <FontAwesomeIcon icon={faSackDollar} />
          <p>Earn</p>
          <div
            className={`${styles.dropMenu}  ${
              menu === "EARN" ? styles.openMenu : ""
            }`}
          >
            <Link to={"/Protocol/Earn/Farm"}>Farms</Link>
            <Link to={"/Protocol/Earn/Pools"}>Pools</Link>
          </div>
        </div>
        <div
          onClick={() =>
            setMenu((prev) => {
              if (prev === "WIN") {
                return "";
              }
              return "WIN";
            })
          }
          className={`${styles.mobLink} ${styles.mobLink3}`}
        >
          <FontAwesomeIcon icon={faTrophy} />
          <p>Win</p>
          <div
            className={`${styles.dropMenu}  ${
              menu === "WIN" ? styles.openMenu : ""
            }`}
          >
            <Link to={"/Protocol/Win/Lottery"}>Lottery</Link>
          </div>
        </div>
        {/* <div
          onClick={() =>
            setMenu((prev) => {
              if (prev === "NFT") {
                return "";
              }
              return "NFT";
            })
          }
          className={`${styles.mobLink} ${styles.mobLink4}`}
        >
          <FontAwesomeIcon icon={faShapes} />
          <p>Nft</p>
          <div
            className={`${styles.dropMenu}  ${
              menu === "NFT" ? styles.openMenu : ""
            }`}
          >
            <Link to={"/Protocol"}>Overview</Link>
            <Link to={"/Protocol"}>Collections</Link>
            <Link to={"/Protocol"}>Activity</Link>
          </div>
        </div> */}
        {/* <div
          onClick={() =>
            setMenu((prev) => {
              if (prev === "MENU") {
                return "";
              }
              return "MENU";
            })
          }
          className={`${styles.mobLink} ${styles.mobLink5}`}
        >
          <FontAwesomeIcon icon={faEllipsis} />
          <div
            className={`${styles.dropMenu}  ${
              menu === "MENU" ? styles.openMenu : ""
            }`}
          >
            <Link to={"/Protocol"}>Info</Link>
            <Link to={"/Protocol"}>IFO</Link>
            <Link to={"/Protocol"}>Voting</Link>
            <Link to={"/Protocol"} className={styles.border}>
              Leaderboard
            </Link>
            <Link to={"/Protocol"}>
              Blog{" "}
              <span>
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
              </span>
            </Link>
            <Link to={"/Protocol"}>
              Docs{" "}
              <span>
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
              </span>
            </Link>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Header;
