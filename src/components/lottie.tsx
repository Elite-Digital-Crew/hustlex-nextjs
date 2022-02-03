import Image from "next/image";
import React, { useEffect, useRef } from "react";
import styles from "../../styles/Home.module.css";

import lottie from "lottie-web";

const Lottie = () => {
	const container: any = useRef(null);

	useEffect(() => {
		lottie.loadAnimation({
			container: container.current,
			renderer: "svg",
			loop: true,
			autoplay: true,
			animationData: require("../../public/animation.json"),
		});
	}, []);
	return (
		<div className={styles.lottie} id="home">
			{/* <div className={styles.animation} ref={container} /> */}
			<img src="/iphone-outline.png" alt="" className={styles.iphone} />
			<img src="/background.png" alt="" className={styles.background} />
		</div>
	);
};

export default Lottie;
