// Chakra imports
import { useColorModeValue, Button, Tooltip } from "@chakra-ui/react";
import { MdAlignHorizontalRight } from "react-icons/md";
// Custom components

export default function Default() {
	const textColor = useColorModeValue("secondaryGray.900", "white");
	const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

	const handleJustifyRightClick = () => {
		document.execCommand("justifyRight", true, "");
	};

	return (
		<Tooltip
			label="Justify Right"
			aria-label="Justify Right"
			color={textColor}
			bg={boxBg}
		>
			<Button color={textColor} onClick={handleJustifyRightClick}>
				   <MdAlignHorizontalRight/>
			</Button>
		</Tooltip>
	);
}
