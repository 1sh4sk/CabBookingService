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

import { RouterComponent } from "./components"
import { ToastContainer } from 'react-toastify';


function App() {

  return (


    <main>
      <RouterComponent />
      <ToastContainer />
    </main>

  )
}

export default App  
