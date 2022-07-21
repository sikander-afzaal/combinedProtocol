import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import styles from "./Whitepaper.module.css";
import img from "../../../Assets/whitepaper.png";
function Whitepaper() {
  // if you want to add more questions just add another false here or vice versa
  const [open, setOpen] = useState(Array(5).fill(false));

  //function to check which faq is opened
  const clickHandler = (e) => {
    const num = e.target.dataset.num;
    setOpen((prev) => {
      let arr = [...prev];
      let newArr = arr.map((elem, index) => {
        if (index == num) {
          return !elem;
        } else {
          return elem;
        }
      });
      return newArr;
    });
  };
  return (
    <div className={styles.whitepaperCont}>
      <div className={styles.whitepaper}>
        <div className={styles.textCont}>
          <h1>ProtocolX: </h1>
          <p>
            ProtocolX aspires to develop a large-scale ecosystem that is the
            future of decentralized finance. Having one basic formula or
            business model in a protocol opens the opportunity for significant
            failure points, often relying on one avenue for growth and
            development. ProtocolX is here to change the game by implementing an
            ever-developing, expanding, and growing ecosystem that all feeds
            into each other.
          </p>
          <p>
            ProtocolX will be launching on the Binance Smart Chain and launching
            a PTX rebase token on BSC.
          </p>
          <p>
            A separate token (XSWAP) will be utilized as a farm token (5B supply
            distributed per year / 50B max circulating token supply). $XSWAP
            will be the native token of our own Decentralized Exchange and will
            utilize farming/staking to distribute the supply.
          </p>
          <p>
            ProtocolX is developing and launching a professionally developed
            decentralized exchange (DEX), full Web3 integration, and liquidity
            farming platform/staking platform.
          </p>
          <p>
            XShare is your way to be a share-holder to our ever-expanding
            ecosystem. The XShare model will be implemented by offering NFTs to
            mint. Each owner of these NFTs will be entitled to a built in
            revenue share system for every branch of the ecosystem as they are
            developed.
          </p>
        </div>
        <div className={styles.textCont}>
          <h1>How it all works: </h1>
          <h4>Auto-Compounding protocol</h4>
          <p>
            ProtocolX $PTX begins as a 1.77% daily auto-rebasing token. What
            does that mean? Once you buy the token, it will begin to
            automatically rebase in your wallet. No work to do to make the magic
            happen!
          </p>
          <p>
            Just by simply holding the $PTX token in your wallet, you will
            receive rebases every 30 minutes that are directly and immediately
            added to your wallet (no claiming required).
          </p>
          <h4>SEM (Sustainable Emissions Model)</h4>
          <p>
            Once per 30 days, APY will be reduced by 10% from the previous
            month. This allows for the token to continue to maintain positive
            price action pressure while the PTX token rebases with a flexible
            supply. This will continue each month for 12 events, ending with a
            fixed .5% daily yield rate (rebasing every 30 minutes).
          </p>
          <p>
            What do we mean by this? While it is not a classical “halving” in
            the sense of daily yield being reduced by 50%, it is a means of
            reducing emissions rate over time in a structured and predictable
            means in order to maintain growth of the protocol.
          </p>
          <p>
            Historically speaking, these types of emissions models to promote
            sustainability have inspired genuine growth in market cap and token
            price.
          </p>
          <p>
            Long-term sustainability and transparency is a priority for
            ProtocolX.
          </p>
          <p>
            As reductions in increasing supply are implemented, the more the
            positive price action variables can push the token price action.
          </p>
          <p>
            While we are not BTC and certainly have different tokenomic
            variables, the economic theory of reducing minted token yield is
            sound and proven in finance.
          </p>
          <img src={img} alt="" />
        </div>
        <div className={styles.textCont}>
          <h1>XShare: </h1>
          <p>
            Owning a ProtocolX NFT (XShare) is your direct share to the
            company's revenue stream as a whole. This includes a revenue share
            model from the ProtocolX and any other future developments under the
            greater umbrella. We will utilize the DEX and fees to feed the
            revenue share model with additional advancements on the way,
            including the potential for gamification, user-developed models, and
            additional DeFi and real-world business models.
          </p>
          <p>
            Basically, owning a ProtocolX NFT makes you a shareholder in the
            protocol, instantly receiving a revenue share kickback from this
            business and all business models under the ProtocolX umbrella.
          </p>
          <p>
            XShare holders will be given governance powers and will be engaged
            via a voting system for various aspects of this protocol and the
            future developments
          </p>
          <p>
            2% of Buy Fees / 2% of Sales Fees initially go to XShares, before
            expanding for revenue shared from other parts of the ProtocolX
            Ecosystem.
          </p>
        </div>
        <div className={styles.textCont}>
          <h1>NFT Doors (XShare):</h1>
          <p>Dungeon Door: Base NFT Max supply: 20,000</p>
          <p>
            Castle Door: Updated NFT (uses Keys to upgrade) Max Supply: 7500
          </p>
          <p>Egyptian Door: Max updated (uses Keys to upgrade)</p>
          <p>Max Supply: 5000</p>
          <p>
            XKeys are simply a NFT representative of a token used for burn
            mechanisms. So keys are entries to the lottery, upgrade NFTs, etc.
          </p>
        </div>
        <div className={styles.textCont}>
          <h1>XKeys:</h1>
          <p>
            XKeys are ProtocolX’s direct link to XShares, allowing even those
            who do not want to mint their own XShare NFT to benefit from the
            ecosystem.
          </p>
          <p>
            XKeys will be obtained using $PTX (which is automatically added to
            the burn pool).
          </p>
          <p>
            XKeys will give the user entry to a lottery system. This lottery
            system will be enhanced via buy backs of the XShare NFTs. Each entry
            into the lottery gives you one entry, and winner(s) will be selected
            from those entries.
          </p>
          <p>
            The more buybacks of XShares from the PxBB system, the greater the
            reward of the lottery winners (and thus, the more demand for keys
            and additional burn events).
          </p>
        </div>
        <div className={styles.textCont}>
          <h1>Farming and Staking:</h1>
          <p>
            We will implement farming and liquidity pools for single-stake XSWAP
            to earn wPTX, and vice versa.
          </p>
          <p>
            Farm token (XSWAP) with a variable APR to coincide with a fixed
            emissions rate (5B tokens emitted per year over 10 years, max supply
            of 50B XSWAP).
          </p>
          <p>
            With a tiered and controlled emissions rate, we reduce the
            likelihood of the XSWAP token taking significant downward price
            action quickly, as we control the emissions in a structured period
            rather than just simply by max supply (for example:
            monthly/annually).
          </p>
        </div>
        <div className={styles.textCont}>
          <h1>ProtocolX BuyBack (PxBB)</h1>
          <p>
            The entirety of all PxBB (ProtocolX Buyback) funds go to buybacks
            and burns of tokens and XShare NFTs, providing them with a direct
            deflationary pressure.
          </p>
          <p>
            The PxBB is funded by a portion of the buy/sales tax from the token
            itself. 3% of the buy tax and 3% of the sales tax go directly to the
            PxBB, providing for a self-sustaining element of buyback and burns
            for the protocol.
          </p>
          <p>
            Simply put, the more that the token is bought or sold, the greater
            the amount that is sent to the PxBB and, as such, the sustainability
            variables are increased.
          </p>
          <p>
            We are the largest and most efficient buyback/burn wallet of any of
            the mainstream Rebase protocols, as it is designed to directly boost
            the entirety of ProtocolX.
          </p>
        </div>
        <div className={styles.textCont}>
          <h1>Trading Bot Sustainability Mechanism:</h1>
          <p>
            ProtocolX seeks to implement a system that is totally sustained by
            outside revenue sources.
          </p>
          <p>
            Partnering with the EGO Team’s self-developed trading bot gives
            ProtocolX the resources to achieve this sustainability in emissions
            and all protocol expenses.{" "}
          </p>
          <p>
            Achieving total net surplus in revenue and surplus in emissions
            buyback/burn to mints in 12 months is the primary goal.
          </p>
          <p>
            ProtocolX pledges between 10% and 50% of pre-sale funds to the EGO
            Trading Bot to begin to achieve the goal of total sustainability
            from off-protocol revenue.
          </p>
        </div>
        <div className={styles.textCont}>
          <h1>X-SWAP (ProtocolX DEX):</h1>
          <p>
            Implement the DEX and platform. This will allow us to utilize fees
            to conduct buybacks, burns, and other revenue streamlining methods
            for the advancement of the protocol. We can also directly partner
            with other protocols, hosting pre-sales and providing a platform for
            new or established protocols. All fees generated by the DEX feed
            back into the ProtocolX protocol.
          </p>
          <p>Providing a revenue share kickback to XShares.</p>
        </div>
        <div className={styles.textCont}>
          <h1>ProtocolX Treasury:</h1>
          <p>
            The ProtocolX Treasury will be invested in various DeFi protocols
            with varying levels of risk in addition to being reinvested back
            directly into the ProtocolX parent company in order to maintain
            everlasting growth of the entirety of the protocol.
          </p>
          <p>
            Profits generated from the ProtocolX treasury investments are
            reinvested back into the treasury, utilized for buybacks/burned, and
            utilized directly to facilitate additional growth of the protocol.{" "}
          </p>
        </div>
        <div className={styles.textCont}>
          <h1>Automatic Liquidity Router:</h1>
          <p>
            Liquidity Pairs are very important for maintaining the fundamental
            aspects of the token and controlling price movement. Due to this
            being such an important aspect, 20% of pre-sale funds (in BNB) will
            be distributed to Liquidity Pool for Day 1. We will pair this with
            the rebase token $PTX, directly incentivizing us to seek to
            encourage positive price action on our native token always.
          </p>
          <p>
            After pre-sales, we will provide an automatic routing contract of
            the buy tax and sales tax, continuously supporting the liquidity
            pool with every single buy and sell.
          </p>
        </div>
        <div className={styles.textCont}>
          <h1>Tokenomics of ProtocolX:</h1>
          <p>
            ProtocolX will begin with a 50,000,000 (50 million) initial token
            supply
          </p>
          <p>
            PTX will have a variable supply, meaning it will continue to
            increase with the rebase token model.{" "}
          </p>
          <p>There is no max supply for PTX built in at launch. </p>
          <h4>Keeping the token and protocol growing</h4>
          <p>
            Allowing the token to have positive price action pressure is very
            important to the long-term demand aspects of the protocol.
          </p>
          <p>
            ProtocolX will solve this potential inflationary conflict via
            multiple means: Buy/Sale fees that support the token and protocol /
            ProtocolX Buyback Burn system / Sustainable Emissions Model (SEM)
            (10% reduction in APY each month) / Trading Bot Sustainability
            Mechanism / Integrating ProtocolX into a bigger system that will
            promote multiple demand windows over time / Investments involving
            DeFi and real-world strategies.
          </p>
          <div className={styles.list}>
            <h5>Buy Fees: 13%:</h5>
            <ul>
              <li>3% to PxBB fund</li>
              <li>3% to Liquidity </li>
              <li>5% to Treasury</li>
              <li>2% to XShares</li>
            </ul>
          </div>
          <div className={styles.list}>
            <h5>Sell Fees:</h5>
            <ul>
              <li>3% to PxBB fund</li>
              <li>5% to Liquidity </li>
              <li>8% to Treasury</li>
              <li>8% to XShares</li>
            </ul>
          </div>
        </div>
        <div className={styles.textCont}>
          <h1>Distribution of Tokens (PTX):</h1>
          <div className={styles.list}>
            <h5>Initial Supply: 50m PTX</h5>
            <ul>
              <li>Liquidity Tokens: 15m PTX</li>
              <li>Pre-Sale Allocation: 20m PTX</li>
              <li>Team Distribution: 5m PTX</li>
              <li>Treasury Allocation (Marketing): 10m PTX</li>
            </ul>
          </div>
        </div>
        <div className={styles.textCont}>
          <h1>Roadmap:</h1>
          <div className={styles.roadItem}>
            <h1>Q3 2022</h1>
            <div className={styles.roadList}>
              <h4>Build Phase</h4>
              <ul>
                <li>Develop and implement ProtocolX contract</li>
                <li>dApp/Dashboard</li>
                <li>XSWAP</li>
                <li>Farming/Staking platform </li>
                <li>Publish Official Whitepaper</li>
                <li>Develop and Launch website interface</li>
                <li>PR Marketing (YouTube/Twitter/etc.)</li>
                <li>Airdrop to $XSWAP</li>
              </ul>
            </div>
            <div className={styles.roadList}>
              <h4>ProtocolX Live Phase</h4>
              <ul>
                {" "}
                <li>Fair pre-sale launch</li>
                <li>Investment in EGO Trading Bot</li>
                <li>Creation, development, and launch of XShare</li>
                <li>Application for CoinMarketCap / CoinGecko listings</li>
                <li>Additional YouTube marketing campaign</li>
                <li>Develop and establish partnerships (pre/post launch)</li>
                <li>Develop and implement wrapped PTX</li>
                <li>Introduce crypto farming for XSWAP token</li>
                <li>Investing Treasury funds in varying levels of risk</li>
                <li>Single Staking of XSWAP</li>
                <li>XSWAP Lottery system</li>
                <li>PTX burn mechanisms implemented</li>
              </ul>
            </div>
          </div>
          <div className={styles.roadItem}>
            <h1>Q4 2022 - Beyond</h1>
            <div className={styles.roadList}>
              <h4>Expanding the ProtocolX Ecosystem:</h4>
              <ul>
                <li>
                  Introducing gamification systems to promote the PTX/XSWAP
                  token
                </li>
                <li>Initial development of ProtocolX Blockchain</li>
                <li>Integration of NFT Marketplace with ProtocolX</li>
                <li>Hosting pre-sales with DEX</li>
                <li>
                  Development of additional farm/staking on ProtocolX dApp
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.textCont}>
          <h1>The ProtocolX Ecosystem: </h1>
          <div className={styles.roadList}>
            <h4>XShare</h4>
            <p>
              Revenue share NFTs that receive direct kickback from the revenue
              streams of every aspect of the ecosystem.
            </p>
            <p>Governance token for future voting aspects.</p>
            <p>Limited mints available.</p>
          </div>
          <div className={styles.roadList}>
            <h4>XKey</h4>
            <p>ProtocolX’s direct link to XShares.</p>
            <p>
              Keys are purchased with $PTX tokens and directly sent to a burn
              pool.{" "}
            </p>
            <p>
              Increasing lottery system with build in buybacks from the PxBB.
            </p>
          </div>
          <div className={styles.roadList}>
            <h4>ProtocolX</h4>
            <p>
              Revolutionary rebase protocol that is designed to provide a true
              financial incentive for those who engage in DeFi.
            </p>
            <p>
              Direct use-case of the native tokens allow for an increased demand
              for the token.
            </p>
            <p>
              Tokenomics designed to support the protocol over a prolonged
              period of time, thriving in both bear and bull markets alike.{" "}
            </p>
          </div>
          <div className={styles.roadList}>
            <h4>$XSWAP Token</h4>
            <p>
              Cryptocurrency token with a fixed supply and controlled emissions
              released.
            </p>
            <p>
              50B Max circulating supply (5B tokens released per year over 10
              years)
            </p>
            <p>
              Unique tokenomics to incentivize liquidity farms, pools, and
              staking for 10 years.
            </p>
            <p>
              Utilized for multiple components under the ProtocolX umbrella.
            </p>
          </div>
          <div className={styles.roadList}>
            <h4>$PTX Token</h4>
            <p>
              Rebase token that auto-compounds at a rate of 1.77% daily (reduces
              over time)
            </p>
            <p>
              Supported by the demand for the token, buyback/burn mechanisms,
              intentional and calculated decreasing APY, and integration into
              the ProtocolX ecosystem.
            </p>
            <p>50m initial supply / No defined max supply</p>
          </div>
        </div>
        <div className={styles.textCont}>
          <h1>FAQ:</h1>
          <div className={styles.faqDiv}>
            <div className={styles.faqQDiv}>
              <div
                data-num={0}
                onClick={clickHandler}
                className={`${styles.faqBtn} ${
                  open[0] ? styles.borderRadius : ""
                }`}
              >
                <p className={`${open[0] ? styles.activeBtn : ""}`}>
                  How will ProtocolX be different than the other rebase-style
                  protocols?
                </p>
                <FontAwesomeIcon
                  className={`${open[0] ? styles.activeBtn : ""}`}
                  icon={faChevronDown}
                />
              </div>
              <div
                className={`${styles.faqAnswer} ${
                  open[0] ? styles.active : ""
                }`}
              >
                <p className={styles.answer}>
                  You can join us on our Discord at ProtocolX understands the
                  main issues that rebase and auto-staking protocols have run
                  into. Generally speaking, inflation and lack of innovation and
                  growth lead to an eventual demise. Here at ProtocolX, we
                  actively combat inflationary aspects on multiple fronts,
                  innovate and adapt to DeFi trends with growth aspects
                  (farms/pools, staking, DEX, XShares), and will advance the
                  ecosystem with multiple and diverse cryptocurrency and
                  real-world innovations.
                </p>
              </div>
            </div>
            <div className={styles.faqQDiv}>
              <div
                data-num={1}
                onClick={clickHandler}
                className={`${styles.faqBtn} ${
                  open[1] ? styles.borderRadius : ""
                }`}
              >
                <p className={`${open[1] ? styles.activeBtn : ""}`}>
                  How will you burn tokens?
                </p>
                <FontAwesomeIcon
                  className={`${open[1] ? styles.activeBtn : ""}`}
                  icon={faChevronDown}
                />
              </div>
              <div
                className={`${styles.faqAnswer} ${
                  open[1] ? styles.active : ""
                }`}
              >
                <p className={styles.answer}>
                  ProtocolX will implement token burns by various mechanisms.
                  From the beginning, a portion of all buy and sales fees go
                  into a pool that is 100% utilized to conduct burns. As the
                  protocol develops, there will be a lottery system for token
                  burns, NFT mechanism for token burns, investment/bot trading
                  strategy for token burns, and manual token burns from the
                  team/treasury.
                </p>
              </div>
            </div>
            <div className={styles.faqQDiv}>
              <div
                data-num={2}
                onClick={clickHandler}
                className={`${styles.faqBtn} ${
                  open[2] ? styles.borderRadius : ""
                }`}
              >
                <p className={`${open[2] ? styles.activeBtn : ""}`}>
                  How can you help the token price be sustainable?
                </p>
                <FontAwesomeIcon
                  className={`${open[2] ? styles.activeBtn : ""}`}
                  icon={faChevronDown}
                />
              </div>
              <div
                className={`${styles.faqAnswer} ${
                  open[2] ? styles.active : ""
                }`}
              >
                <p className={styles.answer}>
                  ProtocolX is inherently an inflationary token, as it does not
                  have a fixed supply and rebases add to the total supply. By
                  utilizing burns and the Sustainability Emissions Model (APR
                  decreases by 10% per month for 12 months until it hits a .5%
                  daily APR), ProtocolX is able to put a positive price pressure
                  action on the token price.
                </p>
              </div>
            </div>
            <div className={styles.faqQDiv}>
              <div
                data-num={3}
                onClick={clickHandler}
                className={`${styles.faqBtn} ${
                  open[3] ? styles.borderRadius : ""
                }`}
              >
                <p className={`${open[3] ? styles.activeBtn : ""}`}>
                  What is the benefit of having a XShare NFT?
                </p>
                <FontAwesomeIcon
                  className={`${open[3] ? styles.activeBtn : ""}`}
                  icon={faChevronDown}
                />
              </div>
              <div
                className={`${styles.faqAnswer} ${
                  open[3] ? styles.active : ""
                }`}
              >
                <p className={styles.answer}>
                  XShare NFTs are your way to get a piece of the revenue from
                  all aspects of ProtocolX, now and into the future. From the
                  rebase protocol, 3% of the buy fees and 3% of the sales fee go
                  directly to a pool that is distributed to XShare NFT holders.
                  As this protocol grows and we create additional revenue
                  streams, XShares will continue to increase in their reward
                  potential overtime.
                </p>
              </div>
            </div>
            <div className={styles.faqQDiv}>
              <div
                data-num={4}
                onClick={clickHandler}
                className={`${styles.faqBtn} ${
                  open[4] ? styles.borderRadius : ""
                }`}
              >
                <p className={`${open[4] ? styles.activeBtn : ""}`}>
                  How do I begin?
                </p>
                <FontAwesomeIcon
                  className={`${open[4] ? styles.activeBtn : ""}`}
                  icon={faChevronDown}
                />
              </div>
              <div
                className={`${styles.faqAnswer} ${
                  open[4] ? styles.active : ""
                }`}
              >
                <p className={styles.answer}>
                  Getting involved in ProtocolX is quite simple! Ensure you are
                  connected to the Binance Smart Chain, enter our XSWAP dex or
                  the contract address on PancakeSwap, and set slippage to 15%
                  for buys and 20% for sales, and exchange BNB or BUSD for PTX.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whitepaper;
