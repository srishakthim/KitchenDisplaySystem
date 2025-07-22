import React, { useState } from "react";
import logo from "../assets/Logo.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#1f2732] text-white">
      {/* Logo Section */}
      <div className="flex justify-between items-center py-4 px-6 md:justify-center">
        <img src={logo} alt="The Tasteat Logo" className="h-20 sm:h-24" />
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
        <ul className="hidden md:flex justify-center space-x-10 py-3 text-sm tracking-wide text-gray-200">
          <li className="hover:text-yellow-500 cursor-pointer">Home</li>
          <li className="hover:text-yellow-500 cursor-pointer">About</li>
          <li className="hover:text-yellow-500 cursor-pointer">Menu</li>
          <li className="hover:text-yellow-500 cursor-pointer">Reservation</li>
          <li className="hover:text-yellow-500 cursor-pointer">Contact</li>
        </ul>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="flex flex-col md:hidden px-6 py-4 space-y-4 text-sm tracking-wide text-gray-200 bg-[#1f2732]">
            <li className="hover:text-yellow-500 cursor-pointer">Home</li>
            <li className="hover:text-yellow-500 cursor-pointer">About</li>
            <li className="hover:text-yellow-500 cursor-pointer">Menu</li>
            <li className="hover:text-yellow-500 cursor-pointer">Reservation</li>
            <li className="hover:text-yellow-500 cursor-pointer">Contact</li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
