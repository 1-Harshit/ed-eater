// Chakra imports
import { useColorModeValue, Button, Tooltip } from "@chakra-ui/react";
import { MdFormatAlignJustify } from "react-icons/md";
// Custom components

export default function Default() {
	const textColor = useColorModeValue("secondaryGray.900", "white");
	const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

	const handleAlignCenterClick = () => {
		if (document.queryCommandSupported("justifyCenter")) {
			document.execCommand("justifyCenter", false, null);
		} else {
			document.execCommand("styleWithCSS", false, "true");
			document.execCommand("justifyCenter", false, null);
			document.execCommand("styleWithCSS", false, "false");
		}
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
