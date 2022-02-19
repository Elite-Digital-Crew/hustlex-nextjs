import Image from "next/image";
import React, { useEffect, useRef } from "react";
import styles from "../../styles/Home.module.css";



const Feature = () => {
	return (
		<div className={styles.Feature} id="feature">
			{/* <div className={styles.animation} ref={container} /> */}
			<img src="/features.png" alt="" className={styles.features} />
		</div>
	);
};

export default Feature;
