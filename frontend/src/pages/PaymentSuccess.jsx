import { useSearchParams } from "react-router";
import { useEffect, useRef } from 'react';
// import { Player } from '@lordicon/react';
// import ICON from '../../src/assets/animations/check.json'
import ICON from '../../src/assets/animations/check.gif'



const PaymentSuccess = () => {

    const searchQuery = useSearchParams()[0];
    const referenceNum = searchQuery.get("reference")



    // const playerRef = useRef < Player > (null);

    // useEffect(() => {
    //     playerRef.current?.playFromBeginning();
    // }, [])


    return <div className="w-screen h-screen flex items-center flex-col justify-center bg-color-yellow/80 gap-2">

        {/* <Player
            ref={playerRef}
            icon={ICON}
        /> */}

        <div className="w-[150px] h-[150px] mb-10">
            <img src={ICON} alt="payment success" className="w-full h-full object-cover" />
        </div>

        <h1 className="font-epilogue font-bold text-3xl text-white">Payment Successful</h1>
        <p className="text-green-700 ">Lets see again in your next ride!</p>
        <p className="text-[10px] mt-4">Reference No: {referenceNum}</p>
    </div>;
};
export default PaymentSuccess;
