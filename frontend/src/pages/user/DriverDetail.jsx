import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faShieldAlt, faPhoneVolume, faMapMarkerAlt, faLocationArrow, faWallet, faMapPin } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useNavigate } from 'react-router';
import { SocketContext } from '../../context/SocketContext';

const DriverDetail = () => {

  const location = useLocation();
  const rideDetail = location.state || {};
  const { receiveMessage } = useContext(SocketContext);
  const navigate = useNavigate();

  receiveMessage('ride-started', ride => {
    console.log("ride started")
    navigate("/make-payment", {
      state: rideDetail
    })
  })

  console.log("ride detail", rideDetail);

  return (
    <div className='w-full lg:w-1/2 flex flex-col px-4 bg-white -mt-14 lg:mt-0 z-10 rounded-3xl lg:rounded-none py-8 lg:p-8'>
      {/* Driver Info */}
      <div className="w-full flex  items-center gap-4 mb-4">
        <img src="https://images.pexels.com/photos/5835588/pexels-photo-5835588.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Driver" className="w-14 h-14 rounded-full object-cover" />
        <div className='w-[90%] flex items-center justify-between'>
          <div>
            <h6 className="font-bold text-base capitalize">{rideDetail?.captain?.fullname?.firstname} {rideDetail?.captain?.fullname?.lastname}</h6>
            <h6 className="font-bold text-base">OTP: {rideDetail?.otp}</h6>
          </div>
          <div className='text-right'>
            <h2 className="text-lg font-bold">{rideDetail?.captain?.vehicle?.plate}</h2>
            <p className="text-gray-500 text-sm">{rideDetail?.captain?.vehicle?.vehiclename}</p>
            <p className="text-[#F7B401] font-bold text-sm">⭐ 4.5</p>
          </div>
        </div>
      </div>

      {/* Message Input */}
      <div className="flex items-center border border-gray-200 rounded bg-gray-100 p-2">
        <input type="text" placeholder="Send a message to the driver" className="w-full bg-gray-100 focus:outline-none text-base m-0!" />
        <img src='/src/assets/Map-Arrow-Right--Streamline-Solar.svg' className='h-5 w-5' alt="Send" />
      </div>

      {/* Action Buttons */}
      <div className='flex justify-around mt-4'>
        {[{ icon: faShieldAlt, label: "Safety" }, { icon: faLocationArrow, label: "Location" }, { icon: faPhoneVolume, label: "Call" }].map(({ icon, label }) => (
          <button key={label} className="flex flex-col items-center">
            <div className="bg-gray-100 p-4 rounded-full">
              <FontAwesomeIcon icon={icon} className="text-[#F7B401] text-2xl" />
            </div>
            <span className="text-sm font-bold mt-1">{label}</span>
          </button>
        ))}
      </div>

      <div className="mt-10 space-y-3">
        <div className='flex items-center gap-4 border-b pb-2'>
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#F7B401] text-2xl" />
          <h1 className='font-medium text-base'>
            {rideDetail?.pickup}
          </h1>
        </div>
        <div className='flex items-center gap-4 border-b pb-2'>
          <FontAwesomeIcon icon={faMapPin} className="text-[#F7B401] text-2xl" />
          <h1 className='font-medium text-base'>
            {rideDetail?.destination}
          </h1>
        </div>
        <div className='flex items-center gap-4 pb-2'>
          <FontAwesomeIcon icon={faWallet} className="text-[#F7B401] text-2xl" />
          <h1 className='font-medium text-base'>
            ₹{rideDetail?.fare}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default DriverDetail;