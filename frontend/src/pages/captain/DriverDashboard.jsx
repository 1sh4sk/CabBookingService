import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faRoute } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { captainDataContext } from "../../context/CaptainContext";
import CaptainHeader from "../../components/captain/captainHeader";

const DriverDashboard = () => {


  const { captain } = useContext(captainDataContext)


  console.log("captain", captain)



  return (
    <div className="p-6 w-full lg:w-1/2">
      <div className="flex items-center justify-between">
        {/* Driver Details */}
        <div className="flex items-center">
          <img
            src="/src/assets/Deeban.png"
            alt="Driver"
            className="w-12 h-12 rounded-full mr-3"
          />
          <div>
            <p className="font-semibold text-sm">{captain.fullname.firstname} {captain.fullname.lastname}</p>
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
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-color-yellow text-white p-5 py-7 mt-4 rounded-md text-center">
        <div>
          <FontAwesomeIcon icon={faClock} className="text-lg mx-auto mb-1" />
          <p className="text-sm">10.2</p>
          <p className="text-xs">Hours Online</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faRoute} className="text-lg mx-auto mb-1" />
          <p className="text-sm">30 KM</p>
          <p className="text-xs">Total Distance</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faClock} className="text-lg mx-auto mb-1" />
          <p className="text-sm">20</p>
          <p className="text-xs">Trips Completed</p>
        </div>
      </div>
    </div>


  );
};

export default DriverDashboard;
