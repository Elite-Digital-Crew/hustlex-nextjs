import React from "react";
import styles from "../../styles/Home.module.css";

const PreRegisterButton = () => {
    return (
        <a href="#register" className={styles.btn}>
            <h3 className={styles.btntxt}>Pre-Register</h3>
            <div></div>
        </a>
    )
};

export default PreRegisterButton;