import { Navigate, Outlet } from "react-router";

const UserProtectedWrapper = () => {

    const token = localStorage.getItem('token');
    return token ? <Outlet /> : <Navigate to="/login" />;
};
export default UserProtectedWrapper;
