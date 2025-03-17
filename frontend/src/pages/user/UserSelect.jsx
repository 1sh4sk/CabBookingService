import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCircleUser, faMapPin, faWallet } from '@fortawesome/free-solid-svg-icons';
import MapComponent from './MapComponent';

const UserSelect = () => {
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

      {/* Main Content */}
      <div className="flex flex-col-reverse md:flex-col lg:flex-row gap-6 p-4">
        {/* Left Column */}
        <div className="w-full lg:w-1/2 flex flex-col p-4 bg-white rounded-lg shadow-md">
          <h6 className="font-bold text-lg text-center">Confirm your Ride</h6>
          <div className='flex justify-center mt-4'>
            <img 
              src="https://s3-alpha-sig.figma.com/img/471e/2240/30bdd5878add15e1075ddbbc5ea06c7b?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MwiD3GNm7-2ha6~hQlxHAN84MV6JiRA5iLY~tnDAzl6cRHp-GJyp5Z1uU705ucUn1XHXVoWPcPpCF3hGu~0mAQo6l4Qid1FdTVuM8ZHgi3Xs97Lo9hPEZBukkQV-dLJ9Mk1FSnrjF3~8NRHGNgbBD5JvGbSyxjo7uDINXNRga2MlVFeMjH1s3e5y9ucbP0UUlpNttO1JlgK3V4Q6e8d~jJt7yjEAvrKhd3bHzuAhZRqft~pz8M-o1O4rAwH4MFQvWxuVTuAXCltyaFPg4o35HFfQr20sdj5Xg1lapmpAx6tvIGT9jpeWg1d09jsIiWBrzDixIm2wqk3lWAiHXpFRPg__" 
              alt="Car" 
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56"
            />
          </div>
          
          {/* Ride Details */}
          <div className="mt-6 space-y-4">
            <div className='flex items-center gap-4 p-1'>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-yellow-500 text-xl sm:text-2xl" />
              <div>
                <h1 className='font-bold text-sm sm:text-base'>112/17 A</h1>
                <span className='text-gray-500 text-xs sm:text-sm'>example street, area, state</span>
              </div>
            </div>
            <hr/>
            <div className='flex items-center gap-4 p-1'>
              <FontAwesomeIcon icon={faMapPin} className="text-yellow-500 text-xl sm:text-2xl" />
              <div>
                <h1 className='font-bold text-sm sm:text-base'>112/17 A</h1>
                <span className='text-gray-500 text-xs sm:text-sm'>example street, area, state</span>
              </div>
            </div>
            <hr/>
            <div className='flex items-center gap-4 p-1'>
              <FontAwesomeIcon icon={faWallet} className="text-yellow-500 text-xl sm:text-2xl" />
              <div>
                <h1 className='font-bold text-sm sm:text-base'>₹445</h1>
                <span className='text-gray-500 text-xs sm:text-sm'>Cash</span>
              </div>
            </div>
          </div>

          {/* Request Ride Button */}
          <div className='mt-6 flex justify-center'>
            <button className='w-full sm:w-2/3 p-3 font-bold bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors'>
              Request a ride
            </button>
          </div>
        </div>

        {/* Right Column (Map) */}
        <div className="w-full md:w-full lg:w-1/2 flex items-center justify-center bg-gray-800 text-white font-bold h-72 md:h-96 lg:h-auto rounded-lg">
          <MapComponent />
        </div>
      </div>
    </div>
  );
};

export default UserSelect;