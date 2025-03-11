import Image from "next/image";
import React from "react";
import styles from "../../styles/Footer.module.css";
// import { IconName } from "react-icons/io";

interface LinkProps {
  name: string;
  href: string;
}
interface SocialLinkProps {
  name: string;
  href: string;
}

const Link = (props: LinkProps) => (
  <a href={props.href} className={styles.link}>
    <h1>{props.name}</h1>
    <Image width={16} height={16} src="/icon.svg" alt="" />
  </a>
);
const SocialLink = (props: SocialLinkProps) => (
  <a href={props.href} className={styles.socialLink}>
    <Image width={54} height={54} src={props.name} alt={props.name} />
  </a>
);

export const Footer = () => {
  return (
    <div className={styles.parent} id="footer">
      <div className={styles.div1}>
        <img src="/logo-sm.png" alt="" className={styles.logosm} />
        <div>
          <SocialLink
            href="https://twitter.com/hustlexclub"
            name="/twitter.png"
          />
          <SocialLink
            href="https://www.instagram.com/hustlex.club/"
            name="/instagram.png"
          />
          <SocialLink
            href="mailto:chinmaypdev.offical@gmail.com"
            name="/mail.png"
          />
          <SocialLink
            href="https://www.linkedin.com/company/hustlexclub/"
            name="/linkdinLogo.png"
          />
        </div>
        <h1>© 2025 | HustleX.</h1>
        <h1>
          HustleX is a registered trademark of XElite Studios
          <br /> Pvt.Ltd.All rights reserved
        </h1>
        <h1>
          #12,Nelamangala <br />
          Bangalore - 562123 <br />
          Karnataka,INDIA
        </h1>
      </div>
      <div className={styles.div2}>
        <Link name="About" href="/about" />
        <Link name="Team" href="/team" />
        <Link name="Carrer" href="/career" />
        <Link
          name="Get access"
          href="https://play.google.com/store/apps/details?id=com.hustlex.mvp"
        />

        {/* <Link name="Pitch Deck" href="/pitch-deck.pdf" /> */}
      </div>
      <div className={styles.div3}>
        <Link name="Privacy policy" href="/privacy" />
        <Link name="Terms" href="/terms" />
        <Link name="Shipping Policy" href="/shipping" />
        <Link name="Cancellation & Refund" href="/cancellation&refund" />
      </div>
    </div>
  );
};
