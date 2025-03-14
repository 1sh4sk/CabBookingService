import React from "react";

const ReviewTemplate = () => {
  return (
    <div className="bg-yellow-500 text-black py-16 px-6 md:px-20">
      {/* Stats Section */}
      <div className="bg-black text-white p-6 md:p-10 rounded-lg shadow-lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {/* Stat Item */}
          <div className="flex flex-col items-center">
            <div className="bg-yellow-500 p-3 rounded-full">
              {/* Replace with an actual icon */}
              <span className="text-2xl font-bold">🏆</span>
            </div>
            <h2 className="text-2xl font-bold mt-2">530+</h2>
            <p className="text-sm text-gray-300">Happy Riders</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-yellow-500 p-3 rounded-full">
              <span className="text-2xl font-bold">🏅</span>
            </div>
            <h2 className="text-2xl font-bold mt-2">10</h2>
            <p className="text-sm text-gray-300">Riding Awards</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-yellow-500 p-3 rounded-full">
              <span className="text-2xl font-bold">🚖</span>
            </div>
            <h2 className="text-2xl font-bold mt-2">5230+</h2>
            <p className="text-sm text-gray-300">Total Cars</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-yellow-500 p-3 rounded-full">
              <span className="text-2xl font-bold">⭐</span>
            </div>
            <h2 className="text-2xl font-bold mt-2">2220+</h2>
            <p className="text-sm text-gray-300">5-Star Reviews</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mt-10">
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Loved By Thousands Of Riders And Others
        </h2>
        <p className="text-gray-800 mt-4">
          Suspendisse ultricies gravida dictum fusce placerat ultricies integer.
        </p>

        {/* Reviews */}
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/50"
                alt="User"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-semibold">Courtney Henry</h3>
                <p className="text-gray-500 text-sm">Happy Customer</p>
              </div>
            </div>
            <p className="mt-4 text-gray-700 text-sm">
              "Massa tincidunt dui ut ornare lectus sit amet est placerat mauris
              augue neque gravida in fermentum turpis egestas sed tempus."
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/50"
                alt="User"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-semibold">Courtney Henry</h3>
                <p className="text-gray-500 text-sm">Happy Customer</p>
              </div>
            </div>
            <p className="mt-4 text-gray-700 text-sm">
              "Massa tincidunt dui ut ornare lectus sit amet est placerat mauris
              augue neque gravida in fermentum turpis egestas sed tempus."
            </p>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          <span className="h-2 w-2 bg-gray-700 rounded-full"></span>
          <span className="h-2 w-2 bg-yellow-600 rounded-full"></span>
          <span className="h-2 w-2 bg-gray-700 rounded-full"></span>
        </div>
      </div>
    </div>
  );
};

export default ReviewTemplate;