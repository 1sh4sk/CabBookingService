import React from 'react';

const CaptainApproval = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-yellow-300 via-orange-300 to-yellow-300">
      <div className="w-full max-w-lg flex flex-col items-center justify-center p-10 bg-white shadow-2xl rounded-2xl border border-gray-200">
        <h1 className='font-epilogue text-color-yellow font-bold text-2xl mb-2'>TripMate</h1>
        <p className="text-gray-700 text-lg font-regular text-center">
          Registration Successfully, Waiting for Admin Approval!
        </p>

        <p className='text-gray-600 text-center mt-2 text-sm'>you will receive an email when the admin approves your request. kindly check your mail for more details.</p>

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
