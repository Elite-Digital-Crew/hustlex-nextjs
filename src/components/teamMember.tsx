import React from "react";
import styles from "../../styles/Team.module.css";

interface Props {
    name: string;
    role: string;
    img: string;
    twitter?: string;
}

// SubHero
const Member = (props:Props) => {
	return (
        <div className={styles.memberContainer} id="feature">
            <img src={props.img} alt=""/>
            <div className={styles.memberSub}>
                <div className={styles.text}>
                    <h1>{props.name}</h1>
                    <h2>{props.role}</h2>
                </div>
                <a href={props.twitter}>
                    <img src={'/twitter.png'} alt=""/>
                </a>
            </div>
		</div>
	);
};

export default Member;