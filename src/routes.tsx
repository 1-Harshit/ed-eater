import { Icon } from '@chakra-ui/react';
import { MdPerson, MdHome, MdLock, MdOutlineShoppingCart } from 'react-icons/md';

// Editor Imports
import MainDashboard from 'views/editor/default';
import NFTMarketplace from 'views/editor/marketplace';
import Profile from 'views/editor/profile';

// Auth Imports
import SignInCentered from 'views/auth/signIn';

const routes = [
	{
		name: 'Main Dashboard',
		layout: '/editor',
		path: '/default',
		icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
		component: MainDashboard
	},
	{
		name: 'Placeholder',
		layout: '/editor',
		path: '/nft-marketplace',
		icon: <Icon as={MdOutlineShoppingCart} width='20px' height='20px' color='inherit' />,
		component: NFTMarketplace,
		secondary: true
	},
	{
		name: 'Placeholder 2',
		layout: '/editor',
		path: '/profile',
		icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
		component: Profile
	},
	{
		name: 'Sign In',
		layout: '/auth',
		path: '/login',
		icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
		component: SignInCentered
	}
];

export default routes;
