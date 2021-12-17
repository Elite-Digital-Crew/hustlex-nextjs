import "../styles/globals.css";
import "../styles/DesktopStyling.css";
import "../styles/phoneStyling.css";
import "tailwindcss/tailwind.css";

import type { AppProps } from "next/app";
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
	uri: "https://api.hustlex.club",
	cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default MyApp;
