import React from "react";
import styles from "../../styles/Team.module.css";
import Image from "next/image";

interface Props {
  name: string;
  role: string;
  img: string;
  twitter?: string;
}

// SubHero
const Member = (props: Props) => {
  return (
    <div className={styles.memberContainer} id="feature">
      <Image width={180} height={180} src={props.img} alt="" />
      <div className={styles.memberSub}>
        <div className={styles.text}>
          <h1>{props.name}</h1>
          <h2>{props.role}</h2>
        </div>
        <a href={props.twitter}>
          {/* <Image               width={180}
              height={54} src={"/../public.twitter.png"} alt="" /> */}
        </a>
      </div>
    </div>
  );
};

export default Member;
