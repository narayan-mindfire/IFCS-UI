import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/auth/Dashboard";
import Layout from "../components/Layout";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<Login />} />

      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/flights" element={<h1>Flights Page</h1>} />
        <Route path="/galley-planner" element={<h1>Galley Planner</h1>} />
        <Route path="/meal-planner" element={<h1>Meal Planner</h1>} />
        <Route path="/compliance" element={<h1>Compliance</h1>} />
        <Route path="/reports" element={<h1>Reports</h1>} />
        <Route path="/setup" element={<h1>Setup</h1>} />
      </Route>

      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
}

export default MainRoutes;
