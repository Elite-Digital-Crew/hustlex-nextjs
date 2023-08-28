import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Footer } from "../src/components/footer";
import styles from "../styles/Hero.module.css";

const About = () => {
  return (
    <div>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutnav}>
          <Image width={72} height={72} src="/logo-p.png" alt="logo" />
          <Link href="/">
            <a className={styles.button}>back to website</a>
          </Link>
        </div>
        <h1 className={styles.mainText}>
          Building the best <br /> <i>Fitness</i> experience <i>ever.</i>
        </h1>
        <p>
          HustleX - Your Path to Fitness Greatness! <br /> <br />
          Are you tired of the same old fitness routines that lack excitement
          and motivation? Well, we have got something extraordinary for you!
          Introducing HustleX, the gamified fitness app that transforms your
          workout experience into a thrilling game. With HustleX, we integrated
          captivating game mechanics like XP, Levels, Streaks, and Leaderboards
          into your everyday fitness routine. No more boring workouts or
          lackluster progress tracking : we make fitness fun and engaging, just
          like playing a game! <br /> <br />
          Here is how it works: as you embark on your fitness journey, achieving
          your goals and conquering new milestones, we reward you with Hustle
          Coins. These valuable coins serve as a token of your accomplishments
          and dedication. The more you push yourself, the more coins you earn!
          But it doesnt stop there. With your hard-earned Hustle Coins, you
          unlock a world of exclusive rewards and enjoy heavy discounts on
          carefully curated products from renowned brands. Imagine treating
          yourself to top-notch fitness gear, nutritional supplements, and much
          more, all at incredible prices! <br /> <br />
          At HustleX, we understand that your fitness journey is unique to you.
          Thats why we strive to create an app that caters to your individual
          needs, providing an experience like no other. Our sleek and
          user-friendly design ensures a seamless navigation, allowing you to
          focus on what truly matter: achieving your fitness goals. <br />{" "}
          <br />
          We value your feedback and opinions, as they shape the future of
          HustleX and our upcoming suite of fitness products. Each email sent to
          <i>
            <b> social.hustlex@gmail.com</b>
          </i>{" "}
          is read and appreciated, as we continuously strive to improve and
          offer the best possible experience. <br /> <br />
          If you havent joined the HustleX community yet, we invite you to
          download our app and embark on an exhilarating fitness journey. Let us
          be your trusted companion in your pursuit of greatness. It would be an
          honor and a privilege to play a small role in your fitness life.{" "}
          <br /> <br />
          Remember, at HustleX, fitness is no longer a chore : its a thrilling
          adventure waiting to be conquered. Get ready to unleash your potential
          and Hustle like never before!
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
