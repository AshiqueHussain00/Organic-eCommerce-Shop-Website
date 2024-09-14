import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { GoArrowLeft,GoArrowRight } from "react-icons/go";

import '../../../styles/herosection.css'; // Import the custom CSS file
import '../../../styles/swiper.css'
import bestdealImage1 from "../../../assets/home4/bestdeal1.svg";
import bestdealImage2 from "../../../assets/home4/bestdeal2.svg"; 



const heroSection = [
  {
    img: bestdealImage1 ,
    title: 'WELCOME TO SHOPERY',
    headingFirstPart: 'Fresh & Healthy',
    headingSecondPart: 'Organic Food',
    sale_1: "Sale Up to",
    sale_2 : "30% OFF",
    para: 'Free shipping on all your orders. We deliver, you enjoy.',
  },
  {
    img: bestdealImage2,
    title: 'WELCOME TO SHOPERY',
    headingFirstPart: 'Fresh & Healthy',
    headingSecondPart: 'Organic Food',
    sale_1: "Sale Up to",
    sale_2 : "20% OFF",
    para: 'Free shipping on all your orders. We deliver, you enjoy.',
  },
  {
    img: bestdealImage1,
    title: 'WELCOME TO SHOPERY',
    headingFirstPart: 'Fresh & Healthy',
    headingSecondPart: 'Organic Food',
    sale_1: "Sale Up to",
    sale_2 : "10% OFF",
    para: 'Free shipping on all your orders. We deliver, you enjoy.',
  },
];

const HomeHeroSection2 = () => {
  return (
    <section className='w-full xxl:pt-10 pt-16 pb-80 md:pb-56 bg-green-gray-scale-50'>
      <div
        className='relative w-11/12 lg:w-9/12  h-auto mx-auto py-4 '
      >
        <div className="relative flex flex-col md:flex-row items-center mx-auto w-full h-full">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
           
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            
            loop={true}
            navigation={{
              nextEl: '.custom-swiper-button-next',
              prevEl: '.custom-swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              el: '.custom-swiper-pagination',
            }}
            className="w-full md:w-10/12 h-full"
          >
            {heroSection.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col md:grid md:grid-cols-2 md:gap-4 items-center p-6">
                  
                  {/* Right Side: Text */}
                  <div data-aos="fade-left" className="space-y-4 text-center md:text-left">
                    <p className="text-sm text-green-500">{slide.title}</p>
                    <h1 className="text-2xl xs:text-3xl md:text-4xl xxl:text-5xl font-bold text-gray-800 leading-tight">
                      {slide.headingFirstPart} <br /> {slide.headingSecondPart}
                    </h1>
                     
                    <p className="text-base xs:text-lg md:text-2xl font-bold text-gray-800 leading-tight">
                      {slide.sale_1} <span className="text-warning"> {slide.sale_2}</span>
                    </p>
                    
                    <p className="text-green-gray-scale-500 xxl:text-lg ">{slide.para}</p>
                    <div className='flex justify-center md:justify-start'>
                    <button className="px-4 py-2 flex items-center gap-2 text-white rounded-full shadow-lg transition-all duration-200 text-white-100 bg-light-branding-success hover:bg-branding-success ">
                      <span className='font-poppins text-white-300'>Shop now</span>
                      <span className='font-poppins text-white-300'><GoArrowRight /></span>
                    </button>

                    </div>
                   
                  </div>


                  {/* Left Side: Image */}
                  <div data-aos="fade-right" className="relative  flex justify-center mb-4 md:mb-0 ">
                    <img
                      src={slide.img}
                      alt={slide.headingFirstPart}
                      className="object-cover w-full h-full"
                    />

                   
                  </div>


                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Left Navigation Button */}
          <div className="custom-swiper-button-prev hidden xsm:flex absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-2xl cursor-pointer">
            <GoArrowLeft className="fa" />
          </div>

          {/* Right Navigation Button */}
          <div className="custom-swiper-button-next hidden xsm:flex absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-2xl cursor-pointer">
            <GoArrowRight className="fa" />
          </div>

          {/* Pagination Container */}
          <div className="custom-swiper-pagination  absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50"></div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection2;

