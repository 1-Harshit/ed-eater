import { Icon } from "@chakra-ui/react";
import { MdHome } from "react-icons/md";

// Editor Imports
import MainDashboard from "views/editor";

const routes = [
	{
		name: "Main Dashboard",
		layout: "/editor",
		path: "",
		icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
		component: MainDashboard,
	},
];

export default routes;
