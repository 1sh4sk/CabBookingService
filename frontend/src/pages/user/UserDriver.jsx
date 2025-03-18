import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCircleUser, faMapPin, faWallet } from '@fortawesome/free-solid-svg-icons';
import MapComponent from './MapComponent';

const UserDriver = () => {
  return (
    <div>
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
        {/* Column 1 */}
        <div className="w-full lg:w-1/2 flex flex-col p-4 bg-white">
          <div className="ml-4 md:ml-6 lg:ml-10 mr-4 md:mr-6 lg:mr-10">
            <h6 className="font-bold text-lg md:text-xl lg:text-2xl">Looking for a Driver</h6>
            <div className='flex items-center justify-center mt-4'>
              <img 
                src="https://s3-alpha-sig.figma.com/img/471e/2240/30bdd5878add15e1075ddbbc5ea06c7b?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MwiD3GNm7-2ha6~hQlxHAN84MV6JiRA5iLY~tnDAzl6cRHp-GJyp5Z1uU705ucUn1XHXVoWPcPpCF3hGu~0mAQo6l4Qid1FdTVuM8ZHgi3Xs97Lo9hPEZBukkQV-dLJ9Mk1FSnrjF3~8NRHGNgbBD5JvGbSyxjo7uDINXNRga2MlVFeMjH1s3e5y9ucbP0UUlpNttO1JlgK3V4Q6e8d~jJt7yjEAvrKhd3bHzuAhZRqft~pz8M-o1O4rAwH4MFQvWxuVTuAXCltyaFPg4o35HFfQr20sdj5Xg1lapmpAx6tvIGT9jpeWg1d09jsIiWBrzDixIm2wqk3lWAiHXpFRPg__" 
                alt="Car" 
                className="w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52"
              />
            </div>
          </div>

          <div className="mt-4 ml-4 md:ml-6 lg:ml-10 mr-4 md:mr-6 lg:mr-10">
            <div className='flex items-center p-4 gap-5'>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-yellow-500 text-2xl md:text-3xl lg:text-4xl" />
              <h1 className='font-bold text-base md:text-lg lg:text-xl'>112/17 A <br/> <span className='text-gray-500 font-thin'>Example street, area, state</span></h1>
            </div>
            <hr/>
            <div className='flex items-center p-4 gap-5'>
              <FontAwesomeIcon icon={faMapPin} className="text-yellow-500 text-2xl md:text-3xl lg:text-4xl" />
              <h1 className='font-bold text-base md:text-lg lg:text-xl'>112/17 A <br/> <span className='text-gray-500 font-thin'>Example street, area, state</span></h1>
            </div>
            <hr/>
            <div className='flex items-center p-4 gap-5'>
              <FontAwesomeIcon icon={faWallet} className="text-yellow-500 text-2xl md:text-3xl lg:text-4xl" />
              <h1 className='font-bold text-base md:text-lg lg:text-xl'>₹445<br/> <span className='text-gray-500 font-thin'>Cash</span></h1>
            </div>
            <hr/>
          </div>
        </div>

        {/* Column 2 - Map */}
        <div className="w-full md:w-full lg:w-1/2 flex items-center justify-center bg-gray-800 text-white font-bold h-72 md:h-96 lg:h-auto rounded-lg">
          <MapComponent />
        </div>
      </div>
    </div>
  );
};

export default UserDriver;
