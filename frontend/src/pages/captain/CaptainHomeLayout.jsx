import { Outlet } from "react-router";
import CaptainHeader from "../../components/captain/CaptainHeader";
import { LiveTracking } from "../../components";

const CaptainHomeLayout = () => {
    return <div className="h-screen w-screen flex flex-col bg-gray-100">
        {/* Header */}

        <CaptainHeader />
        <div className="w-full h-full flex flex-col-reverse lg:flex-row gap-6 lg:p-4">
            <Outlet />


            {/* Map Section */}
            <div className="w-full flex items-center justify-center bg-gray-800 text-white font-bold h-[80%] lg:h-150 rounded-xl overflow-hidden ">
                <LiveTracking />
            </div>
        </div>


    </div>;
};
export default CaptainHomeLayout;
