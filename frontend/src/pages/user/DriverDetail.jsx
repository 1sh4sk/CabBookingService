import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faShieldAlt, faPhoneVolume, faMapMarkerAlt, faLocationArrow, faWallet, faMapPin } from '@fortawesome/free-solid-svg-icons';
import MapComponent from './MapComponent';

const DriverDetail = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center bg-black md:bg-[#F7B401] p-4">

        <div className="flex items-center gap-3">
          <img src="/src/component/logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
          <h1 className='font-bold text-white text-lg md:text-xl'>TripMate</h1>
        </div>
        <FontAwesomeIcon icon={faCircleUser} className="text-white text-3xl md:text-4xl cursor-pointer" />
      </header>

      {/* Main Content */}
      <div className='flex flex-col-reverse md:flex-col lg:flex-row gap-6 p-4'>

        {/* Left Section */}
        <div className='w-full lg:w-1/2 flex flex-col p-4'>
          {/* Driver Info */}
          <div className="flex items-center gap-4 mb-4">
            <img src="https://images.pexels.com/photos/5835588/pexels-photo-5835588.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Driver" className="w-14 h-14 rounded-full" />
            <div>
              <h6 className="font-bold text-base">Manoj Kumar</h6>
              <h2 className="text-lg font-bold">TN23A1234</h2>
              <p className="text-gray-500 text-sm">White Suzuki S-presso</p>
              <p className="text-[#F7B401] font-bold text-sm">⭐ 4.5</p>
            </div>
          </div>
          
          {/* Message Input */}
          <div className="flex items-center border border-gray-200 rounded bg-gray-100 p-2">
            <input type="text" placeholder="Send a message to the driver" className="w-full bg-gray-100 focus:outline-none text-base" />
            <img src='/src/assets/Map-Arrow-Right--Streamline-Solar.svg' className='h-5 w-5' alt="Send" />
          </div>
          
          {/* Action Buttons */}
          <div className='flex justify-around mt-4'>
            {[{icon: faShieldAlt, label: "Safety"}, {icon: faLocationArrow, label: "Location"}, {icon: faPhoneVolume, label: "Call"}].map(({icon, label}) => (
              <button key={label} className="flex flex-col items-center">
                <div className="bg-gray-100 p-4 rounded-full">
                  <FontAwesomeIcon icon={icon} className="text-[#F7B401] text-2xl" />
                </div>
                <span className="text-sm font-bold mt-1">{label}</span>
              </button>
            ))}
          </div>
          
          {/* Ride Details */}
          <div className="mt-6 space-y-3">
            {[{icon: faMapMarkerAlt, text: "112/17 A", subText: "example street, area, state"},
              {icon: faMapPin, text: "Drop Location", subText: "example street, area, state"},
              {icon: faWallet, text: "₹445", subText: "Cash"}].map(({icon, text, subText}) => (
              <div key={text} className='flex items-center gap-4 border-b pb-2'>
                <FontAwesomeIcon icon={icon} className="text-[#F7B401] text-2xl" />
                <h1 className='font-bold text-base'>{text} <br/><span className='text-gray-500 text-sm'>{subText}</span></h1>
              </div>
            ))}
          </div>

          {/* Payment Button */}
          <button className='w-full p-3 mt-6 rounded bg-green-500 text-white font-bold text-base'>
            Make a Payment
          </button>
        </div>
        
        {/* Right Section - Map */}
        <div className='w-full md:w-full lg:w-1/2 flex items-center justify-center bg-gray-800 text-white font-bold h-72 md:h-96 lg:h-auto rounded-lg'>
          <MapComponent/>
        </div>
      </div>
    </div>
  );
}

export default DriverDetail;