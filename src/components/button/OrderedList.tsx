// Chakra imports
import { useColorModeValue, Button, Tooltip } from "@chakra-ui/react";
import { MdFormatListNumbered } from "react-icons/md";
import IconBox from "components/icons/IconBox";
import {Icon} from "@chakra-ui/icons";

// Custom components

export default function Default() {
	const textColor = useColorModeValue("secondaryGray.900", "white");
	const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

	const OrderedList = () => {
		if (document.queryCommandSupported("insertUnorderedList")) {
			document.execCommand("insertOrderedList", false, null);
		} else {
			document.execCommand("styleWithCSS", false, "true");
			document.execCommand("insertOrderedList", false, null);
			document.execCommand("styleWithCSS", false, "false");
		}
	};

	return (
		<Tooltip
			label="Insert Ordered List"
			aria-label="Ordered List"
			color={textColor}
			bg={boxBg}
		>
			<Button color={textColor} onClick={OrderedList}>
			<IconBox
					icon={
						<Icon
							w="18px"
							h="18px"
							as={MdFormatListNumbered}
							color={textColor}
						/>
					}
				/>
				   
			</Button>
		</Tooltip>
	);
}
