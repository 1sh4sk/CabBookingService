import { Outlet } from "react-router";
import { LiveTracking, UserHeader } from "../../components";
import MapComponent from "./MapComponent";

const UserHomeLayout = () => {
    return <div className="h-screen">
        <UserHeader />
        <div className="w-full h-[85%] overflow-hidden flex flex-col-reverse md:flex-col lg:flex-row gap-6 p-4 px-20">
            <div className="w-full lg:w-2/5 flex flex-col items-center p-4">
                <Outlet />
            </div>
            <div className="w-full h-full lg:w-3/5 flex items-center justify-center text-white font-bold  rounded-xl overflow-hidden bg-gray-400">
                {/* <MapComponent /> */}
                <LiveTracking />
            </div>
        </div>
    </div>;
};
export default UserHomeLayout;
