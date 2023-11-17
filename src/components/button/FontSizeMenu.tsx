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
	Grid,
	GridItem,
} from "@chakra-ui/react";
import IconBox from "components/icons/IconBox";
import { FaFont } from "react-icons/fa";
import { MdFormatSize } from "react-icons/md";
// Custom components

export default function Default() {
	const textColor = useColorModeValue("secondaryGray.900", "white");
	const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

	const handleFontSizeChange = (size: string) => {
		document.execCommand("fontSize", true, size);
	};

	const FontMenuOption = ({ index }: { index: number }) => {
		const iconSize = `${index * 3 + 12}px`;
		return (
			<GridItem px={1} w="100%" alignContent="center" key={index}>
				<MenuItem
					h="100%"
					borderRadius={5}
					onClick={() => handleFontSizeChange(`${index}`)}
				>
					<IconBox
						icon={
							<Icon w={iconSize} h={iconSize} as={FaFont} color={textColor} />
						}
					/>
				</MenuItem>
			</GridItem>
		);
	};

	return (
		<Menu>
			<Tooltip
				label="Change Font Size"
				aria-label="Change font size"
				color={textColor}
				bg={boxBg}
			>
				<MenuButton
					fontWeight="bold"
					color={textColor}
					as={IconButton}
					id="font-size-button"
				>
					<IconBox
						icon={
							<Icon w="18px" h="18px" as={MdFormatSize} color={textColor} />
						}
					/>
				</MenuButton>
			</Tooltip>
			<MenuList>
				<Grid templateColumns="repeat(3, 1fr)" gap={4}>
					<FontMenuOption index={1} />
					<FontMenuOption index={2} />
					<FontMenuOption index={3} />
					<FontMenuOption index={4} />
					<FontMenuOption index={5} />
					<FontMenuOption index={6} />
				</Grid>
			</MenuList>
		</Menu>
	);
}
