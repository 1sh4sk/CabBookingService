import { Outlet } from "react-router";
import Sidebar from "../../components/admin/Sidebar";
import AdminHeader from "../../components/admin/AdminHeader";

const AdminDashboardLayout = () => {
    return <div className="flex w-screen h-screen">
        <Sidebar />
        <div className="h-full w-auto  flex flex-col flex-1 ">
            <AdminHeader />
            <div className=" h-[90%] overflow-hidden p-3  ">
                <Outlet />
            </div>
        </div>
    </div>;
};
export default AdminDashboardLayout;
