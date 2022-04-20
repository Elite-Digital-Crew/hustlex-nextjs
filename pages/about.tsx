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
					<img src="./logo-p.png" alt="logo" />
					<Link href="/">
						<a className={styles.button}>back to website</a>
					</Link>
				</div>
				<h1>about us.</h1>
				<p>
					HustleX is a gamified fitness app that rewards individuals for their
					fitness activity by providing them with exclusive offers from premium
					brands. It is a platform that helps people stay motivated towards
					fitness by making fitness more game-like. <br /> <br /> The problem
					with most fitness apps is that they are lethargic and are quite
					boring. HustleX would make fitness more fun by integrating game
					elements like points, leaderboards, battlepass(ish), levels, rewards
					and more.
				</p>
			</div>
			<Footer />
		</div>
	);
};

export default About;
