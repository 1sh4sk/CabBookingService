import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { registerUser } from '../../api/userApi';
import { useContext } from 'react';
import { userDataContext } from '../../context/UserContext';
import { toast } from 'react-toastify';

function Registeruser() {

  const navigate = useNavigate();

  const { setUser } = useContext(userDataContext);

  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const [formData, setFormData] = useState(initialState);


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
      const { firstName, lastName, email, password } = formData;

      const userData = {
        fullname: {
          firstname: firstName,
          lastname: lastName,
        },
        email,
        password
      }

      console.log(userData);


      const res = await registerUser(userData);
      if (res.status === 201) {
        toast.success('Registration successful');
        localStorage.setItem('token', res.data.token);
        setUser(res.data.user);
        navigate('/home')
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
    <div className="flex w-screen h-screen flex-col-reverse md:flex-col-reverse lg:flex-row gap-6">
      {/* Form Section */}
      <form onSubmit={handleSubmit} className="w-full h-full lg:h-fit lg:w-1/3 -mt-14 transform lg:mt-0 lg:absolute lg:left-24 xl:left-35 lg:top-1/2 lg:-translate-y-1/2  bg-white p-6 sm:p-8 md:p-7 md:py-10 lg:py-20 xl:px-10 z-10 shadow-lg rounded-3xl ">
        <div className="flex justify-center mb-8">
          <h2 className='text-2xl font-bold font-epilogue text-color-yellow'>TripMate</h2>
        </div>
        <label>What's your name</label>
        <div className="flex space-x-2 ">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            className="w-1/2"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            className="w-1/2"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <label >What's your email</label>
        <input
          type="email"
          name="email"
          placeholder="example@gmail.com"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Enter password</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button className=" mt-3 w-full bg-yellow-500 text-white font-bold py-2 rounded-lg mb-4 hover:bg-yellow-600 transition">
          Sign Up
        </button>

        <p className="text-black text-sm text-center">
          Already have an account? <Link to="/login" className="text-yellow-500 cursor-pointer font-semibold hover:underline">Sign in here</Link>
        </p>
      </form>

      {/* Image Section */}
      <div className="w-full lg:w-3/4 relative lg:ml-auto h-auto">
        <img
          src="/src/assets/Section.png"
          alt="background"
          className="w-full h-full lg:h-screen object-cover object-bottom"
        />
        <div className='w-full h-full absolute top-0 left-0 bg-black/30' />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:top-1/3 lg:left-1/2 transform lg:-translate-x-1/3 text-white text-center">
          <h2 className="text-3xl xl:text-4xl  mb-3 sm:text-md  font-bold text-yellow-500 font-epilogue">Register</h2>
          <p className="text-[12px] sm:text-sm xl:text-lg font-light">Join the ride—adventures await at every turn!</p>
        </div>
      </div>
    </div>
  );
};

export default Registeruser;
