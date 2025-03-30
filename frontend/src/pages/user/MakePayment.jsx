import { faLocationArrow, faMapMarkerAlt, faMapPin, faPhoneVolume, faShieldAlt, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router";
import { SocketContext } from "../../context/SocketContext";
import { checkoutApi, getKey } from "../../api/paymentApi";
import { userDataContext } from "../../context/UserContext";

const MakePayment = () => {

    const location = useLocation();
    const rideDetail = location.state || {};
    const { receiveMessage } = useContext(SocketContext);
    const { user } = useContext(userDataContext);
    const navigate = useNavigate();

    receiveMessage('ride-ended', ride => {
        navigate('/home')
    })



    const handlePaymentCheckout = async (amount) => {
        const { data: { key } } = await getKey();


        const res = await checkoutApi(amount);

        const { order } = res.data;
        // Open Razorpay Checkout
        const options = {
            key, // Replace with your Razorpay key_id
            amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: 'INR',
            name: 'user',
            description: 'Test Transaction',
            order_id: order.id, // This is the order_id created in the backend
            callback_url: 'http://localhost:7000/payment/paymentverification', // Your success URL
            prefill: {
                name: 'Gaurav Kumar',
                email: 'gaurav.kumar@example.com',
                contact: '9999999999'
            },
            theme: {
                color: '#F7B401'
            },
        };

        const razor = new window.Razorpay(options);
        razor.open()
    }

    return <div className='w-full lg:w-1/2 flex flex-col p-4 bg-white rounded-3xl lg:rounded-none -mt-14 lg:mt-0 z-10'>
        {/* Driver Info */}
        <div className="w-full flex items-center gap-4 mb-4">
            <img src="https://images.pexels.com/photos/5835588/pexels-photo-5835588.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Driver" className="w-14 h-14 rounded-full object-cover" />
            <div className='w-[90%] lg:w-full flex items-center justify-between'>
                <div>
                    <h6 className="font-bold text-base capitalize">{rideDetail?.captain?.fullname?.firstname} {rideDetail?.captain?.fullname?.lastname}</h6>
                </div>
                <div className='text-right'>
                    <h2 className="text-lg font-bold">{rideDetail?.captain?.vehicle?.plate}</h2>
                    <p className="text-gray-500 text-sm">{rideDetail?.captain?.vehicle?.vehiclename}</p>
                    <p className="text-[#F7B401] font-bold text-sm">⭐ 4.5</p>
                </div>
            </div>
        </div>

        {/* Message Input */}
        <div className="flex items-center border border-gray-200 rounded bg-gray-100 p-2">
            <input type="text" placeholder="Send a message to the driver" className="w-full bg-gray-100 focus:outline-none text-base m-0!" />
            <img src='/src/assets/Map-Arrow-Right--Streamline-Solar.svg' className='h-5 w-5' alt="Send" />
        </div>

        {/* Action Buttons */}
        <div className='flex justify-around mt-4'>
            {[{ icon: faShieldAlt, label: "Safety" }, { icon: faLocationArrow, label: "Location" }, { icon: faPhoneVolume, label: "Call" }].map(({ icon, label }) => (
                <button key={label} className="flex flex-col items-center">
                    <div className="bg-gray-100 p-4 rounded-full">
                        <FontAwesomeIcon icon={icon} className="text-[#F7B401] text-2xl" />
                    </div>
                    <span className="text-sm font-bold mt-1">{label}</span>
                </button>
            ))}
        </div>


        <div className="mt-10 space-y-3">
            <div className='flex items-center gap-4 border-b pb-2'>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#F7B401] text-2xl" />
                <h1 className='font-medium text-base'>
                    {rideDetail?.pickup}
                </h1>
            </div>
            <div className='flex items-center gap-4 border-b pb-2'>
                <FontAwesomeIcon icon={faMapPin} className="text-[#F7B401] text-2xl" />
                <h1 className='font-medium text-base'>
                    {rideDetail?.destination}
                </h1>
            </div>
            <div className='flex items-center gap-4 pb-2'>
                <FontAwesomeIcon icon={faWallet} className="text-[#F7B401] text-2xl" />
                <h1 className='font-medium text-base'>
                    ₹{rideDetail?.fare}
                </h1>
            </div>
        </div>

        {/* Payment Button */}
        <button onClick={() => handlePaymentCheckout(rideDetail?.fare)} className='w-full p-3 mt-6 rounded bg-green-500 text-white font-bold text-base'>
            Make a Payment
        </button>
    </div>;
};
export default MakePayment;
