import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const ManageUsers = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Simulated API Call
        setTimeout(() => {
            setUsers([
                { id: 1, name: "John Doe", email: "john@example.com", phone: "1234567890" },
                { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "9876543210" },
            ]);
        }, 1000);
    }, []);


    return <div className="p-4">
        <h1 className="text-2xl font-bold text-yellow-500">Users</h1>
        <p className="text-gray-600">Total Users: {users.length}</p>

        <div className="mt-4 overflow-hidden rounded-lg border border-yellow-500">
            <table className="w-full">
                <thead>
                    <tr className="bg-yellow-500 text-white">
                        <th className="p-2 border-r">ID</th>
                        <th className="p-2 border-r">Name</th>
                        <th className="p-2 border-r">Email</th>
                        <th className="p-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr
                            key={user.id}
                            className={`text-center ${index === users.length - 1 ? "border-b-0" : "border-b border-color-yellow"
                                }`}
                        >
                            <td className="p-2 border-r border-yellow-500">{user.id}</td>
                            <td className="p-2 border-r border-yellow-500">{user.name}</td>
                            <td className="p-2 border-r border-yellow-500">{user.email}</td>
                            <td className="p-2">
                                <button
                                    className="text-red-500 hover:text-red-700"
                                >
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
        ;
};
export default ManageUsers;
