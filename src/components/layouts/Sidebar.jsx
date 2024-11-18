import { Link, useLocation } from 'react-router-dom';
import {PropTypes} from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChartPie,
    faUsers,
    faUsersCog,
    faArrowLeft,
    faArrowRight,
} from '@fortawesome/free-solid-svg-icon';

const SidebarItem = ({ href, label, isCollapsed, icon }) => {
    const location = useLocation();
    const isActive = location.pathname === href;

    return (
        <li className={"group"}>
            <Link
                to={href}
                className={`flex items-center py-2.5 px-4 hover:bg-white transition ${
                    isActive ? 'bg-white border-y-2 border-black-500' : ''
                }`}
            >
                <FontAwesomeIcon icon={icon} />
                <span
                    className={`text-black text-base font-medium leading-tight ml-4 text-nowrap ${
                        isCollapsed ? 'hidden' : 'block'
                    }`}
                >
                    {label}
                </span>
            </Link>
        </li>
    );
};

const Sidebar = () => {
    const sidebarItems = [
        { href: '/admin/home', label: 'Dashboard', icon: faChartPie},
        { href: '/admin/pending-farmers', label: 'Pending Farmers', icon: faUsers},
        { href: '/admin/user-management', label: 'User Management', icon: faUsersCog},
    ];

    return (
        <aside
            className={`${
                isCollapsed ? 'w-14' : 'w-64'
            } h-full bg-black/5 transition-all duration-300 ease-in-out relative`}
        >
            <button
                onClick={toggleSidebar}
            >

            </button>
        </aside>
    );
};

SidebarItem.propTypes = {
    href: PropTypes.string,
    label: PropTypes.string,
    isCollapsed: PropTypes.bool,
    icon: PropTypes.string,
}

export default Sidebar;