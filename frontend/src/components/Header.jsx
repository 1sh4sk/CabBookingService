import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

const Header = () => {
  return (
    <>
      {/* Background Wrapper */}
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat top-0"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/296775/pexels-photo-296775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
      >
        {/* Header Section */}
        <header className="bg-white shadow-md py-1 px-8 flex items-center justify-between fixed top-3 left-1/2 transform -translate-x-1/2 w-2/3 z-50 rounded-full">
          {/* Left Side - Logo */}
          <div className="flex items-center space-x-2">
            <img src="/src/assets/logo.png" alt="Logo" className="w-15 h-15 rounded-full" />
            <h1 className="text-lg font-bold text-green-600 tracking-widest">
              TRIPMATE<br />
              <span className="text-[8px] italic text-gray-500">YOUR JOURNEY, OUR PRIORITY</span>
            </h1>
          </div>

          {/* Center - Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            {["Home", "Why Choose Us", "Rent", "About Us"].map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-800 hover:text-yellow-500 font-medium transition duration-300"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Right Side - Buttons */}
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <button className="text-gray-700 font-medium px-6 py-2 border-2 border-yellow-500 hover:border-yellow-500 hover:text-white hover:bg-yellow-500 transition duration-300 rounded-full cursor-pointer">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="bg-yellow-500 text-white px-6 py-2 border-2 border-yellow-500 rounded-full font-medium hover:bg-white hover:text-gray-600 hover:border-yellow-500 transition duration-300 cursor-pointer">
                Register
              </button>
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex flex-col  items-center justify-center min-h-screen pr-30">
          {/* Pickup & Drop Form */}
          <div className="bg-opacity-100 p-10 rounded-xl border-5 border-white shadow-lg w-full max-w-lg ">
            <div className="space-y-4">
              {/* Pickup Location Input */}
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-yellow-500 mr-3" />
                <input
                  type="text"
                  placeholder="Enter pickup location"
                  className="w-full bg-transparent outline-none text-gray-700"
                />
              </div>

              {/* Drop Location Input */}
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-yellow-500 mr-3" />
                <input
                  type="text"
                  placeholder="Enter drop location"
                  className="w-full bg-transparent outline-none text-gray-700"
                />
              </div>

              {/* Submit Button */}
              <button className="w-full bg-yellow-500 text-white font-bold py-2 rounded-full hover:bg-yellow-600 transition duration-300">
                SUBMIT
              </button>
            </div>
          </div>
          {/* Floating Text */}
          <div className="absolute top-0 left-0 ">
            <p className="border-4 border-white bg-white p-2 rounded-lg mt-50 ml-20 px-4 py-2">
              Easy to Extend <br />
              Rental Hours
            </p>
          </div>
          <div className="absolute top-0 left-0 ">
            <p className="border-4 border-white  bg-white p-2 rounded-lg mt-150 ml-100 px-4 py-2">
              Most Flexible <br />
              Payment Plan
            </p>
          </div>
        </div>

      </div>
    </>
  );
};

export default Header;