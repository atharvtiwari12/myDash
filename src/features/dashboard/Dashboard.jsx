import React from "react";
import Sidebar from "../../features/sidebar/Sidebar";
import { Outlet, useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();

  const activeComponent = location.pathname.split("/").pop();
  const componentName =
    activeComponent.charAt(0).toUpperCase() + activeComponent.slice(1);

  return (
    <div className="flex min-h-screen">
      <Sidebar className="fixed h-full" />
      <div className="flex-1 p-6">
        <header className="bg-white shadow-md rounded-lg p-4 mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">
            {componentName || "Dashboard"}
          </h1>
        </header>
        <div className="overflow-y-auto h-[calc(100vh-9rem)]">
          {" "}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
