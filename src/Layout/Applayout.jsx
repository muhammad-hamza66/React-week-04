
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const AppLayout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
   
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <>
      <Navbar onLogout={handleLogout} />
      <div style={{ marginTop: "80px", padding: "20px" }}>
        <Outlet />
      </div>
    </>
  );
};

export default AppLayout;
