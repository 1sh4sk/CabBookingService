import React, { useState } from 'react';

function Registeruser() {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row gap-6">
      {/* Form Section */}
      <div className="w-full lg:w-1/3 bg-white p-6 sm:p-8 md:p-10 lg:p-10 lg:absolute lg:left-30 lg:top-15 z-10 shadow-lg rounded-xl">
        <div className="flex justify-center mb-6">
          <img src="/src/assets/logo.png" alt="Logo" className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full" />
        </div>
        <label className="block text-black w-full font-bold text-lg mb-1">What's your name</label>
        <div className="flex space-x-2 mb-4">
          <input 
            type="text" 
            name="firstName" 
            placeholder="First name" 
            className="border p-2 w-1/2 rounded-md" 
            value={formData.firstName} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            name="lastName" 
            placeholder="Last name" 
            className="border p-2 w-1/2 rounded-md" 
            value={formData.lastName} 
            onChange={handleChange} 
            required 
          />
        </div>

        <label className="block text-black w-full font-bold text-lg mb-1">What's your email</label>
        <input 
          type="email" 
          name="email" 
          placeholder="example@gmail.com" 
          className="border p-2 w-full rounded-md mb-4" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />

        <label className="block text-black w-full font-bold text-lg mb-1">Enter password</label>
        <input 
          type="password" 
          name="password" 
          placeholder="password" 
          className="border p-2 w-full rounded-md mb-4" 
          value={formData.password} 
          onChange={handleChange} 
          required 
        />

        <button className="w-full bg-yellow-500 text-white font-bold py-2 rounded mb-4 hover:bg-yellow-600 transition">
          Sign Up
        </button>

        <p className="text-black text-sm text-center">
          Already have an account? <span className="text-yellow-500 cursor-pointer font-semibold hover:underline">Sign in here</span>
        </p>
      </div>
      
      {/* Image Section */}
      <div className="w-full lg:w-3/4 relative lg:ml-auto">
        <img
          src="/src/assets/Section.png"
          alt="background"
          className="w-full h-64 sm:h-72 md:h-96 lg:h-screen object-cover"
        />
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 text-white text-center">
          <h2 className="text-2xl sm:text-md font-bold text-yellow-500">Register</h2>
          <p className="text-sm sm:text-sm lg:text-xl">Join the ride—adventures await at every turn!</p>
        </div>
      </div>
    </div>
  );
};

export default Registeruser;
