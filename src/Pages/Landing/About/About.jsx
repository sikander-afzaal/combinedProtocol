import React from "react";
import styles from "./About.module.css";
import team1 from "../../../Assets/team/team1.jpg";
import team2 from "../../../Assets/team/team2.jpg";
import team3 from "../../../Assets/team/team3.jpg";
import team4 from "../../../Assets/team/team4.jpg";
import team5 from "../../../Assets/team/team5.jpg";
import team6 from "../../../Assets/team/team6.jpg";
function About() {
  const data = [
    {
      name: "Neal (ShibLord) - Founder/CEO",
      img: team1,
      title: "Neal | USA | 29",
      desc: `Neal is originally from Pennsylvania, but now lives in Texas. Neal
            joined the US Marine Corps after high school, serving roles as an
            infantry squad leader and a humanitarian specialist. After military
            service, Neal obtained his Bachelor's degree in Economics from Penn
            State University. Neal began his interest in cryptocurrency in 2018,
            dipping his feet in the waters of mainstream crypto. In May of 2022,
            Neal moved to crypto as a full time career, leading and managing
            several DeFi protocols on multiple blockchains. Neal values his time
            with those he cares about, his health, and always seeks to bring the
            most to every environment he’s involved in, both personally and
            professionally.`,
    },
    {
      name: "Brandon (Bran) - Community Manager",
      img: team2,
      title: "Brandon | England | 24",
      desc: `I'm a full time crypto enthusiast and have specialised in Community management, moderation and overall project advising for over a year, I first developed my interest in crypto early 2020 and have been committed to growing, building and expanding in the space since, after adopting early blue chips I then found the world of DeFi in late 2020 and have been committed to the space since. I'm a very active person and always looking to expand my skill set to perform to the best of my ability and will be taking the core duties of Community management and overall project development at Protocol X and will ensure that I put my all into being able to grow the project and community. Never settle for less.`,
    },
    {
      name: "Jack (Crypto Kruelty) - Administration Manager",
      img: team3,
      title: "Jack | USA | 34 ",
      desc: `Hey there. My name is Jack. I am 34 years old. I'm a single father. I got into DeFi in early 2021, and have invested in many projects since. Some good, and some bad. This has given me insight on spotting bad actors in the space and protecting others from making uninformed choices. I became a Senior Moderator in the first project I invested in (SFM) and this opened other doors in the DeFi community to help out in other protocols. I have branched off to be a discord administrator, with a focus on bots and keeping the community safe from scams, DM's, etc. I have been full time crypto for over a year and love it! The freedom that this has given me has been truly life changing. I feel like a better man, able to spend more time with my Daughter, and be less stressed. I have been able to connect with a lot of people in DeFi and build those networks to make the space a better and safer place to be. DeFi is about building and innovating so that we all can have a sustainable future. Let's raise a drink to Protocol X's continued success!`,
    },
    {
      name: "Wox - Graphics Design Specialist",
      img: team4,
      title: "Wox | Canada | 33 ",
      desc: `Dad working from home, Graphic Designer, Marketing Strategist, Musician, Computer Building, Moderator  and Crypto Addict. Always been a fan of technology. I developed interest in crypto since I started mining ETH almost 2 years ago, then I developed some skills in trading, and then I learned (The hard way) DeFi. 
      This was when DAO TIME/GG appeared. I have been in defi since and I'm here to make this space a better place for everyone, and being around the best teams in the space!. As you can see, I am a very active person, trying to develop new skills in any needed situation. Leaving nothing behind, learning new technologies, bringing new ideas. I'm never satisfied with keeping it simple, always more & better. `,
    },
    {
      name: "Jared (Sallyczar91) - Advisor",
      img: team5,
      title: "Jared | USA | 30",
      desc: `I'm an Army veteran and current police officer. I have some background in programming. When I was in high school I programmed a couple of games, nothing crazy or intricate. I wanted to go to school for software engineering but joined the Army instead to help pay for schooling. While in the army I started a family and needed to make money when I got out so I ended up not going to school and got a job as a police officer. I am looking to get into solidity and be a full time developer in crypto. Crypto peaked my interest when I looked forward to the future of finance and noticed how versatile it can be for everybody around the world.`,
    },
    {
      name: "Adam (Adam P) - Lead Mod / Advisor",
      img: team6,
      title: "Adam | England | 23 ",
      desc: `I purchased my first cryptocurrency in 2016 and eventually found the DeFi space. Since then I have personally invested in many projects and have often been an early investor following the progression. With my experience and first hand knowledge I joined community management teams and have developed people skills and helping anybody with just about any problem they have with cryptocurrency. In my personal life I am a qualified Motorsport Engineer and have a passion for fast cars!`,
    },
  ];
  return (
    <div className={styles.aboutCont}>
      <div className={styles.about}>
        <h1>Meet The Team</h1>
        <div className={styles.teamGrid}>
          {data.map((team) => {
            return (
              <div className={styles.teamBox}>
                <h2>{team.name}</h2>
                <img src={team.img} alt="" />
                <h3>{team.title}</h3>
                <p>{team.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;
