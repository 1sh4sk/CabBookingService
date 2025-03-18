import { useState } from "react";
import { FaUser, FaClock, FaRoute, FaMapMarkerAlt } from "react-icons/fa";


function RideRequest()  {
    
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
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-yellow-500 p-4 flex justify-between items-center">
        <h1 className="text-white text-lg font-bold">LOGO</h1>
        <FaUser className="text-white text-2xl" />
      </header>
      
      {/* Main Content */}
      <div className="flex flex-col md:flex-row p-6 gap-6">
        {/* Driver Info */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
        <div className="flex columns">
          <div>
            <img
              src="https://via.placeholder.com/50"
              alt="Driver"
              className="w-12 h-12 rounded-full mr-4"
            />
            </div>
            <div>
              <p className="font-semibold">Deeban</p>
              <p className="text-grey">white suzuki s-persso</p>
              </div>
              <div className="relative left-30">
               <span className="text-black-500 font-bold">₹225.00</span><br />
                <p className="text-green-500 font-bold text-lg text-right-top">earned</p> 
          </div>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 bg-yellow-500 text-white p-4 mt-4 rounded-lg text-center">
            <div>
              <FaClock className="text-xl mx-auto mb-1" />
              <p className="text-sm">10.2</p>
              <p className="text-xs">Hours Online</p>
            </div>
            <div>
              <FaRoute className="text-xl mx-auto mb-1" />
              <p className="text-sm">30 KM</p>
              <p className="text-xs">Total Distance</p>
            </div>
            <div>
              <FaClock className="text-xl mx-auto mb-1" />
              <p className="text-sm">20</p>
              <p className="text-xs">Hours Online</p>
            </div>
          </div>

          {/* Ride Request */}
          <div className="bg-gray-100 p-4 mt-4 rounded-lg">
            <p className="font-bold mb-2">Ride for you</p>
            <div className="flex items-center mb-4">
              <img
                src="https://via.placeholder.com/40"
                alt="Rider"
                className="w-10 h-10 rounded-full mr-4"
              />
              <div className="flex columns">
         
            <div>
              <p className="font-semibold">Mahalakshmi</p>
              
              </div>
              <div className="relative left-40">
               <span className="text-black-500 font-bold">₹25.00</span><br />
               <p className="text-grey-10 font-bold text-sm text-right-top">22KM</p> 
          </div>
          </div>
          </div>
            <div className="text-sm mb-4">
  <p className="flex  items-center">
    <FaMapMarkerAlt className="text-yellow-500 mr-2" />
    <div>
      <span className="block text-grey-50">PICKUP</span>  
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
            <div className="flex gap-12">
            <form onSubmit={handleIgnore}>
            <button type="submit" className="bg-gray-400 text-white flex-1 font-bold  py-2 px-10  rounded-md w-full hover:bg-yellow-500">
            Ignore
          </button>
        </form>
        <form onSubmit={handleAccept}>
            <button type="submit" className="bg-green-500 text-white flex-1 font-bold py-2 px-12 rounded-md w-full hover:bg-yellow-500">
            Accept
          </button>
        </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="flex-1 bg-gray-800 text-white flex items-center justify-center text-lg font-bold rounded-lg">
          Map
        </div>
      </div>
    </div>
    
  );
}
export default RideRequest;
