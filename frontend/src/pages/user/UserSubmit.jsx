import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Premier, TripmateAuto, TripmateBike, TripmateGo } from '../../assets';

const UserSubmit = ({ fare, pickup, drop }) => {
  const navigate = useNavigate();

  const rides = [
    { name: 'TripMate Bike', image: TripmateBike, price: fare.tripmatebike },
    { name: 'TripMate GO', image: TripmateGo, price: fare.tripmatego },
    { name: 'TripMate Auto', image: TripmateAuto, price: fare.tripmateauto },
    { name: 'Premier', image: Premier, price: fare.premier },
  ];

  const handleRideSelection = (rideType, price, image) => {
    navigate('/confirm-ride', {
      state: { rideType, pickup, drop, price, image },
    });
  };

  return (
    <div className='w-full flex justify-center overflow-y-scroll'>
      <div className="px-7 lg:mt-4 lg:p-4 w-full max-w-md">
        <h6 className="font-bold text-lg">Choose Your Ride</h6>

        {rides.map((ride) => (
          <button
            key={ride.name}
            className="border p-4 rounded-lg shadow-md mt-2 flex justify-between items-center w-full hover:border-yellow-500 transition-colors"
            onClick={() => handleRideSelection(ride.name, ride.price, ride.image)}
          >
            <div className="flex items-center">
              <img
                src={ride.image}
                alt={ride.name}
                className="w-10 h-10 md:w-12 md:h-12 mr-3"
              />
              <div>
                <p className="font-bold text-sm md:text-base text-left">{ride.name}</p>
                <p className="text-xs md:text-sm text-gray-500">6 min away • 5:27 PM</p>
                {/* <p className="text-xs text-gray-400">Affordable compact rides</p> */}
              </div>
            </div>
            <p className="font-bold text-sm md:text-base">₹{ride.price}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserSubmit;
