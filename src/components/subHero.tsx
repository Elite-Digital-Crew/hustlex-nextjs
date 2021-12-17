import Image from "next/image";
import React from "react";
import styles from "../../styles/Home.module.css";

interface Props {
    title: string;
    discription: string;
    img: string;
}

const SubHero = ( props: Props ) => {
    return (
        <div className={styles.subhero} id="feature">
        <div className={styles.subheroleft}>
            <h1>{props.title}</h1>
            <h2>{props.title}</h2>
            <h3>{props.discription}</h3> 
        </div>
            <img src={props.img} alt="" className={styles.subheroimg}/>
        </div>
    )
};

export default SubHero;
