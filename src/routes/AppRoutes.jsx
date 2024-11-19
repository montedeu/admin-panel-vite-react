import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Dashboard from '../pages/Dashboard';
import PendingFarmers from "../pages/PendingFarmers.jsx";
import UserManagement from '../pages/UserManagement';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/admin',
        element: <App />,
        children: [
            {
                path: 'home',
                element: <Dashboard/>,
            },
            {
                path: 'pending-farmers',
                element: <PendingFarmers />,
            },
            {
                path: 'user-management',
                element: <UserManagement />,
            },
        ],
    },
]);

export default router;
