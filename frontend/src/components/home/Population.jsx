// import React from 'react';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// const Population = () => {
//   return (
//     <div className="bg-[#F8F6F1] min-h-screen bg-cover bg-center bg-no-repeat sm:p-6 md:p-10">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:mx-20">

//         {/* Row 1 */}
//         <div className=" p-4 ">
//           <h1 className="text-2xl md:text-[25px] font-bold">Our Popular Services</h1>
//           <h6 className="text-gray-600">
//             Discover our most popular services designed to make your travel seamless and enjoyable. 
//             From convenient ride-sharing to personalized taxi options, we’ve got you covered for every journey!
//           </h6>
//         </div>
//         <div className=" p-4  flex flex-col sm:flex-row items-center sm:justify-between space-y-2 sm:space-y-0 md:justify-end">
//           <button className="bg-yellow-500 text-white px-3 py-2 rounded-lg flex items-center w-full  sm:w-auto justify-center">
//             Get a Service <span className="ml-2">➜</span>
//           </button>
//         </div>

//         {/* Horizontal Line */}
//         <hr className="col-span-1 sm:col-span-2 border-gray-300 border-t-2 my-2" />

//         {/* Service 1 - Ride Sharing */}
//         <div className=" p-4  flex items-center space-x-4">
//           <div className="bg-yellow-500 p-3 rounded-full flex items-center justify-center">
//             <img src='/src/assets/rideshare.png' className='w-15'/>
//           </div>
//           <div>
//             <h1 className="text-lg md:text-xl font-semibold">Ride Sharing</h1>
//             <h6 className="text-gray-600">Share the Journey, Share the Joy – Affordable and Convenient Ride Sharing for Everyone!</h6>
//           </div>
//         </div>
//         <div className=" p-4  flex flex-col sm:flex-row items-center sm:justify-between space-y-2 sm:space-y-0">
//           <button className="bg-black text-white px-3 py-2 rounded-lg flex items-center w-full sm:w-auto justify-center">
//             View Details <span className="ml-2">➜</span>
//           </button>
//           <img src="/src/assets/serv1.png.png" 
//                alt="Taxi Service" className="w-full sm:w-50 h-30 sm:object-cover md:w-30 h-30 lg:w-60 h-20" />
//         </div>

//         <hr className="col-span-1 sm:col-span-2 border-gray-300 border-t-2 my-2" />

//         {/* Service 2 - Taxi Sharing */}
//         <div className=" p-4  flex items-center space-x-4">
//           <div className="bg-yellow-500 p-3 rounded-full flex items-center justify-center">
//           <img src='/src/assets/Taxisharing.png' className='w-15'/>
//           </div>
//           <div>
//             <h1 className="text-lg md:text-xl font-semibold">Taxi Sharing</h1>
//             <h6 className="text-gray-600">Travel smart, save more – enjoy shared taxi rides!</h6>
//           </div>
//         </div>
//         <div className=" p-4  flex flex-col sm:flex-row items-center sm:justify-between space-y-2 sm:space-y-0">
//           <button className="bg-black text-white px-3 py-2 rounded-lg flex items-center w-full sm:w-auto justify-center">
//             View Details <span className="ml-2">➜</span>
//           </button>
//           <img src="/src/assets/serv2.png.png" 
//                alt="Taxi Service" className="w-full sm:w-50 h-30 sm:object-cover md:w-30 h-30 lg:w-60 h-20" />
//         </div>

//         <hr className="col-span-1 sm:col-span-2 border-gray-300 border-t-2 my-2" />

//         {/* Service 3 - Taxi Reserved */}
//         <div className=" p-4  flex items-center space-x-4">
//           <div className="bg-yellow-500 p-3 rounded-full flex items-center justify-center">
//           <img src='/src/assets/Taxireserved.png' className='w-15'/>
//           </div>
//           <div>
//             <h1 className="text-lg md:text-xl font-semibold">Taxi Reserved</h1>
//             <h6 className="text-gray-600">Your Ride, Your Rules – Book a Reserved Taxi for a Personalized Travel Experience!</h6>
//           </div>
//         </div>
//         <div className=" p-4  flex flex-col sm:flex-row items-center sm:justify-between space-y-2 sm:space-y-0">
//           <button className="bg-black text-white px-3 py-2 rounded-lg flex items-center w-full sm:w-auto justify-center">
//             View Details <span className="ml-2">➜</span>
//           </button>
//           <img src="/src/assets/serv3.png.png" 
//                alt="Taxi Service" className="w-full sm:w-50 h-30 sm:object-cover md:w-30 h-30 lg:w-60 h-20 " />
//         </div>

