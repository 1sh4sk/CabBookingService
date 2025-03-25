import { Outlet } from "react-router";
import CaptainHeader from "../../components/captain/captainHeader";
import { LiveTracking } from "../../components";

const CaptainHomeLayout = () => {
    return <div className="min-h-screen flex flex-col bg-gray-100">
        {/* Header */}

        <CaptainHeader />
        <div className="flex flex-col-reverse md:flex-col lg:flex-row gap-6 p-4">
            <Outlet />


            {/* Map Section */}
            <div className="w-full flex items-center justify-center bg-gray-800 text-white font-bold h-72 md:h-96 lg:h-150 rounded-lg">
                <LiveTracking />
            </div>
        </div>


    </div>;
};
export default CaptainHomeLayout;
