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
            <Image src="/logo.png" alt="Logo" width={180} height={54} />
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
        <Link href="#join" passHref>
          <a className={styles.button}>join now</a>
        </Link>
      </nav>
    </div>
  );
};

export default navBar;
