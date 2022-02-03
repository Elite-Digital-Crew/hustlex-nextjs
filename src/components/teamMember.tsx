import React from "react";
import styles from "../../styles/Team.module.css";

interface Props {
    name: string;
    role: string;
    img: string;
    discription: string;
    linkdin?: string;
}

// SubHero
const Member = (props:Props) => {
	return (
        <div className={styles.container} id="feature">
            <div className={styles.img}>
                <img src={props.img} alt=""/>
            </div>
            <div className={styles.text}>
                <h1>{props.name}</h1>
                <h2>{props.role}</h2>
            </div>
		</div>
	);
};

export default Member;