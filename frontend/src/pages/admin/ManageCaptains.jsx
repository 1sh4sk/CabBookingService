import { faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalImage from "react-modal-image";
import { useEffect, useState } from "react";
import { deleteCaptain, getCaptainsApi } from "../../api/adminApi";
import { toast } from 'react-toastify';

const ManageCaptains = () => {

    const [captains, setCaptains] = useState([]);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        const fetchCaptains = async () => {
            try {
                setLoading(true);
                const res = await getCaptainsApi();
                setCaptains(res.data);
            } catch (error) {
                console.error("Error fetching captains:", error);
                toast.error("Failed to load captains.");
            } finally {
                setLoading(false);
            }
        };

        fetchCaptains();
    }, []);

    const handleDeleteCaptain = async (id) => {
        try {
            await deleteCaptain(id);
            toast.success("Captain deleted successfully!");

            // Update local state instead of making another API call
            setCaptains((prevCaptains) => prevCaptains.filter(captain => captain._id !== id));
        } catch (error) {
            console.error("Error deleting captain:", error);
            toast.error("Failed to delete captain.");
        }
    };


    return <div className="w-[90%] xl:w-full h-full p-4">
        <h1 className="text-2xl font-bold text-yellow-500">Captains</h1>
        <p className="text-gray-600">Total Captains: {captains.length}</p>


        {loading ? (
            <p className="text-gray-500 mt-4">Loading captains...</p>
        ) : (
            <div className="w-full h-full overflow-scroll mt-4">
                <div className="mt-4  rounded-lg border border-yellow-500 overflow-x-scroll">
                    <table className="w-full min-w-[1000px]">
                        <thead>
                            <tr className="bg-yellow-500 text-white ">
                                <th className="p-2 border-r ">ID</th>
                                <th className="p-2 border-r">Full Name</th>
                                <th className="p-2 border-r">Email</th>
                                <th className="p-2 border-r w-64">Vehicle Info</th>
                                <th className="p-2 border-r w-62">Proofs</th>
                                <th className="p-2 border-r w-64">Approval Status</th>
                                <th className="p-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {captains.length > 0 ? (
                                captains.map((captain, index) => (
                                    <tr key={captain._id} className="text-center border-b last:border-b-0 border-yellow-500">
                                        <td className="p-2 border-r border-yellow-500">{index + 1}</td>
                                        <td className="p-2 border-r border-yellow-500">
                                            {captain.fullname.firstname} {captain.fullname.lastname}
                                        </td>
                                        <td className="p-2 border-r border-yellow-500">{captain.email}</td>
                                        <td className="p-2 border-r border-yellow-500">
                                            <span className="font-semibold">vehicle Name:</span>{captain.vehicle.vehiclename}, <br />
                                            <span className="font-semibold">Vehicle Color:</span>{captain.vehicle.color},<br />
                                            <span className="font-semibold">Vehicle Type:</span>{captain.vehicle.vehicletype},<br />
                                            <span className="font-semibold"> Vehicle Plate:</span>{captain.vehicle.plate}
                                        </td>
                                        <td className="p-2 border-r border-yellow-500 flex flex-wrap gap-3 items-center justify-center">
                                            <div className="flex flex-col items-center gap-2">
                                                <ModalImage
                                                    small={captain.driver_image} // URL of the small preview image
                                                    large={captain.driver_image} // URL of the large image to display in the modal
                                                    // alt="Driver image"
                                                    className="w-14 h-14 object-cover"
                                                />
                                                <p className="text-xs">Driver image</p>
                                            </div>
                                            <div className="flex items-center flex-col gap-2">
                                                <ModalImage
                                                    small={captain.license_image}
                                                    large={captain.license_image}
                                                    // alt="Driver image"
                                                    className="w-14 h-14 object-cover"
                                                />
                                                <p className="text-xs">License image</p>
                                            </div>
                                            <div className="flex items-center flex-col gap-2">
                                                <ModalImage
                                                    small={captain.rc_book_image}
                                                    large={captain.rc_book_image}
                                                    // alt="Driver image"
                                                    className="w-14 h-14 object-cover"
                                                />
                                                <p className="text-xs">RC book image</p>
                                            </div>
                                            <div className="flex items-center flex-col gap-2">
                                                <ModalImage
                                                    small={captain.vehicle_image}
                                                    large={captain.vehicle_image}
                                                    // alt="Driver image"
                                                    className="w-14 h-14 object-cover"
                                                />
                                                <p className="text-xs">Vehicle image</p>
                                            </div>
                                        </td>
                                        <td className="p-2 border-r border-yellow-500">
                                            {captain.approval}
                                        </td>
                                        <td className="p-2">
                                            <button
                                                onClick={() => handleDeleteCaptain(captain._id)}
                                                className="text-red-500 hover:text-red-700"
                                            >
                                                <FontAwesomeIcon icon={faTrash} />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="text-center text-gray-500 p-4">
                                        No captains found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        )}

    </div>;
};
export default ManageCaptains;
