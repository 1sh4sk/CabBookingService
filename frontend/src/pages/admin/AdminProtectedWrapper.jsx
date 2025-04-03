import { useContext, useEffect, useState } from "react";
import { adminDataContext } from "../../context/AdminContext";
import { Navigate, Outlet, useNavigate } from "react-router";

const AdminProtectedWrapper = ({ children }) => {

    const token = localStorage.getItem('token');
    const { admin, setAdmin } = useContext(adminDataContext);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate()


    useEffect(() => {
        if (!token) {
            navigate("/admin-login");
            return;
        }

        // const fetchUserProfile = async () => {
        //     try {
        //         const res = await userProfile();
        //         if (res.status === 200) {
        //             setUser(res.data.user);
        //             setIsLoading(false);
        //         }
        //     } catch (error) {
        //         console.log(error)
        //         localStorage.removeItem('token')
        //         navigate('/login')
        //     } finally {
        //         setIsLoading(false); // Stop loading state
        //     }
        // }

        // fetchUserProfile();


    }, [token])


    return admin ? <Outlet /> : <Navigate to="/admin-login" />;
};
export default AdminProtectedWrapper;
