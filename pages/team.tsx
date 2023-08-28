import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "../src/components/footer";
import Hero from "../src/components/hero";
import NavBar from "../src/components/navBar";
import { PreRegister } from "../src/components/preRegister";

import Member from "../src/components/teamMember";
import styles from "../styles/Team.module.css";

const Team: NextPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.nav}>
          <Image width={72} height={72} src="/logo-p.png" alt="logo" />
          <Link href="/">
            <a className={styles.button}>back to website</a>
          </Link>
        </div>
        <h1>meet our team.</h1>
      </div>
      <div className={styles.teamContainer}>
        <Member
          name="Chinmay P Dev"
          role="Founder, Engineer & Designer"
          img="/team-1.jpg"
          twitter="https://twitter.com/chinmay_x"
        />
        <Member
          name="Siddharth Bharadwaj"
          role="Full-Stack Engineer"
          img="/team-2.png"
          twitter="https://github.com/Sid110307"
        />
        <Member
          name="Samuel Villegas"
          role="Backend Engineer"
          img="/team-3.png"
          twitter="https://twitter.com/devsamuelv"
        />
      </div>
      <div className={styles.textContainer}>
        <p>
          we are gen-z minds that craves to execute, working for a greater cause
          and real issue. Building the best ever fitness experience isn’t easy
          and can’t be done alone. We are looking for dope people who want to
          impact the world and build their career. <br /> <br />
          check for open positions and if you think you are a good fit, we are
          glad to get you on board. if you dont find any relavent roles, reach
          out to us and we might help you in some way.
        </p>
        <Link href="/career">
          <a className={styles.button}>open positions</a>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Team;
