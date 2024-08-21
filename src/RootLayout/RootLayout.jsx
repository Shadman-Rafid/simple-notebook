import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/menubar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default RootLayout;
