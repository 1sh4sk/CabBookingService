import { Routes, Route } from "react-router";
import { DriverDetail, Home, MakePayment, Registeruser, UserDriver, UserHome, UserHomeLayout, UserLogin, UserProtectedWrapper, UserSelect } from "../pages/user";
import { CaptainLogin, CaptainProtectedWrapper, Captainregister, DriverDashboard, FinishRide } from "../pages/captain";
import CaptainHomeLayout from "../pages/captain/CaptainHomeLayout";
import PaymentSuccess from "../pages/PaymentSuccess";

const RouterComponent = () => {
    return <div>
        <Routes>
            <Route path="/" element={<Home />} />

            {/* user routes */}
            <Route path="/login" element={<UserLogin />} />
            <Route path="/register" element={<Registeruser />} />

            <Route element={<UserProtectedWrapper />} >
                <Route element={<UserHomeLayout />} >
                    <Route path="/home" element={<UserHome />} />
                    <Route path="/confirm-ride" element={<UserSelect />} />
                    <Route path="/looking-for-driver" element={<UserDriver />} />
                    <Route path="/driver-detail" element={<DriverDetail />} />
                    <Route path="/make-payment" element={<MakePayment />} />
                </Route>
            </Route>

            {/* captain routes */}
            <Route path="/captain-register" element={<Captainregister />} />
            <Route path="/captain-login" element={<CaptainLogin />} />

            <Route element={<CaptainProtectedWrapper />}>
                <Route element={<CaptainHomeLayout />}>
                    <Route path="/captain-home" element={<DriverDashboard />} />
                    <Route path="/ride-complete" element={<FinishRide />} />
                </Route>
            </Route>

            <Route path="/paymentsuccess" element={<PaymentSuccess />} />

            <Route path="*" element={<h1>something went wrong!</h1>} />
        </Routes>
    </div>;
};
export default RouterComponent;
