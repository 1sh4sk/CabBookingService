import { useState } from "react";
import { FaUser, FaMapMarkerAlt } from "react-icons/fa";


 function FinishRide() {
  const [rideFinished, setRideFinished] = useState(false);

  const handleFinishRide = () => {
    alert("Ride Finished Successfully");
    setRideFinished(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-yellow-500 p-4 flex justify-between items-center">
        <h1 className="text-white text-lg font-bold">LOGO</h1>
        <FaUser className="text-white text-2xl" />
      </header>

      {/* Main Content */}
      <div className="flex h-screen flex-col md:flex-row p-6 gap-6">
        {/* Ride Completion Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
          <p className="font-bold mb-2">Finish this Ride</p>
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
  <p className="flex items-center">
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
  <p className="flex items-center">
    <FaMapMarkerAlt className="text-yellow-500 mr-2" />
    <div>
        <span className="block">DROPOFF</span>
      <span className="block font-bold">221B</span> 
      <span className="block">Baker Street, London</span>
    </div>
  </p>
</div>

          <form onSubmit={handleFinishRide}>
            <button type="submit" className="bg-green-500 text-white flex-1 font-bold py-2 px-4 rounded-md w-full hover:bg-yellow-500">
            Finish ride
          </button>
        </form>
          <p className="text-sm text-gray-500 mt-2">Click on finish ride button if you have completed the payment</p>
        </div>

        {/* Map Section */}
        <div className="flex-1 bg-gray-800 text-white flex items-center justify-center h-screen text-lg font-bold rounded-lg">
          Map
        </div>
      </div>
    </div>
  );
}
export default FinishRide;
