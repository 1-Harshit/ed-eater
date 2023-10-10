// Chakra imports
import { useColorModeValue, Button, Tooltip } from "@chakra-ui/react";
import { MdFormatAlignLeft } from "react-icons/md";
// Custom components

export default function Default() {
	const textColor = useColorModeValue("secondaryGray.900", "white");
	const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

	const handleJustifyLeftClick = () => {
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
			<Button color={textColor} onClick={handleJustifyLeftClick}>
				   <IconBox
					icon={
						<Icon
							w="18px"
							h="18px"
							as={MdFormatAlignLeft}
							color={textColor}
						/>
					}
				/>
			</Button>
		</Tooltip>
	);
}
