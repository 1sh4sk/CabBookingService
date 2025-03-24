// import { useState } from "react";
// import { FaUser, FaClock, FaRoute, FaMapMarkerAlt } from "react-icons/fa";

// function RideRequest() {
//   const [rideAccepted, setRideAccepted] = useState(false);

//   const handleAccept = () => {
//     setRideAccepted(true);
//     alert("Ride Accepted");
//   };

//   const handleIgnore = () => {
//     setRideAccepted(false);
//     alert("Ride Ignored");
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
//         {/* Driver Info */}
//         <div className="bg-white p-6 rounded-lg shadow-lg w-full lg:w-1/3">
//           {/* Driver Details */}
//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <img
//                 src="https://via.placeholder.com/50"
//                 alt="Driver"
//                 className="w-12 h-12 rounded-full mr-4"
//               />
//               <div>
//                 <p className="font-semibold">Deeban</p>
//                 <p className="text-gray-500 text-sm">White Suzuki S-Presso</p>
//               </div>
//             </div>
//             <div className="text-right">
//               <span className="text-black font-bold">₹225.00</span>
//               <p className="text-green-500 text-sm">Earned</p>
//             </div>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-3 gap-4 bg-yellow-500 text-white p-4 mt-4 rounded-lg text-center">
//             <div>
//               <FaClock className="text-xl mx-auto mb-1" />
//               <p className="text-sm">10.2</p>
//               <p className="text-xs">Hours Online</p>
//             </div>
//             <div>
//               <FaRoute className="text-xl mx-auto mb-1" />
//               <p className="text-sm">30 KM</p>
//               <p className="text-xs">Total Distance</p>
//             </div>
//             <div>
//               <FaClock className="text-xl mx-auto mb-1" />
//               <p className="text-sm">20</p>
//               <p className="text-xs">Completed Rides</p>
//             </div>
//           </div>

//           {/* Ride Request */}
//           <div className="bg-gray-100 p-4 mt-4 rounded-lg">
//             <p className="font-bold mb-2">Ride for You</p>
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center">
//                 <img
//                   src="https://via.placeholder.com/40"
//                   alt="Rider"
//                   className="w-10 h-10 rounded-full mr-4"
//                 />
//                 <p className="font-semibold">Mahalakshmi</p>
//               </div>
//               <div className="text-right">
//                 <span className="text-black font-bold">₹25.00</span>
//                 <p className="text-gray-500 text-sm">22 KM</p>
//               </div>
//             </div>

//             {/* Pickup & Dropoff Locations */}
//             <div className="text-sm mb-4">
//               <p className="flex items-center">
//                 <FaMapMarkerAlt className="text-yellow-500 mr-2" />
//                 <div>
//                   <span className="block text-gray-600">PICKUP</span>
//                   <span className="block font-bold">112/17 A</span>
//                   <span className="block">Area, USA</span>
//                 </div>
//               </p>
//             </div>

//             <hr className="my-2" />

//             <div className="text-sm mb-4">
//               <p className="flex items-center">
//                 <FaMapMarkerAlt className="text-yellow-500 mr-2" />
//                 <div>
//                   <span className="block text-gray-600">DROPOFF</span>
//                   <span className="block font-bold">221B</span>
//                   <span className="block">Baker Street, London</span>
//                 </div>
//               </p>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4">
//               <button
//                 onClick={handleIgnore}
//                 className="bg-gray-400 text-white font-bold py-2 px-4 rounded-md w-full sm:w-1/2 hover:bg-gray-500"
//               >
//                 Ignore
//               </button>

//               <button
//                 onClick={handleAccept}
//                 className="bg-green-500 text-white font-bold py-2 px-4 rounded-md w-full sm:w-1/2 hover:bg-green-600"
//               >
//                 Accept
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Map Section */}
//         <div className="flex-1 bg-gray-800 text-white flex h-64 lg:h-auto items-center justify-center text-lg font-bold rounded-lg">
//           Map
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RideRequest;
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faClock,
  faRoute,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

function RideRequest({ setRidePopupPanel, ride, setConfirmRidePopupPanel, confirmRide }) {
  const [rideAccepted, setRideAccepted] = useState(false);

  const handleAccept = () => {
    setRideAccepted(true);
    alert("Ride Accepted");
  };

  const handleIgnore = () => {
    setRideAccepted(false);
    alert("Ride Ignored");
  };

  return (

    <div className="p-2 w-full">


      <p className="font-bold mb-2">Ride for You</p>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img
            src="/src/assets/Maskgroup.png"
            alt="Rider"
            className="w-10 h-10 rounded-full mr-4"
          />
          <p className="font-semibold">{ride?.user?.fullname?.firstname} {ride?.user?.fullname?.lastname}</p>
        </div>
        <div className="text-right">
          <span className="text-black font-bold">₹{ride.fare}</span>
          <p className="text-gray-500 text-sm">22 KM</p>
        </div>
      </div>

      {/* Pickup & Dropoff Locations */}
      <div className="text-sm mb-4">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-yellow-500 mr-2" />
          <div>
            <span className="block text-gray-600">PICKUP</span>
            {/* <span className="block font-bold">112/17 A</span> */}
            <span className="block">{ride?.pickup}</span>
          </div>
        </div>
      </div>

      <hr className="my-2" />

      <div className="text-sm mb-4">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-yellow-500 mr-2" />
          <div>
            <span className="block text-gray-600">DROPOFF</span>
            {/* <span className="block font-bold">221B</span> */}
            <span className="block">{ride?.destination}</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => {
            handleIgnore();
            setRidePopupPanel(false);
          }}
          className="bg-gray-400 text-white font-bold py-2 px-4 rounded-md w-full sm:w-1/2 hover:bg-gray-500"
        >
          Ignore
        </button>

        <button
          onClick={() => {
            handleAccept();
            setRidePopupPanel(false);
            setConfirmRidePopupPanel(true);
            confirmRide();
          }}
          className="bg-green-500 text-white font-bold py-2 px-4 rounded-md w-full sm:w-1/2 hover:bg-green-600"
        >
          Accept
        </button>
      </div>
    </div>

  );
}

export default RideRequest;

