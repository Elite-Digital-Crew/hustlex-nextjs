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
			{/* <NavBar /> */}
			<div className={styles.hero}>
				<div className={styles.content}>
					<h1>people building HustleX</h1>
					<p>
						Get to know more about us, what we do. Let us know if you would like
						to work with us.
					</p>
				</div>
			</div>
			<div className={styles.teamContainer}>
				<Member
					name="Chinmay P Dev"
					role="Founder & CEO"
					img="./team-1.png"
					discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				/>
				<Member
					name="Ritesh Parmar"
					role="Product Designer"
					img="./team-2.png"
					discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				/>
				<Member
					name="Samuel Villegas"
					role="Tech Lead"
					img="./team-3.png"
					discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				/>
				<Member
					name="Priyanshu Dutta"
					role="Business"
					img="./team-4.png"
					discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				/>
			</div>
			<div className={styles.whyContainer}>
				<div className={styles.left}>
					<h1>Why you should join us?</h1>
					<p>
						we are gen-z minds working on a problem, encouraging team that
						craves to execute. working for a greater cause and real issue. we
						are looking for people who always want to hustle!!!
					</p>
				</div>
				<div className={styles.right}>
					<img src={"./team-join.png"} alt="" className={styles.whyimg} />
				</div>
			</div>
			<div className={styles.jobcta}>
				<h1>Checkout the open positions</h1>
				<Link href="/career">Take me there</Link>
			</div>
			<PreRegister />
			<Footer />
		</div>
	);
};

export default Team;
