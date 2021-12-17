import Image from "next/image";
import React from "react";
import styles from "../../styles/PreRegister.module.css";

const PreRegister = () => {
    return (
        <div className={styles.container}>
            <h1>PRE-REGISTER</h1>
            <p>Pre Register for early access and don't miss out on news and updates about HustleX.</p>
            <div className={styles.cta}>
                <input type="email" placeholder="joe@gmail.com" />
                <button>Pre-Register</button>
            </div>
            <div className={styles.ctaALT}></div>
            <img src="/pattern.png" alt="" className={styles.pattern}/>
        </div>
    )
};

export default PreRegister;
