import { Button } from "@chakra-ui/react";

function PrimaryButton({ children, ...props }) {
	return (
		<Button
			py="3"
			px="4"
			bgColor="brand.brown.500"
			color="brand.white.500"
			lineHeight="short"
			fontSize="lg"
			fontWeight={700}
			borderRadius={8}
			_hover={{ transform: "scale(1.05)", textDecoration: "none" }}
			{...props}
		>
			{children}
		</Button>
	);
}

export default PrimaryButton;
