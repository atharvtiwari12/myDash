import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import { auth } from "../../firebase.config";

const Sidebar = () => {
  const { setIsAuthenticated } = useAuth();

  const handleLogout = () => {
    auth.signOut().then(() => {
      setIsAuthenticated(false);
    });
  };

  return (
    <div className="w-64  bg-white shadow-lg">
      <h2 className="text-xl font-bold p-4">MyDashboard</h2>
      <ul className="flex flex-col p-4">
        <li className="my-2">
          <Link
            to="home"
            className="flex items-center p-2 rounded hover:bg-gray-200"
          >
            <FaHome className="mr-2" /> Home
          </Link>
        </li>
        <li className="my-2">
          <Link
            to="profile"
            className="flex items-center p-2 rounded hover:bg-gray-200"
          >
            <FaUser className="mr-2" /> Profile
          </Link>
        </li>
        <li className="my-2">
          <Link
            to="settings"
            className="flex items-center p-2 rounded hover:bg-gray-200"
          >
            <FaCog className="mr-2" /> Settings
          </Link>
        </li>
      </ul>
      <div className="absolute bottom-0 p-4">
        <Link
          to="#"
          onClick={handleLogout}
          className="flex items-center p-2 rounded hover:bg-gray-200"
        >
          <FaSignOutAlt className="mr-2" /> Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
