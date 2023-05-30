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
      <div className={styles.hero}>
        <div className={styles.right}>
          <nav>
            <Link href="/">
              <Image src="/logo.png" alt="Logo" width={180} height={54} />
            </Link>
            <Link href="#join" passHref>
              <a className={styles.button}>join now</a>
            </Link>
          </nav>
          <h1>
            earn hustle coins by doing fitness activity, use them to claim
            rewards.
          </h1>
          <h2>
            HustleX combines gamification and fitness to create the best fitness
            experience ever. reimagine your fitness experience by integrating
            game mechanics into daily fitness routine.
          </h2>
          <section className={styles.QR}>
            <div>
              <img src="/QR.png" alt="Playstore Link" />
            </div>
            <p>
              download <br /> the beta now!!
            </p>
          </section>
          <section className={styles.Playstore}>
            <a href="https://play.google.com/store/apps/details?id=com.hustlex.mvp">
              <img src="/playstore-icon.png" alt="Playstore Link" />
            </a>
            <p>
              download <br /> the beta now!!
            </p>
          </section>
        </div>
        <div className={styles.left}>
          <img src="/hero.png" alt="club" />
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.info1}>
          <h1>
            Turn your daily <br /> fitness into a
          </h1>
          <h2>
            <i>Game</i>
          </h2>
          <p>
            - Get xp and level up. <br /> - Complete challenges. <br /> - 1v1
            your Friends to epic battles <br /> - Grind to top of the
            leaderboards.
          </p>
        </div>
        <div className={styles.dummy}></div>
        <div className={styles.info2}>
          <h1>
            Get{" "}
            <span>
              <i>Rewards</i>
            </span>{" "}
            for <br /> doing the things <br /> you love.
          </h1>
          <p>
            whenever you do a fitness activity, you earn hustle coins, use
            hustle coins to get exclusive rewards and products from top brands.
          </p>
        </div>
      </div>
      <div className={styles.features}>
        <div className={styles.F1}>
          <div className={styles.text}>
            <h1>Daily Fitness Rewards</h1>
          </div>
          <div className={styles.img}>
            <img src="/F1.png" alt="feature" />
          </div>
        </div>
        <div className={styles.F3}>
          <div className={styles.text}>
            <h1>Earn Hustle Coins</h1>
          </div>
          <div className={styles.img}>
            <img src="/F3.png" alt="feature" />
          </div>
        </div>
        <div className={styles.F2}>
          <div className={styles.text}>
            <h1>Join Exciting Challenges</h1>
          </div>
          <div className={styles.img}>
            <img src="/F2.png" alt="feature" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
