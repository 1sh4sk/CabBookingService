import { useContext, useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router";
import { userProfile } from "../../api/userApi";
import { userDataContext } from "../../context/UserContext";

const UserProtectedWrapper = ({ children }) => {

    const token = localStorage.getItem('token');
    const { user, setUser } = useContext(userDataContext);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate()

    useEffect(() => {
        if (!token) {
            navigate("/login");
            return;
        }

        const fetchUserProfile = async () => {
            try {
                const res = await userProfile();
                if (res.status === 200) {
                    setUser(res.data.user);
                    setIsLoading(false);
                }
            } catch (error) {
                console.log(error)
                localStorage.removeItem('token')
                navigate('/login')
            } finally {
                setIsLoading(false); // Stop loading state
            }
        }

        fetchUserProfile();


    }, [token])


    return user ? <Outlet /> : <Navigate to="/login" />;
};
export default UserProtectedWrapper;
