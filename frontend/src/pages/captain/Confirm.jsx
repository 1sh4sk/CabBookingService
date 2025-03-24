// import { useState } from "react";
// import { FaUser, FaClock, FaRoute, FaMapMarkerAlt } from "react-icons/fa";

// function Confirm() {
//   const [rideAccepted, setRideAccepted] = useState(false);
//   const [otp, setOtp] = useState("");

//   const handleCancel = () => {
//     setRideAccepted(false);
//   };

//   const handleConfirm = () => {
//     setRideAccepted(true);
//   };

//   const handleConfirmRide = () => {
//     if (otp.length === 4) {
//       alert("Ride Started Successfully");
//     } else {
//       alert("Please enter a valid 4-digit OTP");
//     }
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
//         {/* Ride Confirmation */}
//         <div className="bg-white p-6 rounded-lg shadow-lg w-full lg:w-1/3">
//           <p className="font-bold mb-4 text-lg">Confirm this ride to start</p>

//           {/* Rider Info */}
//           <div className="flex items-center justify-between mb-4">
//             <div className="flex items-center">
//               <img
//                 src="https://via.placeholder.com/50"
//                 alt="Rider"
//                 className="w-12 h-12 rounded-full mr-4"
//               />
//               <p className="font-semibold">Mahalakshmi</p>
//             </div>
//             <div className="text-right">
//               <span className="text-black font-bold">₹25.00</span>
//               <p className="text-gray-500 text-sm">22 km</p>
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

//           {/* OTP Input */}
//           <input
//             type="text"
//             className="w-full p-2 border rounded-lg mb-4 text-center"
//             placeholder="Enter OTP"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//             maxLength="4"
//           />

//           {/* Action Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4">
//             <button
//               onClick={handleCancel}
//               className="bg-red-500 text-white font-bold py-2 px-4 rounded-md w-full sm:w-1/2 hover:bg-red-600"
//             >
//               Cancel
//             </button>

//             <button
//               onClick={handleConfirm}
//               className="bg-green-500 text-white font-bold py-2 px-4 rounded-md w-full sm:w-1/2 hover:bg-green-600"
//             >
//               Confirm
//             </button>
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

// export default Confirm;
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

function Confirm({ setRidePopupPanel }) {
  const [rideAccepted, setRideAccepted] = useState(false);
  const [otp, setOtp] = useState("");

  const handleCancel = () => {
    setRideAccepted(false);
  };

  const handleConfirm = () => {
    setRideAccepted(true);
  };

  const handleConfirmRide = () => {
    if (otp.length === 4) {
      alert("Ride Started Successfully");
    } else {
      alert("Please enter a valid 4-digit OTP");
    }
  };

  return (


    <div className="w-full bg-white mt-4 rounded-xl flex flex-col p-4">
      <p className="font-bold mb-4 text-lg">Confirm this ride to start</p>

      {/* Rider Info */}
      <div className="bg-[#F8F6F1] flex items-center justify-between rounded-xl shadow-lg mb-4 p-5">
        <div className="flex items-center">
          <img
            src="/src/assets/Maskgroup.png"
            alt="Rider"
            className="w-12 h-12 rounded-full mr-4"
          />
          <p className="font-semibold">Mahalakshmi</p>
        </div>
        <div className="text-right">
          <span className="text-black font-bold">₹25.00</span>
          <p className="text-gray-500 text-sm">22 km</p>
        </div>
      </div>

      {/* Pickup & Dropoff Locations */}
      <div className="text-sm mb-4">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-yellow-500 mr-2" />
          <div>
            <span className="block text-gray-600">PICKUP</span>
            <span className="block font-bold">112/17 A</span>
            <span className="block">Area, USA</span>
          </div>
        </div>
      </div>

      <hr className="my-2" />

      <div className="text-sm mb-4">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-yellow-500 mr-2" />
          <div>
            <span className="block text-gray-600">DROPOFF</span>
            <span className="block font-bold">221B</span>
            <span className="block">Baker Street, London</span>
          </div>
        </div>
      </div>

      {/* OTP Input */}
      <input
        type="text"
        className="w-full p-2 border rounded-lg mb-4 text-center"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        maxLength="4"
      />

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => {
            handleCancel();
            setRidePopupPanel(false);
          }}
          className="bg-red-500 text-white font-bold py-2 px-4 rounded-md w-full sm:w-1/2 hover:bg-red-600"
        >
          Cancel
        </button>

        <button
          onClick={handleConfirm}
          className="bg-green-500 text-white font-bold py-2 px-4 rounded-md w-full sm:w-1/2 hover:bg-green-600"
        >
          Confirm
        </button>
      </div>
    </div>


  );
}

export default Confirm;
