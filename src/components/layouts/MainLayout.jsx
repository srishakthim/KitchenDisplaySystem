import React from "react";
import Navbar from "../Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#1f2732]">
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
