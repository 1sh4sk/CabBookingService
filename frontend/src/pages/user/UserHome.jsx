import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCircleUser, faMapPin } from '@fortawesome/free-solid-svg-icons';
import MapComponent from './MapComponent';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { locationSuggestions, logoutUser } from '../../api/userApi';
import Suggesstions from '../../components/Suggesstions';
import TaxiTemplate from '../../components/TaxiTemplate';
import UserSelect from './UserSelect';
import UserSubmit from './UserSubmit';

const UserHome = () => {
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [dropSuggestions, setDropSuggestions] = useState([]);
  const [activeField, setActiveField] = useState(null);
  const [suggestionPanel, setSuggestionPanel] = useState(false)
  const [onFormSubmit, setOnFormSubmit] = useState(false)

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

  const handlePickupChange = async (e) => {
    const newPickup = e.target.value;
    setPickup(newPickup);
    setSuggestionPanel(true);
    try {
      const res = await locationSuggestions(pickup);
      setPickupSuggestions(res.data);
      console.log(pickupSuggestions)

    } catch (error) {
      console.log(error.response.data);
    }
  }

  const handleDestinationChange = async (e) => {
    const newDestination = e.target.value;
    setDrop(newDestination);
    setSuggestionPanel(true);

    try {
      const res = await locationSuggestions(drop);
      setDropSuggestions(res.data);
    } catch (error) {
      console.log(error);
    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuggestionPanel(false);
    setOnFormSubmit(true);
    try {
      // const res = await getF
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center bg-black md:bg-[#F7B401] p-4">

        <div className="flex items-center gap-3">
          <img src="/src/assets/logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
          <h1 className='font-bold text-white text-lg md:text-xl'>TripMate</h1>
        </div>
        <FontAwesomeIcon icon={faCircleUser} className="text-white text-3xl md:text-4xl cursor-pointer" />
      </header>

      {/* Main Grid Layout */}
      <div className="flex flex-col-reverse md:flex-col lg:flex-row gap-6 p-4">
        {/* Trip Finder Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center p-4">
          <form onSubmit={handleSubmit} className="border bg-white p-4 w-full max-w-md rounded-lg shadow-md border-gray-300">
            <h6 className="font-bold text-lg">Find a Trip</h6>
            <br />
            <f className="flex items-center rounded p-3 mb-4 bg-yellow-50">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-yellow-500" />
              <input
                name='pickup'
                type="text"
                className="w-full outline-none bg-transparent"
                placeholder="Pickup location here"
                value={pickup}
                onChange={handlePickupChange}
                onClick={() => setActiveField('pickup')}
              />
            </f>
            <div className="flex items-center rounded p-3 mb-4 bg-yellow-50">
              <FontAwesomeIcon icon={faMapPin} className="mr-2 text-yellow-500" />
              <input
                name='destination'
                type="text"
                className="w-full outline-none bg-transparent"
                placeholder="Drop location here"
                value={drop}
                onChange={handleDestinationChange}
                onClick={() => setActiveField('destination')}
              />
            </div>
            <button
              type="submit"
              className={`w-full p-2 rounded mt-1 mb-4 font-bold ${pickup && drop ? 'bg-yellow-500 text-white' : 'bg-yellow-200 text-white cursor-not-allowed'
                }`}
              disabled={!pickup || !drop}
            >
              Submit
            </button>
          </form>

          {(pickupSuggestions.length > 0 || dropSuggestions.length > 0) && suggestionPanel && <Suggesstions
            suggestions={activeField === 'pickup' ? pickupSuggestions : dropSuggestions}
            setPickup={setPickup}
            setDrop={setDrop}
            activeField={activeField}

          />}
          {onFormSubmit && <UserSubmit />}
        </div>



        {/* Map Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-800 text-white font-bold h-72 md:h-96 lg:h-150 rounded-lg">
          <MapComponent />
        </div>
      </div>
    </div>
  );
};

export default UserHome;