//         <hr className="col-span-1 sm:col-span-2 border-gray-300 border-t-2 my-2" />

//         {/* Service 4 - Intercity Service */}
//         <div className=" p-4  flex items-center space-x-4">
//           <div className="bg-yellow-500 p-3 rounded-full flex items-center justify-center">
//           <img src='/src/assets/IntercityService.png' className='w-15'/>
//           </div>
//           <div>
//             <h1 className="text-lg md:text-xl font-semibold">Intercity Service</h1>
//             <h6 className="text-gray-600">Seamless city-to-city travel – reliable and comfortable rides!</h6>
//           </div>
//         </div>
//         <div className=" p-4  flex flex-col sm:flex-row items-center sm:justify-between space-y-2 sm:space-y-0">
//           <button className="bg-black text-white px-3 py-2 rounded-lg flex items-center w-full sm:w-auto justify-center">
//             View Details <span className="ml-2">➜</span>
//           </button>
//           <img src="/src/assets/serv4.png.png" 
//                alt="Taxi Service" className="w-full sm:w-50 h-30 sm:object-cover md:w-30 h-30 lg:w-60 h-20" />
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Population;

// import React from 'react';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// const Population = () => {
//   return (
//     <div className="bg-[#F8F6F1] min-h-screen bg-cover bg-center bg-no-repeat sm:p-6 md:p-10">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:mx-15">

//         {/* Row 1 */}
//         <div className=" p-4 ">
//           <h1 className="text-2xl md:text-[25px] font-bold">Our Popular Services</h1>
//           <h6 className="text-gray-600">
//             Discover our most popular services designed to make your travel seamless and enjoyable. 
//             From convenient ride-sharing to personalized taxi options, we’ve got you covered for every journey!
//           </h6>
//         </div>
//         <div className=" p-4  flex flex-col sm:flex-row items-center sm:justify-between space-y-2 sm:space-y-0 md:justify-end">
//           <button className="bg-yellow-500 text-white px-3 py-2 rounded-lg flex items-center w-full  sm:w-auto justify-center">
//             Get a Service <span className="ml-2">➜</span>
//           </button>
//         </div>

//         {/* Horizontal Line */}
//         <hr className="col-span-1 sm:col-span-2 border-gray-300 border-t-2 my-2" />

//         {/* Service 1 - Ride Sharing */}
//         <div className=" p-4  flex items-center space-x-4">
//           <div className="bg-yellow-500 p-3 rounded-full flex items-center justify-center">
//             <img src='/src/assets/rideshare.png' className='w-15'/>
//           </div>
//           <div>
//             <h1 className="text-lg md:text-xl font-semibold">Ride Sharing</h1>
//             <h6 className="text-gray-600">Share the Journey, Share the Joy – Affordable and Convenient Ride Sharing for Everyone!</h6>
//           </div>
//         </div>
//         <div className=" p-4  flex flex-col sm:flex-row items-center sm:justify-between space-y-2 sm:space-y-0">
//           <button className="bg-black text-white px-3 py-2 rounded-lg flex items-center w-full sm:w-auto justify-center">
//             View Details <span className="ml-2">➜</span>
//           </button>
//           <img src="/src/assets/serv1.png.png" 
//                alt="Taxi Service" className="w-full sm:w-50 h-30 sm:object-cover md:w-30 h-30 lg:w-60 h-20 hidden md:block" />
//         </div>

//         <hr className="col-span-1 sm:col-span-2 border-gray-300 border-t-2 my-2" />

//         {/* Service 2 - Taxi Sharing */}
//         <div className=" p-4  flex items-center space-x-4">
//           <div className="bg-yellow-500 p-3 rounded-full flex items-center justify-center">
//           <img src='/src/assets/Taxisharing.png' className='w-15'/>
//           </div>
//           <div>
//             <h1 className="text-lg md:text-xl font-semibold">Taxi Sharing</h1>
//             <h6 className="text-gray-600">Travel smart, save more – enjoy shared taxi rides!</h6>
//           </div>
//         </div>
//         <div className=" p-4  flex flex-col sm:flex-row items-center sm:justify-between space-y-2 sm:space-y-0">
//           <button className="bg-black text-white px-3 py-2 rounded-lg flex items-center w-full sm:w-auto justify-center">
//             View Details <span className="ml-2">➜</span>
//           </button>
//           <img src="/src/assets/serv2.png.png" 
//                alt="Taxi Service" className="w-full sm:w-50 h-30 sm:object-cover md:w-30 h-30 lg:w-60 h-20 hidden md:block" />
//         </div>

