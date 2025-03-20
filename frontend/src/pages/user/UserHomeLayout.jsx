import { Outlet } from "react-router";
import { UserHeader } from "../../components";
import MapComponent from "./MapComponent";

const UserHomeLayout = () => {
    return <div className="min-h-screen">
        <UserHeader />
        <div className="w-full flex flex-col-reverse md:flex-col lg:flex-row gap-6 p-4 px-20">
            <div className="w-full lg:w-2/5 flex flex-col items-center p-4">
                <Outlet />
            </div>
            <div className="w-full lg:w-3/5 flex items-center justify-center bg-gray-800 text-white font-bold h-72 md:h-96 lg:h-150 rounded-lg">
                <MapComponent />
            </div>
        </div>
    </div>;
};
export default UserHomeLayout;
