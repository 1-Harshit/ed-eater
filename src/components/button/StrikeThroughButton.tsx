// Chakra imports
import { useColorModeValue, Button, Tooltip } from "@chakra-ui/react";
import { MdStrikethroughS } from "react-icons/md";
import IconBox from "components/icons/IconBox";
import {Icon} from "@chakra-ui/icons";
// Custom components

export default function Default() {
	const textColor = useColorModeValue("secondaryGray.900", "white");
	const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

	const handleStrikeThroughClick = () => {
		document.execCommand("strikeThrough", false, "");
	};

	return (
		<Tooltip
			label="StrikeThrough Selection"
			aria-label="StrikeThrough Selection"
			color={textColor}
			bg={boxBg}
		>
			<Button color={textColor} onClick={handleStrikeThroughClick}>
			<IconBox
					icon={
						<Icon
							w="18px"
							h="18px"
							as={MdStrikethroughS}
							color={textColor}
						/>
					}
				/>
			</Button>
		</Tooltip>
	);
}