//         <hr className="col-span-1 sm:col-span-2 border-gray-300 border-t-2 my-2" />

//         {/* Service 3 - Taxi Reserved */}
//         <div className=" p-4  flex items-center space-x-4">
//           <div className="bg-yellow-500 p-3 rounded-full flex items-center justify-center">
//           <img src='/src/assets/Taxireserved.png' className='w-15'/>
//           </div>
//           <div>
//             <h1 className="text-lg md:text-xl font-semibold">Taxi Reserved</h1>
//             <h6 className="text-gray-600">Your Ride, Your Rules – Book a Reserved Taxi for a Personalized Travel Experience!</h6>
//           </div>
//         </div>
//         <div className=" p-4  flex flex-col sm:flex-row items-center sm:justify-between space-y-2 sm:space-y-0">
//           <button className="bg-black text-white px-3 py-2 rounded-lg flex items-center w-full sm:w-auto justify-center">
//             View Details <span className="ml-2">➜</span>
//           </button>
//           <img src="/src/assets/serv3.png.png" 
//                alt="Taxi Service" className="w-full sm:w-50 h-30 sm:object-cover md:w-30 h-30 lg:w-60 h-20 hidden md:block " />
//         </div>

//         <hr className="col-span-1 sm:col-span-2 border-gray-300 border-t-2 my-2" />

