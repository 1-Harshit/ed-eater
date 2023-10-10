import React from 'react';

// Chakra imports
import {
	Icon,
	Flex,
	Text,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	useDisclosure,
	useColorModeValue
} from '@chakra-ui/react';
// Assets
import {
	AiOutlineSave,
	AiOutlineFolderOpen,
	AiOutlineExport,
	AiOutlineClear
} from 'react-icons/ai';
import {
	MdOutlineMoreHoriz,
} from 'react-icons/md';

export default function Banner(props: { [x: string]: any }) {
	const { ...rest } = props;

	const textColor = useColorModeValue('secondaryGray.500', 'white');
	const textHover = useColorModeValue(
		{ color: 'secondaryGray.900', bg: 'unset' },
		{ color: 'secondaryGray.500', bg: 'unset' }
	);
	const iconColor = useColorModeValue('brand.500', 'white');
	const bgList = useColorModeValue('white', 'whiteAlpha.100');
	const bgShadow = useColorModeValue('14px 17px 40px 4px rgba(112, 144, 176, 0.08)', 'unset');
	const bgButton = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
	const bgHover = useColorModeValue({ bg: 'secondaryGray.400' }, { bg: 'whiteAlpha.50' });
	const bgFocus = useColorModeValue({ bg: 'secondaryGray.300' }, { bg: 'whiteAlpha.100' });

	// Ellipsis modals
	const { isOpen: isOpen1, onOpen: onOpen1, onClose: onClose1 } = useDisclosure();

	const handleSave = (contentToSave: string | undefined) => {
		//Check for content
		if (contentToSave) {
			const blob = new Blob([contentToSave], { type: "text/plain" });
	
			const fileName = "ed-eater.txt";
	
			const url = URL.createObjectURL(blob);

			const a = document.createElement("a");
			a.href = url;
			a.download = fileName;
			document.body.appendChild(a);
			a.click();

			URL.revokeObjectURL(url);
			document.body.removeChild(a);
		} else {
			alert("There is no content to save.");
		}
	};	 

	const handleOpen = () => {

		const fileInput = document.getElementById("fileInput");
		if (fileInput) {
			fileInput.click();
		}
	};

	const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		
		const file = event.target.files[0];
	  
		if (file) {
			const reader = new FileReader();
		
			reader.onload = (e) => {
				const fileContent = e.target.result;

				const editorElement = document.getElementById("editor-main");
				if (editorElement) {
					editorElement.textContent = fileContent.toString();
				}
			};
		
			reader.readAsText(file);
		}
	};
	  
	
	const handleClear = () => {

		const editorContent = document.getElementById("editor-main");
		//Check for content
		if (editorContent) {
			editorContent.textContent = "";
		}
	};

	return (
		<Menu isOpen={isOpen1} onClose={onClose1}>
			<MenuButton
				alignItems='center'
				justifyContent='center'
				bg={bgButton}
				_hover={bgHover}
				_focus={bgFocus}
				_active={bgFocus}
				w='37px'
				h='37px'
				lineHeight='100%'
				onClick={onOpen1}
				borderRadius='10px'
				{...rest}>
				<Icon as={MdOutlineMoreHoriz} color={iconColor} w='24px' h='24px' />
			</MenuButton>
			<MenuList
				w='150px'
				minW='unset'
				maxW='150px !important'
				border='transparent'
				backdropFilter='blur(63px)'
				bg={bgList}
				boxShadow={bgShadow}
				borderRadius='20px'
				p='15px'>
				<MenuItem
					transition='0.2s linear'
					color={textColor}
					_hover={textHover}
					p='0px'
					borderRadius='8px'
					_active={{
						bg: 'transparent'
					}}
					_focus={{
						bg: 'transparent'
					}}
					mb='10px'
					onClick={() => {
						const editorContent = document.getElementById("editor-main")?.innerText;
						handleSave(editorContent);
					  }}
					>
					<Flex align='center'>
						<Icon as={AiOutlineSave} h='16px' w='16px' me='8px' />
						<Text fontSize='sm' fontWeight='400'>
							Save
						</Text>
					</Flex>
				</MenuItem>
				<MenuItem
					transition='0.2s linear'
					p='0px'
					borderRadius='8px'
					color={textColor}
					_hover={textHover}
					_active={{
						bg: 'transparent'
					}}
					_focus={{
						bg: 'transparent'
					}}
					mb='10px'
					onClick={handleOpen}
					>
					<input type="file" accept=".txt" id="fileInput" style={{ display: "none" }} onChange={handleFileInputChange}/>
					<Flex align='center'>
						<Icon as={AiOutlineFolderOpen} h='16px' w='16px' me='8px' />
						<Text fontSize='sm' fontWeight='400'>
							Open
						</Text>
					</Flex>
				</MenuItem>
				<MenuItem
					transition='0.2s linear'
					p='0px'
					borderRadius='8px'
					color={textColor}
					_hover={textHover}
					_active={{
						bg: 'transparent'
					}}
					_focus={{
						bg: 'transparent'
					}}
					mb='10px'>
					<Flex align='center'>
						<Icon as={AiOutlineExport} h='16px' w='16px' me='8px' />
						<Text fontSize='sm' fontWeight='400'>
							Export As
						</Text>
					</Flex>
				</MenuItem>
				<MenuItem
					transition='0.2s linear'
					color={textColor}
					_hover={textHover}
					p='0px'
					borderRadius='8px'
					_active={{
						bg: 'transparent'
					}}
					_focus={{
						bg: 'transparent'
					}}
					onClick={handleClear}>
					<Flex align='center'>
						<Icon as={AiOutlineClear} h='16px' w='16px' me='8px' />
						<Text fontSize='sm' fontWeight='400'>
							Clear Editor
						</Text>
					</Flex>
				</MenuItem>
			</MenuList>
		</Menu>
	);
}
