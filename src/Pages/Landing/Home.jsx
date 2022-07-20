import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Routes } from "react-router-dom";

import Header from "../../Layout/HeaderLanding/Header";
import Footer from "../../Layout/FooterLanding/Footer";
import LandingHero from "./LandingHero/LandingHero";
import PreSale from "./PreSale/PreSale";
function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1200,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="home">
      <Header />
      <Routes>
        <Route path="/" element={<LandingHero />} />
        <Route path="/Presale" element={<PreSale />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Home;
