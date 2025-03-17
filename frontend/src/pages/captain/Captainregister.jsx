
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { registerCaptain } from "../../api/captainApi";
import { toast } from 'react-toastify';
import { captainDataContext } from "../../context/CaptainContext";

// import CaptainBg from "../assets/Captainbg.png"; // Ensure correct import

function CaptainRegister() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    vehicleColor: "",
    vehiclePlate: "",
    vehicleCapacity: "",
    vehicleType: "",
    agreeTerms: false,
  });


  const navigate = useNavigate();
  const { setCaptain } = useContext(captainDataContext);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();


    try {

      const { firstName, lastName, email, password, vehicleColor, vehiclePlate, vehicleCapacity, vehicleType, agreeTerms } = formData;

      const userData = {
        fullname: {
          firstname: firstName,
          lastname: lastName,
        },
        email,
        password,
        vehicle: {
          color: vehicleColor,
          plate: vehiclePlate,
          capacity: vehicleCapacity,
          vehicletype: vehicleType,
        },
        agreeTerms
      }

      console.log(userData);


      const res = await registerCaptain(userData);
      if (res.status === 201) {
        toast.success('Registration successful');
        localStorage.setItem('token', res.data.token);
        setCaptain(res.data.user);
        navigate('/captain-home')
      }

      setFormData(initialState);

    } catch (error) {
      if (error.status === 409) {
        toast.error(error?.response?.data?.message);
      } else {
        toast.error(error?.response?.data?.error[0]?.msg);
      }
    }
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Form Section */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-full md:w-1/2 lg:w-1/3 relative left-50 z-30">
        <div className="mb-4 text-center">
          <div className="bg-yellow-400 w-16 h-8 rounded-md mb-2 mx-auto flex items-center justify-center">
            <span className="text-xs font-bold">LOGO</span>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Captain's Name</label>
            <div className="flex space-x-2">
              <input type="text" name="firstName" placeholder="First name" className="border p-2 w-1/2 rounded-md" value={formData.firstName} onChange={handleChange} required />
              <input type="text" name="lastName" placeholder="Last name" className="border p-2 w-1/2 rounded-md" value={formData.lastName} onChange={handleChange} required />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input type="email" name="email" placeholder="example@gmail.com" className="border p-2 w-full rounded-md" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input type="password" name="password" placeholder="Password" className="border p-2 w-full rounded-md" value={formData.password} onChange={handleChange} required />
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Vehicle Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="vehicleColor" placeholder="Vehicle Color" className="border p-2 rounded-md" value={formData.vehicleColor} onChange={handleChange} required />
              <input type="text" name="vehiclePlate" placeholder="Vehicle Plate" className="border p-2 rounded-md" value={formData.vehiclePlate} onChange={handleChange} required />

              <input type="number" name="vehicleCapacity" placeholder="Vehicle Capacity" className="border p-2 rounded-md" value={formData.vehicleCapacity} onChange={handleChange} required />
              <select name="vehicleType" className="border p-2 rounded-md" value={formData.vehicleType} onChange={handleChange} required>
                <option value="">Vehicle Type</option>
                <option value="car">Car</option>
                <option value="auto">Auto</option>
                <option value="motorcycle">Motorcycle</option>

              </select>
            </div>
          </div>

          <div className="mb-4 flex items-center">
            <input type="checkbox" name="agreeTerms" className="mr-2" checked={formData.agreeTerms} onChange={handleChange} required />
            <label className="text-sm text-gray-700">I agree to the terms and conditions</label>
          </div>

          <button type="submit" className="bg-yellow-400 text-black font-bold py-2 px-4 rounded-md w-full hover:bg-yellow-500">
            Sign Up
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Already have an account? <Link to="/captain-login" className="text-yellow-600 font-semibold hover:underline">Sign in here</Link>
        </p>
      </div>

      {/* Image Section */}
      <div className="hidden md:block md:w-1/2 lg:w-2/3 p-4">
        <div className="relative w-full h-full">
          <img src={"../src/assets/Captainbg.png"} alt="Register" className="w-full h-full object-cover " />
          <div className="absolute inset-0 flex flex-col justify-center items-end text-white p-6">
            <h2 className="text-xl font-bold text-yellow-400">Register</h2>
            <p className="mt-2">Drive with us - where every mile</p>
            <p>brings new opportunities!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaptainRegister;

