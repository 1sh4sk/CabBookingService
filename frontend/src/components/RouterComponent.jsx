import { Routes, Route } from "react-router";
import { DriverDetail, Home, Registeruser, UserDriver, UserHome, UserLogin, UserSelect } from "../pages/user";
import { CaptainLogin, Captainregister } from "../pages/captain";

const RouterComponent = () => {
    return <div>
        <Routes>
            <Route path="/" element={<Home />} />

            {/* user routes */}
            <Route path="/login" element={<UserLogin />} />
            <Route path="/register" element={<Registeruser />} />
            <Route path="/home" element={<UserHome />} />
            <Route path="/looking-for-driver" element={<UserDriver />} />
            <Route path="/driver-detail" element={<DriverDetail />} />
            <Route path="/confirm-ride" element={<UserSelect />} />

            {/* captain routes */}
            <Route path="/captain-register" element={<Captainregister />} />
            <Route path="/captain-login" element={<CaptainLogin />} />
        </Routes>
    </div>;
};
export default RouterComponent;
