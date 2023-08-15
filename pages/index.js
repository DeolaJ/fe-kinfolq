import Head from "next/head";

import Contact from "../src/components/Contact";
import Header from "../src/components/Header";
import Sticker from "../src/components/Sticker";
import Footer from "../src/components/Footer";

export default function Home() {
	return (
		<>
			<Head>
				<title>Kinfolq</title>
			</Head>
			<main>
				<Header />
				<Sticker
					heading="Apply to attend our conference"
					description="A $250 ticket purchase is required if accepted to confirm your attendance"
					url="/buy-tickets"
					bgColor="brand.brown.500"
				/>
				<Sticker
					heading="Our agenda"
					url="/agenda"
					bgColor="brand.black.500"
				/>
				<Sticker
					heading="Become a sponsor"
					description="Our sponsorship tiers for this conference are:"
					url="/become-a-sponsor"
					bgColor="brand.brown.500"
				/>
				<Contact />
				<Footer />
			</main>
		</>
	);
}
