import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faShieldAlt, faPhone, faMapMarkerAlt, faLocationArrow, faWallet, faMapPin,faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import MapComponent from './MapComponent'

const DriverDetail = () => {
  return (
    <div>
      {/* header */}
      <header className='flex justify-between items-center bg-yellow-500 p-2'>
        <div className="flex justify-center items-center gap-3 ml-10">
          <img src="/src/assets/logo.png" alt="Logo" className="w-15 h-15 rounded-full" />
          <h1 className='font-bold text-white text-xl'>TripMate</h1>
        </div>
        <FontAwesomeIcon icon={faUser} className="text-white text-2xl cursor-pointer mr-10" />
      </header>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
         {/* Column1 */}
        <div className=' mb-10 p-4'>
          {/* driver */}
          <div className=" flex mt-4 ml-60 mr-5 gap-3">
          <div className="flex items-center gap-4 relative">
            <img src="https://images.pexels.com/photos/5835588/pexels-photo-5835588.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Driver" className="w-14 h-14 ml-5 rounded-full absolute" />
            <img src="https://s3-alpha-sig.figma.com/img/471e/2240/30bdd5878add15e1075ddbbc5ea06c7b?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MwiD3GNm7-2ha6~hQlxHAN84MV6JiRA5iLY~tnDAzl6cRHp-GJyp5Z1uU705ucUn1XHXVoWPcPpCF3hGu~0mAQo6l4Qid1FdTVuM8ZHgi3Xs97Lo9hPEZBukkQV-dLJ9Mk1FSnrjF3~8NRHGNgbBD5JvGbSyxjo7uDINXNRga2MlVFeMjH1s3e5y9ucbP0UUlpNttO1JlgK3V4Q6e8d~jJt7yjEAvrKhd3bHzuAhZRqft~pz8M-o1O4rAwH4MFQvWxuVTuAXCltyaFPg4o35HFfQr20sdj5Xg1lapmpAx6tvIGT9jpeWg1d09jsIiWBrzDixIm2wqk3lWAiHXpFRPg__" alt="Car" className="w-15 h-15 rounded-full ml-15 bg-gray-100" />
          </div>
          <div><h6 className="font-bold">Manoj Kumar</h6>
          <h2 className="text-xl font-bold">TN23A1234</h2>
          <p className="text-gray-500">White Suzuki S-presso</p>
          <p className="text-yellow-500 font-bold">⭐ 4.5</p>
          </div>
          </div>
          <br/>
          <div className="ml-60 mr-5">
            <div className="flex items-center w-full mt-3 border rounded bg-gray-100 p-2">
              <input 
                type="text" 
                placeholder="Send a message to the driver" 
                className="w-full bg-gray-100 focus:outline-none" 
              />
              <FontAwesomeIcon icon={faPaperPlane} className="text-gray-500 text-xl cursor-pointer ml-2" />
             </div>
          </div>


         <br/>
          {/* details */}
          <div className='mt-4 ml-60 mr-5 flex justify-around '>
          <button className="flex flex-col items-center">
              <div className="bg-yellow-100 rounded-full p-3 flex items-center justify-center">
                <FontAwesomeIcon icon={faShieldAlt} className="text-yellow-500 text-2xl" />
              </div>
              <span className="text-sm font-bold">Safety</span>
            </button>
            <button className="flex flex-col items-center">
              <div className="bg-yellow-100 rounded-full p-3 flex items-center justify-center">
                <FontAwesomeIcon icon={faLocationArrow} className="text-yellow-500 text-2xl" />
              </div>
              <span className="text-sm font-bold">Location share</span>
            </button>
            <button className="flex flex-col items-center">
              <div className="bg-yellow-100 rounded-full p-3 flex items-center justify-center">
                <FontAwesomeIcon icon={faPhone} className="text-yellow-500 text-2xl" />
              </div>
              <span className="text-sm font-bold">Call driver</span>
            </button>

          </div>
          <br/>
          {/*  location details */}
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
          <button className='w-2/3 p-2 mt-4 rounded bg-green-500 text-white font-bold  ml-58 mr-5'>
            Make a Payment
          </button>
        </div>
        {/* Column2 */}
        <div className=' flex items-center justify-center mt-10 mb-10 mr-40 bg-gray-800 text-white font-bold h-150 rounded-lg'>
          <MapComponent/>
        </div>
      </div>
    </div>
  )
}

export default DriverDetail