import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faUser, faMapPin } from '@fortawesome/free-solid-svg-icons'
import MapComponent from './MapComponent';

const UserSubmit = () => {

  return (
    <div>
      <header className="flex justify-between items-center bg-yellow-500 p-2">
        <div className="flex justify-center items-center gap-3">
          <img src="/src/assets/logo.png" alt="Logo" className="w-15 h-15 rounded-full" />
          <h1 className='font-bold text-white text-xl'>TripMate</h1>
        </div>
        <FontAwesomeIcon icon={faUser} className="text-white text-2xl cursor-pointer mr-10" />
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="mt-6 mb-10">
          {/* Column 1 */}
          <div className="border bg-white shadow-md p-6 rounded-lg border-gray-300 ml-60 mr-5">
            <h6 className="font-bold">Find a Trip</h6>
            <br />
            <div className="flex items-center rounded p-3 mb-4 bg-yellow-50">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-yellow-500" />
              <input
                type="text"
                className="w-full outline-none"
                placeholder="Pickup location here"
              />
            </div>
            <div className="flex items-center rounded p-3 mb-4 bg-yellow-50">
              <FontAwesomeIcon icon={faMapPin} className="mr-2 text-yellow-500" />
              <input
                type="text"
                className="w-full outline-none"
                placeholder="Drop location here"
              />
            </div>
            <button
              type="button"
              className='w-full p-2 rounded mt-1 mb-4 font-bold bg-yellow-500 text-white' >
              Search
            </button>
          </div>
          <div className="mt-4 ml-60 mr-5">
            <h6 className="font-bold">Choose Your Ride</h6>
            <div className="border p-4 rounded-lg shadow-md mt-2 flex justify-between items-center">
              <div className="flex items-center">
                <img src="/src/component/car.png" alt="Car" className="w-12 h-12 mr-3" />
                <div>
                  <p className="font-bold">TripMate GO</p>
                  <p className="text-sm text-gray-500">6 min away • 5:27 PM</p>
                  <p className="text-xs text-gray-400">Affordable compact rides</p>
                </div>
              </div>
              <p className="font-bold">₹445</p>
            </div>
            <div className="border p-4 rounded-lg shadow-md mt-2 flex justify-between items-center">
              <div className="flex items-center">
                <img src="/src/component/auto.png" alt="Auto" className="w-12 h-12 mr-3" />
                <div>
                  <p className="font-bold">TripMate Auto</p>
                  <p className="text-sm text-gray-500">6 min away • 5:27 PM</p>
                  <p className="text-xs text-gray-400">Affordable compact rides</p>
                </div>
              </div>
              <p className="font-bold">₹254</p>
            </div>
            <button className="w-full p-2 mt-4 bg-black text-white rounded-lg font-bold">Request a ride</button>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex items-center justify-center mt-10 mb-10 mr-40 bg-gray-800 text-white font-bold h-140 rounded-lg">
          <MapComponent/>
        </div>
      </div>
    </div>
  );
};

export default UserSubmit