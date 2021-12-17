import { gql } from "@apollo/client";

export const PRE_REGISTER_QUERY = gql`
	query Preregister($email: String) {
		Preregister(email: $email) {
			code
			error
			message
		}
	}
`;

export type PreRegister = {
	code: number;
	message: string;
	error: true;
};

export type PRE_REGISTER_QUERY_RESULT = {
	Preregister: PreRegister;
};
