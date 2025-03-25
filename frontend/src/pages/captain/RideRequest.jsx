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
          <span className="text-black font-bold">₹{ride?.fare}</span>
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
            // handleIgnore();
            setRidePopupPanel(false);
          }}
          className="bg-gray-400 text-white font-bold py-2 px-4 rounded-md w-full sm:w-1/2 hover:bg-gray-500"
        >
          Ignore
        </button>

        <button
          onClick={() => {
            // handleAccept();
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

