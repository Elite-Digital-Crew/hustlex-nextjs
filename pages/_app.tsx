import "../styles/globals.css";
import "../styles/DesktopStyling.css";
import "../styles/phoneStyling.css";
import "tailwindcss/tailwind.css";

import type { AppProps } from "next/app";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

export const client = new ApolloClient({
	uri: "https://india.hustlex.club/",
	cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			<Head>
				<script async src="https://cdn.splitbee.io/sb.js"></script>
			</Head>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
