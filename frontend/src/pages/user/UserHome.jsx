import React, { useContext, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faMapMarkerAlt, faMapPin } from '@fortawesome/free-solid-svg-icons';
import { getFare, locationSuggestions } from '../../api/userApi';
import Suggesstions from '../../components/user/Suggesstions';
import UserSubmit from './UserSubmit';
import { SocketContext } from '../../context/SocketContext';
import { userDataContext } from '../../context/UserContext';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const UserHome = () => {
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [dropSuggestions, setDropSuggestions] = useState([]);
  const [activeField, setActiveField] = useState(null);
  const [suggestionPanel, setSuggestionPanel] = useState(false)
  const [onFormSubmit, setOnFormSubmit] = useState(false)
  const [mobileForm, setMobileForm] = useState(false);
  const [laptopForm, setLaptopForm] = useState(false);
  const [fare, setFare] = useState({})

  const searchPanelRef = useRef()

  const { sendMessage, receiveMessage } = useContext(SocketContext);
  const { user } = useContext(userDataContext);

  useGSAP(function () {
    console.log("mobileForm", mobileForm)
    if (laptopForm) {
      gsap.to(searchPanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(searchPanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [laptopForm])


  useEffect(() => {

    if (!user) return;

    sendMessage('message', { userType: "user", userId: user._id });
  }, [user])


  const handlePickupChange = async (e) => {
    console.log("mobileForm", mobileForm)
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
    console.log("mobileForm", mobileForm)
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
    <div className="w-full h-[40%] md:h-[30%] lg:h-full lg:w-2/5 flex flex-col items-center rounded-3xl lg:rounded-none -mt-14 lg:mt-0 z-1 overflow-hidden">
      <div className='w-full h-full flex justify-center'>
        <div className='w-full flex flex-col items-center'>
          <form onSubmit={handleSubmit} className=" p-8 lg:border bg-white lg:p-5 w-full lg:rounded-xl lg:shadow-md lg:border-gray-300">
            <h6 className="font-bold text-lg">Find a Trip</h6>
            <br />
            <div className="flex items-center justify-center rounded-lg p-4 mb-4 bg-color-lightgray">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-yellow-500" />
              <input
                name='pickup'
                type="text"
                className="w-full! outline-none! bg-transparent! m-0! p-0!"
                placeholder="Pickup location here"
                value={pickup}
                onChange={handlePickupChange}
                onClick={() => {
                  setActiveField('pickup')
                  setOnFormSubmit(false)
                  setLaptopForm(true)
                  setMobileForm(false)
                }}
              />
            </div>
            <div className="flex items-center justify-center rounded-lg p-4 mb-4 bg-color-lightgray">
              <FontAwesomeIcon icon={faMapPin} className="mr-2 text-yellow-500" />
              <input
                name='destination'
                type="text"
                className="w-full! outline-none! bg-transparent! m-0! p-0!"
                placeholder="Drop location here"
                value={drop}
                onChange={handleDestinationChange}
                onClick={() => {
                  setActiveField('destination')
                  setOnFormSubmit(false)
                  setLaptopForm(true)
                  setMobileForm(false)
                }}
              />
            </div>
            <button
              type="submit"
              className={`w-full p-4 rounded-lg mt-1 mb-4 font-bold ${pickup && drop ? 'bg-yellow-500 text-white' : 'bg-yellow-200 text-white cursor-not-allowed'
                }`}
              disabled={!pickup || !drop}
            >
              Find a Trip
            </button>
          </form>


          <div ref={searchPanelRef} className='translate-y-full w-full h-[85%] fixed bottom-0 left-0 bg-white rounded-3xl overflow-y-hidden lg:hidden z-10 '>
            <FontAwesomeIcon icon={faAngleDown} className='text-center w-full mt-2 text-2xl text-gray-400' onClick={() => setLaptopForm(false)} />
            <form onSubmit={handleSubmit} className="lg:hidden border p-5 border-none ">
              <h6 className="font-bold text-lg">Find a Trip</h6>
              <br />
              <div className="flex items-center justify-center rounded-lg p-4 mb-4 bg-color-lightgray">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-yellow-500" />
                <input
                  name='pickup'
                  type="text"
                  className="w-full! outline-none! bg-transparent! m-0! p-0!"
                  placeholder="Pickup location here"
                  value={pickup}
                  onChange={handlePickupChange}
                  onClick={() => {
                    setActiveField('pickup')
                    setOnFormSubmit(false)
                    setMobileForm(true)
                  }}
                />
              </div>
              <div className="flex items-center justify-center rounded-lg p-4 mb-4 bg-color-lightgray">
                <FontAwesomeIcon icon={faMapPin} className="mr-2 text-yellow-500" />
                <input
                  name='destination'
                  type="text"
                  className="w-full! outline-none! bg-transparent! m-0! p-0!"
                  placeholder="Drop location here"
                  value={drop}
                  onChange={handleDestinationChange}
                  onClick={() => {
                    setActiveField('destination')
                    setOnFormSubmit(false)
                    setMobileForm(true)
                  }}
                />
              </div>
              <button
                type="submit"
                className={`w-full p-4 rounded-lg mt-1 mb-4 font-bold ${pickup && drop ? 'bg-yellow-500 text-white' : 'bg-yellow-200 text-white cursor-not-allowed'
                  }`}
                disabled={!pickup || !drop}
              >
                Find a Trip
              </button>
            </form>

            {(pickupSuggestions.length > 0 || dropSuggestions.length > 0) && suggestionPanel && mobileForm && <Suggesstions
              suggestions={activeField === 'pickup' ? pickupSuggestions : dropSuggestions}
              setPickup={setPickup}
              setDrop={setDrop}
              activeField={activeField}

            />}
            {onFormSubmit && mobileForm && <UserSubmit fare={fare} pickup={pickup} drop={drop} />}

          </div>

          {(pickupSuggestions.length > 0 || dropSuggestions.length > 0) && suggestionPanel && laptopForm && <Suggesstions
            suggestions={activeField === 'pickup' ? pickupSuggestions : dropSuggestions}
            setPickup={setPickup}
            setDrop={setDrop}
            activeField={activeField}

          />}
          {onFormSubmit && laptopForm && <UserSubmit fare={fare} pickup={pickup} drop={drop} />}

        </div>
      </div>
    </div>
  );
};

export default UserHome;
