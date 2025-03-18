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
      console.log(res);
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
    <div className="flex relative h-screen">
      {/* Column 1 */}
      <div className="w-1/4 bg-white p-10 absolute left-30 top-15 z-10 shadow-lg rounded-lg flex flex-col items-center">
        <img src="/src/assets/logo.png" alt="Logo" className="w-20 h-20 rounded-full" />
        <br />

        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">

          <label className="block text-black w-full font-bold">What's your email?</label>
          <input
            name="email"
            type="email"
            className="w-full p-2 border rounded mt-1 mb-4"
            placeholder="example@gmail.com"
            value={formData.email}
            onChange={handleChange}
          />

          <label className="block text-black w-full font-bold">Enter password</label>
          <input
            name="password"
            type="password"
            className="w-full p-2 border rounded mt-1 mb-4"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
          />

          <button type="submit" className="w-full bg-yellow-500 text-white py-2 rounded mb-4">
            Login
          </button>
        </form>

        <p className="text-black text-sm font-bold">
          New here? <Link to="/register" className="text-yellow-500 cursor-pointer">Create new account</Link>
        </p>

        <Link to="/captain-login" className="w-full">
          <button className="w-full bg-black text-white py-2 rounded mt-4">Sign in as captain</button>
        </Link>
      </div>

      {/* Column 2 */}
      <div className="w-3/4 relative ml-auto">
        <img src="/src/assets/User_Bg.png" alt="background" className="w-full h-screen object-cover" />
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 text-white text-center">
          <h2 className="text-2xl sm:text-md  font-bold text-yellow-500">Sign In</h2>
          <p className="text-sm sm:text-sm lg:text-xl">Your journey starts here and we bet <br/> it won’t be boring</p>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;