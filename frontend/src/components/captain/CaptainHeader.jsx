import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router";
import { toast } from 'react-toastify'
import { logoutCaptain } from "../../api/captainApi";

const CaptainHeader = () => {

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const res = await logoutCaptain();
            if (res.status === 200) {
                localStorage.removeItem('token');
                navigate("/captain-login")
                toast.success('Logged out successfully', { icon: 'success' });

            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong');
        }
    }

    return <header className="flex justify-between items-center bg-color-yellow py-4 px-5 md:py-3 lg:py-4 sm:px-8">
        <Link to='/captain-home' className="flex items-center gap-2">
            <h1 className='font-epilogue font-bold text-white text-lg md:text-2xl'>TripMate</h1>
        </Link>
        <FontAwesomeIcon icon={faRightFromBracket} className="text-white text-2xl lg:text-3xl  cursor-pointer" onClick={handleLogout} />
    </header>
        ;
};
export default CaptainHeader;
