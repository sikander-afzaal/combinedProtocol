import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faTelegram,
  faDiscord,
  faInstagram,
  faMedium,
  faLinkedin,
  faGithub,
  faReddit,
} from "@fortawesome/free-brands-svg-icons";

import styles from "./Footer.module.css";
import logo from "../../Assets/logo.svg";
function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.topFooterCont}>
        <div className={styles.topFooter}>
          <div className={styles.leftFooter}>
            <img src={logo} alt="" />
            <p>
              We aspire to develop a large-scale ecosystem that is the future of
              decentralized finance. Having one basic formula or business model
              in a protocol opens the opportunity for significant failure
              points, often relying on one avenue for growth and development.
            </p>
          </div>
          <div className={styles.rightFooter}>
            <div className={styles.colFooter}>
              <h1>Map</h1>
              <a href="#">Presale </a>
              <a href="#">Whitepaper</a>
              <a href="#">About us</a>
              <a href="#">Buy PTX</a>
              <a href="#">Contact Us</a>
              <a href="#">Chart</a>
            </div>

            <div className={styles.colFooter}>
              <h1>Products</h1>
              <a href="#">$PTX</a>
              <a href="#">XShare</a>
              <a href="#">XSwap </a>
              <a href="#">Dex</a>
              <a href="#">Farming & Staking</a>
            </div>
            <div className={styles.colFooter}>
              <h1>Community</h1>
              <a href="#">Discord</a>
              <a href="#">Twitter</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomFooterCont}>
        {" "}
        <div className={styles.bottomFooter}>
          <p>
            Copyright © 2022 – ProtocolX | terms & conditions | Designed by
            Woxcreativedesign
          </p>
          <div className={styles.socialDiv}>
            <a href="#">
              <FontAwesomeIcon icon={faTelegram} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faDiscord} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faMedium} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faReddit} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
