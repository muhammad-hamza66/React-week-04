import { Navigate, Outlet } from "react-router-dom";

const RedirectifAuth = () => {
  const isAuthenticated = localStorage.getItem("authToken");

  return isAuthenticated ? <Navigate to="/Home" replace /> : <Outlet />;
};

export default RedirectifAuth;
