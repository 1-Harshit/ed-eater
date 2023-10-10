// Chakra imports
import { useColorModeValue, Menu, MenuButton, MenuList, MenuItem, Tooltip, IconButton } from "@chakra-ui/react";
import { MdFormatSize } from "react-icons/md";
import IconBox from "components/icons/IconBox";
import { Button } from "@chakra-ui/react";
import { Icon} from "@chakra-ui/icons";
// Custom components

export default function Default() {
	const textColor = useColorModeValue("secondaryGray.900", "white");
	const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

	return (
		<Tooltip
			label="Bold Selection"
			aria-label="Bold Selection"
			color={textColor}
			bg={boxBg}
		>
			<Menu>
			<MenuButton fontWeight="bold" color={textColor} as={IconButton} >
			<IconBox
					icon={
						<Icon
							w="18px"
							h="18px"
							as={MdFormatSize}
							color={textColor}
						/>
					}
				/>
				</ MenuButton >
            <MenuList>
                <MenuItem as={Button}  onClick={()=>{document.execCommand("fontSize", true, "1");}}> 1 </MenuItem>
                <MenuItem as={Button} onClick={()=>{document.execCommand("fontSize", true, "2");}}> 2 </MenuItem>
                <MenuItem as={Button}  onClick={()=>{document.execCommand("fontSize", true, "3");}}> 3 </MenuItem>
                <MenuItem as={Button}  onClick={()=>{document.execCommand("fontSize", true, "4");}}> 4 </MenuItem>
                <MenuItem as={Button} onClick={()=>{document.execCommand("fontSize", true, "5");}}> 5 </MenuItem>
				<MenuItem as={Button} onClick={()=>{document.execCommand("fontSize", true, "6");}}> 6 </MenuItem>
				<MenuItem as={Button} onClick={()=>{document.execCommand("fontSize", true, "7");}}> 7 </MenuItem>
            </MenuList>
			</ Menu>

		</Tooltip>
	);
}
