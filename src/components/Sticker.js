import { Text, Box, Flex, IconButton } from "@chakra-ui/react";
import { LuArrowUpRight } from "react-icons/lu";

import ChakraNextLink from "./ChakraNextLink";

function Sticker({ heading, description, url, ...props }) {
	return (
		<Box
			as="section"
			py={{ base: "6", md: "10", lg: "14" }}
			px={{ base: "4", md: "10", lg: "14" }}
			{...props}
		>
			<Flex gap="5" alignItems="center" justifyContent="space-between">
				<Box>
					{heading && (
						<Text
							fontSize={{
								base: "xl",
								sm: "3xl",
								md: "4xl",
								lg: "5xl",
								xl: "6xl",
							}}
							fontWeight={700}
							lineHeight={{ base: "1.2", sm: "none" }}
							textTransform="capitalize"
							mb={{ base: "2", sm: "3", md: "4" }}
							color="brand.white.500"
						>
							{heading}
						</Text>
					)}
					{description && (
						<Text
							fontSize={{
								base: "md",
								sm: "lg",
								md: "xl",
								lg: "2xl",
								xl: "28px",
							}}
							fontWeight={500}
							color="brand.white.500"
						>
							{description}
						</Text>
					)}
				</Box>

				<ChakraNextLink href={url}>
					<IconButton
						icon={<LuArrowUpRight />}
						fontSize={{ base: "30px", md: "40px", lg: "54px" }}
						p={{ base: "25px", xl: "35px" }}
						h={{ md: "100%" }}
						variant="outline"
						colorScheme="brand.white"
						_hover={{ transform: "scale(1.1)" }}
						border="2px solid"
						color="brand.white.500"
						borderRadius="50%"
					/>
				</ChakraNextLink>
			</Flex>
		</Box>
	);
}

export default Sticker;
