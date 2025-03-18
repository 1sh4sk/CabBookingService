import { Navigate, Outlet } from "react-router";

const CaptainProtectedWrapper = () => {

    const token = localStorage.getItem('token');

    return token ? <Outlet /> : <Navigate to="/captain-login" />;
};
export default CaptainProtectedWrapper;
