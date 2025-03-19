import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCircleUser, faMapPin } from '@fortawesome/free-solid-svg-icons';
import MapComponent from './MapComponent';

const UserSubmit = () => {
  return (
    <div className='w-full flex justify-center'>
      {/* Header */}
      {/* <header className="flex justify-between items-center bg-black md:bg-[#F7B401] p-4">

        <div className="flex items-center gap-3">
          <img src="/src/assets/logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
          <h1 className='font-bold text-white text-lg md:text-xl'>TripMate</h1>
        </div>
        <FontAwesomeIcon icon={faCircleUser} className="text-white text-3xl md:text-4xl cursor-pointer" />
      </header> */}

      {/* <div className="flex flex-col-reverse md:flex-col lg:flex-row gap-6 p-4"> */}


      {/* <div className="w-full lg:w-1/2 flex flex-col items-center p-4"> */}

      {/* <div className="border bg-white p-4 w-full max-w-md rounded-lg shadow-md border-gray-300">
            <h6 className="font-bold text-lg">Find a Trip</h6>
            <br />
            <div className="flex items-center rounded p-3 mb-4 bg-yellow-50">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-yellow-500" />
              <input
                type="text"
                className="w-full outline-none bg-transparent"
                placeholder="Pickup location here"
              />
            </div>
            <div className="flex items-center rounded p-3 mb-4 bg-yellow-50">
              <FontAwesomeIcon icon={faMapPin} className="mr-2 text-yellow-500" />
              <input
                type="text"
                className="w-full outline-none bg-transparent"
                placeholder="Drop location here"
              />
            </div>
            <button
              type="button"
              className='w-full p-2 rounded mt-1 mb-4 font-bold bg-yellow-500 text-white hover:bg-yellow-600 transition-colors'>
              Search
            </button>
          </div> */}

      {/* Choose Your Ride Section */}
      <div className="mt-4 p-4 w-full max-w-md">
        <h6 className="font-bold text-lg">Choose Your Ride</h6>
        <button className="border p-4 rounded-lg shadow-md mt-2 flex justify-between items-center w-full hover:border-yellow-500 transition-colors">
          <div className="flex items-center">
            <img
              src="https://s3-alpha-sig.figma.com/img/471e/2240/30bdd5878add15e1075ddbbc5ea06c7b?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MwiD3GNm7-2ha6~hQlxHAN84MV6JiRA5iLY~tnDAzl6cRHp-GJyp5Z1uU705ucUn1XHXVoWPcPpCF3hGu~0mAQo6l4Qid1FdTVuM8ZHgi3Xs97Lo9hPEZBukkQV-dLJ9Mk1FSnrjF3~8NRHGNgbBD5JvGbSyxjo7uDINXNRga2MlVFeMjH1s3e5y9ucbP0UUlpNttO1JlgK3V4Q6e8d~jJt7yjEAvrKhd3bHzuAhZRqft~pz8M-o1O4rAwH4MFQvWxuVTuAXCltyaFPg4o35HFfQr20sdj5Xg1lapmpAx6tvIGT9jpeWg1d09jsIiWBrzDixIm2wqk3lWAiHXpFRPg__"
              alt="Car"
              className="w-10 h-10 md:w-12 md:h-12 mr-3"
            />
            <div>
              <p className="font-bold text-sm md:text-base">TripMate GO</p>
              <p className="text-xs md:text-sm text-gray-500">6 min away • 5:27 PM</p>
              <p className="text-xs text-gray-400">Affordable compact rides</p>
            </div>
          </div>
          <p className="font-bold text-sm md:text-base">₹445</p>
        </button>

        <button className="border p-4 rounded-lg shadow-md mt-2 flex justify-between items-center w-full hover:border-yellow-500 transition-colors">
          <div className="flex items-center">
            <img
              src="https://s3-alpha-sig.figma.com/img/425a/3551/832f9c228a119c37c531896b044e95a7?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KSvIBZNs7OOlA1ghw11po70U3-Q0ttIABeP2-~vOwNf~xpsnsPmme4H9~xGWnaU-wDGoTJoG8pt7QjH3uItyohXoKEPIYpiEZ~1p~j7~9bp7-HQaE9Wpw2LEA~n7WPwq~V~6UZ8VHe0gxMr8MKxh-NKtEzHieYn5~iC03v-1ZFpCW0aYQTAnDfKBsNRxkgCU7yMR6upcYj4pcHMkulAKv3NPsPJRv8pOvdUgWNBC5AzL0Rzh6vz-7iWM6DK3Os8EtYTClGdaW2FpwAObm-Jk5Kvo4AaLVujIs9Qp0J3yx6BZSAiuq3Qx8OAgT8El76o0CUsuMbu0Ee5RWzgBevjPfg__"
              alt="Auto"
              className="w-10 h-10 md:w-12 md:h-12 mr-3"
            />
            <div>
              <p className="font-bold text-sm md:text-base">TripMate Auto</p>
              <p className="text-xs md:text-sm text-gray-500">6 min away • 5:27 PM</p>
              <p className="text-xs text-gray-400">Affordable compact rides</p>
            </div>
          </div>
          <p className="font-bold text-sm md:text-base">₹254</p>
        </button>

        <button className="w-full p-2 mt-4 bg-black text-white rounded-lg font-bold hover:bg-gray-900 transition-colors">
          Request a ride
        </button>
      </div>
      {/* </div> */}

      {/* Column 2 - Map Section */}
      {/* <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-800 text-white font-bold h-72 md:h-96 lg:h-150 rounded-lg">
          <MapComponent />
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default UserSubmit;