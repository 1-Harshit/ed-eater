// Chakra imports
import { useColorModeValue, Button, Tooltip } from "@chakra-ui/react";
import { MdFormatAlignRight } from "react-icons/md";
import IconBox from "components/icons/IconBox";
import { Icon } from "@chakra-ui/icons";
// Custom components

export default function Default() {
	const textColor = useColorModeValue("secondaryGray.900", "white");
	const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

	const handleAlignRightClick = () => {
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
			<Button color={textColor} onClick={handleAlignRightClick}>
				<IconBox
					icon={
						<Icon w="18px" h="18px" as={MdFormatAlignRight} color={textColor} />
					}
				/>
			</Button>
		</Tooltip>
	);
}
