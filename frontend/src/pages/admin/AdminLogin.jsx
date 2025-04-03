import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { adminLogin } from "../../api/adminApi";
import { adminDataContext } from "../../context/AdminContext";


const AdminLoginForm = () => {

  const initialState = {
    email: '',
    password: '',
  }

  const [formData, setFormData] = useState(initialState);

  const { setAdmin } = useContext(adminDataContext)
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  console.log(formData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const res = await adminLogin(formData);
      console.log(res.data);
      if (res.status === 200) {
        toast.success('Login successful');
        localStorage.setItem('token', res.data.token);
        setAdmin(res.data.admindetails);
        navigate('/admin/dashboard')
      }

      setFormData(initialState);

    } catch (error) {
      if (error.status === 409) {
        toast.error(error?.response?.data?.message);
      } else {
        toast.error(error?.response?.data?.error[0]?.msg);
      }
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Admin Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              name="password"
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginForm;
