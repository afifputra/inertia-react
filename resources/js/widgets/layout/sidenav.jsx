import PropTypes from "prop-types";
import { Link, usePage } from "@inertiajs/inertia-react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
    Avatar,
    Button,
    IconButton,
    Typography,
} from "@material-tailwind/react";
import { useMaterialTailwindController, setOpenSidenav } from "@/context";
import MENU from "@/data/menu-sidenav-data";

export function Sidenav({ brandName }) {
    const [controller, dispatch] = useMaterialTailwindController();
    const { sidenavColor, sidenavType, openSidenav } = controller;
    const sidenavTypes = {
        dark: "bg-gradient-to-br from-blue-gray-800 to-blue-gray-900",
        white: "bg-white shadow-lg",
        transparent: "bg-transparent",
    };
    const { config } = usePage().props;

    return (
        <aside
            className={`${sidenavTypes[sidenavType]} ${
                openSidenav ? "translate-x-0" : "-translate-x-80"
            } fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0`}
        >
            <div
                className={`relative border-b ${
                    sidenavType === "dark"
                        ? "border-white/20"
                        : "border-blue-gray-50"
                }`}
            >
                <Link
                    href={route("dashboard")}
                    className="flex items-center gap-4 py-6 px-8"
                >
                    <Avatar
                        src="https://thumbs.dreamstime.com/b/merchant-icon-affiliate-marketing-collection-simple-line-templates-web-design-infographics-176655471.jpg"
                        size="sm"
                    />
                    <Typography
                        variant="h6"
                        color={sidenavType === "dark" ? "white" : "blue-gray"}
                    >
                        {brandName}
                    </Typography>
                </Link>
                <IconButton
                    variant="text"
                    color="white"
                    size="sm"
                    ripple={false}
                    className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
                    onClick={() => setOpenSidenav(dispatch, false)}
                >
                    <XMarkIcon
                        strokeWidth={2.5}
                        className="h-5 w-5 text-white"
                    />
                </IconButton>
            </div>
            <div className="m-4">
                <ul className="mb-4 flex flex-col gap-1">
                    <li className="mx-3.5 mt-4 mb-2">
                        <Typography
                            variant="small"
                            color={
                                sidenavType === "dark" ? "white" : "blue-gray"
                            }
                            className="font-black uppercase opacity-75"
                        >
                            Pages
                        </Typography>
                    </li>
                    <li>
                        {MENU.map((item, index) => {
                            return (
                                <Link href={item.url} key={index}>
                                    <Button
                                        variant={
                                            config.currentRouteName === item.id
                                                ? "gradient"
                                                : "text"
                                        }
                                        color={
                                            config.currentRouteName === item.id
                                                ? sidenavColor
                                                : sidenavType === "dark"
                                                ? "white"
                                                : "blue-gray"
                                        }
                                        className="flex items-center gap-4 px-4 capitalize"
                                        fullWidth
                                    >
                                        <item.icon className="w-5 h-5 text-inherit" />
                                        <Typography
                                            color="inherit"
                                            className="font-medium capitalize"
                                        >
                                            {item.name}
                                        </Typography>
                                    </Button>
                                </Link>
                            );
                        })}
                    </li>
                </ul>
            </div>
        </aside>
    );
}

Sidenav.defaultProps = {
    brandName: "Merchant App",
};

Sidenav.propTypes = {
    brandName: PropTypes.string,
};

Sidenav.displayName = "/src/widgets/layout/sidnave.jsx";

export default Sidenav;
