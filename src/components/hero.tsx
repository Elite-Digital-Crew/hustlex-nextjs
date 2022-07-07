import Image from "next/image";
import React, { FC } from "react";
import styles from "../../styles/Hero.module.css";	

type Props = {
	onScroll: () => void;
	title: string;
	description: string;
};

const Hero: FC<Props> = ({ onScroll, title, description }) => {
	return (
		<div>
			<div className={styles.hero}>
				<h1>{title}</h1>
				<p>{description}</p>
				<div>
					<img src="/Arrow_Down_LG.svg" alt="My Happy SVG" />
					<h2>there’s more on how that works</h2>	
				</div>
			</div>
			<div className={styles.imgContainer}>
				<img src="/hero.png" alt="club" />
			</div>
			<div className={styles.info}>
				<div className={styles.info1}>
					<h1>We take your motivation seriously.</h1>
					<p>reimagine your fitness experience by integrating game mechanics into daily fitness routine.</p>
				</div>
				<div className={styles.info2}>
					<h1>Get rewards for doing the things you love.</h1>
					<p>whenever you do a fitness activity, you earn hustle coins, use hustle coins to get exclusive rewards and products from top brands.</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;
