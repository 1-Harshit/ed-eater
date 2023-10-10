// Chakra imports
import { useColorModeValue, Button, Tooltip } from "@chakra-ui/react";
import { MdAlignHorizontalLeft } from "react-icons/md";
// Custom components

export default function Default() {
	const textColor = useColorModeValue("secondaryGray.900", "white");
	const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

	const handleJustifyLeftClick = () => {
		document.execCommand("justifyLeft", true, "");
	};

	return (
		<Tooltip
			label="Justify Left"
			aria-label="Justify Left"
			color={textColor}
			bg={boxBg}
		>
			<Button color={textColor} onClick={handleJustifyLeftClick}>
				   <MdAlignHorizontalLeft/>
			</Button>
		</Tooltip>
	);
}