//         {/* Service 4 - Intercity Service */}
//         <div className=" p-4  flex items-center space-x-4">
//           <div className="bg-yellow-500 p-3 rounded-full flex items-center justify-center">
//           <img src='/src/assets/IntercityService.png' className='w-15'/>
//           </div>
//           <div>
//             <h1 className="text-lg md:text-xl font-semibold">Intercity Service</h1>
//             <h6 className="text-gray-600">Seamless city-to-city travel – reliable and comfortable rides!</h6>
//           </div>
//         </div>
//         <div className=" p-4  flex flex-col sm:flex-row items-center sm:justify-between space-y-2 sm:space-y-0">
//           <button className="bg-black text-white px-3 py-2 rounded-lg flex items-center w-full sm:w-auto justify-center">
//             View Details <span className="ml-2">➜</span>
//           </button>
//           <img src="/src/assets/serv4.png.png" 
//                alt="Taxi Service" className="w-full sm:w-50 h-30 sm:object-cover md:w-30 h-30 lg:w-60 h-20 hidden md:block" />
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Population;
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Population = () => {
  return (
    <div className="relative min-h-screen sm:p-6 md:p-10">
      {/* Background image with opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{ backgroundImage: `url('/src/assets/population.png')` }}
      ></div>

      {/* Content */}
      <div className="relative z-10  min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:mx-15">

          {/* Row 1 */}
          <div className="p-4">
            <h1 className="text-2xl md:text-[25px] font-bold">Our Popular Services</h1>
            <h6 className="text-gray-600">
              Discover our most popular services designed to make your travel seamless and enjoyable. 
              From convenient ride-sharing to personalized taxi options, we’ve got you covered for every journey!
            </h6>
            
          </div>
          <div className="p-4 flex flex-col sm:flex-row items-center sm:justify-between space-y-2 sm:space-y-0 md:justify-end">
            <button className="bg-yellow-500 text-white px-3 py-2 rounded-lg flex items-center w-full sm:w-auto justify-center cursor-pointer mr-5 sm:mr-auto md:mr-5">
              Get a Service <span className="ml-2">➜</span>
            </button>
            {/* Golden arrow image */}
            <img 
              src="/src/assets/arrow-gold.png.png"  
              alt="Golden Arrow" 
              className="absolute top-[-30px] left-[50%] transform -translate-x-1/2 w-20 sm:w-24 md:w-28 hidden lg:block"
              style={{ top: '50px', left: '70%' }} 
            />
          </div>

          {/* Horizontal Line */}
          <hr className="col-span-1 sm:col-span-2 border-gray-300 border-t-2 my-2" />

          {/* Service 1 - Ride Sharing */}
          <div className="p-4 flex items-center space-x-4">
            <div className="bg-yellow-500 p-3 rounded-full flex items-center justify-center">
              <img src='/src/assets/rideshare.png' className='w-15'/>
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-semibold">Ride Sharing</h1>
              <h6 className="text-gray-600">Share the Journey, Share the Joy – Affordable and Convenient Ride Sharing for Everyone!</h6>
            </div>
          </div>
          <div className="p-4 flex flex-col sm:flex-row items-center sm:justify-between space-y-2 sm:space-y-0">
            <button className="bg-black text-white px-3 py-2 rounded-lg flex items-center w-full sm:w-auto justify-center cursor-pointer">
              View Details <span className="ml-2">➜</span>
            </button>
            <img src="/src/assets/serv1.png.png" 
                 alt="Taxi Service" className="w-full sm:w-50 h-30 sm:object-cover md:w-30 h-30 lg:w-60 h-20 hidden md:block" />
          </div>

          <hr className="col-span-1 sm:col-span-2 border-gray-300 border-t-2 my-2" />

          {/* Service 2 - Taxi Sharing */}
          <div className="p-4 flex items-center space-x-4">
            <div className="bg-yellow-500 p-3 rounded-full flex items-center justify-center">
              <img src='/src/assets/Taxisharing.png' className='w-15'/>
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-semibold">Taxi Sharing</h1>
              <h6 className="text-gray-600">Travel smart, save more – enjoy shared taxi rides!</h6>
            </div>
          </div>
          <div className="p-4 flex flex-col sm:flex-row items-center sm:justify-between space-y-2 sm:space-y-0">
            <button className="bg-black text-white px-3 py-2 rounded-lg flex items-center w-full sm:w-auto justify-center cursor-pointer">
              View Details <span className="ml-2">➜</span>
            </button>
            <img src="/src/assets/serv2.png.png" 
                 alt="Taxi Service" className="w-full sm:w-50 h-30 sm:object-cover md:w-30 h-30 lg:w-60 h-20 hidden md:block" />
          </div>

          <hr className="col-span-1 sm:col-span-2 border-gray-300 border-t-2 my-2" />

          {/* Service 3 - Taxi Reserved */}
          <div className="p-4 flex items-center space-x-4">
            <div className="bg-yellow-500 p-3 rounded-full flex items-center justify-center">
              <img src='/src/assets/Taxireserved.png' className='w-15'/>
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-semibold">Taxi Reserved</h1>
              <h6 className="text-gray-600">Your Ride, Your Rules – Book a Reserved Taxi for a Personalized Travel Experience!</h6>
            </div>
          </div>
          <div className="p-4 flex flex-col sm:flex-row items-center sm:justify-between space-y-2 sm:space-y-0">
            <button className="bg-black text-white px-3 py-2 rounded-lg flex items-center w-full sm:w-auto justify-center cursor-pointer">
              View Details <span className="ml-2">➜</span>
            </button>
            <img src="/src/assets/serv3.png.png" 
                 alt="Taxi Service" className="w-full sm:w-50 h-30 sm:object-cover md:w-30 h-30 lg:w-60 h-20 hidden md:block " />
          </div>

          <hr className="col-span-1 sm:col-span-2 border-gray-300 border-t-2 my-2" />

          {/* Service 4 - Intercity Service */}
          <div className="p-4 flex items-center space-x-4">
            <div className="bg-yellow-500 p-3 rounded-full flex items-center justify-center">
              <img src='/src/assets/IntercityService.png' className='w-15'/>
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-semibold">Intercity Service</h1>
              <h6 className="text-gray-600">Seamless city-to-city travel – reliable and comfortable rides!</h6>
            </div>
          </div>
          <div className="p-4 flex flex-col sm:flex-row items-center sm:justify-between space-y-2 sm:space-y-0">
            <button className="bg-black text-white px-3 py-2 rounded-lg flex items-center w-full sm:w-auto justify-center cursor-pointer">
              View Details <span className="ml-2">➜</span>
            </button>
            <img src="/src/assets/serv4.png.png" 
                 alt="Taxi Service" className="w-full sm:w-50 h-30 sm:object-cover md:w-30 h-30 lg:w-60 h-20 hidden md:block" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Population;