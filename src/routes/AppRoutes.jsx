import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../features/dashboard/Dashboard";
import Profile from "../features/profile/Profile";
import Settings from "../features/settings/Settings";
import Home from "../features/home/Home";
import Login from "../features/auth/Login";
import Signup from "../features/auth/Signup";
import { useAuth } from "../context/AuthContext";
import LandingPage from "../landingPage/LandingPage";
import AboutPage from "../features/about/About";

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route
        path="/dashboard"
        element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
      >
        <Route index element={<Navigate to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />}
      />
      <Route
        path="/signup"
        element={isAuthenticated ? <Navigate to="/dashboard" /> : <Signup />}
      />
    </Routes>
  );
};

export default AppRoutes;
