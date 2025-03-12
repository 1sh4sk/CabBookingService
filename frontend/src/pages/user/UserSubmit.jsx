import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faUser, faMapPin } from '@fortawesome/free-solid-svg-icons'
import MapComponent from './MapComponent';

const UserSubmit = () => {

  return (
    <div>
      <header className="flex justify-between items-center bg-yellow-500 p-2">
        <div className="flex justify-center items-center gap-3 ml-10">
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
                <img src="https://s3-alpha-sig.figma.com/img/471e/2240/30bdd5878add15e1075ddbbc5ea06c7b?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MwiD3GNm7-2ha6~hQlxHAN84MV6JiRA5iLY~tnDAzl6cRHp-GJyp5Z1uU705ucUn1XHXVoWPcPpCF3hGu~0mAQo6l4Qid1FdTVuM8ZHgi3Xs97Lo9hPEZBukkQV-dLJ9Mk1FSnrjF3~8NRHGNgbBD5JvGbSyxjo7uDINXNRga2MlVFeMjH1s3e5y9ucbP0UUlpNttO1JlgK3V4Q6e8d~jJt7yjEAvrKhd3bHzuAhZRqft~pz8M-o1O4rAwH4MFQvWxuVTuAXCltyaFPg4o35HFfQr20sdj5Xg1lapmpAx6tvIGT9jpeWg1d09jsIiWBrzDixIm2wqk3lWAiHXpFRPg__" alt="Car" className="w-12 h-12 mr-3" />
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
                <img src="https://s3-alpha-sig.figma.com/img/425a/3551/832f9c228a119c37c531896b044e95a7?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KSvIBZNs7OOlA1ghw11po70U3-Q0ttIABeP2-~vOwNf~xpsnsPmme4H9~xGWnaU-wDGoTJoG8pt7QjH3uItyohXoKEPIYpiEZ~1p~j7~9bp7-HQaE9Wpw2LEA~n7WPwq~V~6UZ8VHe0gxMr8MKxh-NKtEzHieYn5~iC03v-1ZFpCW0aYQTAnDfKBsNRxkgCU7yMR6upcYj4pcHMkulAKv3NPsPJRv8pOvdUgWNBC5AzL0Rzh6vz-7iWM6DK3Os8EtYTClGdaW2FpwAObm-Jk5Kvo4AaLVujIs9Qp0J3yx6BZSAiuq3Qx8OAgT8El76o0CUsuMbu0Ee5RWzgBevjPfg__" alt="Auto" className="w-12 h-12 mr-3" />
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