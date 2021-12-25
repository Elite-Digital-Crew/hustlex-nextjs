import { useToast } from "@chakra-ui/react";
import {
	CheckCircleIcon,
	ExclamationCircleIcon,
	PlusCircleIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import React, {
	FC,
	ForwardedRef,
	forwardRef,
	MutableRefObject,
	Ref,
	RefObject,
	useState,
} from "react";
import { client } from "../../pages/_app";
import {
	PRE_REGISTER_QUERY,
	PRE_REGISTER_QUERY_RESULT,
} from "../../queries/preRegister.query";
import styles from "../../styles/PreRegister.module.css";

export const PreRegister = forwardRef<HTMLInputElement>((_, ref) => {
	const [loading, setLoading] = useState<boolean>();
	const [email, setEmail] = useState<string>();

	const toast = useToast();

	const preRegister = async () => {
		if (email == null || !email.includes("@") || !email.includes(".")) {
			toast({
				title: "Invalid Email",
				description: "Please enter a valid email.",
				status: "error",
			});

			return;
		}

		setLoading(true);
		await client.query<PRE_REGISTER_QUERY_RESULT>({
			query: PRE_REGISTER_QUERY,
			variables: {
				email,
			},
		});
		toast({
			title: "Congratulations",
			description: "You are now signed up!.",
			status: "success",
		});
		setLoading(false);
	};

	return (
		<div ref={ref} className={styles.container} id="register">
			<h1>PRE-REGISTER</h1>
			<p className="mt-3">
				Pre Register for early access and don&apos;t miss out on news and
				updates about HustleX.
			</p>
			<span className="inline-flex mt-3">
				<div className={styles.cta}>
					<input
						disabled={loading}
						type="email"
						placeholder="joe@gmail.com"
						onChange={(e) => setEmail(e.currentTarget.value)}
						className="outline-none mt-0.5 border-2 border-pink rounded-lg"
					/>
				</div>
				<button
					disabled={loading}
					className={`disabled:inline-flex ml-5 items-center px-4 py-2 h-12 w-44 text-center border-pink text-sm font-medium rounded-md shadow-sm text-white bg-epic-black hover:bg-pink focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:hover:bg-epic-black focus:ring-pink`}
					onClick={() => preRegister()}
				>
					{loading && (
						<svg
							className="h-9"
							version="1.1"
							id="L9"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							x="0px"
							y="0px"
							viewBox="0 0 100 100"
							enableBackground="new 0 0 0 0"
							xmlSpace="preserve"
						>
							<path
								fill="#fff"
								d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
							>
								<animateTransform
									attributeName="transform"
									attributeType="XML"
									type="rotate"
									dur="1s"
									from="0 50 50"
									to="360 50 50"
									repeatCount="indefinite"
								/>
							</path>
						</svg>
					)}
					Pre-Register
				</button>
			</span>
			<div className={styles.ctaALT}></div>
			<img
				src="/pattern.png"
				alt=""
				// width="30"
				// height="100"
				className={styles.pattern}
			/>
		</div>
	);
});
