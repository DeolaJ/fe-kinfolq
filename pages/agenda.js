import Head from "next/head";
import { useState } from "react";
import {
	Box,
	Flex,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Table,
	TableContainer,
	Tabs,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";

import Contact from "../src/components/Contact";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Banner from "../src/components/Banner";
import SecondaryButton from "../src/components/button/SecondaryButton";

const tabList = [
	{
		day: "Day 1, Friday, Sept. 15th",
		table: (
			<TableContainer
				borderRadius={8}
				border="1px solid"
				borderColor="brand.white.500"
				fontSize={{ base: "md", md: "xl" }}
			>
				<Table variant="simple">
					<Thead>
						<Tr>
							<Th
								py="6"
								color="brand.white.500"
								fontWeight={700}
								fontSize={{ base: "md", md: "xl" }}
							>
								Time
							</Th>
							<Th
								py="6"
								color="brand.white.500"
								fontWeight={700}
								fontSize={{ base: "md", md: "xl" }}
							>
								Event
							</Th>
						</Tr>
					</Thead>
					<Tbody>
						<Tr>
							<Td py="6">6pm - 6:30pm</Td>
							<Td py="6">Check ins</Td>
						</Tr>
						<Tr>
							<Td py="6">6pm - 6:30pm</Td>
							<Td py="6">Welcome Keynote</Td>
						</Tr>
						<Tr>
							<Td py="6">6pm - 6:30pm</Td>
							<Td py="6">Career Fair Mixer</Td>
						</Tr>
						<Tr>
							<Td py="6">6pm - 6:30pm</Td>
							<Td py="6">VIP Dinner w Speakers</Td>
						</Tr>
					</Tbody>
				</Table>
			</TableContainer>
		),
	},
	{
		day: "Day 2, Saturday, Sept. 16th",
		table: (
			<TableContainer
				borderRadius={8}
				border="1px solid"
				borderColor="brand.white.500"
				fontSize={{ base: "md", md: "xl" }}
			>
				<Table variant="simple">
					<Thead>
						<Tr>
							<Th
								py="6"
								color="brand.white.500"
								fontWeight={700}
								fontSize={{ base: "md", md: "xl" }}
							>
								Time
							</Th>
							<Th
								py="6"
								color="brand.white.500"
								fontWeight={700}
								fontSize={{ base: "md", md: "xl" }}
							>
								Event
							</Th>
						</Tr>
					</Thead>
					<Tbody>
						<Tr>
							<Td py="6">6pm - 6:30pm</Td>
							<Td py="6">Check ins</Td>
						</Tr>
						<Tr>
							<Td py="6">6pm - 6:30pm</Td>
							<Td py="6">Welcome Keynote</Td>
						</Tr>
						<Tr>
							<Td py="6">6pm - 6:30pm</Td>
							<Td py="6">Career Fair Mixer</Td>
						</Tr>
						<Tr>
							<Td py="6">6pm - 6:30pm</Td>
							<Td py="6">VIP Dinner w Speakers</Td>
						</Tr>
					</Tbody>
				</Table>
			</TableContainer>
		),
	},
	{
		day: "Day 3, Sunday, Sept. 17th",
		table: (
			<TableContainer
				borderRadius={8}
				border="1px solid"
				borderColor="brand.white.500"
				fontSize={{ base: "md", md: "xl" }}
			>
				<Table variant="simple">
					<Thead>
						<Tr>
							<Th
								py="6"
								color="brand.white.500"
								fontWeight={700}
								fontSize={{ base: "md", md: "xl" }}
							>
								Time
							</Th>
							<Th
								py="6"
								color="brand.white.500"
								fontWeight={700}
								fontSize={{ base: "md", md: "xl" }}
							>
								Event
							</Th>
						</Tr>
					</Thead>
					<Tbody>
						<Tr>
							<Td py="6">6pm - 6:30pm</Td>
							<Td py="6">Check ins</Td>
						</Tr>
						<Tr>
							<Td py="6">6pm - 6:30pm</Td>
							<Td py="6">Welcome Keynote</Td>
						</Tr>
						<Tr>
							<Td py="6">6pm - 6:30pm</Td>
							<Td py="6">Career Fair Mixer</Td>
						</Tr>
						<Tr>
							<Td py="6">6pm - 6:30pm</Td>
							<Td py="6">VIP Dinner w Speakers</Td>
						</Tr>
					</Tbody>
				</Table>
			</TableContainer>
		),
	},
];

export default function Home() {
	const [tabIndex, setTabIndex] = useState(0);

	return (
		<>
			<Head>
				<title>Agenda | Kinfolq</title>
			</Head>
			<main>
				<Header />

				<Box bgColor="brand.brown.500">
					<Banner>Agenda</Banner>
					<Box
						as="section"
						py={{ base: "6", md: "14" }}
						px={{ base: "4", md: "14" }}
						color="brand.white.500"
					>
						<Flex
							gap={{ base: "6", md: "10" }}
							flexDir={{ base: "column", md: "row" }}
							alignItems={{ base: "flex-start", md: "center" }}
							justifyContent="space-between"
							color="brand.white.500"
						>
							<Text
								fontSize={{ base: "3xl", sm: "5xl", md: "6xl" }}
								fontWeight={700}
								lineHeight="none"
								flexBasis="40%"
								flexGrow="0.2"
							>
								Our Agenda
							</Text>
							<Text
								fontSize={{ base: "md", sm: "xl", md: "2xl" }}
								fontWeight={500}
								flexBasis="60%"
							>
								They are building the next generation of
								technology companies and wield enormous levels
								of influence and buying power due to their
								high-impact, high-paying roles in tech and
								finance.
							</Text>
						</Flex>
					</Box>

					<Box
						as="section"
						pb={{ base: "10", md: "14" }}
						px={{ base: "4", md: "14" }}
						color="brand.white.500"
					>
						<Tabs
							variant="unstyled"
							defaultIndex={0}
							index={tabIndex}
							onChange={(index) => setTabIndex(index)}
						>
							<TabList
								bgColor="brand.black.500"
								p="2"
								gap="4"
								justifyContent="space-between"
								borderRadius={4}
							>
								{tabList.map((tab) => (
									<Tab
										key={tab.day}
										flexBasis="50%"
										textAlign="center"
										_selected={{
											color: "brand.white.500",
											bgColor: "brand.brown.500",
										}}
										_hover={{
											bgColor: "brand.brown.500",
										}}
										borderRadius={4}
										py="4"
										px="2"
										h="60px"
										fontWeight={500}
										fontSize={{ base: "sm", md: "xl" }}
									>
										{tab.day}
									</Tab>
								))}
							</TabList>
							<TabPanels my={{ base: "8", md: "12" }}>
								{tabList.map((tab) => (
									<TabPanel key={tab.day} p="0">
										{tab.table}
									</TabPanel>
								))}
							</TabPanels>
						</Tabs>

						<SecondaryButton
							size="lg"
							borderRadius={8}
							h={{ base: "50px", md: "60px" }}
							textTransform="capitalize"
							py="4"
							px={{ base: "6", md: "8" }}
							fontSize={{ base: "lg", md: "2xl" }}
						>
							Purchase a ticket
						</SecondaryButton>
					</Box>
				</Box>

				<Contact />

				<Footer />
			</main>
		</>
	);
}
