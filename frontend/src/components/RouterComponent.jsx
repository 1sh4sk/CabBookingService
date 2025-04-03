import { Routes, Route } from "react-router";
import { DriverDetail, Home, MakePayment, Registeruser, UserDriver, UserHome, UserHomeLayout, UserLogin, UserProtectedWrapper, UserSelect } from "../pages/user";
import { CaptainApproval, CaptainLogin, CaptainProtectedWrapper, Captainregister, DriverDashboard, FinishRide } from "../pages/captain";
import CaptainHomeLayout from "../pages/captain/CaptainHomeLayout";
import PaymentSuccess from "../pages/PaymentSuccess";
import Error from "./home/Error";
import AdminLoginForm from "../pages/admin/AdminLogin";
import { AdminDashboard, AdminDashboardLayout, CaptainApprovals, ManageCaptains, ManageUsers } from "../pages/admin";
import AdminProtectedWrapper from "../pages/admin/AdminProtectedWrapper";

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
                <Route path="/approval-pending" element={<CaptainApproval />} />
            </Route>


            {/* admin routes */}
            <Route path="/admin-login" element={<AdminLoginForm />} />
            {/* <Route index path="/admin-dashboardd" element={<AdminDashboard />} /> */}
            <Route element={<AdminProtectedWrapper />}>
                <Route element={<AdminDashboardLayout />}>
                    <Route index path="/admin/dashboard" element={<AdminDashboard />} />
                    <Route path="/admin/manage-users" element={<ManageUsers />} />
                    <Route path="/admin/manage-captains" element={<ManageCaptains />} />
                    <Route path="/admin/captain-approvals" element={<CaptainApprovals />} />
                </Route>
            </Route>


            <Route path="/paymentsuccess" element={<PaymentSuccess />} />
            <Route path="*" element={<Error />} />
        </Routes>
    </div>;
};
export default RouterComponent;
