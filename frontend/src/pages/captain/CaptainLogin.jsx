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
        setCaptain(res.data.checkEmail);
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
    <div className=" w-screen h-screen flex flex-col-reverse md:flex-col-reverse lg:flex-row gap-6 ">
      {/* Column 1 */}
      <div className="w-full h-full lg:h-auto xl:w-1/4 lg:w-1/3 -mt-14 transform lg:mt-0 lg:absolute lg:left-24 xl:left-35 lg:top-1/2 lg:-translate-y-1/2  bg-white p-6 sm:p-8 md:p-7 md:py-10 xl:p-10 z-10 shadow-lg rounded-3xl">
        <form onSubmit={handleSubmit} className="w-full  flex flex-col items-center">
          <img src="/src/assets/logo.png" alt="Logo" className="w-20 h-20 rounded-full" />
          <br />
          <label className="block text-black w-full font-bold" >What's your email ?</label>
          <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="example@gmail.com" />

          <label className="block text-black w-full font-bold">Enter password</label>
          <input name="password" type="password" value={formData.password} onChange={handleChange} placeholder="password" />
          <br />

          <button type='submit' className="w-full bg-yellow-500 text-white py-2 rounded-lg mb-4">Login</button>

          <p className="text-black text-sm">Join a fleet?
            <Link to="/captain-register" className="text-yellow-500 cursor-pointer"> Register as a captain</Link></p>
          <br />
          <br />


          <button className="w-full bg-black text-white py-2 rounded-lg mt-4">
            <Link to="/login" className='w-full'>
              Sign in as user
            </Link>
          </button>

        </form>
      </div>


      {/* Column 2 */}
      <div className="w-full lg:w-3/4 relative lg:ml-auto h-[60%]">
        <img src="/src/assets/captainlogin.png" alt="background" className="w-full h-screen object-cover object-left-bottom" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 lg:top-1/3 lg:left-1/2 transform lg:-translate-x-1/3 text-white text-center">
          <h2 className="text-3xl xl:text-4xl  mb-3 sm:text-md  font-bold text-yellow-500 font-epilogue">Sign In</h2>
          <p className="text-[12px] sm:text-sm xl:text-lg font-light">Ready to hit the road? Sign in and start driving towards success!</p>
        </div>
      </div>
    </div>
  );
}

export default CaptainLogin;
