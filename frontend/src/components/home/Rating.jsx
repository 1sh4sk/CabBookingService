import React, { useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faAward, faTaxi, faStar, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

const Rating = () => {
  const swiperRef = useRef(null);  // Swiper reference

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className='bg-white bg-cover bg-center bg-no-repeat'>
      {/* Row 1 */}
      <div className='bg-[url("/src/assets/Background.png")] bg-cover bg-center bg-no-repeat p-10 sm:p-6 md:p-8 lg:p-10 mx-5 sm:mx-4 md:mx-6 lg:mx-30 text-white  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  lg:flex-nowrap md:justify-between gap-4 md:gap-6 lg:gap-10 rounded-xl mt-10 lg:mt-20 relative z-10'>
         {/* Section 1  */}
        <div className="flex items-center space-x-3 pr-4 sm:pr-3 md:pr-6 pl-2">
          <div className="bg-white p-3 rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faSmile} className="text-yellow-500 text-xl sm:text-2xl" />
          </div>
          <div>
            <h2 className="text-lg sm:text-2xl font-bold">530 +</h2>
            <p className="text-gray-300 text-sm sm:text-base">Happy Raider</p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex items-center space-x-3 pr-4 sm:pr-3 md:pr-6 pl-2">
          <div className="bg-white p-3 rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faAward} className="text-yellow-500 text-xl sm:text-2xl" />
          </div>
          <div>
            <h2 className="text-lg sm:text-2xl font-bold">10 +</h2>
            <p className="text-gray-300 text-sm sm:text-base">Riding Award</p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex items-center space-x-3 pr-4 sm:pr-3 md:pr-6 pl-2">
          <div className="bg-white p-3 rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faTaxi} className="text-yellow-500 text-xl sm:text-2xl" />
          </div>
          <div>
            <h2 className="text-lg sm:text-2xl font-bold">5230 +</h2>
            <p className="text-gray-300 text-sm sm:text-base">Total Cars</p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="flex items-center space-x-3 pl-2">
          <div className="bg-white p-3 rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-xl sm:text-2xl" />
          </div>
          <div>
            <h2 className="text-lg sm:text-2xl font-bold">2220 +</h2>
            <p className="text-gray-300 text-sm sm:text-base">5 Star Reviews</p>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className='bg-yellow-500 p-6 sm:p-15 md:p-20 lg:p-30 text-white grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-[-30px] sm:mt-[-50px]'>
        {/* Left Section */}
        <div className="text-left max-w-lg">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
            Loved By Thousands <br /> Of Riders And Other People.
          </h1>
          <p className="text-gray-800 mt-4 sm:mt-5 text-base sm:text-lg">
            Suspendisse ultrico gravida dictum fusce placerat ultricies Integer quis auctor elit sed vulputate mi sit. Auctor eu augue ut lectus arcu bibendum at varius vel.
          </p>

          {/* Navigation Buttons */}
          <div className="flex space-x-4 mt-6">
            <button
              onClick={handlePrev}
              className="bg-white text-black px-4 py-2 rounded-full hover:bg-black hover:text-white"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
              onClick={handleNext}
              className="bg-white text-black px-4 py-2 rounded-full hover:bg-black hover:text-white"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full">
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            className="w-full"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg text-black">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://randomuser.me/api/portraits/women/50.jpg"
                    alt="Customer"
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full"
                  />
                  <div>
                    <h3 className="font-bold text-base sm:text-lg">Courtney Henry</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Happy Customer</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                  "Massa tincidunt dui id ornare lectus sit amet est placerat."
                </p>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg text-black">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://randomuser.me/api/portraits/men/50.jpg"
                    alt="Customer"
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full"
                  />
                  <div>
                    <h3 className="font-bold text-base sm:text-lg">John Doe</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Happy Customer</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                  "Mauris augue neque gravida in fermentum turpis egestas."
                </p>
              </div>
            </SwiperSlide>
            {/* Slide 3 */}
            <SwiperSlide>
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg text-black">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://randomuser.me/api/portraits/women/50.jpg"
                    alt="Customer"
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full"
                  />
                  <div>
                    <h3 className="font-bold text-base sm:text-lg">Courtney Henry</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Happy Customer</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                  "Massa tincidunt dui id ornare lectus sit amet est placerat."
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Rating;
