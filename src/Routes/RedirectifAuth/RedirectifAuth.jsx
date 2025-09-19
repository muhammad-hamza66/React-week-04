import { Navigate, Outlet } from "react-router-dom";

const RedirectIfAuth = () => {
  const user = localStorage.getItem("currentUser");
  return user ? <Navigate to="/home" /> : <Outlet />;
};

export default RedirectIfAuth;
