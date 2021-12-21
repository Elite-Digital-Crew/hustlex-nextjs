import React, { FC } from "react";
import styles from "../../styles/Home.module.css";

type Props = {
	onScroll: () => void;
};

const PreRegisterButton: FC<Props> = ({ onScroll }) => {
	return (
		<button
			onClick={() => onScroll()}
			className={`disabled:inline-flex ml-5 items-center px-6 py-4 h-12 w-44 mt-6 text-center border-pink text-sm font-medium rounded-md shadow-sm text-white bg-epic-black hover:bg-pink focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:hover:bg-epic-black focus:ring-pink`}
		>
			Pre-Register
		</button>
	);
};

export default PreRegisterButton;
