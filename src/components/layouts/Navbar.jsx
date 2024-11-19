import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    return (
        <header className={"w-full bg-white shadow p-4 sticky z-1"}>
            <nav className={"flex justify-between items-center"}>
                {/* Logo and system name */}
                <div className={"text-2xl font-bold flex gap-2 items-center"}>
                    <div className={"w-10  h-10 bg-black/10 rounded-full"} />
                    Admin Dashboard
                </div>

                {/* Search bar and icons */}
                <div className={"flex items-center space-x-6"}>
                    <input
                        type={"text"}
                        placeholder={"Search"}
                        className={"hidden md:block px-3 py-1  border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-black-300 transition-all duration-300"}
                    />

                    {/* Dropdown for profile */}
                    <div className={"relative"}>
                        <button className={"flex items-center space-x-2"} onClick={toggleDropdown}>
                            <FontAwesomeIcon icon={faUser} />
                            <span className={"hidden md:block font-medium"}>
                                Administrator
                            </span>
                            <FontAwesomeIcon icon={faCaretDown} />
                        </button>

                        {isDropdownOpen && (
                            <div className={"absolute right-0 mt-4 w-48 bg-white shadow-md rounded-md z-10"}>
                                <ul className={"py-2"}>
                                    <li className={"px-4 py-2 hover:bg-gray-100 cursor-pointer"}>
                                        Profile
                                    </li>
                                    <li className={"px-4 py-2 hover:bg-gray-100 cursor-pointer"}>
                                        Settings
                                    </li>
                                    <li className={"px-4 py-2 hover:bg-gray-100 cursor-pointer"}>
                                        Logout
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;