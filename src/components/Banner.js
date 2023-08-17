import { Text, AspectRatio, Box } from "@chakra-ui/react";
import Image from "next/image";

import banner from "../../public/images/kinfolq.jpg";

function Banner({ children, ...props }) {
	return (
		<Box
			marginBottom={children ? { base: 6, sm: 12, md: 20, lg: 24 } : null}
		>
			<AspectRatio ratio={22 / 9} {...props}>
				<Image
					src={banner.src}
					alt="Kinfolq banner"
					width={banner.width}
					height={banner.height}
					priority
				/>
			</AspectRatio>
			{children && (
				<Text
					color="brand.white.500"
					fontWeight={700}
					fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "7xl" }}
					textTransform="capitalize"
					marginTop={{ base: -16, sm: -24, md: -36, lg: -48 }}
					position="relative"
					zIndex={2}
					pl={{ base: "4", md: "12" }}
				>
					{children}
				</Text>
			)}
		</Box>
	);
}

export default Banner;
