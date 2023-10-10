// Chakra imports
import { useColorModeValue, Button, Tooltip } from "@chakra-ui/react";
import { MdFormatListBulleted } from "react-icons/md";
import IconBox from "components/icons/IconBox";
import {Icon} from "@chakra-ui/icons";
// Custom components

export default function Default() {
	const textColor = useColorModeValue("secondaryGray.900", "white");
	const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

	const UnorderedList = () => {
		if (document.queryCommandSupported("insertUnorderedList")) {
			document.execCommand("insertUnorderedList", false, null);
		} else {
			document.execCommand("styleWithCSS", false, "true");
			document.execCommand("insertUnorderedList", false, null);
			document.execCommand("styleWithCSS", false, "false");
		}
	};

	return (
		<Tooltip
			label="Insert Unordered List"
			aria-label="Unordered List"
			color={textColor}
			bg={boxBg}
		>
			<Button color={textColor} onClick={UnorderedList}>
			<IconBox
					icon={
						<Icon
							w="18px"
							h="18px"
							as={MdFormatListBulleted}
							color={textColor}
						/>
					}
				/>
				   
			</Button>
		</Tooltip>
	);
}
