import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import { auth } from "../../firebase.config";

const Sidebar = () => {
  const { setIsAuthenticated } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    auth.signOut().then(() => {
      setIsAuthenticated(false);
    });
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="fixed top-4 left-4 z-60 p-2 text-2xl bg-white rounded shadow-md md:hidden"
        onClick={toggleSidebar}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div
        className={`fixed inset-y-0 left-0 bg-white shadow-lg transition-transform transform 
          ${isOpen ? "translate-x-0 w-full" : "-translate-x-full"} 
          md:translate-x-0 md:relative md:w-64 md:flex md:flex-col`}
        style={{ zIndex: 50 }}
      >
        {isOpen && (
          <button
            className="absolute top-4 right-4 text-2xl z-60"
            onClick={toggleSidebar}
          >
            <FaTimes />
          </button>
        )}

        <div className="p-4">
          <h2 className="text-xl font-bold">Grocery Mart</h2>
        </div>
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
    </>
  );
};

export default Sidebar;
