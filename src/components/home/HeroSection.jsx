import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Typewriter from "typewriter-effect";
import { FaArrowDownLong } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="h-screen relative" name='home'>
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]} // Add modules for pagination and navigation
        spaceBetween={0} // Space between slides
        slidesPerView={1} // Number of slides visible at a time
        
        loop={true} // Enable infinite looping
        className="h-screen z-0 absolute"
        speed={600}
      >
        <SwiperSlide>
          <img src="/slide1.jpg" alt="Slide 1" className="h-screen w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slide2.jpg" alt="Slide 2" className="h-screen w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slide3.jpg" alt="Slide 3" className="h-screen w-full" />
        </SwiperSlide>
        
      </Swiper>
      <div className="z-10 absolute top-14 flex flex-col items-center sm:justify-center sm:gap-10 md:gap-36 lg:gap-64 xl:gap-96 w-full sm:flex-row h-full   ">
        {/* introduction */}
        <div className="text-yellow-500 font-semibold flex flex-col  items-center text-xl space-y-3 order-2  mt-7 sm:order-1 sm:mb-28 md:text-2xl lg:text-3xl">
             <p className="text-2xl  sm:text-4xl">Hi, I am</p>
             <h1 className="text-3xl  sm:text-6xl">Muneeb👋</h1>
             <Typewriter

              options={{
                strings: ["Web Developer", "Tech Enthusiast", "Nature Lover"],
                autoStart: true,
                loop: true,
                delay: 50
              }}
            />
        </div>
        {/* image */}
        <div className="order-1 mt-10 sm:order-2 sm:mb-28">
            <img src="/my.jpg" alt="" className="h-40 w-40 lg:h-60 lg:w-60" data-aos="zoom-in" />
        </div>
      </div>
      <div className="absolute bottom-4 z-10 w-full flex justify-center">
          <div className="text-5xl font-bold text-blue-500 animate-bounce  mx-auto hover:text-green-300 cursor-pointer">
          <FaArrowDownLong />
          </div>
      </div>
    </div>
  );
};

export default HeroSection;
