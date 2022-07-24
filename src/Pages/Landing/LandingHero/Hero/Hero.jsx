import React from "react";
import { Link } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import styles from "./Hero.module.css";
import circle from "../../../../Assets/hero/circle.png";
import shield from "../../../../Assets/hero/shield.png";
import icon from "../../../../Assets/hero/icon.png";
function Hero() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    return;
  };
  return (
    <div className="cont">
      <div className={styles.heroParticles}>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fullScreen: false,
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 100,
                  duration: 0.8,
                },
              },
            },
            particles: {
              color: {
                value: "rgb(192,0,0)",
              },
              links: {
                color: "rgb(192,0,0)",
                distance: 150,
                enable: true,
                opacity: 0.7,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 3,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 100,
              },
              opacity: {
                value: 0.8,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>
      <div className={styles.hero}>
        <div
          data-aos="fade-right"
          data-aos-delay={200}
          className={styles.leftHero}
        >
          <h1>
            THE FUTURE OF <br /> DECENTRALIZED <br /> FINANCE
          </h1>
          <p>
            ProtocolX is here to change the game by implementing an
            ever-developing, expanding, and growing ecosystem that all feeds
            into each other.
          </p>
          <Link to="/Protocol/Trade" className={styles.ctaBtn}>
            Buy $PTX
          </Link>
        </div>
        <div className={styles.rightHero}>
          <img src={shield} className={styles.sheild} alt="" />
          <img src={icon} className={styles.icon} alt="" />
        </div>
        <img src={circle} className={styles.circle} alt="" />
      </div>
    </div>
  );
}

export default Hero;
