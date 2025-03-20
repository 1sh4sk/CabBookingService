import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { captainDataContext } from '../../context/CaptainContext';
import { toast } from 'react-toastify';
import { loginCaptain } from '../../api/captainApi';

const CaptainLogin = () => {

  const initialState = {
    email: '',
    password: '',
  }

  const [formData, setFormData] = useState(initialState);

  const navigate = useNavigate();
  const { setCaptain } = useContext(captainDataContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const res = await loginCaptain(formData);
      if (res.status === 200) {
        toast.success('Login successful');
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
  };


  return (
    <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row gap-6 ">
      {/* Column 1 */}

      <form onSubmit={handleSubmit} className="w-1/4 bg-white p-10 pr-10 pl-10 absolute left-30 top-15 z-10 shadow-lg rounded-lg flex flex-col items-center">
        <img src="/src/assets/logo.png" alt="Logo" className="w-20 h-20 rounded-full" />
        <br />
        frontend
        <label className="block text-black w-full font-bold" >What's your email ?</label>
        <input name="email" type="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded mt-1 mb-4" placeholder="example@gmail.com" />
        <br />
        <label className="block text-black w-full font-bold">Enter password</label>
        <input name="password" type="password" value={formData.password} onChange={handleChange} className="w-full p-2 border rounded mt-1 mb-4" placeholder="password" />
        <br />

        <button type='submit' className="w-full bg-yellow-500 text-white py-2 rounded mb-4">Login</button>
        <br />
        <p className="text-black text-sm font-bold">Join a fleet?
          <Link to="/captain-register" className="text-yellow-500 cursor-pointer"> Register as a captain</Link></p>
        <br />
        <br />
        <br />


        <button className="w-full bg-black text-white py-2 rounded mt-4">
          <Link to="/login" className='w-full'>
            Sign in as user
          </Link>
        </button>

      </form>


      {/* Column 2 */}
      <div className="w-full lg:w-3/4 relative lg:ml-auto">
        <img src="/src/assets/captainlogin.png" alt="background" className="w-full h-screen object-cover" />
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 text-white text-center">
          <h2 className="text-3xl font-bold text-yellow-500">Sign In</h2>
          <p className="text-lg">Ready to hit the road? Sign in and start driving towards success!</p>
        </div>
      </div>
    </div>
  );
}

export default CaptainLogin;
