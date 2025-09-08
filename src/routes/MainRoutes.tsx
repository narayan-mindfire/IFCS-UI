import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/auth/Dashboard";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
}

export default MainRoutes;
