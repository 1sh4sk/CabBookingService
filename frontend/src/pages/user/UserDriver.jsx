import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCircleUser, faMapPin, faWallet } from '@fortawesome/free-solid-svg-icons';
import MapComponent from './MapComponent';
import { useLocation } from 'react-router';

const UserDriver = () => {

  const location = useLocation();
  const { rideType, pickup, drop, price, image } = location.state || {};

  return (
    // <div className='w-full'>
    //   {/* Main Content */}
    //   <div className="w-full flex flex-col-reverse md:flex-col lg:flex-row gap-6 p-4">
    //     {/* Column 1 */}
    //     <div className="w-full lg:w-1/2 flex flex-col p-4 bg-white">
    //       <div className="ml-4 md:ml-6 lg:ml-10 mr-4 md:mr-6 lg:mr-10">
    //         <h6 className="font-bold text-lg md:text-xl lg:text-2xl">Looking for a Driver</h6>
    //         <div className='flex items-center justify-center mt-4'>
    //           <img
    //             src="https://s3-alpha-sig.figma.com/img/471e/2240/30bdd5878add15e1075ddbbc5ea06c7b?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MwiD3GNm7-2ha6~hQlxHAN84MV6JiRA5iLY~tnDAzl6cRHp-GJyp5Z1uU705ucUn1XHXVoWPcPpCF3hGu~0mAQo6l4Qid1FdTVuM8ZHgi3Xs97Lo9hPEZBukkQV-dLJ9Mk1FSnrjF3~8NRHGNgbBD5JvGbSyxjo7uDINXNRga2MlVFeMjH1s3e5y9ucbP0UUlpNttO1JlgK3V4Q6e8d~jJt7yjEAvrKhd3bHzuAhZRqft~pz8M-o1O4rAwH4MFQvWxuVTuAXCltyaFPg4o35HFfQr20sdj5Xg1lapmpAx6tvIGT9jpeWg1d09jsIiWBrzDixIm2wqk3lWAiHXpFRPg__"
    //             alt="Car"
    //             className="w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52"
    //           />
    //         </div>
    //       </div>

    //       <div className="mt-4 ml-4 md:ml-6 lg:ml-10 mr-4 md:mr-6 lg:mr-10">
    //         <div className='flex items-center p-4 gap-5'>
    //           <FontAwesomeIcon icon={faMapMarkerAlt} className="text-yellow-500 text-2xl md:text-3xl lg:text-4xl" />
    //           <h1 className='font-bold text-base md:text-lg lg:text-xl'>112/17 A <br /> <span className='text-gray-500 font-thin'>Example street, area, state</span></h1>
    //         </div>
    //         <hr />
    //         <div className='flex items-center p-4 gap-5'>
    //           <FontAwesomeIcon icon={faMapPin} className="text-yellow-500 text-2xl md:text-3xl lg:text-4xl" />
    //           <h1 className='font-bold text-base md:text-lg lg:text-xl'>112/17 A <br /> <span className='text-gray-500 font-thin'>Example street, area, state</span></h1>
    //         </div>
    //         <hr />
    //         <div className='flex items-center p-4 gap-5'>
    //           <FontAwesomeIcon icon={faWallet} className="text-yellow-500 text-2xl md:text-3xl lg:text-4xl" />
    //           <h1 className='font-bold text-base md:text-lg lg:text-xl'>₹445<br /> <span className='text-gray-500 font-thin'>Cash</span></h1>
    //         </div>
    //         <hr />
    //       </div>
    //     </div>

    //   </div>
    // </div>

    <div div className="w-full h-full flex items-center flex-col bg-white" >
      <h6 className="w-full font-bold text-lg text-left">Looking for a driver</h6>
      <div className='w-full flex flex-col items-center justify-center'>
        <div className={`flex flex-col items-center justify-center ${rideType === "TripMate Bike" ? 'lg:w-40 lg:h-40 mt-4' : 'lg:w-64 lg:h-64'} -mt-10 sm:w-40 sm:h-40 md:w-56 md:h-56 overflow-hidden`}>
          <img
            src={image}
            alt="Car"
            className={`w-full h-full object-cover ${rideType === "TripMate Bike" ? 'object-contain' : 'object-cover'} `}
          />
        </div>
        <p className={` font-bold font-epilogue text-color-yellow  ${rideType === "TripMate Bike" ? 'mt-3' : '-mt-10'}`}>{rideType}</p>
      </div>

      {/* Ride Details */}
      <div className="w-full space-y-4 mt-7">
        <div className='flex items-center gap-4 p-1'>
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-yellow-500 text-xl sm:text-2xl" />
          <div>
            {/* <h1 className='font-bold text-sm sm:text-base'>112/17 A</h1> */}
            <span className='text-gray-500 text-xs sm:text-sm'>{pickup}</span>
          </div>
        </div>
        <hr />
        <div className='flex items-center gap-4 p-1'>
          <FontAwesomeIcon icon={faMapPin} className="text-yellow-500 text-xl sm:text-2xl" />
          <div>
            {/* <h1 className='font-bold text-sm sm:text-base'>112/17 A</h1> */}
            <span className='text-gray-500 text-xs sm:text-sm'>{drop}</span>
          </div>
        </div>
        <hr />
        <div className='flex items-center gap-4 p-1'>
          <FontAwesomeIcon icon={faWallet} className="text-yellow-500 text-xl sm:text-2xl" />
          <div>
            <h1 className='font-bold text-sm sm:text-base'>₹{price}</h1>
            <span className='text-gray-500 text-xs sm:text-sm'>Cash</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default UserDriver;
