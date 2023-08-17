import { Box, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";

import Contact from "../src/components/Contact";
import Header from "../src/components/Header";
import Sticker from "../src/components/Sticker";
import Footer from "../src/components/Footer";
import Banner from "../src/components/Banner";

import brex from "../public/sponsors/brex.png";
import baincapital from "../public/sponsors/baincapital.png";
import contrary from "../public/sponsors/contrary.png";
import jpmorgan from "../public/sponsors/jpmorgan.png";
import miami from "../public/sponsors/miami-hack.png";
import primitives from "../public/sponsors/primitives.png";
import svb from "../public/sponsors/svb.png";

import marcella from "../public/members/marcella.jpeg";
import ojxu from "../public/members/ojxu.jpg";
import malcolm from "../public/members/malcolm.jpeg";
import taylor from "../public/members/taylor.jpeg";
import aminat from "../public/members/aminat.jpeg";
import eni from "../public/members/eni.jpeg";
import rahmana from "../public/members/rahmana.jpeg";
import jonathan from "../public/members/jonathan.jpeg";

import partners from "../public/images/partners.png";

const sponsors = [
	baincapital,
	brex,
	contrary,
	jpmorgan,
	miami,
	primitives,
	svb,
];

const members = [
	{
		name: "Marcella Imoisimi",
		title: "SWE @ Ebay",
		image: marcella,
	},
	{
		name: "Ojxu Junaid",
		title: "UX @ Google",
		image: ojxu,
	},
	{
		name: "Malcolm Akinie",
		title: "SWE II @ Slack",
		image: malcolm,
	},
	{
		name: "Taylor Facen",
		title: "Product @ AngelList",
		image: taylor,
	},
	{
		name: "Aminat Iriafen",
		title: "Research @ Quantilope",
		image: aminat,
	},
	{
		name: "Eni Asebiomo",
		title: "Design @ Percapita",
		image: eni,
	},
	{
		name: "Rahmana Muhammad",
		title: "SWE @ Mastercard",
		image: rahmana,
	},
	{
		name: "Jonathan Anderson",
		title: "SWE @ Vise",
		image: jonathan,
	},
];

export default function Home() {
	return (
		<>
			<Head>
				<title>Kinfolq</title>
			</Head>
			<main>
				<Header />

				<Box
					as="section"
					py={{ base: "6", md: "12" }}
					px={{ base: "4", md: "12" }}
					color="brand.white.500"
					bgColor="brand.black.500"
					fontWeight={700}
				>
					<Text fontSize={{ base: "md", sm: "xl", md: "2xl" }} mb="3">
						An invite-only conference for 300 Ambitious Black
						technologist in NYC this fall
					</Text>
					<Heading
						fontSize={{ base: "3xl", sm: "5xl", md: "7xl" }}
						textTransform="uppercase"
						mb="6"
						lineHeight="shorter"
					>
						The black tech conference
					</Heading>
					<Text fontSize={{ base: "md", sm: "xl", md: "2xl" }}>
						Our 2nd Annual NYC Conference. SEPT 29 - OCT 1 2023
					</Text>
				</Box>

				<Banner ratio={16 / 9} />

				<Box bgColor="brand.black.500" py="14">
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

					<Flex
						pt={{ base: "8", md: "14" }}
						px={{ base: "4", md: "14" }}
						gap={{ base: "6", md: "10" }}
						flexDir={{ base: "column", md: "row" }}
						alignItems={{ base: "flex-start", md: "flex-end" }}
						justifyContent="space-between"
						color="brand.white.500"
					>
						<Text
							fontSize={{ base: "3xl", sm: "5xl", md: "6xl" }}
							fontWeight={700}
							lineHeight="none"
							flexBasis="25%"
						>
							Our Gatherings
						</Text>
						<Text
							fontSize={{ base: "md", sm: "xl", md: "2xl" }}
							fontWeight={500}
						>
							We partner with leading tech companies & brands to
							host brunches, co-living houses at conferences and
							concerts, pitch competitions, day parties,
							kickbacks, and more to bring driven Black people in
							tech together in meaningful ways that catalyse
							relationship-building among one another.
						</Text>
					</Flex>
				</Box>

				<Box
					as="section"
					py={{ base: "8", md: "12" }}
					px={{ base: "4", md: "12" }}
				>
					<Text
						fontSize="lg"
						mb="8"
						textTransform="uppercase"
						textAlign="center"
						fontWeight={500}
					>
						Previous sponsors
					</Text>
					<Grid
						templateColumns={{
							base: "repeat(auto-fit, 120px)",
							md: "repeat(auto-fit, 150px)",
							lg: "repeat(auto-fit, 160px)",
							xl: "repeat(auto-fit, 180px)",
						}}
						columnGap={{ base: "4", md: "8" }}
						rowGap={{ base: "6", md: "6" }}
						placeContent="center"
						alignItems="center"
						justifyContent="space-between"
					>
						{sponsors?.map((sponsor) => (
							<GridItem
								key={sponsor.src}
								maxW={{
									base: "100px",
									md: "80px",
									lg: "120px",
									xl: "180px",
								}}
							>
								<Image
									src={sponsor.src}
									width={sponsor.width}
									height={sponsor.height}
									alt="sponsor"
								/>
							</GridItem>
						))}
					</Grid>
				</Box>

				<Box
					as="section"
					py={{ base: "10", md: "16" }}
					px={{ base: "4", md: "12" }}
					bgColor="brand.black.500"
					color="white"
				>
					<Box maxW="10xl" mx="auto">
						<Box
							textAlign="center"
							mb={{ base: "10", md: "12" }}
							mx="auto"
						>
							<Heading
								fontSize={{ base: "3xl", sm: "5xl", md: "6xl" }}
								fontWeight={700}
								mb="4"
								lineHeight="shorter"
							>
								Our Members
							</Heading>
							<Text
								fontSize={{ base: "md", sm: "xl", md: "2xl" }}
								fontWeight={500}
							>
								They are building the next generation of
								technology & finance companies
							</Text>
						</Box>

						<Grid
							templateColumns={{
								base: "1fr 1fr",
								lg: "1fr 1fr 1fr",
								"2xl": "1fr 1fr 1fr 1fr",
							}}
							templateRows="auto"
							columnGap={{ base: "4", md: "8" }}
							rowGap={{ base: "10", md: "14" }}
							placeContent="center"
							alignItems="center"
						>
							{members.map((member) => (
								<GridItem key={member.name}>
									<Box
										mb="3"
										border="2px solid"
										borderColor="white"
										borderRadius="50%"
										display="flex"
										alignItems="center"
										justifyContent="center"
										width={{
											base: "150px",
											sm: "220px",
											lg: "300px",
										}}
										height={{
											base: "150px",
											sm: "220px",
											lg: "300px",
										}}
										mx="auto"
										overflow="hidden"
									>
										<Image
											src={member.image.src}
											alt={member.name}
											width={member.image.width}
											height={member.image.height}
										/>
									</Box>
									<Text
										fontSize={{ base: "lg", md: "2xl" }}
										mb="0.5"
										fontWeight={700}
										textAlign="center"
									>
										{member.name}
									</Text>
									<Text
										fontSize={{ base: "sm", md: "md" }}
										fontWeight={500}
										textAlign="center"
									>
										{member.title}
									</Text>
								</GridItem>
							))}
						</Grid>
					</Box>

					<Box
						textAlign="center"
						mt={{ base: "12", md: "14" }}
						mx="auto"
					>
						<Heading
							fontSize={{ base: "lg", md: "3xl" }}
							fontWeight={700}
							mb={{ base: "6", md: "10" }}
							lineHeight="shorter"
						>
							They are founders, operators, investors, & alumni at
							institutions like
						</Heading>

						<Box
							borderRadius={8}
							overflow="hidden"
							mx="auto"
							maxW="8xl"
						>
							<Image
								src={partners.src}
								alt="Kinfolq partners"
								width={partners.width}
								height={partners.height}
							/>
						</Box>
					</Box>
				</Box>

				<Contact />

				<Footer />
			</main>
		</>
	);
}
