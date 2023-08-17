import { Text, Box, Flex, Grid, GridItem } from "@chakra-ui/react";

const contactInfo = [
	"Timi Dayo-Kayode 👋🏾",
	"Insta: @oversabiboyy",
	"Email: t@kinfolq.com",
	"Twitter: @heistimi",
];

function Contact({ ...props }) {
	return (
		<Box
			as="section"
			pt={{ base: "10", md: "20" }}
			pb={{ base: "4", md: "12" }}
			px={{ base: "4", md: "12" }}
			{...props}
		>
			<Box>
				<Flex
					gap="5"
					flexDir={{ base: "column", md: "row" }}
					alignItems={{ base: "flex-start", md: "center" }}
					justifyContent={{ base: "flex-start", md: "space-between" }}
					placeContent={{ base: "flex-start", md: "flex-start" }}
				>
					<Text
						fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
						fontWeight={700}
						lineHeight="short"
						flexBasis="50%"
						textTransform="capitalize"
					>
						Contact our team
					</Text>
					<Grid
						templateColumns="1fr 1fr"
						rowGap={{ base: "2", md: "2", lg: "3" }}
						columnGap={{ base: "4", md: "6", lg: "8" }}
						templateRows="auto"
					>
						{contactInfo?.map((info) => (
							<GridItem
								key={info}
								fontSize={{
									base: "md",
									sm: "lg",
									lg: "2xl",
								}}
								fontWeight={700}
							>
								{info}
							</GridItem>
						))}
					</Grid>
				</Flex>
			</Box>
		</Box>
	);
}

export default Contact;
