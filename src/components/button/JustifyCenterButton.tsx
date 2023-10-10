// Chakra imports
import { useColorModeValue, Button, Tooltip } from "@chakra-ui/react";
import { MdFormatAlignCenter } from "react-icons/md";
import IconBox from "components/icons/IconBox";
import {Icon} from "@chakra-ui/icons";
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
			label="Align Center"
			aria-label="Align Center"
			color={textColor}
			bg={boxBg}
		>
			<Button color={textColor} onClick={handleAlignCenterClick}>
				<IconBox
					icon={
						<Icon
							w="18px"
							h="18px"
							as={MdFormatAlignCenter}
							color={textColor}
						/>
					}
				/>
			</Button>
		</Tooltip>
	);
}
