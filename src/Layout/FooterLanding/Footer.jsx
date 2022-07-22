import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faTelegram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

import styles from "./Footer.module.css";
import logo from "../../Assets/logo.svg";
import { Link } from "react-router-dom";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
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
              <Link to={"/Presale"} onClick={() => window.scrollTo(0, 0)}>
                PreSale
              </Link>
              <Link to={"/Whitepaper"} onClick={() => window.scrollTo(0, 0)}>
                Whitepaper
              </Link>
              <Link to={"/About"} onClick={() => window.scrollTo(0, 0)}>
                About us
              </Link>
              <a href="#">Buy PTX</a>
              <Link
                to="/Contact"
                onClick={() => window.scrollTo(0, 0)}
                className={styles.navLinks}
              >
                Contact us
              </Link>
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
              <a href="https://discord.gg/protocolx" target={"blank"}>
                Discord
              </a>
              <a href="https://twitter.com/protocolx_" target={"blank"}>
                Twitter
              </a>
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
      </div>
    </div>
  );
}

export default Footer;
