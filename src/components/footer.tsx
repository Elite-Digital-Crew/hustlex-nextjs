import React from 'react';
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

const Link = (props:LinkProps) => (
    <a href={props.href} className={styles.link}>
        <h1>{props.name}</h1>
        <img src="/icon.svg" alt="" />
    </a>
)
const SocialLink = (props: SocialLinkProps) => (
    <a href={props.href} className={styles.socialLink}>
        <img src={props.name} alt={props.name}/>
    </a>
)

export const Footer = () => {
    return (
        <div className={styles.parent} id='footer'>
            <div className={styles.div1}>
                <img src="/logo-sm.png" alt="" className={styles.logosm}/>
                <h1 className={styles.txt}>About</h1>
                <p>HustleX is a platform why provieds AI Based personalized plans, rewards you for your fitness activity, allows you told socialize with like minded people through your fitness journey.</p>
                <div>
                <SocialLink href='https://twitter.com/hustlexclub' name='twitter.png'/>
                <SocialLink href='https://www.instagram.com/hustlex.club/' name='instagram.png'/>
                <SocialLink href='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHvnzPLwfnXHplnZCrSxvcfFnVXvTkkzfNpSrWhJqfkjlVhZZhfnvbjBpKfNhGqjwFmDzDw' name='mail.png'/>
                <SocialLink href='https://www.linkedin.com/company/hustlexclub/' name='linkdinLogo.png'/>
                </div>
            </div>
            <div className={styles.div2}>
                <h1 className={styles.txt}>Contact</h1>
                <Link name="Team" href="/" />
                <Link name="Carrer" href="/career" />
                <Link name="Pitch Deck" href="/" />
                <Link name="Investors" href="/" />
            </div>
            <div className={styles.div3}>
                <h1 className={styles.txt}>Social</h1>
                <Link name="-" href="/" />
                <Link name="-" href="/" />
                <Link name="-" href="/" />
                <Link name="-" href="/" />
            </div>
            <div className={styles.div4}>
                <h1 className={styles.txt}>Address</h1>
                <p>#23/1, 2nd Main, 5th Cross, Diwarapalya, Yeshwantpur, Banglore - 54, India.</p>
                <h1 className={styles.txt}>Contact</h1>
                <p>team@hustlex.club</p>
            </div>
            <div className={styles.div5}>
                <img src="/logo-light.png" alt="" />
                <h1>Made with ❤ by ️HustleTeam in India</h1> 
                <h1>© 2021, HustleX Fitness.</h1> 
            </div>
        </div>
    )
}
 