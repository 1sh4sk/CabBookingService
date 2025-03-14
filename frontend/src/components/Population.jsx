import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Population = () => {
  return (
    <div className="bg-[rgb(236,235,230)] min-h-screen bg-cover bg-center bg-no-repeat grid grid col-1 md:grid col-2 gap-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
    {/*Column 1*/}
    <div className="p-4 ml-10 mt-10 mb-10">
        <div>
            <h1 className="text-[25px] font-bold">Our Popular Services</h1>
            <h6>Discover our most popular services designed to make your travel seamless and enjoyable. From convenient ride-sharing to personalized taxi options, we’ve got you covered for every journey!</h6>
        </div>
        <hr className="mt-5 border-gray-400" />

        {/* Ride Sharing */}
        <div className="mt-5 mb-5 ml-10 flex items-center space-x-4">
            <div className="bg-yellow-500 p-3 rounded-full flex items-center justify-center">
                <i className="fas fa-car-side text-3xl text-white"></i> 
            </div>
            <div className='ml-10'>
                <h1 className="text-xl font-semibold">Ride Sharing</h1>
                <h6 className="text-gray-600">Share the Journey, Share the Joy – Affordable and Convenient Ride Sharing for Everyone!</h6>
            </div>
        </div>
        <hr className="mt-5 border-gray-400" />
        <hr className="mt-5 border-gray-400" />

        {/* Taxi Sharing */}
        <div className="mt-5 mb-5 ml-10 flex items-center space-x-4">
            <div className="bg-yellow-500 p-3 rounded-full flex items-center justify-center">
                <i className="fas fa-taxi text-3xl text-white"></i> 
            </div>
            <div className='ml-10'>
                <h1 className="text-xl font-semibold">Taxi Sharing</h1>
                <h6 className="text-gray-600">Travel smart, save more – enjoy shared taxi rides! Experience hassle-free journeys while splitting costs with fellow travelers.</h6>
            </div>
        </div>
        <hr className="mt-5 border-gray-400" />
        <hr className="mt-5 border-gray-400" />

        {/* Taxi Reserved */}
        <div className="mt-5 mb-5 ml-10 flex items-center space-x-4">
            <div className="bg-yellow-500 p-3 rounded-full flex items-center justify-center">
                <i className="fas fa-car text-3xl text-white"></i> 
            </div>
            <div className='ml-10'>
                <h1 className="text-xl font-semibold">Taxi Reserved</h1>
                <h6 className="text-gray-600">Your Ride, Your Rules – Book a Reserved Taxi for a Personalized Travel Experience!</h6>
            </div>
        </div>
        <hr className="mt-5 border-gray-400" />
        <hr className="mt-5 border-gray-400" />

        {/* Intercity Service */}
        <div className="mt-5 mb-5 ml-10 flex items-center space-x-4">
            <div className="bg-yellow-500 p-3 rounded-full flex items-center justify-center">
                <i className="fas fa-route text-3xl text-white"></i> 
            </div>
            <div className='ml-10'>
                <h1 className="text-xl font-semibold">Intercity Service</h1>
                <h6 className="text-gray-600">Seamless city-to-city travel – reliable and comfortable rides! Enjoy stress-free journeys between destinations with our trusted services.</h6>
            </div>
        </div>
        <hr className="mt-5 border-gray-400" />
    </div>

    {/* Column 2  */}
    <div className="p-4 mr-10 mt-10 mb-10">
        {/* button for get a service*/}
        <div className='flex justify-end mr-20 mt-5'>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg flex">
                Get a Service <span className="ml-2">➜</span>
            </button>
        </div>
        {/*row 1 */}
        <hr className="mt-11.5 border-gray-400" />
        <div className="mt-5 mb-4 ml-10 flex items-center space-x-50">
        <div className="ml-5">
            <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center">
                View Details <span className="ml-2">➜</span>
            </button>
        </div>
        <img src="https://images.pexels.com/photos/314374/pexels-photo-314374.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Taxi Service" className="w-40 h-20  mr-30"/>
        </div>
        <hr className="mt-1 border-gray-400" />
         {/*row 2 */}
        <hr className="mt-5 border-gray-400" />
        <div className="mt-5 mb-4 ml-10 flex items-center space-x-50">
        <div className="ml-5">
            <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center">
                View Details <span className="ml-2">➜</span>
            </button>
        </div>
        <img src="https://images.pexels.com/photos/2399254/pexels-photo-2399254.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Taxi Service" className="w-40 h-20  mr-30"/>
        </div>
        <hr className="mt-1 border-gray-400" />
         {/*row 3 */}
        <hr className="mt-5 border-gray-400" />
        <div className="mt-5 mb-4 ml-10 flex items-center space-x-50">
        <div className="ml-5">
            <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center">
                View Details <span className="ml-2">➜</span>
            </button>
        </div>
        <img src="https://images.pexels.com/photos/1448598/pexels-photo-1448598.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Taxi Service" className="w-40 h-20 mr-30"/>
        </div>
        <hr className="mt-1 border-gray-400" />
         {/*row 4 */}
        <hr className="mt-5 border-gray-400" />
        <div className="mt-5 mb-4 ml-10 flex items-center space-x-50">
        <div className="ml-5">
            <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center">
                View Details <span className="ml-2">➜</span>
            </button>
        </div>
        <img src="https://images.pexels.com/photos/8247/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" alt="Taxi Service" className="w-40 h-20 mr-30"/>
        </div>
        <hr className='border-gray-400'/>

    </div>
    </div>

    </div>
  
  )
}

export default Population;