// Chakra imports
import { useColorModeValue, Button, Tooltip } from "@chakra-ui/react";
// Custom components

export default function Default() {
	const textColor = useColorModeValue("secondaryGray.900", "white");
	const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

	const handleBoldClick = () => {
		document.execCommand("bold", false, "");
	};

	return (
		<Tooltip
			label="Bold Selection"
			aria-label="Bold Selection"
			color={textColor}
			bg={boxBg}
		>
			<Button fontWeight="bold" color={textColor} onClick={handleBoldClick}>
				B
			</Button>
		</Tooltip>
	);
}
