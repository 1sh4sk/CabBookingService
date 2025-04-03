import React from 'react';
import 'F:/Projects/CabBooking-Frontend_Responsive/taxi/src/component/Error.css';

const CaptainApproval = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-yellow-300 via-orange-300 to-yellow-300">
      <div className="w-full max-w-sm flex flex-col items-center justify-center p-6 bg-white shadow-2xl rounded-3xl border border-gray-200">
        <img 
          src="/src/component/logo.png" 
          alt="TripMate Logo" 
          className="w-24 h-24 rounded-full mb-4 shadow-md border border-gray-300"
        />
        <p className="text-green-700 text-xl font-bold text-center">
          Registration Submitted!  
          <br />Waiting for Admin Approval.
        </p>
        <button className="mt-5 bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 text-white font-semibold py-2 px-6 rounded-lg shadow-md">
          Back
        </button>
      </div>
      
      <div className="taxi bottom-2">
        <img src='/src/assets/taxicar.gif' alt='car' className="w-28" />
      </div>

      <div className="road w-full absolute bottom-0 h-[50px] bg-gray-900 shadow-inner">
      </div>
    </div>
  );
};

export default CaptainApproval;
