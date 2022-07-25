import { useToast } from "@chakra-ui/react";
import {
	CheckCircleIcon,
	ExclamationCircleIcon,
	PlusCircleIcon,
} from "@heroicons/react/outline";
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
		const res = client.query<PRE_REGISTER_QUERY_RESULT>({
			query: PRE_REGISTER_QUERY,
			variables: {
				email,
			},
		});

		await res
			.then(() =>
				toast({
					title: "Congratulations",
					description: "You are now signed up!",
					status: "success",
				})
			)
			.catch(({ message }) => {
				toast({
					title: "Error",
					description: message,
					status: "error",
				});
			})
			.finally(() => setLoading(false));
	};

	return (
		<div ref={ref} className={styles.container} id="join">
			<div className={styles.left} >
				<div>
					<h1>join club</h1>
					<p className="mt-3">
						join hustle club and be the first ones to acess the best fitness
						experience ever created.
					</p>
				</div>
				<span className={styles.span}>
					<input
						disabled={loading}
						type="email"
						placeholder="Your email address"
						onChange={(e) => setEmail(e.currentTarget.value)}
						className={styles.input}
					/>
					<button
						disabled={loading}
						className={styles.button}
						onClick={() => preRegister()}
					>
						{loading ? (
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
									fill="#000"
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
						) : (
							<img src="./Arrow.svg" alt="icon" />
						)}
					</button>
				</span>
			</div>
			<div className={styles.mockup}>
				<img src="/UI-MOCKUP-1.png" alt="mockup" />
			</div>
		</div>
	);
});
