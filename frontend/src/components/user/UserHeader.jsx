import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logoutUser } from "../../api/userApi";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";

const UserHeader = () => {

    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            const res = await logoutUser();
            localStorage.removeItem('token');
            navigate('/login');
            toast.success('Logged out successfully', { icon: 'success' });
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong');
        }
    }

    return <header className=" lg:static h-15 md:h-20 w-full fixed top-0 left-0 z-20 flex  justify-between items-center  bg-color-yellow py-2 px-5 md:py-3 lg:py-4 sm:px-8">

        <Link to="/home">
            <div className="flex items-center gap-3">
                <h1 className='font-epilogue font-bold text-white text-lg md:text-2xl'>TripMate</h1>
            </div>
        </Link>
        <FontAwesomeIcon icon={faRightFromBracket} className="text-white text-2xl lg:text-3xl cursor-pointer" onClick={handleLogout} />
    </header>;
};
export default UserHeader;
