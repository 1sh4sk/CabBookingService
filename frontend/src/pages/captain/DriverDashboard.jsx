import { FaUser, FaClock, FaRoute } from "react-icons/fa";


const  DriverDashboard=()=>{
  return (
    <div className="min-h-80 flex flex-col">
      {/* Header */}
      <header className="bg-yellow-500 p-4 flex justify-between items-center">
        <h1 className="text-white text-lg font-bold">LOGO</h1>
        <FaUser className="text-white text-2xl" />
      </header>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row h-screen p-6 gap-6">
        {/* Driver Info */}
        <div className="bg-white p-6 rounded-lg shadow-lg h-50 w-full md:w-1/3">
        <div className="flex columns">
          <div>
            <img
              src="https://via.placeholder.com/50"
              alt="Driver"
              className="w-12 h-12 rounded-full mr-4"
            />
            </div>
            <div>
              <p className="font-semibold">Deeban</p>
              <p className="text-grey">white suzuki s-persso</p>
              </div>
              <div className="relative left-30">
               <span className="text-black-500 font-bold">₹225.00</span><br />
                <p className="text-green-500 font-bold text-lg text-right-top">earned</p> 
          </div>
          </div>
           
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 bg-yellow-500 text-white p-4 mt-4 rounded-lg text-center">
            <div>
              <FaClock className="text-xl mx-auto mb-1" />
              <p className="text-sm">10.2</p>
              <p className="text-xs">Hours Online</p>
            </div>
            <div>
              <FaRoute className="text-xl mx-auto mb-1" />
              <p className="text-sm">30 KM</p>
              <p className="text-xs">Total Distance</p>
            </div>
            <div>
              <FaClock className="text-xl mx-auto mb-1" />
              <p className="text-sm">20</p>
              <p className="text-xs">Hours Online</p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="flex-1 bg-gray-800 text-white flex  h-screen items-center justify-center text-lg font-bold rounded-lg">
          Map
        </div>
      </div>
    </div>
  );
}
  export default DriverDashboard ;
 