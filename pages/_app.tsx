import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";

import { theme } from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta
					name="description"
					content="We partner with leading tech companies & brands 
					to host brunches, co-living houses at conferences and concerts, 
					pitch competitions, day parties, kickbacks, and more to bring driven 
					Black people in tech together in meaningful ways that catalyse relationship-building 
					among one another."
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" type="image/jpg" href="/logo.jpg" />
			</Head>
			<ChakraProvider theme={theme}>
				<AnimatePresence mode="wait">
					<Component {...pageProps} />
				</AnimatePresence>
			</ChakraProvider>
		</>
	);
}
