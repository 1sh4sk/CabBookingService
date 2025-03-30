import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
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

    return <header className="flex justify-between items-center bg-color-yellow py-2 px-5 md:py-3 lg:py-4 sm:px-8">
        <div className="flex items-center gap-2">
            <img src="/src/assets/logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
            <h1 className='font-bold text-white text-lg md:text-xl'>TripMate</h1>
        </div>
        <FontAwesomeIcon icon={faRightFromBracket} className="text-white text-2xl lg:text-3xl  cursor-pointer" onClick={handleLogout} />
    </header>
        ;
};
export default CaptainHeader;
