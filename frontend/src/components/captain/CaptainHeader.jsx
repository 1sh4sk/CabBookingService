import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
import { toast } from 'react-toastify'

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

    return <header className="flex justify-between items-center bg-black md:bg-[#F7B401] p-4">
        <div className="flex items-center gap-3">
            <img src="/src/assets/logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
            <h1 className='font-bold text-white text-lg md:text-xl'>TripMate</h1>
        </div>
        <FontAwesomeIcon icon={faCircleUser} className="text-white text-3xl md:text-4xl cursor-pointer" onClick={handleLogout} />
    </header>
        ;
};
export default CaptainHeader;
