import type { NextPage } from "next";

import styles from "../styles/Home.module.css";

import Head from "next/head";
import Image from "next/image";

import HeroPNG from "/public/src/img/hero.png";

import NavBar from "../src/components/navBar";
import Hero from "../src/components/home";
import SubHero from "../src/components/subHero";
import Lottie from "../src/components/lottie";
import { PreRegister } from "../src/components/preRegister";
import { Footer } from "../src/components/footer";
import { createRef, useRef } from "react";

const Home: NextPage = () => {
	const preRegisterRef = createRef<HTMLInputElement>();

	const scroll = () => {
		if (preRegisterRef.current != null) {
			preRegisterRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>Social Fitness</title>
				<meta name="description" content="AI And Social Fitness app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavBar />
			<Hero onScroll={scroll} />
			<Lottie />
			<SubHero
				title={"HUSTLE\n MEET"}
				discription={
					"HustleX is the first of its kind app which lets you find people that are into the same things as you, be it yoga, running, or even just meeting for a cup of coffee."
				}
				img={"/event.png"}
			/>
			<SubHero
				title={"HUSTLE\n WORKOUT"}
				discription={
					"AI-powered workout builder which lets you build your own personalized workout in a jiffy. So no more browsing through the internet for the right workout."
				}
				img={"/workout.png"}
			/>
			<SubHero
				title={"Rewards"}
				discription={
					"Every time you do something on HustleX, you receive Hustle coins. you can use these coins to get exclusive rewards."
				}
				img={"/reward.png"}
			/>
			<PreRegister ref={preRegisterRef} />
			<Footer />
		</div>
	);
};

export default Home;
