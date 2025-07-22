import React from "react";
import Reserve from "../assets/Reserve.png";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center px-4"
      style={{ backgroundImage: `url(${Reserve})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Form Container */}
      <div className="relative z-10 max-w-md w-full bg-[#1f2732]/90 p-10 rounded-lg shadow-xl text-white">
        {/* Logo Centered */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="The Tasteat Logo" className="h-20 sm:h-24" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">
          LOGIN
        </h2>

        <form className="flex flex-col space-y-6">
          {/* Email */}
          <div className="flex flex-col space-y-1">
            <label className="text-sm text-gray-300">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md bg-[#2f3642] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col space-y-1">
            <label className="text-sm text-gray-300">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="px-4 py-2 rounded-md bg-[#2f3642] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2 text-center">
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-md font-medium transition duration-300"
            >
              Login
            </button>
          </div>
        </form>

        {/* Register Link */}
        <p className="mt-6 text-center text-sm text-gray-300">
          Don't have an account?{" "}
          <Link to="/register" className="text-yellow-500 hover:underline">
            Create
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
