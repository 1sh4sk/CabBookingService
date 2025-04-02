import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CaptainApprovals = () => {
    const captains = [
        { id: 1, name: "John Doe", email: "john@example.com", phone: "1234567890" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "9876543210" },
    ]

    return <div className="p-4">
        <h1 className="text-2xl font-bold text-yellow-500">Captain Approval List</h1>
        <p className="text-gray-600">Pending Captains: {captains.length}</p>

        <div className="mt-4 overflow-hidden rounded-lg border border-yellow-500">
            <table className="w-full">
                <thead>
                    <tr className="bg-yellow-500 text-white">
                        <th className="p-2 border-r">ID</th>
                        <th className="p-2 border-r">Name</th>
                        <th className="p-2 border-r">Vehicle</th>
                        <th className="p-2 border-r">Plate Number</th>
                        <th className="p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {captains.map((captain, index) => (
                        <tr
                            key={captain.id}
                            className={`text-center ${index === captains.length - 1 ? "border-b-0" : "border-b border-color-yellow"
                                }`}
                        >
                            <td className="p-2 border-r border-yellow-500">{captain.id}</td>
                            <td className="p-2 border-r border-yellow-500">{captain.name}</td>
                            <td className="p-2 border-r border-yellow-500">{captain.vehicle}</td>
                            <td className="p-2 border-r border-yellow-500">{captain.plate}</td>
                            <td className="p-2 flex justify-center gap-2">
                                <button
                                    // onClick={() => onApprove(captain.id)}
                                    className="bg-green-500 text-white hover:text-green-700  rounded-lg text-xs p-2 flex items-center justify-center gap-1"
                                >
                                    <FontAwesomeIcon icon={faCheck} /> Approve
                                </button>
                                <button
                                    // onClick={() => onReject(captain.id)}
                                    className="bg-red-500 text-white rounded-lg text-xs p-2 hover:text-red-700 flex items-center justify-center gap-1"
                                >
                                    <FontAwesomeIcon icon={faTimes} /> Reject
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>;
};
export default CaptainApprovals;
