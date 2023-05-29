import { HomeIcon, Cog8ToothIcon } from "@heroicons/react/24/solid";

const MENU = [
    {
        id: "dashboard",
        name: "Dashboard",
        icon: HomeIcon,
        url: route("dashboard"),
        subMenu: [],
    },
    {
        id: "setting",
        name: "Settings",
        icon: Cog8ToothIcon,
        url: route("setting"),
        subMenu: [],
    },
];

export default MENU;
