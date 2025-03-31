
import React from 'react';
import './Error.css';
import { useNavigate } from 'react-router';

const Error = () => {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-600 text-white relative overflow-hidden">

      {/* Error Code and Message */}
      <h1 className="text-7xl md:text-9xl font-extrabold mt-8 z-10 drop-shadow-lg">404</h1>
      <h2 className="text-3xl md:text-4xl font-semibold mt-4 z-10">Oops! Page Not Found</h2>
      <p className="mt-2 text-lg md:text-xl text-gray-200 text-center z-10">
        The page you are looking for doesn't exist or has been moved.
      </p>

      {/* Button */}
      <div className='flex gap-2'>
        <button onClick={() => navigate(-1)}
          className="mt-6 bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg shadow-lg transition transform hover:scale-105 z-10"
        >
          Go Back  🚖
        </button>
        <button onClick={() => navigate('/')}
          className="mt-6 bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg shadow-lg transition transform hover:scale-105 z-10"
        >
          Go to Home
        </button>
      </div>

      {/* Road and Car */}
      <div className="taxi bottom-2">
        <img src='/src/assets/taxicar.gif' alt='car' className="w-28" />
      </div>
      <div className="road w-full absolute bottom-0 h-[50px] bg-gray-800 z-0 overflow-hidden">

      </div>

    </div>
  );
};

export default Error;
