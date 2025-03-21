// import React from "react";

// const TaxiTemplate = () => {
//   return (
    
//     <div className="flex flex-col md:flex-row items-center bg-gray-50 min-h-screen px-6 md:px-16 py-10">
     
//       {/* Left Side: Image & Illustration */}
//       <div className="w-full md:w-1/2 flex justify-center">
//         <div className="relative">
//           <img
//             src="../src/assets/choose.png"
//             alt="Taxi Illustration"
//             className="w-full max-w-sm"
//           />
//         </div>
//       </div>
      
//       {/* Right Side: Content */}
//       <div className="w-full md:w-1/2 text-center md:text-left">
//         <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
//           Elevate Your Taxi <br />Experience
          
//           <span className="text-yellow-500    bg-contain bg-no-repeat bg-center px-2 " style={{backgroundImage:"url('../src/assets/circle.png')"}}>
//             With Ride
            
//           </span>-<br />Sharing.
//         </h1>
//         <p className="text-gray-600 mt-4">
//           Suspendisse ultrice gravida dictum fusce placerat ultricies integer
//           quis auctor elit sed vulputate mi sit.
//         </p>

//         {/* Features Section */}
//         <div className="mt-6 space-y-4">
//           {/* Safety First */}
//           <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md">
//             <div className="bg-yellow-400 p-3 rounded-full">
//               <svg
//                 className="w-6 h-6 text-white"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M5 13l4 4L19 7"
//                 />
//               </svg>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold">Safety First</h3>
//               <p className="text-gray-600 text-sm">
//                 Suspendisse ultrice gravida dictum fusce placerat ultricies integer.
//               </p>
//             </div>
//           </div>

//           {/* Affordable Prices */}
//           <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md">
//             <div className="bg-yellow-400 p-3 rounded-full">
//               <svg
//                 className="w-6 h-6 text-white"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M5 13l4 4L19 7"
//                 />
//               </svg>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold">Affordable Prices</h3>
//               <p className="text-gray-600 text-sm">
//                 Integer quis auctor elit sed vulputate mi sit. Auctor eu augue.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TaxiTemplate;
import React from "react";

const TaxiTemplate = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-[#f8f6f1] min-h-screen px-4 sm:px-8 md:px-16 lg:px-20 py-10">
      
      {/* Left Side: Image & Illustration */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <div className="relative">
          <img
            src="../src/assets/choose.png"
            alt="Taxi Illustration"
            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Right Side: Content */}
      <div className="w-full md:w-1/2 text-left md:text-left sm:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Elevate Your Taxi <br /> Experience
          <span className="text-yellow-500 bg-contain bg-no-repeat bg-center px-2 inline-block"
            style={{ backgroundImage: "url('../src/assets/circle.png')" }}>
            With Ride 
          </span>
          -
          Sharing.
        </h1>
        <p className="text-gray-600 mt-4 text-sm sm:text-base md:text-lg">
          Suspendisse ultrice gravida dictum fusce placerat ultricies integer
          quis auctor elit sed vulputate mi sit.
        </p>

        {/* Features Section */}
        <div className="mt-6 space-y-6">
          {/* Feature Card */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 p-4 bg-white rounded-lg shadow-md transition-transform hover:scale-105">
            <div className="w-12 h-12 flex justify-center items-center">
              <img src="/src/assets/symbol.png" alt="symbol" className="w-10" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-semibold">Safety First</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Suspendisse ultrice gravida dictum fusce placerat ultricies
                integer quis auctor elit sed vulputate mi sit.
              </p>
            </div>
          </div>

          {/* Feature Card */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 p-4 bg-white rounded-lg shadow-md transition-transform hover:scale-105">
            <div className="w-12 h-12 flex justify-center items-center">
              <img src="/src/assets/symbol.png" alt="symbol" className="w-10" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-semibold">Affordable Prices</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Suspendisse ultrice gravida dictum fusce placerat ultricies
                integer quis auctor elit sed vulputate mi sit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxiTemplate;
