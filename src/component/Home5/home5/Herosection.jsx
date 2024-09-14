import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { GoArrowLeft, GoArrowRight } from "react-icons/go"; // Import icons
import '../../../styles/herosection.css'
import Image from '../../../assets/home5/herosection/Image.svg'; // Image path
import BG from '../../../assets/home5/herosection/BG.svg'; // Background image path

const heroSection = [
  {
    img: Image,
    title: 'WELCOME TO SHOPERY',
    headingFirstPart: 'Fresh & Healthy',
    headingSecondPart: 'Organic Food',
    sale: '30% OFF',
    p: 'Free shipping on all your orders. We deliver, you enjoy.',
  },
  {
    img: Image,
    title: 'WELCOME TO SHOPERY',
    headingFirstPart: 'Fresh & Healthy',
    headingSecondPart: 'Organic Food',
    sale: '35% OFF',
    p: 'Free shipping on all your orders. We deliver, you enjoy.',
  },
  {
    img: Image,
    title: 'WELCOME TO SHOPERY',
    headingFirstPart: 'Fresh & Healthy',
    headingSecondPart: 'Organic Food',
    sale: '40% OFF',
    p: 'Free shipping on all your orders. We deliver, you enjoy.',
  },
];

const Herosection = () => {
  return (
    <section>
      <div
        className='relative w-full h-auto mx-auto bg-[#EDF2EE]'
        style={{ backgroundImage: `url(${BG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="relative flex flex-col md:flex-row items-center mx-auto w-full h-full">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: '.custom-swiper-button-next',
              prevEl: '.custom-swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              el: '.custom-swiper-pagination',  // Correct class for pagination
              bulletClass: 'swiper-pagination-bullet',  // Correct bullet class
              bulletActiveClass: 'swiper-pagination-bullet-active',  // Correct active bullet class
            }}
            className="w-full md:w-10/12 h-full"
          >
            {heroSection.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col md:grid md:grid-cols-2 md:gap-4 items-center p-6">
                  {/* Left Side: Image */}
                  <div className="flex justify-center mb-4 md:mb-0">
                    <img
                      src={slide.img}
                      alt={slide.headingFirstPart}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Right Side: Text */}
                  <div className="space-y-4 text-center md:text-left">
                    <p className="text-sm text-green-500">{slide.title}</p>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
                      {slide.headingFirstPart} <br /> {slide.headingSecondPart}
                    </h1>
                    <p className="text-lg text-gray-600">
                      Sale up to{' '}
                      <span className="text-[rgb(255,138,0)] font-bold">{slide.sale}</span>
                    </p>
                    <p className="text-gray-600 text-sm">{slide.p}</p>
                    <button className="px-4 py-2 flex items-center gap-2 text-white rounded-full shadow-lg bg-[rgb(0,178,7)] hover:shadow-[2px_4px_6px_8px_rgba(0,_178,_7,_0.1)]">
                      <span className='font-poppins text-white-300'>Shop now</span>
                      <span className='font-poppins text-white-300'><GoArrowRight /></span>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Left Navigation Button */}
          <div className="custom-swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-2xl cursor-pointer">
            <GoArrowLeft className="fa" />
          </div>

          {/* Right Navigation Button */}
          <div className="custom-swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-2xl cursor-pointer">
            <GoArrowRight className="fa" />
          </div>

          {/* Pagination Container */}
          <div className="custom-swiper-pagination absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
