import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router";
import { finishRideApi } from "../../api/rideApi";

const FinishRide = () => {
  const location = useLocation();
  const rideDetails = location.state;
  const navigate = useNavigate();

  console.log(rideDetails);

  const handleFinishRide = async () => {
    try {
      const res = await finishRideApi(rideDetails._id);

      if (res.status === 200) {
        navigate('/captain-home');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-6 w-full -mt-14 lg:mt-0 rounded-3xl lg:rounded-none z-10 bg-white">
      <p className="font-bold mb-4 text-lg">Finish this Ride</p>

      {/* Rider Info */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img
            src="/src/assets/Maskgroup.png"
            alt="Driver"
            className="w-12 h-12 rounded-full mr-4"
          />
          <p className="font-semibold">{rideDetails?.user?.fullname?.firstname} {rideDetails?.user?.fullname?.lastname}</p>
        </div>
        <div className="text-right">
          <span className="text-black font-bold">₹{rideDetails?.fare}</span>
          <p className="text-gray-500 text-sm">22 KM</p>
        </div>
      </div>

      {/* Pickup & Dropoff Locations */}
      <div className="text-sm mb-4">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-yellow-500 mr-2" />
          <div>
            <span className="block text-gray-600">PICKUP</span>
            <span className="block font-medium">{rideDetails.pickup}</span>
            {/* <span className="block">Area, USA</span> */}
          </div>
        </div>
      </div>

      <hr className="my-2" />

      <div className="text-sm mb-4">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-yellow-500 mr-2" />
          <div>
            <span className="block text-gray-600">DROPOFF</span>
            <span className="block font-medium">{rideDetails.destination}</span>
            {/* <span className="block">Baker Street, London</span> */}
          </div>
        </div>
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
  );
};

export default FinishRide;

