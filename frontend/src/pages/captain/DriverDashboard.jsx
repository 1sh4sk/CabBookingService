import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faRoute } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useRef, useState } from "react";
import { captainDataContext } from "../../context/CaptainContext";
import { SocketContext } from "../../context/SocketContext";
import Confirm from "./Confirm";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import RideRequest from "./RideRequest";
import { confirmRideApi } from "../../api/rideApi";

const DriverDashboard = () => {

  const [ridePopupPanel, setRidePopupPanel] = useState(false)
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false)
  const [ride, setRide] = useState(null);
  const ridePopupPanelRef = useRef(null)

  const { captain } = useContext(captainDataContext)
  const { sendMessage, receiveMessage } = useContext(SocketContext);


  useEffect(() => {
    if (!captain) return;

    sendMessage("message", { userType: "captain", userId: captain._id });

    const updateLocation = () => {

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {

          console.log(captain._id, position.coords.latitude, position.coords.longitude)

          sendMessage("update-location-captain", {
            userId: captain._id,
            location: {
              ltd: position.coords.latitude,
              lng: position.coords.longitude
            },
          })
        })
      }
    }


    const locationInterval = setInterval(updateLocation, 10000);
    updateLocation();

    return () => clearInterval(locationInterval)
  }, [captain])


  receiveMessage("new-ride", (data) => {
    console.log(data);
    setRide(data);
    setRidePopupPanel(true);
  });

  useGSAP(function () {
    if (ridePopupPanel) {
      gsap.to(ridePopupPanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(ridePopupPanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [ridePopupPanel])


  async function confirmRide() {

    const res = await confirmRideApi(ride._id)
    setRidePopupPanel(false)
    setConfirmRidePopupPanel(true)

  }

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
            <p className="font-semibold text-sm capitalize">{captain?.fullname?.firstname} {captain?.fullname?.lastname}</p>
            <p className="text-gray-500 text-sm capitalize">{captain?.vehicle?.color} {captain?.vehicle?.vehiclename}</p>
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

      <div ref={ridePopupPanelRef} className='fixed w-[30%] rounded-xl z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
        <RideRequest
          ride={ride}
          setRidePopupPanel={setRidePopupPanel}
          setConfirmRidePopupPanel={setConfirmRidePopupPanel}
          confirmRide={confirmRide}

        />
      </div>

      <div ref={ridePopupPanelRef} className='fixed w-[30%] rounded-xl z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
        <Confirm
          ride={ride}
          confirmRidePopupPanel={confirmRidePopupPanel}
          setConfirmRidePopupPanel={setConfirmRidePopupPanel}
          confirmRide={confirmRide}
        />
      </div>

    </div>



  );
};

export default DriverDashboard;
