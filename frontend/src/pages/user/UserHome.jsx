import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCircleUser, faMapPin } from '@fortawesome/free-solid-svg-icons';
import MapComponent from './MapComponent';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { logoutUser } from '../../api/userApi';

const UserHome = () => {
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await logoutUser();
      localStorage.removeItem('token');
      navigate('/login');
      toast.success('Logged out successfully', { icon: 'success' });
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  }

  return (
    <div>
      <header className="flex justify-between items-center bg-yellow-500 p-4">
        <div className="flex justify-center items-center gap-3 ml-10">
          <img src="/src/assets/logo.png" alt="Logo" className="w-15 h-15 rounded-full" />
          <h1 className='font-bold text-white text-xl'>TripMate</h1>
        </div>
        <button onClick={handleLogout} >
          <FontAwesomeIcon icon={faUser} className="text-white text-2xl cursor-pointer mr-10" />
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="mt-10 mb-10">
          {/* Column 1 */}
          <div className=" bg-white p-4 ml-60 mr-5 items-center justify-center border-3 rounded-md shadow-md border-gray-300">
            <h6 className="font-bold">Find a Trip</h6>
            <br />
            <div className="flex items-center rounded p-3 mb-4 bg-yellow-50">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-yellow-500" />
              <input
                type="text"
                className="w-full outline-none bg-transparent"
                placeholder="Pickup location here"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
              />
            </div>
            <div className="flex items-center rounded p-3 mb-4 bg-yellow-50">
              <FontAwesomeIcon icon={faMapPin} className="mr-2 text-yellow-500" />
              <input
                type="text"
                className="w-full outline-none bg-transparent"
                placeholder="Drop location here"
                value={drop}
                onChange={(e) => setDrop(e.target.value)}
              />
            </div>
            <button
              type="button"
              className={`w-full p-2 rounded mt-1 mb-4 font-bold ${pickup && drop ? 'bg-yellow-500 text-white' : 'bg-yellow-200 text-white cursor-not-allowed'
                }`}
              disabled={!pickup || !drop}
            >
              Submit
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center mt-10 mb-10 mr-40 bg-gray-800 text-white font-bold h-140 rounded-lg">
          <MapComponent />
        </div>
      </div>
    </div>
  );
};

export default UserHome;
