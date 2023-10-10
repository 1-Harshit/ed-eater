// Chakra imports
import { useColorModeValue, Button, Tooltip } from "@chakra-ui/react";
import { MdFormatAlignRight } from "react-icons/md";
// Custom components

export default function Default() {
	const textColor = useColorModeValue("secondaryGray.900", "white");
	const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

	const handleJustifyRightClick = () => {
		if (document.queryCommandSupported("justifyRight")) {
			document.execCommand("justifyRight", false, null);
		} else {
			document.execCommand("styleWithCSS", false, "true");
			document.execCommand("justifyRight", false, null);
			document.execCommand("styleWithCSS", false, "false");
		}
	};

	return (
		<Tooltip
			label="Justify Right"
			aria-label="Justify Right"
			color={textColor}
			bg={boxBg}
		>
			<Button color={textColor} onClick={handleJustifyRightClick}>
				   <MdFormatAlignRight/>
			</Button>
		</Tooltip>
	);
}
