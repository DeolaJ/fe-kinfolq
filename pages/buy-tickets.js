import Head from "next/head";

import Contact from "../src/components/Contact";
import Header from "../src/components/Header";
import Sticker from "../src/components/Sticker";
import Footer from "../src/components/Footer";

export default function BuyTickets() {
	return (
		<>
			<Head>
				<title>Get a ticket | Kinfolq</title>
			</Head>
			<main>
				<Header />
				<Sticker
					heading="Buy a Ticket to Attend"
					description="A ticket for this conference is $250 per attendee"
					// TODO: Add ticket link
					url="/"
					bgColor="brand.black.500"
				/>
				<Contact />
				<Footer />
			</main>
		</>
	);
}
