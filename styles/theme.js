import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
	fonts: {
		heading: "'PP Neue Montreal', sans-serif",
		body: "'PP Neue Montreal', sans-serif",
	},
	colors: {
		brand: {
			brown: {
				500: "#6D381C",
			},
			black: {
				500: "#111111",
			},
			gray: {
				400: "#98A2B3",
				500: "#C1C1C1",
			},
			white: {
				500: "#F9FAFB",
			},
		},
	},
	styles: {
		global: {
			body: {
				color: "brand.black.500",
			},
		},
	},
});
