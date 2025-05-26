import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logoutUser } from "../../api/userApi";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useState } from "react";

const UserHeader = () => {

    const navigate = useNavigate()
    const [isLoggingOut, setIsLoggingOut] = useState(false);


    const handleLogout = async () => {
        setIsLoggingOut(true);
        try {
            const res = await logoutUser();
            localStorage.removeItem('token');
            navigate('/login');
            toast.success('Logged out successfully', { icon: '✅' });
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong');
        } finally {
            setIsLoggingOut(false);
        }
    };

    return <header className=" lg:static h-15 md:h-20 w-full fixed top-0 left-0 z-20 flex  justify-between items-center  bg-color-yellow py-2 px-5 md:py-3 lg:py-4 sm:px-8">

        <Link to="/home">
            <div className="flex items-center gap-3">
                <h1 className='font-epilogue font-bold text-white text-lg md:text-2xl'>TripMate</h1>
            </div>
        </Link>
        {
            isLoggingOut ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
                <FontAwesomeIcon
                    icon={faRightFromBracket}
                    className="text-white text-2xl lg:text-3xl cursor-pointer"
                    onClick={handleLogout}
                />
            )
        }

    </header>;
};
export default UserHeader;
