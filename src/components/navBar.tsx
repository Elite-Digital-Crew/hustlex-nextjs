import Image from "next/image";
import React from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

const navBar = () => {
	return (
		<div>
			<nav className={styles.navBar}>
				<ul className={styles.navList}>
					<div className={styles.logo}>
						<Link href="/">
							<Image src="/logo-light.png" alt="Logo" width={112} height={24} />
						</Link>
					</div>
					<li>
						<Link href="#home">Home</Link>
					</li>
					<li>
						<Link href="#feature">Features</Link>
					</li>
					<li>
						<Link href="/team">Team</Link>
					</li>
					<li>
						<Link href="#footer">Contact</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default navBar;
