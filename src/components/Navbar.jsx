import React, { useState } from "react";
import logo from "../assets/Logo.png";
import { Menu, X, ShoppingCart, Package } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-[#1f2732] text-white">
      {/* Logo Section */}
      <div className="flex justify-between items-center py-4 px-6 md:justify-center">
        <img
          src={logo}
          alt="The Tasteat Logo"
          className="h-20 sm:h-24 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="border-t border-b border-gray-700">
        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center items-center space-x-10 py-3 text-sm tracking-wide text-gray-200">
          <li
            onClick={() => navigate("/")}
            className="hover:text-yellow-500 cursor-pointer"
          >
            Home
          </li>
          <li
            onClick={() => navigate("/about")}
            className="hover:text-yellow-500 cursor-pointer"
          >
            About
          </li>
          <li
            onClick={() => navigate("/dishes")}
            className="hover:text-yellow-500 cursor-pointer"
          >
            Menu
          </li>
          <li
            onClick={() => navigate("/reservation")}
            className="hover:text-yellow-500 cursor-pointer"
          >
            Reservation
          </li>
          <li
            onClick={() => navigate("/contact")}
            className="hover:text-yellow-500 cursor-pointer"
          >
            Contact
          </li>

          <div className="flex items-center space-x-4 ml-6">
            <button
              onClick={() => navigate("/login")}
              className="border border-yellow-600 px-6 py-2 text-white hover:bg-yellow-600 transition"
            >
              LOGIN
            </button>
            <ShoppingCart
              className="w-6 h-6 cursor-pointer hover:text-yellow-500"
              title="Cart"
              onClick={() => navigate("/cart")}
            />
            <Package
              className="w-6 h-6 cursor-pointer hover:text-yellow-500"
              title="Orders"
              onClick={() => navigate("/order")}
            />
          </div>
        </ul>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="flex flex-col md:hidden px-6 py-4 space-y-4 text-sm tracking-wide text-gray-200 bg-[#1f2732]">
            <li
              onClick={() => {
                navigate("/");
                setMenuOpen(false);
              }}
              className="hover:text-yellow-500 cursor-pointer"
            >
              Home
            </li>
            <li
              onClick={() => {
                navigate("/about");
                setMenuOpen(false);
              }}
              className="hover:text-yellow-500 cursor-pointer"
            >
              About
            </li>
            <li
              onClick={() => {
                navigate("/menu");
                setMenuOpen(false);
              }}
              className="hover:text-yellow-500 cursor-pointer"
            >
              Menu
            </li>
            <li
              onClick={() => {
                navigate("/reservation");
                setMenuOpen(false);
              }}
              className="hover:text-yellow-500 cursor-pointer"
            >
              Reservation
            </li>
            <li
              onClick={() => {
                navigate("/contact");
                setMenuOpen(false);
              }}
              className="hover:text-yellow-500 cursor-pointer"
            >
              Contact
            </li>

            <div className="flex items-center space-x-4 mt-2">
              <button
                onClick={() => {
                  navigate("/login");
                  setMenuOpen(false);
                }}
                className="border border-yellow-600 px-6 py-2 text-white hover:bg-yellow-600 transition"
              >
                LOGIN
              </button>
              <ShoppingCart
                className="w-6 h-6 cursor-pointer hover:text-yellow-500"
                title="Cart"
                onClick={() => {
                  navigate("/cart");
                  setMenuOpen(false);
                }}
              />
              <Package
                className="w-6 h-6 cursor-pointer hover:text-yellow-500"
                title="Orders"
                onClick={() => {
                  navigate("/orders");
                  setMenuOpen(false);
                }}
              />
            </div>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
