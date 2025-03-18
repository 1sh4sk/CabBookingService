import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt,faMapPin } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

const Header = () => {
  return (
    <div>
      {/* Background Wrapper */}
      <div
        className="h-screen w-full bg-cover bg-center bg-no-repeat fixed top-0 left-0"
        style={{ backgroundImage: "url('https://s3-alpha-sig.figma.com/img/00ec/c8e7/fb143a53defb59fbaae275568e95b278?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VA632G4i6qgvTaL6Txfrp0GYLYR63V8C2qb2J1ozlVIJl5c5J32YXmqiDgV-b3XjUrhUg3gStf5Q92UrUlRB4EUeJz7OoaXTPCWuwTVo56OfcVb9L3u7Hh-bIigDts4DOvTzsQNWlskw1wrwOutKj0rswjmjJwf5vPfgb5VToADZWonFas63CeHgU-ViL9Bn0bRwYNn05k9ROhukUHUfUX92G~19vUUqDeaKHEvqgByvlV-iYF~nTeqhPlrgdO4nBy4s0Qd9iMUZH2sxxTLNkvISDwO3MSnrxF0~QixT3qDph~MhZKTs51nmpda4ej5h-HOwql1TuaGkhznhMbbPqw__')" }}
      >
        {/* Header Section */}
        <header className="bg-white shadow-md py-1 px-4 sm:px-6 md:px-8 flex items-center justify-between fixed top-3 left-1/2 transform -translate-x-1/2 w-11/12 sm:w-5/6 md:w-4/5 z-50 rounded-full ">
          {/* Left Side - Logo */}
          <div className="flex items-center space-x-2">
            <img src="/src/assets/logo.png" alt="Logo" className="w-15 h-15 rounded-full" />
            <h1 className="text-lg font-bold text-green-600 tracking-widest">
              TRIPMATE<br />
              <span className="text-[8px] italic text-gray-500">YOUR JOURNEY, OUR PRIORITY</span>
            </h1>
          </div>

          {/* Center - Navigation Links (Hidden on Mobile and Tablet) */}
          <nav className="hidden lg:flex space-x-8">
            <a href="#" className="text-gray-800 hover:text-yellow-500 font-medium transition duration-300">
              Home
            </a>
            <a href="#" className="text-gray-800 hover:text-yellow-500 font-medium transition duration-300">
              Why Choose Us
            </a>
            <a href="#" className="text-gray-800 hover:text-yellow-500 font-medium transition duration-300">
              Rent
            </a>
            <a href="#" className="text-gray-800 hover:text-yellow-500 font-medium transition duration-300">
              About Us
            </a>
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
          <div className="bg-opacity-50 p-4 md:p-15 rounded-4xl border-10 border-white shadow-lg w-full max-w-md md:max-w-lg backdrop-blur-lg">
            <div className="space-y-4">
              {/* Pickup Location Input */}
              <div className="flex items-center bg-white px-3 py-2 rounded-full shadow-md">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-yellow-500 mr-3" />
                <input
                  type="text"
                  placeholder="Enter pickup location"
                  className="w-full bg-transparent outline-none text-gray-700"
                />
              </div>

              {/* Drop Location Input */}
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
                <FontAwesomeIcon icon={faMapPin} className="mr-3 text-yellow-500" />
                <input
                  type="text"
                  placeholder="Enter drop location"
                  className="w-full bg-transparent outline-none text-gray-700"
                />
              </div>

              {/* Submit Button */}
              <button className="w-full md:w-1/2 bg-yellow-500 text-white font-bold py-2 rounded-full hover:bg-yellow-600 transition duration-300 ml-0 md:ml-25">
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
    </div>
  );
};

export default Header;