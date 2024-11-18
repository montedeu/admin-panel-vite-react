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

const Sidebar = ({ isCollapsed, toggleSidebar  }) => {
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
                className={"absolute -right-2.5 top-0 w-6 h-6 flex justify-center items-center hover:bg-gray-300 rounded-full transition cursor-pointer focus:outline-none bg-gray-200"}
            >
                {isCollapsed ? (
                    <FontAwesomeIcon icon={faArrowRight} />
                ) : (
                    <FontAwesomeIcon icon={faArrowLeft} />
                )}
            </button>

            {/* Sidebar Navigation */}
            <nav className={"mt-4"}>
                <ul>
                    {sidebarItems.map((item) => (
                        <SidebarItem
                            key={item.href}
                            href={item.href}
                            label={item.label}
                            isCollapsed={isCollapsed}
                            icon={item.icon}
                        />
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

SidebarItem.propTypes = {
    href: PropTypes.any,
    label: PropTypes.any,
    isCollapsed: PropTypes.any,
    icon: PropTypes.any,
}
Sidebar.propTypes = {
    isCollapsed: PropTypes.any,
    toggleSidebar: PropTypes.any,
}
export default Sidebar;