import { Outlet } from "react-router";
import { LiveTracking, UserHeader } from "../../components";
import MapComponent from "./MapComponent";

const UserHomeLayout = () => {
    return <div className="h-screen w-screen">
        <UserHeader />
        <div className="w-full h-full lg:h-[85%] relative overflow-hidden flex flex-col-reverse lg:flex-row lg:gap-6 lg:pt-6 lg:px-10">

            <Outlet />

            <div className="w-full h-[75%] lg:h-full lg:w-3/5 flex items-center justify-center text-white font-bold  lg:rounded-xl lg:overflow-hidden bg-gray-400">
                {/* <MapComponent /> */}
                <LiveTracking />
            </div>
        </div>
    </div>;
};
export default UserHomeLayout;
