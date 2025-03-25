import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { rideStartApi } from "../../api/rideApi";
import { useNavigate } from "react-router";

function Confirm({ setConfirmRidePopupPanel, ride }) {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  console.log(ride);


  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await rideStartApi(ride._id, otp);

      if (res.status === 200) {
        setConfirmRidePopupPanel(false);
        navigate("/ride-complete", {
          state: ride
        })
      }
    } catch (error) {
      console.log(error);
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
          <p className="font-semibold">{ride?.user?.fullname?.firstname} {ride?.user?.fullname?.lastname}</p>
        </div>
        <div className="text-right">
          <span className="text-black font-bold">₹{ride?.fare}</span>
          <p className="text-gray-500 text-sm">22 km</p>
        </div>
      </div>

      {/* Pickup & Dropoff Locations */}
      <div className="text-sm mb-4">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-yellow-500 mr-2" />
          <div>
            <span className="block text-gray-600">PICKUP</span>
            <span className="block font-medium">{ride?.pickup}</span>
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
            <span className="block font-medium">{ride?.destination}</span>
            {/* <span className="block">Baker Street, London</span> */}
          </div>
        </div>
      </div>

      {/* OTP Input */}
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="otp"
          className="w-full p-2 border rounded-lg mb-4 text-center"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => {
              // handleCancel();
              setConfirmRidePopupPanel(false);
            }}
            className="bg-red-500 text-white font-bold py-2 px-4 rounded-md w-full sm:w-1/2 hover:bg-red-600"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="bg-green-500 text-white font-bold py-2 px-4 rounded-md w-full sm:w-1/2 hover:bg-green-600"
          >
            Confirm
          </button>
        </div>
      </form>
    </div>


  );
}

export default Confirm;
