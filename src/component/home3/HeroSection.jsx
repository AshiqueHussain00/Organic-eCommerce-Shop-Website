import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

import '../../styles/herosection.css'; // Import the custom CSS file
import '../../styles/swiper.css'
import bestdealImage1 from "../../assets/home4/bestdeal1.svg";
import bestdealImage2 from "../../assets/home4/bestdeal2.svg";
import { Link } from 'react-router-dom';



const heroSection = [
  {
    img: bestdealImage1,
    title: 'WELCOME TO SHOPERY',
    headingFirstPart: 'Fresh & Healthy',
    headingSecondPart: 'Organic Food',
    sale_1: "Sale Up to",
    sale_2: "30% OFF",
    para: 'Free shipping on all your orders. We deliver, you enjoy.',
  },
  {
    img: bestdealImage2,
    title: 'WELCOME TO SHOPERY',
    headingFirstPart: 'Fresh & Healthy',
    headingSecondPart: 'Organic Food',
    sale_1: "Sale Up to",
    sale_2: "20% OFF",
    para: 'Free shipping on all your orders. We deliver, you enjoy.',
  },
  {
    img: bestdealImage1,
    title: 'WELCOME TO SHOPERY',
    headingFirstPart: 'Fresh & Healthy',
    headingSecondPart: 'Organic Food',
    sale_1: "Sale Up to",
    sale_2: "10% OFF",
    para: 'Free shipping on all your orders. We deliver, you enjoy.',
  },
];

const HomeHeroSection2 = () => {
  return (
    <section className='relative w-full pt-16 xxl:pt-10 pb-80 md:pb-40 bg-green-gray-scale-50'>
      <div
        className='relative w-11/12 h-auto py-4 mx-auto '
      >
        <div className="relative flex flex-col items-center w-full h-full mx-auto md:flex-row">
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
            className="relative w-full h-full md:w-10/12"
          >
            {heroSection.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center p-6 md:grid md:grid-cols-2 ">

                  {/* Right Side: Text */}
                  <div data-aos="fade-left" className="space-y-4 text-center md:text-left">
                    <p className="text-sm text-green-500">{slide.title}</p>
                    <h1 className="text-2xl font-bold leading-tight text-gray-800 xs:text-3xl md:text-4xl xxl:text-5xl">
                      {slide.headingFirstPart} <br /> {slide.headingSecondPart}
                    </h1>

                    <p className="text-base font-bold leading-tight text-gray-800 xs:text-lg md:text-2xl">
                      {slide.sale_1} <span className="text-warning"> {slide.sale_2}</span>
                    </p>

                    <p className="text-green-gray-scale-500 xxl:text-lg ">{slide.para}</p>
                    <div className='flex justify-center md:justify-start'>
                      <Link to='/shop2'>
                        <button className="flex items-center gap-2 px-4 py-2 text-white transition-all duration-200 rounded-full shadow-lg text-white-100 bg-light-branding-success hover:bg-branding-success ">
                          <span className='font-poppins text-white-300'>Shop now</span>
                          <span className='font-poppins text-white-300'><GoArrowRight /></span>
                        </button>
                      </Link>
                    </div>

                  </div>


                  {/* Left Side: Image */}
                  <div data-aos="fade-right" className="relative flex justify-center mb-4 md:mb-0 ">
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


        </div>

      </div>

      {/* Left Navigation Button */}
      <div className="absolute z-10 hidden text-2xl cursor-pointer custom-swiper-button-prev xsm:flex left-4 top-64">
        <GoArrowLeft className="fa" />
      </div>

      {/* Right Navigation Button */}
      <div className="absolute z-10 hidden text-2xl transform -translate-y-1/2 cursor-pointer custom-swiper-button-next xsm:flex right-4 top-64">
        <GoArrowRight className="fa" />
      </div>

      {/* Pagination Container */}
      <div className="absolute z-50 transform -translate-x-1/2 custom-swiper-pagination bottom-4 left-1/2"></div>
    </section>
  );
};

export default HomeHeroSection2;

