import React, { use } from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {

  const user = localStorage.getItem("currentUser");
  return user ? <Outlet /> : <Navigate to={"/"} />;
};

export default ProtectedRoutes;
