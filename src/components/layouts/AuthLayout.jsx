import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#1f2732]">
      {children}
    </div>
  );
};

export default AuthLayout;
