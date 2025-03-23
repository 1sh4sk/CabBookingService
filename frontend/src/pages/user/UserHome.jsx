import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faMapPin } from '@fortawesome/free-solid-svg-icons';
import { getFare, locationSuggestions } from '../../api/userApi';
import Suggesstions from '../../components/user/Suggesstions';
import UserSubmit from './UserSubmit';

const UserHome = () => {
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [dropSuggestions, setDropSuggestions] = useState([]);
  const [activeField, setActiveField] = useState(null);
  const [suggestionPanel, setSuggestionPanel] = useState(false)
  const [onFormSubmit, setOnFormSubmit] = useState(false)
  const [fare, setFare] = useState({})




  const handlePickupChange = async (e) => {
    const newPickup = e.target.value;
    setPickup(newPickup);
    setSuggestionPanel(true);
    try {
      const res = await locationSuggestions(pickup);
      setPickupSuggestions(res.data);
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

      const res = await getFare(pickup, drop);
      setFare(res.data);
    } catch (error) {
      console.log(error)
    }
  }



  return (
    <div className='w-full h-full flex justify-center'>
      <div className='w-full flex flex-col items-center'>
        <form onSubmit={handleSubmit} className="border  bg-white p-4 w-full rounded-lg shadow-md border-gray-300">
          <h6 className="font-bold text-lg">Find a Trip</h6>
          <br />
          <div className="flex items-center rounded p-3 mb-4 bg-yellow-50">
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
          </div>
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
        {onFormSubmit && <UserSubmit fare={fare} pickup={pickup} drop={drop} />}
      </div>
    </div>
  );
};

export default UserHome;
