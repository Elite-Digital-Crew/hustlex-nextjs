import Image from "next/image";
import React, { FC } from "react";
import styles from "../../styles/Home.module.css";
import PreRegisterButton from "./preRegisterButton";

type Props = {
	onScroll: () => void;
};

const Hero: FC<Props> = ({ onScroll }) => {
	return (
		<div className={styles.hero}>
			<div className={styles.content}>
				<img src="/hero.png" alt="" className={styles.heroimg} />
				<h1>Social Fitness</h1>
				<p>
					Personalized AI Workouts. Meet people Earn rewards. Compete with
					friends.
				</p>
				<PreRegisterButton onScroll={onScroll} />
			</div>
		</div>
	);
};

export default Hero;
