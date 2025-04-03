import { faTowerBroadcast, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { deleteUserApi, getUsersApi } from "../../api/adminApi";
import { toast } from 'react-toastify';

const ManageUsers = () => {


    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                const res = await getUsersApi();
                setUsers(res.data);
            } catch (error) {
                console.error("Error fetching users:", error);
                toast.error("Failed to load users.");
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);


    const handleDeleteUser = async (id) => {
        try {
            await deleteUserApi(id);
            toast.success("User deleted successfully!");

            // Update local state instead of making another API call
            setUsers((prevUsers) => prevUsers.filter(user => user._id !== id));
        } catch (error) {
            console.error("Error deleting user:", error);
            toast.error("Failed to delete user.");
        }
    };


    return <div className="p-4">
        <h1 className="text-2xl font-bold text-yellow-500">Users</h1>
        <p className="text-gray-600">Total Users: {users.length}</p>

        {loading ? (
            <p className="text-gray-500 mt-4">Loading users...</p>
        ) : (
            <div className="mt-4 overflow-hidden rounded-lg border border-yellow-500">
                <table className="w-full">
                    <thead>
                        <tr className="bg-yellow-500 text-white">
                            <th className="p-2 border-r">ID</th>
                            <th className="p-2 border-r">Full Name</th>
                            <th className="p-2 border-r">Email</th>
                            <th className="p-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ? (
                            users.map((user, index) => (
                                <tr key={user._id} className="text-center border-b last:border-b-0 border-yellow-500">
                                    <td className="p-2 border-r border-yellow-500">{index + 1}</td>
                                    <td className="p-2 border-r border-yellow-500">
                                        {user.fullname.firstname} {user.fullname.lastname}
                                    </td>
                                    <td className="p-2 border-r border-yellow-500">{user.email}</td>
                                    <td className="p-2">
                                        <button
                                            onClick={() => handleDeleteUser(user._id)}
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
                                    No users found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )}


    </div>
        ;
};
export default ManageUsers;
