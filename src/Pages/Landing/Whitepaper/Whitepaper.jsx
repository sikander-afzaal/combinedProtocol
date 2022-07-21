import React from "react";
import styles from "./Whitepaper.module.css";
import img from "../../../Assets/whitepaper.png";
function Whitepaper() {
  return (
    <div className={styles.whitepaper}>
      <div className={styles.textCont}>
        <h1>ProtocolX: </h1>
        <p>
          ProtocolX aspires to develop a large-scale ecosystem that is the
          future of decentralized finance. Having one basic formula or business
          model in a protocol opens the opportunity for significant failure
          points, often relying on one avenue for growth and development.
          ProtocolX is here to change the game by implementing an
          ever-developing, expanding, and growing ecosystem that all feeds into
          each other.
        </p>
        <p>
          ProtocolX will be launching on the Binance Smart Chain and launching a
          PTX rebase token on BSC.
        </p>
        <p>
          A separate token (XSWAP) will be utilized as a farm token (5B supply
          distributed per year / 50B max circulating token supply). $XSWAP will
          be the native token of our own Decentralized Exchange and will utilize
          farming/staking to distribute the supply.
        </p>
        <p>
          ProtocolX is developing and launching a professionally developed
          decentralized exchange (DEX), full Web3 integration, and liquidity
          farming platform/staking platform.
        </p>
        <p>
          XShare is your way to be a share-holder to our ever-expanding
          ecosystem. The XShare model will be implemented by offering NFTs to
          mint. Each owner of these NFTs will be entitled to a built in revenue
          share system for every branch of the ecosystem as they are developed.
        </p>
      </div>
      <div className={styles.textCont}>
        <h1>How it all works: </h1>
        <h4>Auto-Compounding protocol</h4>
        <p>
          ProtocolX $PTX begins as a 1.77% daily auto-rebasing token. What does
          that mean? Once you buy the token, it will begin to automatically
          rebase in your wallet. No work to do to make the magic happen!
        </p>
        <p>
          Just by simply holding the $PTX token in your wallet, you will receive
          rebases every 30 minutes that are directly and immediately added to
          your wallet (no claiming required).
        </p>
        <h4>SEM (Sustainable Emissions Model)</h4>
        <p>
          Once per 30 days, APY will be reduced by 10% from the previous month.
          This allows for the token to continue to maintain positive price
          action pressure while the PTX token rebases with a flexible supply.
          This will continue each month for 12 events, ending with a fixed .5%
          daily yield rate (rebasing every 30 minutes).
        </p>
        <p>
          What do we mean by this? While it is not a classical “halving” in the
          sense of daily yield being reduced by 50%, it is a means of reducing
          emissions rate over time in a structured and predictable means in
          order to maintain growth of the protocol.
        </p>
        <p>
          Historically speaking, these types of emissions models to promote
          sustainability have inspired genuine growth in market cap and token
          price.
        </p>
        <p>
          Long-term sustainability and transparency is a priority for ProtocolX.
        </p>
        <p>
          As reductions in increasing supply are implemented, the more the
          positive price action variables can push the token price action.
        </p>
        <p>
          While we are not BTC and certainly have different tokenomic variables,
          the economic theory of reducing minted token yield is sound and proven
          in finance.
        </p>
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default Whitepaper;
