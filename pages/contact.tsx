import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Footer } from "../src/components/footer";
import styles from "../styles/Hero.module.css";

const Contact = () => {
  return (
    <div>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutnav}>
          <Image width={72} height={72} src="/logo-p.png" alt="logo" />
          <Link href="/">
            <a className={styles.button}>back to website</a>
          </Link>
        </div>
        <h1>Contact Us</h1>

        <p>
          <strong>Email</strong>
        </p>
        <p>social.hustlex@gmail.com</p>
        <p>
          <strong>Phone</strong>
        </p>
        <p>+91 9141196450</p>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
