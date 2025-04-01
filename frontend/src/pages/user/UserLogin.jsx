import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { userDataContext } from '../../context/UserContext';
import { loginUser } from '../../api/userApi';
import { toast } from 'react-toastify';

const UserLogin = () => {

  const initialState = {
    email: '',
    password: '',
  }

  const [formData, setFormData] = useState(initialState);

  const navigate = useNavigate();
  const { setUser } = useContext(userDataContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const res = await loginUser(formData);
      if (res.status === 200) {
        toast.success('Login successful');
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

    <div className="h-screen w-screen flex flex-col-reverse md:flex-col-reverse lg:flex-row gap-6 ">
      {/* Column 1 - Login Form */}
      <div className="w-full h-[70%] sm:h-auto -mt-14 lg:w-1/3 xl:w-1/4 bg-white p-6 sm:p-8 md:p-8 xl:p-10 lg:pr-10 lg:pl-10 transform lg:mt-0 lg:absolute lg:left-24 xl:left-40 lg:top-1/2 lg:-translate-y-1/2    z-10 shadow-xl rounded-3xl rounded-bl-none rounded-br-none lg:rounded-xl flex flex-col items-center">
        <h2 className='text-2xl font-bold font-epilogue text-color-yellow'>TripMate</h2>


        <br />

        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">

          <label >What's your email?</label>
          <input
            name="email"
            type="email"
            placeholder="example@gmail.com"
            value={formData.email}
            onChange={handleChange}
          />

          <label>Enter password</label>
          <input
            name="password"
            type="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
          />

          <button type="submit" className="w-full bg-yellow-500 text-white py-2 rounded-lg mb-3 text-base">
            Login
          </button>
        </form>

        <p className="text-black text-sm ">
          New here? <Link to="/register" className="text-yellow-500 cursor-pointer">Create new account</Link>
        </p>

        <Link to="/captain-login" className="w-full mt-15">
          <button className="w-full bg-black text-white py-2 rounded-lg mt-4">Sign in as captain</button>
        </Link>
      </div>

      {/* Column 2 - Background Image */}
      <div className="w-full lg:w-3/4 relative lg:ml-auto h-auto">
        <img
          src="/src/assets/Section.png"
          alt="background"
          className="w-full h-full lg:h-screen object-cover object-bottom"
        />
        <div className='w-full h-full absolute top-0 left-0 bg-black/30' />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:top-1/4 lg:left-1/2 transform lg:-translate-x-1/3 text-white text-center">
          <h2 className=" text-3xl xl:text-4xl  mb-3 sm:text-md  font-bold text-yellow-500 font-epilogue ">Sign In</h2>
          <p className="text-[12px] sm:text-sm xl:text-lg font-light">Your journey starts here and we bet <br /> it won’t be boring</p>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;