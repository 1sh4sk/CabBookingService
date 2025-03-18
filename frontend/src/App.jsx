import Footer from "./components/Footer"
import HowItWorks from "./components/GetStarted"
import Header from "./components/Header"
import ReviewTemplate from "./components/ReviewTemplate"
import TaxiTemplate from "./components/TaxiTemplate"
import GetStarted from "./components/GetStarted"
import Captainregister from "./pages/captain/Captainregister"

import Registeruser from "./pages/user/Registeruser"
import DriverDashboard from "./pages/captain/DriverDashboard"
import RideRequest from "./pages/captain/RideRequest"
import Confirm from "./pages/captain/Confirm"
import FinishRide from "./pages/captain/FinishRide"


function App() {

  return (
    <>
    
       {/* <Registeruser/>   */}
       {/* <Captainregister />   */}
       {/* <TaxiTemplate/>   */}
       {/* <ReviewTemplate/> */}
        {/* <GetStarted />  */}
         <DriverDashboard/>  
           <RideRequest/>    
         <Confirm/>   
         <FinishRide/>  
     
    </>
  )
}

export default App  
