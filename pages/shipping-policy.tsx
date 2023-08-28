import Image from "next/image";
import Link from "next/link";
import { userInfo } from "os";
import React from "react";
import { Footer } from "../src/components/footer";
import styles from "../styles/Hero.module.css";

const About = () => {
  return (
    <div>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutnav}>
          <Image layout="fill" src="./logo-p.png" alt="logo" />
          <Link href="/">
            <a className={styles.button}>back to website</a>
          </Link>
        </div>
        <h1>Shipping Policy</h1>
        <p>
          HustleX only takes orders only Within India. Any order from other
          Nations will not we fullfilled and the debited money and Hustle Coins
          will be refunded to the user.
          <br />
          <br />
          or domestic buyers, orders are shipped through registered domestic
          courier companies and / or speed post only. Majority orders will be
          routed through amazon.
          <br />
          <br />
          Orders are shipped within 8 + days or as per the delivery date agreed
          at the time of order confirmation and delivering of the shipment
          subject to Courier Company / post office norms.
          <br />
          <br />
          HustleX is not liable for any delay in delivery by the courier company
          / postal authorities and only guarantees to hand over the consignment
          to the courier company or postal authorities within 8 + days from the
          date of the order and payment or as per the delivery date agreed at
          the time of order confirmation.
          <br />
          <br />
          Delivery of all orders will be to the address provided by the buyer.
          <br />
          <br />
          Delivery of our services will be confirmed on your mail ID as
          specified during registration.For any issues in utilizing our services
          you may contact our helpdesk on 9141196450 or team@hustlex.club or
          social.hustlex@gmail.com
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
