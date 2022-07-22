import React from "react";
import Works from "./Works/Works";
import Hero from "./Hero/Hero";
import styles from "../Home.module.css";
import Model from "./Model/Model";
import BoxRow1 from "./BoxRow1/BoxRow1";
import BoxRow2 from "./BoxRow2/BoxRow2";
import Treasury from "./Treasury/Treasury";
import Tokenomics from "./Tokenomics/Tokenomics";
import Faq from "./Faq/Faq";
import Roadmap from "./Roadmap/Roadmap";

function LandingHero() {
  return (
    <div>
      <div className={styles.heroBg}>
        <Hero />
        <Works />
      </div>
      <Model />
      <BoxRow1 />
      <div className={styles.blackBg}>
        <BoxRow2 />
        <Treasury />
        <Tokenomics />
        <Faq />
      </div>
      <Roadmap />
    </div>
  );
}

export default LandingHero;
