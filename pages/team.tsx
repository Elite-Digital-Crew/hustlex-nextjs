import { NextPage } from "next";
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
					<img src="./logo-p.png" alt="logo" />
					<a href="/" className={styles.button}>back to website</a>
				</div>
				<h1>meet our team.</h1>
			</div>
			<div className={styles.teamContainer}>
				<Member
					name="Chinmay P Dev"
					role="Founder"
					img="./team-1.png"
					twitter="https://twitter.com/chinmay_x"
				/>
				<Member
					name="Samuel Villegas"
					role="Teach Lead"
					img="./team-3.png"
					twitter="https://twitter.com/devsamuelv"
				/>
				<Member
					name="Ritesh Parmar"
					role="Product Designer"
					img="./team-2.png"
					twitter="https://www.linkedin.com/in/riteshparmar7/"
				/>
			</div>
			<div className={styles.textContainer}>
				<p>
					we are gen-z minds that craves to execute, working for a greater cause and real issue. Building the best ever fitness experience isn’t easy and can’t be done alone. We are looking for dope people who want to impact the world and build their career. <br/> <br/>
					check for open positions and if you think you are a good fit, we are glad to get you on board. if you dont find any relavent roles, reach out to us and we might help you in some way. 
				</p>
				<a href="/career" className={styles.button}>open positions</a>
			</div>
			<Footer />
		</div>
	);
};

export default Team;
