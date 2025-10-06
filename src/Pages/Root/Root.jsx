import React from "react";
import Navbar from "../../Componets/Header/Navbar";
import { Outlet } from "react-router";
import Footer from "../../Componets/Footer/Footer";

const Root = () => {
  return (
    <div className="roboto">
      <Navbar></Navbar>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
