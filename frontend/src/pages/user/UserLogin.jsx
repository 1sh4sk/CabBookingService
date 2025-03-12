import React from 'react';

const UserLogin = () => {
  return (
    <div className="flex relative h-screen">
      {/* Column 1 */}
      <div className="w-1/4 bg-white p-10 pr-10 pl-10 absolute left-30 top-15 z-10 shadow-lg rounded-lg flex flex-col items-center">
       <img src="/src/assets/logo.png" alt="Logo" className="w-20 h-20 rounded-full" />
       <br/>
        <label className="block text-black w-full font-bold">What's your email ?</label>
        <input type="email" className="w-full p-2 border rounded mt-1 mb-4" placeholder="example@gmail.com" />
        <br/>
        <label className="block text-black w-full font-bold">Enter password</label>
        <input type="password" className="w-full p-2 border rounded mt-1 mb-4" placeholder="password" />
        <br/>
        <button className="w-full bg-yellow-500 text-white py-2 rounded mb-4">Login</button>
        
        <p className="text-black text-sm font-bold">New here? <span className="text-yellow-500 cursor-pointer">Create new account</span></p>
        <br/>
        <br/>
        <br/>

        <button className="w-full bg-black text-white py-2 rounded mt-4">Sign in as captain</button>
      </div>
    
      {/* Column 2 */}
      <div className="w-3/4 relative ml-auto">
        <img src="/src/assets/User_Bg.png" alt="background" className="w-full h-screen object-cover" />
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 text-white text-center">
          <h2 className="text-3xl font-bold text-yellow-500">Sign In</h2>
          <p className="text-lg">Your journey starts here and we bet it won’t be boring</p>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
