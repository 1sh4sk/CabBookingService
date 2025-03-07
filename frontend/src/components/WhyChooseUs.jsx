import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const WhyChooseUs = () => {
  const features = [
    "Expert Guidance",
    "Free Customer Support",
    "Affordable Prices",
    "Easy & Fast Booking",
    "Expert Guidance",
    "Free Customer Support",
    "Many Pickup Location",
    "No More Waiting",
  ];

  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-10 py-16 bg-white">
      {/* Left Side - Images */}
      <div className="flex flex-col md:flex-row gap-16 md:w-1/2 items-center relative">
        <img
          src="/src/assets/Top.jpg" 
          alt="Taxi Top View"
          className="w-70  shadow-lg relative top-25"
        />
        <img
          src="/src/assets/Front.jpg" 
          alt="Autonomous Taxi"
          className="w-70  shadow-lg "
        />
      </div>

      {/* Right Side - Content */}
      <div className="md:w-1/2 md:ml-10 text-center md:text-left">
        <h2 className="text-5xl font-bold leading-snug">
          Why <span className="text-yellow-500 border-yellow-500 pb-1">Choose Us?</span>
        </h2>
        <p className="text-gray-600 my-4 text-lg leading-relaxed mb-8">
          Suspendisse ultrice gravida dictum fusce placerat ultricies integer<br/>
          quis auctor elit sed vulputate mi sit. Auctor eu augue ut lectus arcu<br/>
          bibendum at varius vel.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center bg-[#fdf0cc] p-3 w-60 rounded-lg shadow-sm transition-colors duration-300 hover:bg-[#0a1930] hover:text-yellow-400 hover:rotate-3 hover:scale-105">
              <div className="bg-yellow-500 text-white w-4 h-4 flex items-center justify-center rounded-full mr-1 ">
                <FontAwesomeIcon icon={faCheck} className="text-white text-sm" />
              </div>
              <span className="text-black hover:text-yellow-400">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
