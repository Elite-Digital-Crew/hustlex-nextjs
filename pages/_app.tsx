import "../styles/globals.css";
import "../styles/DesktopStyling.css";
import "../styles/phoneStyling.css";
import "tailwindcss/tailwind.css";

import ReactGa from "react-ga";
import Head from "next/head";

import type { AppProps } from "next/app";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";

export const client = new ApolloClient({
	uri: "https://india.hustlex.club/",
	cache: new InMemoryCache(),
});

ReactGa.initialize("G-HLK7XTH9J3");

function MyApp({ Component, pageProps, router }: AppProps) {
	ReactGa.pageview(router.pathname);

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
