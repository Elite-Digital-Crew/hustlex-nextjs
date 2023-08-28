import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import styles from "../../styles/Hero.module.css";

type Props = {
  onScroll: () => void;
  title: string;
  description: string;
};

const Hero: FC<Props> = ({ onScroll, title, description }) => {
  return (
    <>
      <div className={styles.herobg}>
        <Image layout="fill" src="/hero.png" alt="hero" />
      </div>
      <div className={styles.hero}>
        <nav>
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={180} height={54} />
          </Link>
          <Link href="#join" passHref>
            <a className={styles.button}>join now</a>
          </Link>
        </nav>
        <h1>
          Get <i>Rewards</i> for <br /> being <i>Fit.</i>
        </h1>
        <h2>Reimagine fitness with HustleX.</h2>
        <Link href="#join" passHref>
          <a className={styles.button2}>join now</a>
        </Link>
        <div></div>
      </div>
      <div className={styles.info}>
        <div className={styles.info1}>
          <h1>
            Turn your daily <br /> fitness into a
          </h1>
          <i>Game</i>
          <p>
            - Get xp and level up. <br /> - Complete challenges. <br /> - 1v1
            your Friends to epic battles <br /> - Grind to top of the
            leaderboards.
          </p>
        </div>
        <div className={styles.dummy}></div>
        <div className={styles.info2}>
          <h1>
            Get<i>Rewards</i>
            <br />
            for doing the things you love.
          </h1>
          <p>
            whenever you do a fitness activity, you earn hustle coins, use
            hustle coins to get exclusive rewards and products from top brands.
          </p>
        </div>
      </div>
      <img className={styles.mockupbg} src="/hero-2.png" alt="features" />
      <div className={styles.mockups}>
        <div className={styles.mockup1}>
          <div>
            <h1>Fitness</h1>
            <p>
              Complete challenges, Claim Daily Rewards, Maintain Streaks, Win
              1v1 Battles and more... to earn Hustle Coins and XP.
            </p>
          </div>
          <img src="/mockup-1.png" alt="" />
        </div>
        <div className={styles.mockup2}>
          <img src="/mockup-2.png" alt="" />
          <div>
            <h1>Rewards</h1>
            <p>
              Use these hard earned coins to get free products and crazy
              discounts on curated products from top brands.
            </p>
          </div>
        </div>
      </div>
      <img className={styles.featuresbg} src="/hero-3.png" alt="features" />
      <div className={styles.features}>
        <div className={styles.featuresTop}>
          <div>
            <i>
              <h1>Challenges</h1>
            </i>
            <img src="/feature-1.png" alt="" />
          </div>
          <div>
            <i>
              <h1>Streaks</h1>
            </i>
            <img src="/feature-2.png" alt="" />
          </div>
          <div>
            <i>
              <h1>Leaderboards</h1>
            </i>
            <img src="/feature-3.png" alt="" />
          </div>
        </div>
        <div className={styles.featuresTop}>
          <div>
            <i>
              <h1>Daily Rewards</h1>
            </i>
            <img src="/feature-4.png" alt="" />
          </div>
          <div>
            <i>
              <h1>Stats</h1>
            </i>
            <img src="/feature-5.png" alt="" />
          </div>
          <div>
            <i>
              <h1>1v1 Friends</h1>
            </i>
            <img src="/feature-6.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
