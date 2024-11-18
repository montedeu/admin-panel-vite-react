import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChartPie,
    faUsers,
    faUsersCog,
    faReply,
    faBoxOpen,
    faArrowLeft,
    faArrowRight,
} from '@fortawesome/free-solid-svg-icon';

const Sidebar = () => {
    const sidebarItems = [
        { href: '/admin/home', label: 'Dashboard', icon: faChartPie},
        { href: '/admin/pending-farmers', label: 'Pending Farmers', icon: faUsersCog},
        { href: '/admin/'}
    ];
};

export default Sidebar;