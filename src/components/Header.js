import { useRef } from "react";
import { usePathname } from "next/navigation";

import {
	Flex,
	Button,
	useDisclosure,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	DrawerBody,
	Icon,
	Divider,
} from "@chakra-ui/react";
import { TfiMenu } from "react-icons/tfi";

import ChakraNextLink from "./ChakraNextLink";
import PrimaryButton from "./button/PrimaryButton";

const navLinks = [
	{
		text: "Home",
		url: "/",
	},
	{
		text: "Agenda",
		url: "/agenda",
	},
	{
		text: "Become a sponsor",
		url: "/become-a-sponsor",
	},
];

function Header({ ...props }) {
	return (
		<Flex
			width="100%"
			px={{ base: "4", md: "8" }}
			py={{ base: "4", md: "5" }}
			justify="space-between"
			alignItems="center"
			bgColor="brand.black.500"
			{...props}
		>
			<ChakraNextLink
				href="/"
				fontSize={{ base: "xl", md: "3xl" }}
				color="brand.white.500"
				fontWeight={700}
				transition="all 0.2s"
			>
				Kinfolq
			</ChakraNextLink>
			<DesktopMenu />
			<MobileMenu />
		</Flex>
	);
}

function DesktopMenu() {
	const pathname = usePathname();
	return (
		<Flex
			alignItems="center"
			justifyContent="flex-end"
			display={{ base: "none", md: "inherit" }}
			gap="8"
		>
			{navLinks?.map((link) => (
				<ChakraNextLink
					key={link.text}
					href={link.url}
					fontWeight={pathname === link.url ? 700 : 500}
					color={
						pathname === link.url
							? "brand.white.500"
							: "brand.gray.500"
					}
					_hover={{
						color: "brand.white.500",
					}}
					fontSize={{ base: "md", md: "lg" }}
				>
					{link.text}
				</ChakraNextLink>
			))}

			<Divider
				orientation="vertical"
				mx={0.5}
				borderColor="brand.gray.500"
				borderWidth="0.5px"
				height={20}
			/>

			<ChakraNextLink href="/buy-tickets">
				<PrimaryButton>Buy tickets</PrimaryButton>
			</ChakraNextLink>
		</Flex>
	);
}

function MobileMenu() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef();
	const pathname = usePathname();

	return (
		<>
			<Button
				ref={btnRef}
				size="md"
				display={{ base: "inherit", md: "none" }}
				onClick={onOpen}
				variant="unstyled"
			>
				<Icon as={TfiMenu} w="6" color="brand.white.500" />
			</Button>
			<Drawer
				size="sm"
				isOpen={isOpen}
				placement="right"
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton color="brand.gray.500" />
					<DrawerBody
						display="flex"
						flexDir="column"
						justifyContent="center"
						bgColor="brand.black.500"
					>
						<Flex flexDir="column" gap="5">
							{navLinks?.map((link) => (
								<ChakraNextLink
									key={link.text}
									href={link.url}
									fontWeight={
										pathname === link.url ? 700 : 500
									}
									color={
										pathname === link.url
											? "brand.white.500"
											: "brand.gray.500"
									}
									_hover={{
										color: "brand.white.500",
									}}
									fontSize={{ base: "md", md: "lg" }}
								>
									{link.text}
								</ChakraNextLink>
							))}

							<Divider my="3" />

							<ChakraNextLink href="/buy-tickets">
								<PrimaryButton>Buy tickets</PrimaryButton>
							</ChakraNextLink>
						</Flex>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
}

export default Header;
