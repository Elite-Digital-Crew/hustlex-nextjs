import React from "react";
import styles from "../../styles/Home.module.css";

const NavBar = () => {
    return <div>
        <nav className={styles.navBar}>
          <ul className={styles.navList}>
            <div className={styles.logo}><a href="/"><img src="../images/logo.png" alt="" /></a></div>
            <li><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Contact</a></li>
          </ul> 
        </nav>
    </div>
};

export default NavBar;
