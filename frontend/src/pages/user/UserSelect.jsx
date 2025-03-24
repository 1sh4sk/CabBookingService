import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCircleUser, faMapPin, faWallet } from '@fortawesome/free-solid-svg-icons';
import MapComponent from './MapComponent';
import { useLocation, useNavigate } from 'react-router';
import { createRideApi } from '../../api/rideApi';

const UserSelect = () => {

  const location = useLocation();
  const { rideType, pickup, drop, price, image } = location.state || {};
  const navigate = useNavigate();

  const vehicleType = rideType === "TripMate Bike" ? "tripmatebike" : rideType === "TripMate GO" ? "tripmatego" : rideType === "TripMate Auto" ? "tripmateauto" : "premier";

  const createRide = async () => {
    try {
      navigate("/looking-for-driver", {
        state: { rideType, pickup, drop, price, image }
      })
      const res = await createRideApi({ vehicleType, pickup, destination: drop })
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (

    <div div className="w-full h-full flex items-center flex-col bg-white" >
      <h6 className="w-full font-bold text-lg text-left">Confirm your Ride</h6>
      <div className='w-full flex flex-col items-center justify-center'>
        <div className={`flex flex-col items-center justify-center ${rideType === "TripMate Bike" ? 'lg:w-40 lg:h-40 mt-4' : 'lg:w-64 lg:h-64'} -mt-10 sm:w-40 sm:h-40 md:w-56 md:h-56 overflow-hidden`}>
          <img
            src={image}
            alt="Car"
            className={`w-full h-full object-cover ${rideType === "TripMate Bike" ? 'object-contain' : 'object-cover'} `}
          />
        </div>
        <p className={` font-bold font-epilogue text-color-yellow  ${rideType === "TripMate Bike" ? 'mt-3' : '-mt-10'}`}>{rideType}</p>
      </div>

      {/* Ride Details */}
      <div className="w-full space-y-4 mt-7">
        <div className='flex items-center gap-4 p-1'>
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-yellow-500 text-xl sm:text-2xl" />
          <div>
            {/* <h1 className='font-bold text-sm sm:text-base'>112/17 A</h1> */}
            <span className='text-gray-500 text-xs sm:text-sm'>{pickup}</span>
          </div>
        </div>
        <hr />
        <div className='flex items-center gap-4 p-1'>
          <FontAwesomeIcon icon={faMapPin} className="text-yellow-500 text-xl sm:text-2xl" />
          <div>
            {/* <h1 className='font-bold text-sm sm:text-base'>112/17 A</h1> */}
            <span className='text-gray-500 text-xs sm:text-sm'>{drop}</span>
          </div>
        </div>
        <hr />
        <div className='flex items-center gap-4 p-1'>
          <FontAwesomeIcon icon={faWallet} className="text-yellow-500 text-xl sm:text-2xl" />
          <div>
            <h1 className='font-bold text-sm sm:text-base'>₹{price}</h1>
            <span className='text-gray-500 text-xs sm:text-sm'>Cash</span>
          </div>
        </div>
      </div>

      {/* Request Ride Button */}
      <div className='w-full mt-6 flex justify-center'>
        <button className='w-full  p-3 font-bold bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors cursor-pointer active:bg-color-yellow' onClick={createRide}>
          Confirm  ride
        </button>
      </div>

    </div>

  );
};

export default UserSelect;