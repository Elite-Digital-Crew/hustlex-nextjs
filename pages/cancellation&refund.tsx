import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Footer } from "../src/components/footer";
import styles from "../styles/Hero.module.css";

const Cancellation = () => {
  return (
    <div>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutnav}>
          <Image width={72} height={72} src="/logo-p.png" alt="logo" />
          <Link href="/">
            <a className={styles.button}>back to website</a>
          </Link>
        </div>
        <h1>Cancelation and Refund Policy</h1>
        <p>
          <strong>Cancellation and Refund Policy</strong>
        </p>
        <p>
          <em>Effective Date: 28-06-2024</em>
        </p>

        <p>
          Thank you for shopping with Hustlex. We aim to ensure a smooth and
          satisfying experience for all our customers. Please read our
          Cancellation and Refund Policy carefully to understand your rights and
          responsibilities.
        </p>

        <p>
          <strong>1. Order Cancellations</strong>
        </p>
        <p>
          Orders placed on the Hustlex Store can be canceled{" "}
          <strong>only if the order has not been dispatched</strong>.
        </p>
        <p>To request a cancellation, please contact us immediately at:</p>
        <ul>
          <li>
            <strong>Email:</strong> social.hustlex@gmail.com
          </li>
          <li>
            <strong>Phone:</strong> +91 9141196450
          </li>
        </ul>

        <p>
          <strong>2. Order Fulfillment</strong>
        </p>
        <p>
          Orders are fulfilled by different commerce providers in partnership
          with Hustlex. Specific terms may apply depending on the provider.
        </p>

        <p>
          <strong>3. Product Returns</strong>
        </p>
        <p>
          Products can be returned <strong>within 7 days after delivery</strong>
          .
        </p>
        <p>
          <strong>Return Conditions:</strong>
        </p>
        <ul>
          <li>
            The product must be in its <strong>original packaging</strong>.
          </li>
          <li>
            The product must be <strong>unused</strong> and{" "}
            <strong>undamaged</strong>.
          </li>
        </ul>
        <p>
          Customers are responsible for ensuring the product is returned in a
          resalable condition.
        </p>

        <p>
          <strong>4. Refund Policy</strong>
        </p>
        <p>
          <strong>Refunds for Returned Products:</strong>
        </p>
        <ul>
          <li>
            Eligible returns will be refunded once the product is inspected and
            approved.
          </li>
          <li>
            Refunds will be processed to the original payment method within 7-10
            business days after approval.
          </li>
        </ul>
        <p>
          <strong>Refunds for Sale Items:</strong> Items purchased on sale are{" "}
          <strong>eligible for refunds</strong> but must meet the return
          conditions.
        </p>
        <p>
          <strong>Non-Exchangeable Policy:</strong> Hustlex does not offer
          product exchanges at this time.
        </p>

        <p>
          <strong>5. Return Address</strong>
        </p>
        <p>All returns should be sent to:</p>
        <p>
          <strong>[Insert Return Address Here]</strong>
        </p>

        <p>
          <strong>6. Contact Us</strong>
        </p>
        <p>
          For any questions or assistance with cancellations, returns, or
          refunds, you can reach us at:
        </p>
        <ul>
          <li>
            <strong>Email:</strong> social.hustlex@gmail.com
          </li>
          <li>
            <strong>Phone:</strong> +91 9141196450
          </li>
        </ul>

        <p>
          By using the Hustlex Store, you agree to this Cancellation and Refund
          Policy. Thank you for choosing Hustlex!
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Cancellation;
