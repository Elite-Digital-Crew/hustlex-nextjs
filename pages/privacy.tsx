import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Footer } from "../src/components/footer";
import styles from "../styles/Hero.module.css";

const Policy = () => {
  return (
    <div>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutnav}>
          <Image width={72} height={72} src="/logo-p.png" alt="logo" />
          <Link href="/">
            <a className={styles.button}>back to website</a>
          </Link>
        </div>
        <h1>Privacy Policy</h1>
        <p>
          <strong>Privacy Policy</strong>
          <br />
          Effective Date: 28-06-2024
        </p>

        <p>
          Welcome to Hustlex! Your privacy is important to us, and we are
          committed to protecting your personal data. This Privacy Policy
          outlines how we collect, use, and protect the information you provide
          while using our app and services.
        </p>

        <p>
          <strong>Who We Are</strong>
          <br />
          Hustlex is operated by an individual based in Karnataka, India. For
          questions or concerns regarding this policy, you can contact us at:
          <br />- <strong>Email:</strong> social.hustlex@gmail.com
          <br />- <strong>Phone:</strong> +91 9141196450
        </p>

        <p>
          <strong>Data We Collect</strong>
        </p>

        <p>
          <strong>Personal Information</strong>
          <br />
          When you use Hustlex, we may collect the following personal
          information:
          <br />
          - First and Last Name
          <br />
          - Email Address
          <br />
          - Phone Number
          <br />- Address, State, and Pin Code
        </p>

        <p>
          <strong>Device Permissions</strong>
          <br />
          To provide app functionality, we may request access to:
          <br />- <strong>Camera:</strong> For features requiring image input,
          such as progress tracking.
          <br />- <strong>Microphone:</strong> For voice input features and
          communication purposes.
        </p>

        <p>
          <strong>Usage Data</strong>
          <br />
          We collect information about your app usage to improve performance and
          personalize your experience.
        </p>

        <p>
          <strong>How We Use Your Data</strong>
          <br />
          The data collected is used for the following purposes:
          <br />
          - Rewarding fitness achievements.
          <br />
          - Sending promotional or service-related emails (only if you opt-in).
          <br />- Analyzing app usage and improving user experience using{" "}
          <strong>PostHog</strong>. Learn more about their privacy practices{" "}
          <a href="https://posthog.com/privacy" target="_blank">
            here
          </a>
          .<br />- Processing payments via{" "}
          <strong>Apple In-App Purchase</strong>,{" "}
          <strong>Google Play In-App Purchase</strong>, and{" "}
          <strong>Razorpay</strong>.<br />- Marketing and remarketing through
          services like <strong>Google Ads</strong>,{" "}
          <strong>Facebook Ads</strong>, and <strong>Twitter Ads</strong>.
        </p>

        <p>
          <strong>Payment Processing</strong>
          <br />
          We do not store or handle your payment information directly. Payments
          are processed securely through trusted platforms, including:
          <br />
          - Apple In-App Purchase
          <br />
          - Google Play In-App Purchase
          <br />- Razorpay
        </p>

        <p>
          <strong>Advertising</strong>
          <br />
          Hustlex does not display advertisements within the app. However, we
          use external remarketing services to advertise on platforms like
          Google, Facebook, and Twitter.
        </p>

        <p>
          <strong>Your Choices</strong>
        </p>

        <p>
          <strong>Email Communication:</strong> You can opt-out of promotional
          emails at any time by clicking the unsubscribe link in the email or
          contacting us directly.
          <br />
          <strong>Device Permissions:</strong> You can manage app permissions
          for your camera and microphone through your device settings.
        </p>

        <p>
          <strong>Data Protection</strong>
          <br />
          We take reasonable technical and organizational measures to protect
          your personal data from unauthorized access, misuse, or disclosure.
        </p>

        <p>
          <strong>Third-Party Services</strong>
          <br />
          Hustlex integrates with third-party services for analytics and
          marketing purposes. These services have their own privacy policies:
          <br />- <strong>PostHog Analytics:</strong>{" "}
          <a href="https://posthog.com/privacy" target="_blank">
            PostHog Privacy Policy
          </a>
          <br />- <strong>Remarketing Services:</strong> Google Ads, Facebook
          Ads, and Twitter Ads
        </p>

        <p>
          <strong>Data Retention</strong>
          <br />
          We retain personal data only as long as necessary for the purposes
          outlined in this policy or as required by law.
        </p>

        <p>
          <strong>Children's Privacy</strong>
          <br />
          Hustlex is not intended for children under the age of 18. We do not
          knowingly collect personal data from children.
        </p>

        <p>
          <strong>Changes to This Privacy Policy</strong>
          <br />
          We may update this policy from time to time. Changes will be reflected
          on this page, and we encourage you to review this policy periodically.
        </p>

        <p>
          <strong>Contact Us</strong>
          <br />
          For questions or concerns about this Privacy Policy, you can contact
          us at:
          <br />- <strong>Email:</strong> social.hustlex@gmail.com
          <br />- <strong>Phone:</strong> +91 9141196450
        </p>

        <p>Thank you for using Hustlex. Stay fit, stay rewarded!</p>
      </div>
      <Footer />
    </div>
  );
};

export default Policy;
