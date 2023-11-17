// Chakra imports
import {
	Flex,
	Stat,
	StatLabel,
	StatNumber,
	useColorModeValue,
	Icon,
	SimpleGrid,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card";
import BoldButton from "components/button/BoldButton";
import ItalicButton from "components/button/ItalicButton";
import UnderlineButton from "components/button/UnderlineButton";
import StrikeThroughButton from "components/button/StrikeThroughButton";
import AlignLeftButton from "components/button/AlignLeftButton";
import AlignCenterButton from "components/button/AlignCenterButton";
import AlignRightButton from "components/button/AlignRightButton";
import AlignJustifyButton from "components/button/AlignJustifyButton";
import OrderedList from "components/button/OrderedList";
import UnorderedList from "components/button/UnorderedList";
import FontSizeMenu from "components/button/FontSizeMenu";
import FontFaceMenu from "components/button/FontFaceMenu";
import IconBox from "components/icons/IconBox";
import { MdEditDocument } from "react-icons/md";

export default function Default(props: { name: string }) {
	const { name } = props;
	const textColor = useColorModeValue("secondaryGray.900", "white");
	const textColorSecondary = "secondaryGray.600";
	// Chakra Color Mode
	const brandColor = useColorModeValue("brand.500", "white");
	const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

	return (
		<Card py="15px" h="100%">
			<Flex
				my="auto"
				h="100%"
				align={{ base: "center", xl: "start" }}
				justify={{ base: "center", xl: "center" }}
			>
				<IconBox
					w="56px"
					h="56px"
					bg={boxBg}
					icon={
						<Icon w="32px" h="32px" as={MdEditDocument} color={brandColor} />
					}
				/>

				<Stat my="auto" ms="18px">
					<StatLabel
						lineHeight="100%"
						color={textColorSecondary}
						fontSize={{
							base: "sm",
						}}
					>
						{name}
					</StatLabel>
					<StatNumber
						color={textColor}
						fontSize={{
							base: "xl",
						}}
					>
						<SimpleGrid
							columns={{ base: 4, md: 8, lg: 12, "2xl": 12 }}
							gap="20px"
							mt="10px"
						>
							<FontFaceMenu />
							<FontSizeMenu />
							<BoldButton />
							<ItalicButton />
							<UnderlineButton />
							<StrikeThroughButton />
							<AlignLeftButton />
							<AlignCenterButton />
							<AlignRightButton />
							<AlignJustifyButton />
							<OrderedList />
							<UnorderedList />
						</SimpleGrid>
					</StatNumber>
				</Stat>
				<Flex ms="auto" w="max-content">
					{}
				</Flex>
			</Flex>
		</Card>
	);
}
