import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faUser, faMapPin , faWallet } from '@fortawesome/free-solid-svg-icons'
import MapComponent from './MapComponent'

const UserDriver = () => {
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
              <div className="ml-60 mr-5">
                <h6 className="font-bold">Looking for a Driver</h6>
                <div className='flex items-center justify-center'>
                    <img src="https://s3-alpha-sig.figma.com/img/471e/2240/30bdd5878add15e1075ddbbc5ea06c7b?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MwiD3GNm7-2ha6~hQlxHAN84MV6JiRA5iLY~tnDAzl6cRHp-GJyp5Z1uU705ucUn1XHXVoWPcPpCF3hGu~0mAQo6l4Qid1FdTVuM8ZHgi3Xs97Lo9hPEZBukkQV-dLJ9Mk1FSnrjF3~8NRHGNgbBD5JvGbSyxjo7uDINXNRga2MlVFeMjH1s3e5y9ucbP0UUlpNttO1JlgK3V4Q6e8d~jJt7yjEAvrKhd3bHzuAhZRqft~pz8M-o1O4rAwH4MFQvWxuVTuAXCltyaFPg4o35HFfQr20sdj5Xg1lapmpAx6tvIGT9jpeWg1d09jsIiWBrzDixIm2wqk3lWAiHXpFRPg__" alt="Car" className="w-50 h-50" />
                </div>
              </div>
              <div className="mt-4 ml-60 mr-5">
               <div className='flex items-center p-4 gap-5'>
                 <FontAwesomeIcon icon={faMapMarkerAlt} className="text-yellow-500 text-3xl" />
                 <h1 className='font-bold'>112/17 A <br/> <span className='text-gray-500 font-thin'>example street, area, state</span></h1>
               </div>
               <hr/>
               <div>
               <div className='flex items-center p-4 gap-5'>
                 <FontAwesomeIcon icon={faMapPin} className="mr-2 text-yellow-500 text-3xl" />
                 <h1 className='font-bold'>112/17 A <br/> <span className='text-gray-500 font-thin'>example street, area, state</span></h1>
               </div>
               </div>
               <hr/>
               <div>
               <div className='flex items-center p-4 gap-5'>
                <FontAwesomeIcon icon={faWallet} className=" mr-2 text-yellow-500 text-3xl" />
                 <h1 className='font-bold'>₹445<br/> <span className='text-gray-500 font-thin'>cash</span></h1>
               </div>
               </div>
               <hr/>
              </div>
              <br/>
            </div>
    
            {/* Column 2 */}
            <div className="flex items-center justify-center mt-10 mb-10 mr-40 bg-gray-800 text-white font-bold h-140 rounded-lg">
              <MapComponent/>
            </div>
          </div>
    </div>
    
  )
}

export default UserDriver
