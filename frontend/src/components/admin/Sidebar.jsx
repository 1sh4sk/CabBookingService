import { faBars, faCar, faClipboardCheck, faHome, faSignOutAlt, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router";

const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="flex">
            {/* Sidebar */}
            <div
                className={`${isOpen ? "w-64" : "w-18"
                    } bg-gray-900 text-white h-screen p-5 flex flex-col transition-all duration-300`}
            >
                {/* Sidebar Toggle Button */}
                <button
                    className="text-white text-2xl mb-6 focus:outline-none text-left pl-3"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>

                <nav className="flex flex-col gap-4">
                    <NavLink
                        to="/admin/dashboard"
                        className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded"
                    >
                        <FontAwesomeIcon icon={faHome} className="w-6 h-6" />
                        {isOpen && "Dashboard"}
                    </NavLink>

                    <NavLink
                        to="/admin/manage-users"
                        className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded"
                    >
                        <FontAwesomeIcon icon={faUserFriends} className="w-6 h-6" />
                        {isOpen && "Users"}
                    </NavLink>

                    <NavLink
                        to="/admin/manage-captains"
                        className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded"
                    >
                        <FontAwesomeIcon icon={faCar} className="w-6 h-6" />
                        {isOpen && "Captains"}
                    </NavLink>

                    <NavLink
                        to="/admin/captain-approvals"
                        className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded"
                    >
                        <FontAwesomeIcon icon={faClipboardCheck} className="w-6 h-6" />
                        {isOpen && "Captain Approvals"}
                    </NavLink>

                    <NavLink
                        to="/logout"
                        className="flex items-center gap-3 p-3 mt-auto hover:bg-gray-700 rounded"
                    >
                        <FontAwesomeIcon icon={faSignOutAlt} className="w-6 h-6" />
                        {isOpen && "Logout"}
                    </NavLink>
                </nav>
            </div>
        </div>
    );
};
export default Sidebar;
