import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faAward, faTaxi, faStar } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

const Rating = () => {
  return (
    <div className='bg-white bg-cover bg-center bg-no-repeat'>
        {/* Row 1 */}
        <div className='bg-black p-10 mx-10 text-white flex justify-center rounded-xl mr-30 ml-30 mt-30 relative z-10'>
            {/* Section 1*/}
            <div className="flex items-center space-x-3 border-r pr-6 pl-1">
                <div className="bg-white p-3 rounded-full items-center">
                    <FontAwesomeIcon icon={faSmile} className="text-yellow-500 text-2xl" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold">530 +</h2>
                    <p className="text-gray-300">Happy Raider</p>
                </div>
            </div>
            {/* Section 2*/}
            <div className="flex items-center space-x-3 border-r pr-6 pl-6">
                <div className="bg-white p-3 rounded-full">
                    <FontAwesomeIcon icon={faAward} className="text-yellow-500 text-2xl" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold">10 +</h2>
                    <p className="text-gray-300">Riding Award</p>
                </div>
            </div>
            {/* Section 3*/}
            <div className="flex items-center space-x-3 border-r pr-6 pl-6">
                <div className="bg-white p-3 rounded-full">
                    <FontAwesomeIcon icon={faTaxi} className="text-yellow-500 text-2xl" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold">5230 +</h2>
                    <p className="text-gray-300">Total Cars</p>
                </div>
            </div>
            {/* Section 4*/}
            <div className="flex items-center space-x-3 pl-6">
                <div className="bg-white p-3 rounded-full">
                    <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-2xl" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold">2220 +</h2>
                    <p className="text-gray-300">5 Star Reviews</p>
                </div>
            </div>
        </div>

        {/* Row 2 */}
        <div className='bg-yellow-500 p-34 text-white grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-[-50px]'>
            {/* Left Section */}
            <div className="text-left max-w-lg">
                <h1 className="text-5xl font-bold text-black">
                  Loved By Thousands <br /> Of Riders And Other People.
                </h1>
                <p className="text-gray-800 mt-5 text-lg">
                  Suspendisse ultrice gravida dictum fusce placerat ultricies integer
                  quis auctor elit sed vulputate mi sit. Auctor eu augue ut lectus arcu
                  bibendum at varius vel.
                </p>
            </div>

            {/* Right Section */}
            <div className="w-full">
                <Swiper
                    modules={[Navigation, Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    className="w-full"
                >
                    {/* Testimonial 1 */}
                    <SwiperSlide>
                        <div className="bg-white p-6 rounded-lg shadow-md text-black">
                            <div className="flex items-center space-x-4">
                                <img src="https://randomuser.me/api/portraits/women/50.jpg" 
                                     alt="Customer" 
                                     className="w-12 h-12 rounded-full"
                                />
                                <div>
                                    <h3 className="font-bold">Courtney Henry</h3>
                                    <p className="text-gray-600 text-sm">Happy Customer</p>
                                </div>
                            </div>
                            <p className="mt-4 text-gray-700">
                                "Amazing service, smooth ride! Highly recommend!"
                            </p>
                        </div>
                    </SwiperSlide>

                    {/* Testimonial 2 */}
                    <SwiperSlide>
                        <div className="bg-white p-6 rounded-lg shadow-md text-black">
                            <div className="flex items-center space-x-4">
                                <img src="https://randomuser.me/api/portraits/men/50.jpg" 
                                     alt="Customer" 
                                     className="w-12 h-12 rounded-full"
                                />
                                <div>
                                    <h3 className="font-bold">Robert Fox</h3>
                                    <p className="text-gray-600 text-sm">Happy Customer</p>
                                </div>
                            </div>
                            <p className="mt-4 text-gray-700">
                                "Fast and reliable! Will definitely use again."
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </div>
  )
}

export default Rating;
