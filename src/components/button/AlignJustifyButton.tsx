// Chakra imports
import { useColorModeValue, Button, Tooltip } from "@chakra-ui/react";
import { MdFormatAlignJustify } from "react-icons/md";
import IconBox from "components/icons/IconBox";
import { Icon } from "@chakra-ui/icons";
// Custom components

export default function Default() {
	const textColor = useColorModeValue("secondaryGray.900", "white");
	const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

	const handleAlignJustifyClick = () => {
		if (document.queryCommandSupported("justifyFull")) {
			document.execCommand("justifyFull", false, null);
		} else {
			document.execCommand("styleWithCSS", false, "true");
			document.execCommand("justifyFull", false, null);
			document.execCommand("styleWithCSS", false, "false");
		}
	};

	return (
		<Tooltip
			label="Justify Align"
			aria-label="Justify Align"
			color={textColor}
			bg={boxBg}
		>
			<Button color={textColor} onClick={handleAlignJustifyClick} id="align-justify-button">
				<IconBox
					icon={
						<Icon
							w="18px"
							h="18px"
							as={MdFormatAlignJustify}
							color={textColor}
						/>
					}
				/>
			</Button>
		</Tooltip>
	);
}
