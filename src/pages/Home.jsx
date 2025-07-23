import React from "react";
import HomeImage from "../assets/Home.png";
import logo from "../assets/Logo.png";
import { MapPin, Clock, ClipboardList } from "lucide-react";
import Dish1 from "../assets/Dish1.png";
import Dish2 from "../assets/Dish2.png";
import Dish3 from "../assets/Dish3.png";
import Dish4 from "../assets/Dish4.png";
import Reserve from "../assets/Reserve.png";
import { useNavigate } from "react-router-dom";


const Home = () => {

  const navigate = useNavigate();

  return (
    <>
      <section className="bg-[#1f2732] text-white pt-16 px-4 md:px-8">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Welcome to <br />
              Restaurant
            </h1>
            <p className="text-sm sm:text-base text-gray-300 mb-8 max-w-md">
              "Indulge your senses in a culinary journey at [Restaurant Name],
              where exquisite flavors, impeccable service, and a warm ambiance
              come together to create an unforgettable dining experience."
            </p>
           <button
  onClick={() => navigate("/login")}
  className="border border-yellow-600 px-6 py-2 text-white hover:bg-yellow-600 transition"
>
  LOGIN
</button>
          </div>

          {/* Image Content */}
          <div className="flex justify-center md:justify-end">
            <div className="border-[10px] border-[#2f3642] w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              <img
                src={HomeImage}
                alt="Restaurant"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Info Section */}
      <section className="bg-[#f8f5f2] mt-16 px-4 sm:px-8 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {/* Location */}
          <div className="flex flex-col items-center space-y-3">
            <div className="bg-[#2c333e] p-4 rounded-full">
              <MapPin className="text-white w-6 h-6" />
            </div>
            <h3 className="font-semibold text-lg text-black">Locate Us</h3>
            <p className="text-sm text-gray-700">
              Riverside 25, San Francisco, California
            </p>
          </div>

          {/* Open Hours */}
          <div className="flex flex-col items-center space-y-3">
            <div className="bg-[#2c333e] p-4 rounded-full">
              <Clock className="text-white w-6 h-6" />
            </div>
            <h3 className="font-semibold text-lg text-black">Open Hours</h3>
            <p className="text-sm text-gray-700">
              Mon To Fri 9:00 AM - 9:00 PM
            </p>
          </div>

          {/* Reservation */}
          <div className="flex flex-col items-center space-y-3">
            <div className="bg-[#2c333e] p-4 rounded-full">
              <ClipboardList className="text-white w-6 h-6" />
            </div>
            <h3 className="font-semibold text-lg text-black">Reservation</h3>
            <p className="text-sm text-gray-700">restaurant@gmail.com</p>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="bg-[#1f2732] text-white py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Text Content */}
          <div>
            <p className="uppercase text-xs tracking-widest text-gray-400 mb-2 border-l-4 border-yellow-600 pl-2">
              Why Choose Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
              Our Great Services
            </h2>
            <p className="text-gray-300 max-w-md text-sm sm:text-base">
              Our commitment to excellence extends to every aspect of your
              dining experience. From attentive and friendly staff to prompt
              service and a welcoming atmosphere, our great services are
              designed to elevate your visit and leave a lasting impression.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Service 1 */}
            <div className="bg-[#2b2f35] border-4 border-[#353b44] p-6 text-center">
              <div className="text-yellow-500 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 7V3m8 4V3M3 11h18M5 20h14a2 2 0 002-2V7H3v11a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="text-white text-sm">Opened 24/7</p>
            </div>

            {/* Service 2 */}
            <div className="bg-[#2b2f35] border-4 border-[#353b44] p-6 text-center">
              <div className="text-yellow-500 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 17v-6h6v6M12 7a2 2 0 110-4 2 2 0 010 4zM20 21H4a1 1 0 01-1-1V5a1 1 0 011-1h3l2-2h6l2 2h3a1 1 0 011 1v15a1 1 0 01-1 1z"
                  />
                </svg>
              </div>
              <p className="text-white text-sm">Special Menus</p>
            </div>

            {/* Service 3 */}
            <div className="bg-[#2b2f35] border-4 border-[#353b44] p-6 text-center">
              <div className="text-yellow-500 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M14 10V3L4 14h7v7l10-11h-7z"
                  />
                </svg>
              </div>
              <p className="text-white text-sm">Home Delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Dishes Section */}
      <section className="bg-white py-20 px-4 sm:px-8 text-center">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <p className="text-xs tracking-widest text-gray-500 uppercase mb-2">
            Menu
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
            Popular Dishes
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-12">
            where our menu showcases a symphony of flavors, from mouthwatering
            appetizers and sumptuous main courses to decadent desserts,
            promising a gastronomic adventure for every palate.
          </p>

          {/* Dishes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Dish Card */}
            {[Dish1, Dish2, Dish3, Dish4].map((dish, index) => (
              <div key={index} className="text-left">
                <img
                  src={dish}
                  alt={`Dish ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
                <div className="flex justify-between items-center border-t pt-2 mt-2">
                  <p className="text-gray-800 font-medium text-sm">
                    Chicken Manjoori
                  </p>
                  <p className="text-gray-800 font-medium text-sm">$15</p>
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <button className="border border-yellow-500 text-yellow-500 px-6 py-2 text-sm hover:bg-yellow-500 hover:text-white transition">
            See all dishes
          </button>
        </div>
      </section>

      {/* Reservation Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-24 px-4"
        style={{ backgroundImage: `url(${Reserve})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Form Container */}
        <div className="relative z-10 max-w-3xl mx-auto bg-[#1f2732]/90 p-10 rounded-md shadow-lg text-white">
          <p className="text-xs tracking-widest text-gray-300 uppercase mb-2 text-center">
            Reservation
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">
            Book your table now
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="flex flex-col space-y-1">
              <label className="text-sm text-gray-300">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="px-4 py-2 rounded-md bg-[#2f3642] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col space-y-1">
              <label className="text-sm text-gray-300">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md bg-[#2f3642] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Person Count */}
            <div className="flex flex-col space-y-1">
              <label className="text-sm text-gray-300">Person</label>
              <input
                type="number"
                placeholder="No. of persons"
                className="px-4 py-2 rounded-md bg-[#2f3642] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Timing */}
            <div className="flex flex-col space-y-1">
              <label className="text-sm text-gray-300">Timing</label>
              <input
                type="text"
                placeholder="eg. 7:00 PM"
                className="px-4 py-2 rounded-md bg-[#2f3642] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Date */}
            <div className="flex flex-col space-y-1">
              <label className="text-sm text-gray-300">Date</label>
              <input
                type="date"
                className="px-4 py-2 rounded-md bg-[#2f3642] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* AC/Non-AC */}
            <div className="flex flex-col space-y-1">
              <label className="text-sm text-gray-300">AC/Non-AC</label>
              <input
                type="text"
                placeholder="Enter AC/Non-AC"
                className="px-4 py-2 rounded-md bg-[#2f3642] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Hall */}
            <div className="flex flex-col space-y-1">
              <label className="text-sm text-gray-300">Hall</label>
              <input
                type="text"
                placeholder="Enter hall name"
                className="px-4 py-2 rounded-md bg-[#2f3642] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Table */}
            <div className="flex flex-col space-y-1">
              <label className="text-sm text-gray-300">Table</label>
              <input
                type="text"
                placeholder="Enter table number"
                className="px-4 py-2 rounded-md bg-[#2f3642] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Submit */}
            <div className="md:col-span-2 pt-4 text-center">
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-md font-medium transition duration-300"
              >
                Book a Table
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <section className="bg-[#1f2732] text-white px-4 py-16 sm:px-8">
        <div className="flex justify-between items-center py-4 px-6 md:justify-center">
          <img src={logo} alt="The Tasteat Logo" className="h-20 sm:h-24" />
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">
          {/* Contact Info */}
          <div>
            <h4 className="uppercase tracking-[3px] text-xs border-t-2 border-yellow-500 inline-block mb-4 pt-1">
              Contact
            </h4>
            <p className="mb-2">5 Rue Dalou, 75015 Paris</p>
            <p className="mb-2">
              <span className="text-[#c19859] font-medium">Call</span> - +33 156
              78 89 56
            </p>
            <p className="text-[#c19859]">benoit@mail.com</p>
          </div>

          {/* Center Email Subscription */}
          <div className="text-center">
            <p className="mb-4 text-sm sm:text-base">
              Join our mailing list for updates,
              <br />
              Get news &amp; offers events.
            </p>
            <form className="flex items-stretch justify-center w-full max-w-md mx-auto">
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-2 w-full bg-transparent border border-white text-white placeholder-white focus:outline-none"
              />
              <button
                type="submit"
                className="bg-white text-black font-semibold px-6"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Working Hours */}
          <div className="md:text-right">
            <h4 className="uppercase tracking-[3px] text-xs border-t-2 border-yellow-500 inline-block mb-4 pt-1">
              Working Hours
            </h4>
            <p className="mb-2">
              <span className="text-[#c19859]">Mon - Fri:</span> 7.00am – 6.00pm
            </p>
            <p className="mb-2">
              <span className="text-[#c19859]">Sat:</span> 7.00am – 6.00pm
            </p>
            <p>
              <span className="text-[#c19859]">Sun:</span> 8.00am – 6.00pm
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
