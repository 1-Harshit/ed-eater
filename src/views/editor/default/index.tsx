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
import { Avatar, Box, Flex, FormLabel, Icon, Select, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
// Assets
import Usa from 'assets/img/dashboards/usa.png';
// Custom components
import MiniCalendar from 'components/calendar/MiniCalendar';
import MiniStatistics from 'components/card/MiniStatistics';
import IconBox from 'components/icons/IconBox';
import { MdAddTask, MdAttachMoney, MdBarChart, MdFileCopy } from 'react-icons/md';
import EditorArea from 'views/editor/default/components/EditorArea';
import DailyTraffic from 'views/editor/default/components/DailyTraffic';
import PieCard from 'views/editor/default/components/PieCard';
import Tasks from 'views/editor/default/components/Tasks';
import TotalSpent from 'views/editor/default/components/TotalSpent';
import WeeklyRevenue from 'views/editor/default/components/WeeklyRevenue';
import tableDataComplex from 'views/editor/default/variables/tableDataComplex';

export default function UserReports() {
	// Chakra Color Mode
	const brandColor = useColorModeValue('brand.500', 'white');
	const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
	return (
		<Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
			<SimpleGrid columns={{ base: 1, md: 2, lg: 3, '2xl': 6 }} gap='20px' mb='20px'>
				<MiniStatistics
					startContent={
						<IconBox
							w='56px'
							h='56px'
							bg={boxBg}
							icon={<Icon w='32px' h='32px' as={MdBarChart} color={brandColor} />}
						/>
					}
					name='Earnings'
					value='$350.4'
				/>
				<MiniStatistics
					startContent={
						<IconBox
							w='56px'
							h='56px'
							bg={boxBg}
							icon={<Icon w='32px' h='32px' as={MdAttachMoney} color={brandColor} />}
						/>
					}
					name='Spend this month'
					value='$642.39'
				/>
				<MiniStatistics growth='+23%' name='Sales' value='$574.34' />
				<MiniStatistics
					endContent={
						<Flex me='-16px' mt='10px'>
							<FormLabel htmlFor='balance'>
								<Avatar src={Usa} />
							</FormLabel>
							<Select id='balance' variant='mini' mt='5px' me='0px' defaultValue='usd'>
								<option value='usd'>USD</option>
								<option value='eur'>EUR</option>
								<option value='gba'>GBA</option>
							</Select>
						</Flex>
					}
					name='Your balance'
					value='$1,000'
				/>
				<MiniStatistics
					startContent={
						<IconBox
							w='56px'
							h='56px'
							bg='linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)'
							icon={<Icon w='28px' h='28px' as={MdAddTask} color='white' />}
						/>
					}
					name='New Tasks'
					value='154'
				/>
				<MiniStatistics
					startContent={
						<IconBox
							w='56px'
							h='56px'
							bg={boxBg}
							icon={<Icon w='32px' h='32px' as={MdFileCopy} color={brandColor} />}
						/>
					}
					name='Total Words'
					value='2935'
				/>
			</SimpleGrid>

			<SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap='20px' mb='20px'>
				<EditorArea />
			</SimpleGrid>
		</Box>
	);
}
