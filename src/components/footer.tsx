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
    <img src="/icon.svg" alt="" />
  </a>
);
const SocialLink = (props: SocialLinkProps) => (
  <a href={props.href} className={styles.socialLink}>
    <img src={props.name} alt={props.name} />
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
            name="twitter.png"
          />
          <SocialLink
            href="https://www.instagram.com/hustlex.club/"
            name="instagram.png"
          />
          <SocialLink
            href="mailto:chinmaypdev.offical@gmail.com"
            name="mail.png"
          />
          <SocialLink
            href="https://www.linkedin.com/company/hustlexclub/"
            name="linkdinLogo.png"
          />
        </div>
        <h1>© 2022 | HustleX Fitness.</h1>
      </div>
      <div className={styles.div2}>
        <Link name="About" href="/about" />
        <Link name="Team" href="/team" />
        <Link name="Carrer" href="/career" />
        {/* <Link name="Pitch Deck" href="/pitch-deck.pdf" /> */}
      </div>
      <div className={styles.div3}>
        <Link name="Terms" href="/terms" />
        <Link name="Privacy policy" href="/privacy" />
        <Link name="Partner with us" href="/" />
        <Link
          name="Get access"
          href="https://play.google.com/store/apps/details?id=com.hustlex.mvp"
        />
      </div>
      <div className={styles.div4}>
        <p>
          #12, Keerthi Layout, Binnamangala, Nelamangala, Bangalore - 562123
        </p>
      </div>
    </div>
  );
};
