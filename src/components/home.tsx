import Image from "next/image";
import React, { FC } from "react";
import styles from "../../styles/Home.module.css";
import PreRegisterButton from "./preRegisterButton";

type Props = {
	onScroll: () => void;
	title: string;
	title2?: string;
	description: string;
};

const Hero: FC<Props> = ({ onScroll, title, title2, description }) => {
	return (
		<div className={styles.hero}>
			<div className={styles.content}>
				<div>
					<h1>{title}</h1>
					<h2>{title2}</h2>
				</div>
				<p>{description}</p>
				<PreRegisterButton onScroll={onScroll} />
			</div>
			<div className={styles.left}>
				<img className={styles.UI_img_1} src="./UI-MOCKUP-1.png" alt="coverImage" />
				<img className={styles.UI_img_2} src="./UI-MOCKUP-2.png" alt="coverImage"/>
				<img className={styles.UI_img_3} src="./UI-MOCKUP-3.png" alt="coverImage"/>
				<img className={styles.bg_img_1} src="./coins_2.png" alt="coverImage" />
				<img className={styles.bg_img_2} src="./coins.png" alt="coverImage" />
				<img className={styles.bg_img_3} src="./grid.png" alt="coverImage" />
			</div>
		</div>
	);
};

export default Hero;
