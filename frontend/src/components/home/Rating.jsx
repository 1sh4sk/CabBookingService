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

  const stats = [
    { icon: faSmile, value: "530 +", label: "Happy Raider" },
    { icon: faAward, value: "10 +", label: "Riding Award" },
    { icon: faTaxi, value: "5230 +", label: "Total Cars" },
    { icon: faStar, value: "2220 +", label: "5 Star Reviews" }
  ];


  return (
    <div id="testimonials" className='bg-white bg-cover bg-center bg-no-repeat'>


      <div className="bg-[url('/src/assets/rating-bg.svg')] bg-cover bg-center bg-no-repeat p-10 p sm:p-6 md:p-8 lg:p-10 mx-15 sm:mx-4 md:mx-6 lg:mx-30 text-white flex flex-wrap gap-7 sm:flex-nowrap rounded-2xl mt-10 relative z-10 items-center justify-center ">

        {stats.map((stat, index) => (
          <div key={index} className="flex gap-3 w-52 sm:w-fit xl:gap-4  ">
            <div className="bg-white p-3 min-w-12 h-12  rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={stat.icon} className="text-yellow-500 text-xl sm:text-2xl" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-lg xl:text-2xl font-bold">{stat.value}</h2>
              <p className="text-gray-300 text-sm xl:text-base">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Row 2 */}
      <div className='bg-yellow-500 p-6 pt-16 sm:p-15 md:py-30 xl:p-30 text-white grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-[-30px] sm:mt-[-50px]'>
        {/* Left Section */}
        <div className="text-left max-w-lg">
          <h1 className="text-3xl sm:text-4xl xl:text-6xl leading-snug font-bold text-black font-epilogue">
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
