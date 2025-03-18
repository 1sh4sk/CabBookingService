import React from 'react';

const CaptainLogin= () => {
  return (
    <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row gap-6 p-4">
      {/* Column 1 */}
      <div className="w-full lg:w-1/4 bg-white p-6 sm:p-8 md:p-10 lg:p-10 lg:pr-10 lg:pl-10 lg:absolute lg:left-30 lg:top-15 z-10 shadow-lg rounded-lg flex flex-col items-center">
       <img src="/src/assets/logo.png" alt="Logo" className="w-20 h-20 rounded-full" />
       <br/>
        <label className="block text-black w-full font-bold" >What's your email ?</label>
        <input type="email" className="w-full p-2 border rounded mt-1 mb-4" placeholder="example@gmail.com" />
        <br/>
        <label className="block text-black w-full font-bold">Enter password</label>
        <input type="password" className="w-full p-2 border rounded mt-1 mb-4" placeholder="password" />
        <br/>
        <button className="w-full bg-yellow-500 text-white py-2 rounded mb-4">Login</button>
        <br/>
        <p className="text-black text-sm font-bold">Join a fleet?<span className="text-yellow-500 cursor-pointer"> Register as a captain</span></p>
        <br/>
        <br/>
        <br/>
        
        <button className="w-full bg-black text-white py-2 rounded mt-4">Sign in as user</button>
      </div>
    
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
