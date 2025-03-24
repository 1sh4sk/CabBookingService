// import React, { useContext, useState } from 'react';
// import { Link, useNavigate } from 'react-router';
// import { registerUser } from '../../api/userApi';
// import { toast } from 'react-toastify';
// import { userDataContext } from '../../context/UserContext';

// function Registeruser() {

//   const initialState = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//   }
//   const [formData, setFormData] = useState(initialState);

//   const navigate = useNavigate();
//   const { setUser } = useContext(userDataContext);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { firstName, lastName, email, password } = formData;

//       const userData = {
//         fullname: {
//           firstname: firstName,
//           lastname: lastName,
//         },
//         email,
//         password,
//       }
//       const res = await registerUser(userData);
//       if (res.status === 201) {
//         toast.success('Registration successful');
//         localStorage.setItem('token', res.data.token);
//         setUser(res.data.user);
//         navigate('/home')
//       }

//       setFormData(initialState);

//     } catch (error) {
//       if (error.status === 409) {
//         toast.error(error?.response?.data?.message);
//       } else {
//         toast.error(error?.response?.data?.error[0]?.msg);
//       }
//     }
//   };



//   return (
//     <div className="flex justify-center items-center min-h-screen bg-white-900">

//       <div className="bg-white rounded-lg  overflow-hidden flex max-w-sm w-full mx-0 z-30 relative left-50">

//         {/* Form Section */}
//         <div className="p-8 w-full h-120 mt-1 md:w-full">
//           <div className="mb-6 text-center">
//             <div className="bg-yellow-400 w-16 h-8 rounded-md mb-4 mx-auto flex items-center justify-center">
//               <span className="text-xs font-bold">LOGO</span>
//             </div>
//           </div>

//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700 mb-2">What's your name?</label>
//               <div className="flex space-x-2">
//                 <input type="text" name="firstName" placeholder="First name" className="border border-gray-300 rounded-md p-3 w-1/2 text-gray-500 bg-gray-50" onChange={handleChange} required />
//                 <input type="text" name="lastName" placeholder="Last name" className="border border-gray-300 rounded-md p-3 w-1/2 text-gray-500 bg-gray-50" onChange={handleChange} required />
//               </div>
//             </div>

//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700 mb-2">What's your email?</label>
//               <input type="email" name="email" placeholder="example@gmail.com" className="border border-gray-300 rounded-md p-3 w-full text-gray-500 bg-gray-50" onChange={handleChange} required />
//             </div>

//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700 mb-2">Enter password</label>
//               <input type="password" name="password" placeholder="password" className="border border-gray-300 rounded-md p-3 w-full text-gray-500 bg-gray-50" onChange={handleChange} required />
//             </div>

//             <button type="submit" className="bg-yellow-400 text-black font-bold py-2 px-3 rounded-md w-full hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400">
//               Sign Up
//             </button>
//           </form>

//           <p className="text-center mt-4 text-sm">
//             Don't have an account? <Link to="/login" className="text-yellow-600 font-semibold hover:underline">Sign in here</Link>
//           </p>
//         </div>


//       </div>
//       <div>
//         {/* Image Section */}
//         <ImageCard /></div>
//     </div>
//   );
// }

// const ImageCard = () => {
//   return (
//     <div className="max-w-xl  image overflow-hidden shadow-lg bg-white ">
//       <img
//         className="w-full h-full object-cover"
//         src="./src/assets/register.png"
//         alt=" "

//       />
//       <div className="absolute inset-0 flex flex-col justify-center items-end  text-white p-80 text-right">
//         <h2 className="text-lg font-bold  text-center  text-yellow-400  ">Register</h2>
//         <p className="text-white mt-2">
//           join the ride -adventures await at
//         </p>
//         <p className="text-white mt-2">
//           every turn!
//         </p>
//       </div>
//     </div>

//   );
// };

// export default Registeruser;
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
