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
		</div>
	);
};

export default Hero;
