import { useState } from "react";
import { FaUser, FaClock, FaRoute, FaMapMarkerAlt } from "react-icons/fa";


 function Confirm() {
  const [rideAccepted, setRideAccepted] = useState(false);
  const [otp, setOtp] = useState("");

  const handlecancel = () => {
    setRideAccepted(true);
  };

  const handleconfirm = () => {
    setRideAccepted(false);
  };

  const handleConfirmRide = () => {
    if (otp.length === 4) {
      alert("Ride Started Successfully");
    } else {
      alert("Please enter a valid 4-digit OTP");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-yellow-500 p-4 flex justify-between items-center">
        <h1 className="text-white text-lg font-bold">LOGO</h1>
        <FaUser className="text-white text-2xl" />
      </header>

      {/* Main Content */}
      <div className="flex flex-col h-screen md:flex-row p-6 gap-6">
        {/* Ride Confirmation */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
          <p className="font-bold mb-2">Confirm this ride to start</p>
          <div className="flex columns">
          <div>
            <img
              src="https://via.placeholder.com/50"
              alt="Driver"
              className="w-12 h-12 rounded-full mr-4"
            />
            </div>
            <div>
              <p className="font-semibold">Mahalakshmi</p>
              
              </div>
              <div className="relative left-50">
               <span className="text-black-500 font-bold">₹25.00</span><br />
                <p className="text-grey-10 font-bold text-sm text-right-top">22km</p> 
          </div>
          </div>
          <div className="text-sm mb-4">
  <p className="flex  items-center">
    <FaMapMarkerAlt className="text-yellow-500 mr-2" />
    <div>
    <span className="block">PICKUP</span>
      <span className="block font-bold">112/17 A</span> 
      <span className="block">Area, USA</span>
    </div>
  </p>
</div>
<hr className="z-10 "  />
<div className="text-sm mb-4">
  <p className="flex  items-center">
    <FaMapMarkerAlt className="text-yellow-500 mr-2" />
    <div>
    <span className="block">DROPOFF</span>
      <span className="block font-bold">221B</span> 
      <span className="block">Baker Street, London</span>
    </div>
  </p>
</div>

          <input
            type="text"
            className="w-full p-2 border rounded-lg mb-4"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />

<div className="flex gap-12">
            <form onSubmit={handlecancel}>
            <button type="submit" className="bg-red-400 text-white flex-1 font-bold  py-2 px-10  rounded-md w-full hover:bg-yellow-500">
            cancel
          </button>
        </form>
        <form onSubmit={handleconfirm}>
            <button type="submit" className="bg-green-500 text-white flex-1 font-bold py-2 px-12 rounded-md w-full hover:bg-yellow-500">
            Confirm
          </button>
        </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="flex-1  bg-gray-800 text-whiteflex  items-center justify-center h-screen text-lg font-bold rounded-lg">
          Map
        </div>
      </div>
    </div>
  );
}
export default Confirm;
