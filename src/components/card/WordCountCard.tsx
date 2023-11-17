// Chakra imports
import { Flex, Stat, StatLabel, StatNumber, useColorModeValue, Icon } from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';
import IconBox from 'components/icons/IconBox';
import { MdFileCopy } from 'react-icons/md';

export default function Default(props: {value: number}) {
	const { value } = props;
	const textColor = useColorModeValue('secondaryGray.900', 'white');
	const textColorSecondary = 'secondaryGray.600';
	const brandColor = useColorModeValue("brand.500", "white");
	const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

	return (
		<Card py='15px' h='100%'>
			<Flex my='auto' h='100%' align={{ base: 'center', xl: 'start' }} justify={{ base: 'center', xl: 'center' }}>
				<IconBox
					w="56px"
					h="56px"
					bg={boxBg}
					icon={
						<Icon w="32px" h="32px" as={MdFileCopy} color={brandColor} />
					}
				/>
				<Stat my='auto' ms={'18px'}>
					<StatLabel
						lineHeight='100%'
						color={textColorSecondary}
						fontSize={{
							base: 'sm'
						}}>
						Word Count
					</StatLabel>
					<StatNumber
						id="word-count"
						color={textColor}
						fontSize={{
							base: '2xl'
						}}>
						{value}
					</StatNumber>
				</Stat>
			</Flex>
		</Card>
	);
}
