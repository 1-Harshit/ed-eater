// Chakra imports
import { useColorModeValue, Button, Tooltip } from "@chakra-ui/react";
import { MdFormatAlignJustify } from "react-icons/md";
// Custom components

export default function Default() {
	const textColor = useColorModeValue("secondaryGray.900", "white");
	const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

	const handleJustifyCenterClick = () => {
		document.execCommand("justifyCenter", true, "");
	};

	return (
		<Tooltip
			label="Justify Center"
			aria-label="Justify Center"
			color={textColor}
			bg={boxBg}
		>
			<Button color={textColor} onClick={handleJustifyCenterClick}>
				   <MdFormatAlignJustify/>
			</Button>
		</Tooltip>
	);
}
