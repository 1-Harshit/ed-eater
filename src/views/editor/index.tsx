/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import {
	Box,
	Grid,
	GridItem,
	Icon,
	SimpleGrid,
	useColorModeValue,
} from "@chakra-ui/react";
// Assets
// Custom components
import MiniStatistics from "components/card/MiniStatistics";
import EditorOptions from "components/editor/EditorOptions";
import IconBox from "components/icons/IconBox";
import { MdFileCopy } from "react-icons/md";
import EditorArea from "components/editor/EditorArea";
import { useState } from "react";

export default function EditorHome() {
	// Chakra Color Mode
	const brandColor = useColorModeValue("brand.500", "white");
	const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

	const [wordCount, setWrordCount] = useState(0);

	const handleContentChange = (e: React.SyntheticEvent) => {
		const target = e.target as HTMLDivElement;
		console.log(target.innerHTML);
		setWrordCount(target.innerText.trim().split(/\s+/).length);
	};

	return (
		<Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
			<Grid
				templateColumns="repeat(5, 1fr)"
				gap="20px"
				mb="20px"
			>
				<GridItem colSpan={4}>
					<EditorOptions name="Editor Options" />
				</GridItem>
				<GridItem colSpan={1}>
					<MiniStatistics
						startContent={
							<IconBox
								w="56px"
								h="56px"
								bg={boxBg}
								icon={
									<Icon w="32px" h="32px" as={MdFileCopy} color={brandColor} />
								}
							/>
						}
						name="Total Words"
						value={wordCount}
					/>
				</GridItem>
			</Grid>

			<SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap="20px" mb="20px">
				<EditorArea handleContentChange={handleContentChange} />
			</SimpleGrid>
		</Box>
	);
}
