import React, { FC } from "react";
import styles from "../../styles/Home.module.css";

type Props = {
	onScroll: () => void;
};

const PreRegisterButton: FC<Props> = ({ onScroll }) => {
	return (
		<div className={styles.btncontainer}>
			<a
				onClick={() => onScroll()}
				className={styles.btn}
			>
				Join Now
			</a>
			<a className={styles.learnmore}>learn more</a>
		</div>
	);
};

export default PreRegisterButton;
