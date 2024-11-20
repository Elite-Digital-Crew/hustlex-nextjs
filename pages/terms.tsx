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
          <Image width={72} height={72} src="/logo-p.png" alt="logo" />
          <Link href="/">
            <a className={styles.button}>back to website</a>
          </Link>
        </div>
        <h1>Terms and Conditions</h1>
        <p>
          <strong>Terms and Conditions</strong>
          <br />
          Effective Date: 28-06-2024
        </p>

        <p>
          Welcome to Hustlex! By using our app and services, you agree to comply
          with these Terms and Conditions. Please read them carefully.
        </p>

        <p>
          <strong>1. Account Creation</strong>
        </p>
        <p>
          - To access certain features, users must create an account by
          providing accurate and up-to-date information.
          <br />
          - You are responsible for maintaining the confidentiality of your
          account credentials.
          <br />- Hustlex is not responsible for unauthorized account access due
          to your failure to secure your login details.
        </p>

        <p>
          <strong>2. In-App Purchases and Subscriptions</strong>
        </p>
        <p>
          - Hustlex offers <strong>in-app purchases</strong>, including curated
          goods (products/items) and <strong>subscription plans</strong>.<br />
          - Most of the app is free to use, but premium features may require
          payment.
          <br />
          - Payments are processed securely through trusted platforms, including
          Apple In-App Purchase, Google Play In-App Purchase, and Razorpay.
          <br />- Subscription plans automatically renew unless canceled before
          the renewal date.
        </p>

        <p>
          <strong>3. Rewards and Promotions</strong>
        </p>
        <p>
          - Hustlex may offer <strong>promotions</strong>,{" "}
          <strong>contests</strong>, <strong>sweepstakes</strong>,{" "}
          <strong>raffles</strong>, and other reward-based activities.
          <br />
          - Participation is voluntary and subject to specific rules provided
          for each activity.
          <br />- Hustlex reserves the right to modify, suspend, or cancel
          promotions at its discretion.
        </p>

        <p>
          <strong>4. Feedback and Suggestions</strong>
        </p>
        <p>
          - By submitting feedback or suggestions, you grant Hustlex the right
          to use, implement, and modify them without compensation or credit.
        </p>

        <p>
          <strong>5. Intellectual Property</strong>
        </p>
        <p>
          - All content, features, and trademarks associated with Hustlex are
          the exclusive property of Hustlex.
          <br />- You may not copy, modify, distribute, or use any of our
          intellectual property without prior written permission.
        </p>

        <p>
          <strong>6. User Responsibilities</strong>
        </p>
        <p>
          - Users must not misuse the app, engage in fraudulent activities, or
          violate applicable laws.
          <br />- Any inappropriate or harmful behavior may result in account
          suspension or termination.
        </p>

        <p>
          <strong>7. Third-Party Services</strong>
        </p>
        <p>
          - Hustlex integrates third-party services such as payment processors
          and analytics tools.
          <br />- These services have their own terms and conditions, and you
          agree to comply with them when using our app.
        </p>

        <p>
          <strong>8. Limitation of Liability</strong>
        </p>
        <p>
          - Hustlex is provided "as is," and we do not guarantee uninterrupted
          or error-free use.
          <br />- We are not liable for any direct, indirect, incidental, or
          consequential damages arising from the use or inability to use our app
          or services.
        </p>

        <p>
          <strong>9. Governing Law</strong>
        </p>
        <p>
          - These terms are governed by the laws of Karnataka, India. Any
          disputes shall be resolved in the courts of Karnataka.
        </p>

        <p>
          <strong>10. Contact Us</strong>
        </p>
        <p>
          For questions or concerns regarding these Terms and Conditions, you
          can contact us at:
          <br />
          <strong>Email:</strong> social.hustlex@gmail.com
          <br />
          <strong>Phone:</strong> +91 9141196450
        </p>

        <p>
          By using Hustlex, you acknowledge that you have read, understood, and
          agreed to these Terms and Conditions. Thank you for being part of our
          community—stay fit, stay rewarded!
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
