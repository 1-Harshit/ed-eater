// Chakra imports
import {
	useColorModeValue,
	Tooltip,
	Icon,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
} from "@chakra-ui/react";
import IconBox from "components/icons/IconBox";
import { MdTextFormat } from "react-icons/md";
// Custom components

function CapatalizeFirstLetter(string: string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function Default() {
	const textColor = useColorModeValue("secondaryGray.900", "white");
	const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

	const handleFontFaceChange = (name: string) => {
		document.execCommand("fontName", true, name);
	};

	const FontFaceOption = ({ face }: { face: string }) => (
		<MenuItem
			h="100%"
			borderRadius={5}
			onClick={() => handleFontFaceChange(face)}
			id={`${face}-button`}
			color={textColor}
			fontFamily={face}
		>
			{CapatalizeFirstLetter(face)}
		</MenuItem>
	);

	return (
		<Menu>
			<Tooltip
				label="Change Font Face"
				aria-label="Change Font Face"
				color={textColor}
				bg={boxBg}
			>
				<MenuButton fontWeight="bold" color={textColor} as={IconButton} id="font-face-button">
					<IconBox
						icon={
							<Icon w="20px" h="20px" as={MdTextFormat} color={textColor} />
						}
					/>
				</MenuButton>
			</Tooltip>
			<MenuList>
				<FontFaceOption face="sans" />
				<FontFaceOption face="serif" />
				<FontFaceOption face="sans-serif" />
				<FontFaceOption face="monospace" />
			</MenuList>
		</Menu>
	);
}
