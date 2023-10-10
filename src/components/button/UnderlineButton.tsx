// Chakra imports
import { useColorModeValue, Button, Tooltip } from "@chakra-ui/react";
// Custom components

export default function Default() {
	const textColor = useColorModeValue("secondaryGray.900", "white");
	const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

	const handleUnderlineClick = () => {
		document.execCommand("underline", false, "");
	};

	return (
		<Tooltip
			label="Underline Selection"
			aria-label="Underline Selection"
			color={textColor}
			bg={boxBg}
		>
			<Button
				textDecoration="underline"
				color={textColor}
				onClick={handleUnderlineClick}
				id="underline-button"
			>
				U
			</Button>
		</Tooltip>
	);
}
