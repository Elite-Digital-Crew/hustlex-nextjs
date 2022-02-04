import type { NextPage } from "next";

import styles from "../styles/Home.module.css";

import Head from "next/head";

import NavBar from "../src/components/navBar";
import Hero from "../src/components/home";
import SubHero from "../src/components/subHero";
import Lottie from "../src/components/lottie";
import { PreRegister } from "../src/components/preRegister";
import { Footer } from "../src/components/footer";
import { createRef } from "react";

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
				<link rel="icon" href="/logo-sm.png" />
				<title>
					Gamified Social Fitness App that rewards you for your fitness
					activity.
				</title>
				<meta name="" />
				<meta
					name="description"
					content="A gamified social fitness platform that rewards you for your fitness activity."
				/>
				{/* twitter */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:card" content="summary_small_image" />
				<meta name="twitter:site" content="@hustlexclub" />
				<meta name="twitter:creator" content="Chinmay P Dev" />
				<meta name="twitter:title" content="Social Fitness App" />
				<meta
					name="twitter:description"
					content="A gamified social fitness platform that rewards you for your fitness activity."
				/>
				<meta name="twitter:image" content="/coverImage.png" />
				{/* facebook */}
				<meta property="og:url" content="https://www.hustlex.club" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Social Fitness App" />
				<meta
					property="og:description"
					content="A gamified social fitness platform that rewards you for your fitness activity."
				/>
				<meta property="og:image" content="/coverImage.png" />

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap"
					rel="stylesheet"
				></link>
			</Head>
			<NavBar />
			<Hero onScroll={scroll} title={"Gamified"} title2="Fitness" description="turn your fitness into a game!!"/>
			<Lottie />
			<SubHero
				title={"game of fitness"}
				discription={
					"Challenges, Experience points, Badges, Leaderboards and more game like features to motivate you towards fitness."
				}
				img={"/event.png"}
			/>
			<SubHero
				title={"Earn Rewards"}
				discription={
					"Every time you do something on HustleX, you receive Hustle coins. you can use these coins to get exclusive rewards."
				}
				img={"/reward.png"}
			/>
			<SubHero
				title={"HUSTLE \n MEET"}
				discription={
					"Share posts with friends, See what your friends are doing now with activity status. Find people to exercise or play with, in your locality with Hustle Meet."
				}
				img={"/workout.png"}
			/>
			<PreRegister ref={preRegisterRef} />
			<Footer />
		</div>
	);
};

export default Home;
