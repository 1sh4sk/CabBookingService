import React, { useState } from 'react';
import { Link } from 'react-router';

function Registeruser() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };



  return (
    <div className="flex justify-center items-center min-h-screen bg-white-900">

      <div className="bg-white rounded-lg  overflow-hidden flex max-w-sm w-full mx-0 z-30 relative left-50">

        {/* Form Section */}
        <div className="p-8 w-full h-120 mt-1 md:w-full">
          <div className="mb-6 text-center">
            <div className="bg-yellow-400 w-16 h-8 rounded-md mb-4 mx-auto flex items-center justify-center">
              <span className="text-xs font-bold">LOGO</span>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">What's your name?</label>
              <div className="flex space-x-2">
                <input type="text" name="firstName" placeholder="First name" className="border border-gray-300 rounded-md p-3 w-1/2 text-gray-500 bg-gray-50" onChange={handleChange} required />
                <input type="text" name="lastName" placeholder="Last name" className="border border-gray-300 rounded-md p-3 w-1/2 text-gray-500 bg-gray-50" onChange={handleChange} required />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">What's your email?</label>
              <input type="email" name="email" placeholder="example@gmail.com" className="border border-gray-300 rounded-md p-3 w-full text-gray-500 bg-gray-50" onChange={handleChange} required />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Enter password</label>
              <input type="password" name="password" placeholder="password" className="border border-gray-300 rounded-md p-3 w-full text-gray-500 bg-gray-50" onChange={handleChange} required />
            </div>

            <button type="submit" className="bg-yellow-400 text-black font-bold py-2 px-3 rounded-md w-full hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400">
              Sign Up
            </button>
          </form>

          <p className="text-center mt-4 text-sm">
            Don't have an account? <Link to="/login" className="text-yellow-600 font-semibold hover:underline">Sign in here</Link>
          </p>
        </div>


      </div>
      <div>
        {/* Image Section */}
        <ImageCard /></div>
    </div>
  );
}

const ImageCard = () => {
  return (
    <div className="max-w-xl  image overflow-hidden shadow-lg bg-white ">

      <img
        className="w-full h-full object-cover"
        src="./src/assets/register.png"
        alt=" "

      />
      <div className="absolute inset-0 flex flex-col justify-center items-end  text-white p-80 text-right">
        <h2 className="text-lg font-bold  text-center  text-yellow-400  ">Register</h2>
        <p className="text-white mt-2">
          join the ride -adventures avait at
        </p>
        <p className="text-white mt-2">
          every turn!
        </p>
      </div>
    </div>

  );
};

export default Registeruser;
