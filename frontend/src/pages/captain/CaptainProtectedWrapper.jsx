import { useContext, useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router";
import { captainProfile } from "../../api/captainApi";
import { captainDataContext } from "../../context/CaptainContext";

const CaptainProtectedWrapper = ({ children }) => {

    const token = localStorage.getItem('token');
    const { captain, setCaptain } = useContext(captainDataContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        if (!token) {
            navigate('/captain-login')
            return
        }

        const fetchCaptainProfile = async () => {
            try {
                const res = await captainProfile();

                if (res.status === 200) {
                    setCaptain(res.data.captain);
                    setLoading(false);
                }
            } catch (error) {
                console.log(error);
                localStorage.removeItem('token');
                navigate('/captain-login')
            } finally {
                setLoading(false);
            }
        }

        fetchCaptainProfile();

    }, [token])


    return captain ? <Outlet /> : <Navigate to="/captain-login" />;
};

export default CaptainProtectedWrapper;
