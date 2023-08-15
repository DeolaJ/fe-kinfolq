import Head from "next/head";

import Contact from "../src/components/Contact";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

export default function BecomeASponsor() {
	return (
		<>
			<Head>
				<title>Become a sponsor | Kinfolq</title>
			</Head>
			<main>
				<Header />
				<Contact />
				<Footer />
			</main>
		</>
	);
}
