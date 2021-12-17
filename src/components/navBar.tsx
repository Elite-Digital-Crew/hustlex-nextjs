import Image from "next/image";
import React from "react";
import styles from "../../styles/Home.module.css";

const NavBar = () => {
    return <div>
        <nav className={styles.navBar}>
          <ul className={styles.navList}>
            <div className={styles.logo}><a href="/"><Image src="/logo.png" alt="Logo" width={112} height={24} /></a></div>
            <li><a href="#home">Home</a></li>
            <li><a href="#feature">Features</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#footer">Contact</a></li>
          </ul> 
        </nav>
    </div>
};

export default NavBar;
