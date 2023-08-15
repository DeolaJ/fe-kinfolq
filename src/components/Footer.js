import { Flex, Text, Link, Box } from "@chakra-ui/react";

function Footer({ ...props }) {
	const footerLinks = [
		{
			text: "Terms",
			url: "",
		},
		{
			text: "Privacy",
			link: "",
		},
		{
			text: "Cookies",
			link: "",
		},
	];

	return (
		<Flex
			py={{ base: "4", md: "12" }}
			px={{ base: "4", md: "12" }}
			w="100%"
			{...props}
		>
			<Flex
				justifyContent={{ base: "flex-start", md: "space-between" }}
				gap={{ base: "3", md: "6" }}
				borderTop="1px solid"
				borderColor="brand.black.500"
				flexDir={{ base: "column-reverse", md: "row" }}
				w="100%"
				py={{ base: "5", md: "8" }}
				alignItems={{ base: "flex-start", md: "center" }}
			>
				<Box gap={{ base: "3", md: "6" }}>
					<Text fontSize={{ base: "sm", md: "md" }} fontWeight={500}>
						Kinfolq@{new Date().getFullYear()}
						{` - All rights reserved.`}
					</Text>
				</Box>
				<Flex alignItems="center" gap="4">
					{footerLinks.map((link) => (
						<Link
							key={link.text}
							fontWeight={500}
							fontSize={{ base: "sm", md: "md" }}
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
						>
							{link.text}
						</Link>
					))}
				</Flex>
			</Flex>
		</Flex>
	);
}

export default Footer;
