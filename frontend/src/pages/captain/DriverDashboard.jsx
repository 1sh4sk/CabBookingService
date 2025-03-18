import { FaUser, FaClock, FaRoute } from "react-icons/fa";

const DriverDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-yellow-500 p-4 flex justify-between items-center">
        <h1 className="text-white text-lg font-bold">LOGO</h1>
        <FaUser className="text-white text-2xl" />
      </header>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row p-6 gap-6">
        {/* Driver Info Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full lg:w-1/3">
          <div className="flex items-center justify-between">
            {/* Driver Details */}
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/50"
                alt="Driver"
                className="w-12 h-12 rounded-full mr-3"
              />
              <div>
                <p className="font-semibold text-sm">Deeban</p>
                <p className="text-gray-500 text-sm">White Suzuki S-Presso</p>
              </div>
            </div>

            {/* Earnings */}
            <div className="text-right">
              <span className="text-black font-bold text-sm">₹225.00</span>
              <p className="text-green-500 font-bold text-xs">Earned</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 bg-yellow-500 text-white p-4 mt-4 rounded-md text-center">
            <div>
              <FaClock className="text-lg mx-auto mb-1" />
              <p className="text-sm">10.2</p>
              <p className="text-xs">Hours Online</p>
            </div>
            <div>
              <FaRoute className="text-lg mx-auto mb-1" />
              <p className="text-sm">30 KM</p>
              <p className="text-xs">Total Distance</p>
            </div>
            <div>
              <FaClock className="text-lg mx-auto mb-1" />
              <p className="text-sm">20</p>
              <p className="text-xs">Trips Completed</p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="flex-1 bg-gray-800 text-white flex items-center justify-center text-lg font-bold rounded-lg h-64 lg:h-auto">
          Map
        </div>
      </div>
    </div>
  );
};

export default DriverDashboard;
