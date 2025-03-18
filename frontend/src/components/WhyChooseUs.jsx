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
    "Many Pickup Locations",
    "No More Waiting",
  ];

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center px-4 md:px-10 py-16 bg-white">
      {/* First Row - Images */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 w-full lg:w-1/2 items-center">
        <img
          src="/src/assets/Top.jpg" 
          alt="Taxi Top View"
          className="w-64 md:w-80 lg:w-96 lg:pt-30 "
        />
        <img
          src="/src/assets/Front.jpg" 
          alt="Autonomous Taxi"
          className="w-64 md:w-80 lg:w-96  shadow-lg"
        /> 
      </div>

      {/* Second Row - Content */}
      <div className="w-full lg:w-1/2 lg:ml-10 text-center lg:text-left mt-8 lg:mt-0">
        <h2 className="text-4xl md:text-5xl font-bold leading-snug">
          Why <span className="text-yellow-500 border-yellow-500 ">Choose Us?</span>
        </h2>
        <p className="text-gray-600 my-4 text-base md:text-lg leading-relaxed mb-8">
          Suspendisse ultrice gravida dictum fusce placerat ultricies integer<br className="hidden lg:block"/>
          quis auctor elit sed vulputate mi sit. Auctor eu augue ut lectus arcu<br className="hidden lg:block"/>
          bibendum at varius vel.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center bg-[#fdf0cc] p-3 w-full lg:w-60 rounded-lg shadow-sm transition-colors duration-300 hover:bg-[#0a1930] hover:text-yellow-400 hover:rotate-1 hover:scale-105">
              {/* FontAwesome Check Icon in a Yellow Circle */}
              <div className="bg-yellow-500 text-white w-6 h-6 flex items-center justify-center rounded-full mr-3">
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