import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCircleUser, faMapPin, faWallet } from '@fortawesome/free-solid-svg-icons';
import MapComponent from './MapComponent';
import { useLocation, useNavigate } from 'react-router';
import { SocketContext } from '../../context/SocketContext';

const UserDriver = () => {

  const { receiveMessage, socket } = useContext(SocketContext);
  const location = useLocation();
  const navigate = useNavigate();
  const { rideType, pickup, drop, price, image } = location.state || {};

  receiveMessage('ride-confirmed', ride => {
    navigate("/driver-detail", {
      state: ride
    })
  })

  return (

    <div div className="w-full lg:w-1/2 h-full flex items-center flex-col bg-white -mt-14 lg:mt-0 rounded-3xl lg:rounded-none z-10 p-8 lg:p-0" >
      <h6 className="w-full font-bold text-lg text-left">Looking for a driver</h6>
      <div className='w-full flex flex-col items-center justify-center'>
        <div className={`flex flex-col items-center justify-center ${rideType === "TripMate Bike" ? 'lg:w-40 lg:h-40 mt-4' : 'lg:w-64 lg:h-64'} -mt-10 w-50 h-50 sm:w-40 sm:h-40 md:w-56 md:h-56 overflow-hidden`}>
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

    </div>
  );
};

export default UserDriver;
