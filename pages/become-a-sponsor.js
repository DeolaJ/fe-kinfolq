import React from "react";
import Head from "next/head";
import {
	Box,
	Text,
	Grid,
	GridItem,
	ListItem,
	UnorderedList,
} from "@chakra-ui/react";

import Contact from "../src/components/Contact";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Banner from "../src/components/Banner";

const sponsorshipTiers = [
	{
		name: "Gold Sponsor",
		price: "$15K+",
		perks: [
			"A dedicated email blast to the Kinfolq community about your company/initiatives",
			"Hackathon prize named after your organization",
			"Speaking opportunity on one of our conference panels",
			"In-person recognition during every day of programming",
			"Shared speaking slot with industry leaders at the conference",
			"Represent your company at our career fair",
			"Logo placement & recognition on the conference website & materials",
			"Access to attendee resume book & hackathon semifinalists",
			"Two free tickets for you or anyone you nominate",
		],
	},
	{
		name: "Silver Sponsor",
		price: "$7500",
		perks: [
			"Speaking opportunity on one of our conference panels",
			"In-person recognition during every day of programming",
			"Shared speaking slot with industry leaders at the conference",
			"Represent your company at our career fair",
			"Logo placement & recognition on the conference website & materials",
			"Access to our resume book & hackathon semifinalists",
			"Two free tickets for you or anyone you nominate",
		],
	},
	{
		name: "Bronze Sponsor",
		price: "$5000",
		perks: [
			"Logo placement & recognition on the conference website & materials",
			"Access to attendee resume book & hackathon semifinalists",
			"One free ticket for you or anyone you nominate",
		],
	},
];

export default function BecomeASponsor() {
	return (
		<>
			<Head>
				<title>Become a sponsor | Kinfolq</title>
			</Head>
			<main>
				<Header />

				<Box bgColor="brand.brown.500">
					<Banner>Become a sponsor</Banner>
					<Box
						as="section"
						py={{ base: "6", md: "14" }}
						px={{ base: "4", md: "14" }}
						color="brand.white.500"
					>
						<Text
							fontSize={{ base: "3xl", sm: "5xl", md: "6xl" }}
							fontWeight={700}
							lineHeight="none"
							flexGrow="0.2"
							color="brand.white.500"
							mb={{ base: "6", md: "10" }}
						>
							Our sponsorship tiers for this conference are:
						</Text>
						<Text
							fontSize={{ base: "md", sm: "xl", md: "2xl" }}
							fontWeight={500}
							color="brand.white.500"
						>
							They are building the next generation of technology
							companies and wield enormous levels of influence and
							buying power due to their high-impact, high-paying
							roles in tech and finance.
						</Text>

						<Grid
							templateColumns={{
								base: "1fr",
								md: "1fr 1.7fr",
							}}
							columnGap={{ md: "8" }}
							rowGap={{ base: "6", md: "10" }}
							placeContent="center"
							justifyContent="space-between"
							color="brand.white.500"
							mt={{ base: "8", md: "14" }}
						>
							{sponsorshipTiers?.map((tier, index) => (
								<React.Fragment key={tier.name}>
									<GridItem>
										<Text
											fontSize={{
												base: "md",
												sm: "xl",
												md: "2xl",
											}}
											fontWeight={500}
											mb="4"
										>
											{tier.name}
										</Text>
										<Text
											fontSize={{
												base: "3xl",
												sm: "5xl",
												md: "6xl",
											}}
											fontWeight={700}
											lineHeight="none"
										>
											{tier.price}
										</Text>
									</GridItem>
									<GridItem
										borderBottom={
											index < sponsorshipTiers.length - 1
												? "1px solid"
												: ""
										}
										borderColor="brand.white.500"
										pb="8"
										mb={{ base: "4", md: "0" }}
									>
										<Text
											fontSize={{
												base: "md",
												sm: "xl",
												md: "2xl",
											}}
											fontWeight={500}
											mb="4"
											textTransform="uppercase"
										>
											Perks:
										</Text>
										<UnorderedList>
											{tier.perks.map((perk) => (
												<ListItem
													key={perk}
													mb="1.5"
													fontSize={{
														base: "md",
														sm: "xl",
														md: "2xl",
													}}
													fontWeight={500}
												>
													{perk}
												</ListItem>
											))}
										</UnorderedList>
									</GridItem>
								</React.Fragment>
							))}
						</Grid>
					</Box>
				</Box>

				<Contact />

				<Footer />
			</main>
		</>
	);
}
