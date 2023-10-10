// Chakra imports
import { useColorModeValue, Button, Tooltip } from "@chakra-ui/react";
import { MdFormatAlignLeft } from "react-icons/md";
import IconBox from "components/icons/IconBox";
import { Icon } from "@chakra-ui/icons";
// Custom components

export default function Default() {
	const textColor = useColorModeValue("secondaryGray.900", "white");
	const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

	const handleAlignLeftClick = () => {
		if (document.queryCommandSupported("justifyLeft")) {
			document.execCommand("justifyLeft", false, null);
		} else {
			document.execCommand("styleWithCSS", false, "true");
			document.execCommand("justifyLeft", false, null);
			document.execCommand("styleWithCSS", false, "false");
		}
	};

	return (
		<Tooltip
			label="Justify Left"
			aria-label="Justify Left"
			color={textColor}
			bg={boxBg}
		>
			<Button color={textColor} onClick={handleAlignLeftClick}>
				<IconBox
					icon={
						<Icon w="18px" h="18px" as={MdFormatAlignLeft} color={textColor} />
					}
				/>
			</Button>
		</Tooltip>
	);
}
