import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faMapPin, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { HeroBg } from "../../assets";
import { navLinks } from "../../utils";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" h-screen w-full">
      {/* Background Wrapper */}
      <div
        className="w-full h-full bg-cover bg-[-150px] sm:bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${HeroBg})`,
        }}
      >
        {/* Header Section */}
        <header className="bg-white shadow-md px-4 sm:px-6 md:px-4 xl:px-8 flex items-center justify-between fixed top-3 left-1/2 transform -translate-x-1/2 w-screen md:w-5/6  xl:w-4/5 z-50 rounded-full">


          {/* Left Side - Logo */}
          <div className="flex items-center space-x-2">
            <img src="/src/assets/logo.png" alt="Logo" className=" mt-2 mb-2 w-10 h-10 md:w-12 xl:w-15  md:h-12 xl:h-15 sm:w-10 sm:h-10 rounded-full" />
            <div>
              <h1 className="text-sm sm:text-md md:text-lg font-bold text-green-600"> TRIP<span className="text-color-yellow">MATE</span> </h1>
              <h1 className="text-[6px] sm:text-[7px] md:text-[8px] italic text-gray-500">YOUR JOURNEY, OUR PRIORITY</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1 lg:space-x-8">
            {
              navLinks.map((navItem) => (
                <a href={navItem.link} key={navItem} className="text-gray-800 font-epilogue hover:text-color-yellow font-medium transition duration-300 cursor-pointer text-sm xl:text-base">{navItem.title}</a>
              ))
            }
          </nav>

          {/* Right Side - Buttons */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            <Link to="/login">
              <button className="text-gray-700 font-medium px-4 md:px-6 py-1 md:py-2 border-2 border-color-yellow hover:bg-color-yellow hover:text-black transition duration-300 rounded-full">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="bg-color-yellow text-white px-4 md:px-6 py-1 md:py-2 border-2 border-color-yellow rounded-full font-medium hover:bg-white hover:text-gray-600 transition duration-300">
                Register
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-color-yellow flex items-center justify-center cursor-pointer">
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-2xl" />
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {/* {isOpen && ( */}
          <div className={`lg:hidden bg-black/30 w-screen h-screen absolute top-[-20%] left-[-20%] transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 ' : 'opacity-0  pointer-events-none'}`} onClick={() => setIsOpen(!isOpen)}>
            <div className={`w-[70%] sm:w-[50%] h-full absolute top-0 right-[-100px] sm:right-[-80px] rounded-l-4xl  bg-white shadow-md z-50 transition-all duration-500 ease-in-out transform  ${isOpen ? 'translate-x-0' : 'translate-x-[200%]'}`}>
              <button onClick={() => setIsOpen(!isOpen)} className="text-color-yellow flex items-center justify-center cursor-pointer mt-5 ml-4">
                <FontAwesomeIcon icon={faTimes} className="text-2xl" />
              </button>

              <nav className="flex flex-col space-y-4 m-5 p-4 sm:m-7 w-full ">
                {
                  navLinks.map((navItem) => (
                    <a href={navItem.link} key={navItem} onClick={() => setIsOpen(!isOpen)} className="text-gray-800 font-epilogue hover:text-color-yellow font-medium transition duration-300 cursor-pointer text-sm xl:text-base">{navItem.title}</a>
                  ))
                }

                {/* Buttons */}
                <Link to="/login" className="w-full flex mt-5">
                  <button className="w-[80%] text-gray-700  text-center font-medium px-4 py-2 border-2 border-yellow-500 hover:bg-yellow-500 hover:text-black transition duration-300 rounded-full">
                    Login
                  </button>
                </Link>
                <Link to="/register" className="w-full flex ">
                  <button className="w-[80%] bg-yellow-500 text-center text-black px-4 py-2 border-2 border-yellow-500 rounded-full font-medium hover:bg-white hover:text-gray-600 transition duration-300">
                    Register
                  </button>
                </Link>
              </nav>
            </div>
          </div>
          {/* )} */}

        </header>

        {/* Main Content */}
        <div className="flex flex-col items-center lg:items-end justify-end lg:justify-center max-lg:pb-15 min-h-screen p-5 md:pr-20 xl:pr-30">
          {/* Pickup & Drop Form */}
          <div className="bg-opacity-50 p-6 sm:p-8 xl:p-15 rounded-4xl border-7 sm:border-8 xl:border-10 border-white shadow-lg w-full max-w-md  xl:max-w-lg backdrop-blur-lg">
            <div className="space-y-4">
              {/* Pickup Location Input */}
              <div className="flex items-center bg-white px-3 py-2 rounded-full shadow-md">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-yellow-500 mr-3" />
                <input
                  type="text"
                  placeholder="Enter pickup location"
                  className="w-full bg-transparent outline-none text-gray-700 placeholder:text-sm"
                />
              </div>

              {/* Drop Location Input */}
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
                <FontAwesomeIcon icon={faMapPin} className="mr-3 text-yellow-500" />
                <input
                  type="text"
                  placeholder="Enter drop location"
                  className="w-full bg-transparent outline-none text-gray-700 placeholder:text-sm"
                />
              </div>

              {/* Submit Button */}
              <button className="w-full md:w-1/2 bg-yellow-500 text-white font-bold py-2 rounded-full hover:bg-yellow-600 transition duration-300 ml-0 md:ml-25">
                Search
              </button>
            </div>
          </div>

          {/* Additional Text */}
          <div className="absolute top-0 left-0 mt-44 ml-6 px-4 py-2">
            <img src="/src/assets/frame.png" alt="details" className="w-40 xl:w-auto hidden lg:block" />
          </div>
          <div className="absolute top-0 left-0 mt-120 ml-70 xl:ml-120 px-4 py-2">
            <img
              src="https://s3-alpha-sig.figma.com/img/26b5/97ae/715cdf55d91aec4dc2b032065cb95bbe?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kQtjCuekWdMpZJKt98oG3NllYMwvhFi9kzS-emjugTvjWyc9~kZgW5YnQGLsQ4bsyO9vwf3PbOrOx1zZbeEsX2S9uiz0sZ40mJw~Zeu~MTvEfAvO2PE5HwJMyiIm~vbgj6g-sypjs8xPCLvnFkcmiqRnKoYA2FhwXmdu3mX-oD~cBDfLT5Ra4~DXrEWpIyKVL8FR9zuGRWvSZfIVFl2gbKzuM69aNgjtRUGo1Px5jfsrLt7eY~gFfFcTbLHt38fDLwCyMfpu2iRKoy48MwYGxDKFwtonbNcwJqcdMHzbdOgI7ro1sma2TcjStm7nvQkpNn06FnIh3ro27B7-srqgbA__"
              alt="detail"
              className="w-40 xl:w-auto hidden lg:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;