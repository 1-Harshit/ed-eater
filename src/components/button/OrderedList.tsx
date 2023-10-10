// Chakra imports
import { useColorModeValue, Button, Tooltip } from "@chakra-ui/react";
import { MdFormatListNumbered } from "react-icons/md";
// Custom components

export default function Default() {
	const textColor = useColorModeValue("secondaryGray.900", "white");
	const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

	const OrderedList = () => {
		document.execCommand("insertOrderedList", true, "");
	};

	return (
		<Tooltip
			label="Insert Ordered List"
			aria-label="Ordered List"
			color={textColor}
			bg={boxBg}
		>
			<Button color={textColor} onClick={OrderedList}>
				   <MdFormatListNumbered/>
			</Button>
		</Tooltip>
	);
}
