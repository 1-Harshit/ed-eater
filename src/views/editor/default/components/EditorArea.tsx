import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card";
import Menu from "components/menu/MainMenu";
import * as React from "react";
// Assets
interface Props {
	handleContentChange: (e: React.SyntheticEvent<Element, Event>) => void;
}

// const columns = columnsDataCheck;
export default function EditorArea(props: Props) {
	const { handleContentChange } = props;
	const textColor = useColorModeValue("secondaryGray.900", "white");

	return (
		<Card
			flexDirection="column"
			w="100%"
			px="0px"
			overflowX={{ sm: "scroll", lg: "hidden" }}
			minHeight="40vh"
		>
			<Flex px="25px" mb="8px" justifyContent="space-between" align="center">
				<Text
					color={textColor}
					fontSize="22px"
					fontWeight="700"
					lineHeight="100%"
				>
					Editor Area
				</Text>
				<Menu />
			</Flex>
			<Box
				contentEditable
				m="15px"
				borderRadius={5}
				px="20px"
				py="10px"
				minHeight="30vh"
				id="editor-main"
				onInput={handleContentChange}
				onBlur={handleContentChange}
			>
				lol <br />
				<b>This is bold</b>
			</Box>
		</Card>
	);
}
