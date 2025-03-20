// import { useState } from "react";
// import { FaUser, FaMapMarkerAlt } from "react-icons/fa";

// function FinishRide() {
//   const [rideFinished, setRideFinished] = useState(false);

//   const handleFinishRide = () => {
//     alert("Ride Finished Successfully");
//     setRideFinished(true);
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100">
//       {/* Header */}
//       <header className="bg-yellow-500 p-4 flex justify-between items-center">
//         <h1 className="text-white text-lg font-bold">LOGO</h1>
//         <FaUser className="text-white text-2xl" />
//       </header>

//       {/* Main Content */}
//       <div className="flex flex-col lg:flex-row p-6 gap-6">
//         {/* Ride Completion Section */}
//         <div className="bg-white p-6 rounded-lg shadow-lg w-full lg:w-1/3">
//           <p className="font-bold mb-4 text-lg">Finish this Ride</p>

//           {/* Rider Info */}
//           <div className="flex items-center justify-between mb-4">
//             <div className="flex items-center">
//               <img
//                 src="https://via.placeholder.com/50"
//                 alt="Driver"
//                 className="w-12 h-12 rounded-full mr-4"
//               />
//               <p className="font-semibold">Mahalakshmi</p>
//             </div>
//             <div className="text-right">
//               <span className="text-black font-bold">₹25.00</span>
//               <p className="text-gray-500 text-sm">22 KM</p>
//             </div>
//           </div>

//           {/* Pickup & Dropoff Locations */}
//           <div className="text-sm mb-4">
//             <p className="flex items-center">
//               <FaMapMarkerAlt className="text-yellow-500 mr-2" />
//               <div>
//                 <span className="block text-gray-600">PICKUP</span>
//                 <span className="block font-bold">112/17 A</span>
//                 <span className="block">Area, USA</span>
//               </div>
//             </p>
//           </div>

//           <hr className="my-2" />

//           <div className="text-sm mb-4">
//             <p className="flex items-center">
//               <FaMapMarkerAlt className="text-yellow-500 mr-2" />
//               <div>
//                 <span className="block text-gray-600">DROPOFF</span>
//                 <span className="block font-bold">221B</span>
//                 <span className="block">Baker Street, London</span>
//               </div>
//             </p>
//           </div>

//           {/* Finish Ride Button */}
//           <button
//             onClick={handleFinishRide}
//             className="bg-green-500 text-white font-bold py-2 px-4 rounded-md w-full hover:bg-green-600 transition-all"
//           >
//             Finish Ride
//           </button>
//           <p className="text-sm text-gray-500 mt-2">
//             Click on the "Finish Ride" button if you have completed the payment.
//           </p>
//         </div>

//         {/* Map Section */}
//         <div className="flex-1 bg-gray-800 text-white flex h-64 lg:h-auto items-center justify-center text-lg font-bold rounded-lg">
//           Map
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FinishRide;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faClock, faRoute, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const FinishRide = () => {
  const [rideFinished, setRideFinished] = useState(false);

  const handleFinishRide = () => {
    alert("Ride Finished Successfully");
    setRideFinished(true);
  };

  return (
    <div className="min-h-screen flex flex-col ">
      {/* Header */}
      <header className="flex justify-between items-center bg-black md:bg-[#F7B401] p-4">
          <div className="flex items-center gap-3">
            <img src="/src/assets/logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
            <h1 className='font-bold text-white text-lg md:text-xl'>TripMate</h1>
          </div>
          <FontAwesomeIcon icon={faCircleUser} className="text-white text-3xl md:text-4xl cursor-pointer" />
      </header>

      {/* Main Content */}
      <div className="flex flex-col-reverse md:flex-col lg:flex-row gap-6 p-4">
        {/* Ride Completion Section */}
        <div className="p-6 w-full lg:w-1/2">
          <p className="font-bold mb-4 text-lg">Finish this Ride</p>

          {/* Rider Info */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <img
                src="/src/assets/Maskgroup.png"
                alt="Driver"
                className="w-12 h-12 rounded-full mr-4"
              />
              <p className="font-semibold">Mahalakshmi</p>
            </div>
            <div className="text-right">
              <span className="text-black font-bold">₹25.00</span>
              <p className="text-gray-500 text-sm">22 KM</p>
            </div>
          </div>

          {/* Pickup & Dropoff Locations */}
          <div className="text-sm mb-4">
            <p className="flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-yellow-500 mr-2" />
              <div>
                <span className="block text-gray-600">PICKUP</span>
                <span className="block font-bold">112/17 A</span>
                <span className="block">Area, USA</span>
              </div>
            </p>
          </div>

          <hr className="my-2" />

          <div className="text-sm mb-4">
            <p className="flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-yellow-500 mr-2" />
              <div>
                <span className="block text-gray-600">DROPOFF</span>
                <span className="block font-bold">221B</span>
                <span className="block">Baker Street, London</span>
              </div>
            </p>
          </div>

          {/* Finish Ride Button */}
          <button
            onClick={handleFinishRide}
            className="bg-green-500 text-white font-bold py-2 px-4 rounded-md w-full hover:bg-green-600 transition-all"
          >
            Finish Ride
          </button>
          <p className="text-sm text-gray-500 mt-2">
            Click on the "Finish Ride" button if you have completed the payment.
          </p>
        </div>

        {/* Map Section */}
        <div className="w-full  flex items-center justify-center bg-gray-800 text-white font-bold h-72 md:h-96 lg:h-150 rounded-lg">
          Map
        </div>
      </div>
    </div>
  );
};

export default FinishRide;

