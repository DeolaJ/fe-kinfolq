import Head from "next/head";
import {
	Box,
	Text,
	Table,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
	chakra,
} from "@chakra-ui/react";
import Image from "next/image";

import Contact from "../src/components/Contact";
import Header from "../src/components/Header";
import Sticker from "../src/components/Sticker";
import Footer from "../src/components/Footer";
import Banner from "../src/components/Banner";

import gizmodo from "../public/gizmodo.svg";

export default function BuyTickets() {
	return (
		<>
			<Head>
				<title>Get a ticket | Kinfolq</title>
			</Head>
			<main>
				<Header />

				<Box bgColor="brand.brown.500">
					<Banner>Get a ticket</Banner>
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
							Our ticket tiers for this conference are:
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

						<TableContainer
							borderRadius={8}
							border="1px solid"
							borderColor="brand.white.500"
							fontSize={{ base: "md", md: "xl" }}
							my={{ base: "8", md: "12" }}
							color="brand.white.500"
						>
							<Table variant="simple">
								<Thead>
									<Tr>
										<Th
											py="6"
											color="brand.white.500"
											fontWeight={700}
											fontSize={{ base: "md", md: "xl" }}
											textTransform="capitalize"
										>
											Host
										</Th>
										<Th
											py="6"
											color="brand.white.500"
											fontSize={{ base: "md", md: "xl" }}
										>
											<Box maxW="150px">
												<Image
													src={gizmodo.src}
													alt="Kinfolq host"
													width={gizmodo.width}
													height={gizmodo.height}
												/>
											</Box>
										</Th>
										<Th
											py="6"
											color="brand.white.500"
											fontWeight={700}
											fontSize={{ base: "md", md: "xl" }}
										>
											<Box maxW="150px">
												<Image
													src={gizmodo.src}
													alt="Kinfolq host"
													width={gizmodo.width}
													height={gizmodo.height}
												/>
											</Box>
										</Th>
										<Th
											py="6"
											color="brand.white.500"
											fontWeight={700}
											fontSize={{ base: "md", md: "xl" }}
										>
											<Box maxW="150px">
												<Image
													src={gizmodo.src}
													alt="Kinfolq host"
													width={gizmodo.width}
													height={gizmodo.height}
												/>
											</Box>
										</Th>
										<Th
											py="6"
											color="brand.white.500"
											fontWeight={700}
											fontSize={{ base: "md", md: "xl" }}
										>
											<Box maxW="150px">
												<Image
													src={gizmodo.src}
													alt="Kinfolq host"
													width={gizmodo.width}
													height={gizmodo.height}
												/>
											</Box>
										</Th>
										<Th
											py="6"
											color="brand.white.500"
											fontWeight={700}
											fontSize={{ base: "md", md: "xl" }}
										>
											<Box maxW="150px">
												<Image
													src={gizmodo.src}
													alt="Kinfolq host"
													width={gizmodo.width}
													height={gizmodo.height}
												/>
											</Box>
										</Th>
									</Tr>
								</Thead>
								<Tbody>
									<Tr>
										<Td py="6" fontWeight={700}>
											Cost
										</Td>
										<Td py="6">
											$
											<chakra.span letterSpacing="-2.5px">
												500
											</chakra.span>
										</Td>
										<Td py="6">
											$
											<chakra.span letterSpacing="-2.5px">
												300
											</chakra.span>
										</Td>
										<Td py="6">
											$
											<chakra.span letterSpacing="-2.5px">
												1,725
											</chakra.span>
										</Td>
										<Td py="6">
											$
											<chakra.span letterSpacing="-2.5px">
												575
											</chakra.span>
										</Td>
										<Td py="6">
											$
											<chakra.span letterSpacing="-2.5px">
												250
											</chakra.span>
										</Td>
									</Tr>
									<Tr>
										<Td py="6" fontWeight={700}>
											Duration
										</Td>
										<Td py="6">Three Days</Td>
										<Td py="6">Two Days</Td>
										<Td py="6">Ten Days</Td>
										<Td py="6">Five Days</Td>
										<Td py="6">Three Days</Td>
									</Tr>
									<Tr>
										<Td py="6" fontWeight={700}>
											Location
										</Td>
										<Td py="6">Austin</Td>
										<Td py="6">Nash Ville</Td>
										<Td py="6">Austin</Td>
										<Td py="6">Kansas City</Td>
										<Td py="6">NYC</Td>
									</Tr>
								</Tbody>
							</Table>
						</TableContainer>
					</Box>
				</Box>

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
