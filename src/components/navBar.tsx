import Image from "next/image";
import React from "react";
import styles from "../../styles/Nav.module.css";
import Link from "next/link";

const navBar = () => {
	return (
		<div>
			<nav className={styles.navBar}>
				<div className={styles.logo}>
					<Link href="/">
						<Image src="/logo.png" alt="Logo" width={112} height={24} />
					</Link>
				</div>
				<ul className={styles.navList}>
					<li>
						<Link href="/about">about</Link>
					</li>
					<li>
						<Link href="/career">career</Link>
					</li>
					<li>
						<Link href="/team">team</Link>
					</li>
				</ul>
				<a href="#join" className={styles.button}>join now</a>
			</nav>
		</div>
	);
};

export default navBar;
