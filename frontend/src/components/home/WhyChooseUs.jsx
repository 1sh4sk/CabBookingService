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
    <section id="why-choose-us" className="flex flex-col lg:flex-row items-center justify-center px-4 md:px-10 xl:px-30 ml-5 mr-5 py-16 bg-white gap-8 lg:gap-20">
      {/* First Row - Images */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-4 w-full lg:w-1/2 items-center">
        <img
          src="/src/assets/Top.jpg"
          alt="Taxi Top View"
          className="w-64 md:w-80 lg:w-50 xl:w-70 lg:pt-30"
        />
        <img
          src="/src/assets/Front.jpg"
          alt="Autonomous Taxi"
          className="w-64 md:w-80 lg:w-50 xl:w-70 shadow-lg"
        />
      </div>

      {/* Second Row - Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0 ">
        <h2 className="heading text-center text-3xl xl:text-3xl font-bold mb-8 font-epilogue">
          Why{" "}
          <span
            className="text-yellow-500 border-yellow-500 inline-block px-2 py-1 bg-contain bg-center bg-no-repeat bg-[url('/src/assets/circle.png')] h-12 md:h-1 lg:h-14 xl:20"
          >
            Choose Us?
          </span>
        </h2>

        <p className="text-gray-600 my-4 text-base xl:text-lg leading-relaxed mb-8">
          Suspendisse ultrice gravida dictum fusce placerat ultricies integer
          quis auctor elit sed vulputate mi sit. Auctor eu augue ut lectus arcu
          bibendum at varius vel.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <button
              key={index}
              className="flex items-center bg-[#f8f6f1] p-3 w-full xl:w-60 rounded-lg shadow-sm transition-transform duration-300 hover:bg-[#0a1930] hover:text-yellow-400 hover:rotate-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 cursor-pointer"
            >
              {/* FontAwesome Check Icon in a Yellow Circle */}
              <div className="bg-yellow-500 text-white w-6 h-6 md:w-4 md:h-4 xl:w-6 xl:h-6  flex items-center justify-center rounded-full mr-3">
                <FontAwesomeIcon icon={faCheck} className="text-white text-sm" />
              </div>
              <span className="text-black hover:text-yellow-400 text-sm  md:text-[12px] xl:text-sm ">{feature}</span>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;