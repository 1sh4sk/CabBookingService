import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faRoute, faSuitcaseRolling } from "@fortawesome/free-solid-svg-icons";
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
  const rideConfirmPopupPanelRef = useRef(null);

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
    console.log("new ride", data);
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
        transform: 'translateY(150%)'
      })
    }
  }, [ridePopupPanel])

  useGSAP(function () {
    if (confirmRidePopupPanel) {
      gsap.to(rideConfirmPopupPanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(rideConfirmPopupPanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [confirmRidePopupPanel])


  async function confirmRide() {
    try {
      const res = await confirmRideApi({ rideId: ride._id, captainId: captain._id });
      console.log("confirm ride", res.data);
      setConfirmRidePopupPanel(true)
      setRidePopupPanel(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="p-6 lg:p-0 lg:pt-6 h-auto bg-white lg:bg-transparent rounded-2xl -mt-14 lg:mt-0 lg:rounded-none  z-10 w-full lg:w-1/2 ">
      <div className="flex items-center justify-between">
        {/* Driver Details */}
        <div className="flex items-center">
          <img
            src="/src/assets/Deeban.png"
            alt="Driver"
            className="w-12 h-12 rounded-full mr-3"
          />
          <div>
            <p className="font-semibold text-lg capitalize">{captain?.fullname?.firstname} {captain?.fullname?.lastname}</p>
            <p className="text-gray-500 text-sm capitalize">{captain?.vehicle?.color} {captain?.vehicle?.vehiclename}</p>
          </div>
        </div>

        {/* Earnings */}
        <div className="text-right">
          <span className="text-black font-bold text-sm">₹{captain.earnings}</span>
          <p className="text-green-500 font-bold text-xs">Earned</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 items-center gap-2  sm:gap-4 lg:gap-3 bg-color-yellow text-white px-5 lg:px-3 py-7 mt-5 rounded-xl text-center">
        <div>
          <FontAwesomeIcon icon={faClock} className="text-2xl sm:text-3xl lg:text-2xl mb-1" />
          <p className="text-sm sm:text-lg lg:text-sm font-semibold">10.2</p>
          <p className="text-xs sm:text-sm lg:text-xs">Hours Online</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faRoute} className="text-2xl sm:text-3xl lg:text-2xl  mb-1" />
          <p className="text-sm sm:text-lg lg:text-sm font-semibold">30 KM</p>
          <p className="text-xs sm:text-sm lg:text-xs">Total Distance</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faSuitcaseRolling} className="text-2xl sm:text-3xl lg:text-2xl mb-1" />
          <p className="text-sm sm:text-lg lg:text-sm font-semibold">20</p>
          <p className="text-xs sm:text-sm lg:text-xs">Trips Completed</p>
        </div>
      </div>

      <div ref={ridePopupPanelRef} className='fixed w-full lg:w-[35%] xl:w-[30%] rounded-3xl z-10 bottom-0 left-0 lg:left-5 xl:left-10 translate-y-full bg-white md:px-3 md:py-10 md:pt-12 py-4 px-5 '>
        <RideRequest
          ride={ride}
          setRidePopupPanel={setRidePopupPanel}
          setConfirmRidePopupPanel={setConfirmRidePopupPanel}
          confirmRide={confirmRide}

        />
      </div>

      <div ref={rideConfirmPopupPanelRef} className='fixed w-full lg:w-[35%] xl:w-[30%] rounded-3xl z-10 bottom-0  left-0 lg:left-5 xl:left-10 translate-y-[150%] bg-white px-4 py-4 lg:px-3 lg:py-10 lg:pt-12 '>
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
