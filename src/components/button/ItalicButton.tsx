// Chakra imports
import { useColorModeValue, Button, Tooltip } from "@chakra-ui/react";
// Custom components

export default function Default() {
	const textColor = useColorModeValue("secondaryGray.900", "white");
	const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

	const handleBoldClick = () => {
		document.execCommand("italic", false, "");
	};

	return (
		<Tooltip
			label="Italic Selection"
			aria-label="Italic Selection"
			color={textColor}
			bg={boxBg}
		>
			<Button
				fontStyle="italic"
				color={textColor}
				onClick={handleBoldClick}
				id="italic-button"
			>
				I
			</Button>
		</Tooltip>
	);
}
