import Image from "next/image";
import Link from "next/link";
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
        <h1>return policy</h1>
        <p>
          HustleX believes in helping its customers as far as possible, and has
          therefore a liberal cancellation policy. Under this policy:
          <br />
          <br />
          Cancellations will be considered only if the request is made
          immediately after placing the order. However, the cancellation request
          may not be entertained if the orders have been communicated to the
          vendors/merchants and they have initiated the process of shipping
          them.
          <br />
          <br />
          HustleX does not accept cancellation requests for perishable items
          like flowers, eatables etc. However, refund/replacement can be made if
          the customer establishes that the quality of product delivered is not
          good.
          <br />
          <br />
          In case of receipt of damaged or defective items please report the
          same to our Customer Service team. The request will, however, be
          entertained once the merchant has checked and determined the same at
          his own end. This should be reported within 15 days of receipt of the
          products.
          <br />
          <br />
          In case you feel that the product received is not as shown on the site
          or as per your expectations, you must bring it to the notice of our
          customer service within 15 days of receiving the product. The Customer
          Service Team after looking into your complaint will take an
          appropriate decision.
          <br />
          <br />
          In case of complaints regarding products that come with a warranty
          from manufacturers, please refer the issue to them.
          <br />
          <br />
          In case of any Refunds approved by the HustleX, it’ll take 6-8 days
          for the refund to be processed to the end customer.
          <br />
          <br />
          If you have any questions or suggestions about our Terms and
          Conditions, do not hesitate to contact us at team@hustlex.club or
          social.hustlex@gmail.com
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
