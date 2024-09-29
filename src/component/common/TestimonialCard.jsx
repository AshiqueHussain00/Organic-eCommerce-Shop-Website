import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../../styles/pagination.css"; // Add your custom styles if needed

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import quote from "../../assets/common/Testimonial/quote.svg";

const Testimonials = ({
  testimonialsData = [],
  showButtons = true,
  bgColor = "rgb(242,242,242)",
  autoplay = true,
  showHeading = true,
  showPagination = true,
}) => {
  const swiperSettings = {
    slidesPerView: 1,
    breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
    spaceBetween: 10,
    loop: true, // Looping for smooth transitions
    pagination: showPagination
      ? {
          clickable: true, // Enable clickable pagination bullets
        }
      : false,
    navigation: {
      nextEl: ".custom-swiper-button-next",
      prevEl: ".custom-swiper-button-prev",
    },
    autoplay: autoplay
      ? {
          delay: 5000,
          disableOnInteraction: false,
        }
      : false,
    modules: [Navigation, Pagination, Autoplay],
  };

  if (testimonialsData.length === 0) {
    return <p>No testimonials available.</p>;
  }

  return (
    <section >
      <div style={{ backgroundColor: bgColor }} className="py-16">
        <div className="relative w-10/12 p-4 mx-auto ">
          <div className="relative flex justify-between">
            {showHeading && (
              <h2
                data-aos="fade-right"
                className="pb-8 text-xl font-bold leading-snug break-words sm:text-3xl sm:leading-normal"
              >
                <span className="block ml-2 sm:inline">Client</span>
                <span className="block ml-2 sm:inline">Testimonials</span>
              </h2>
            )}
            {showButtons && (
              <div className="absolute flex pb-8 space-x-4 transform -translate-y-1/2 top-1/2 right-14 ">
                <button className="custom-swiper-button-prev ml-4  p-2 text-xs sm:text-sm md:text-base lg:text-lg rounded-full bg-white text-black border border-gray-300 hover:bg-[#00B207] hover:border-[#00B207] transition-colors duration-300">
                <FaArrowLeft className="text-xs sm:text-sm md:text-base lg:text-lg hover:text-white" />
                </button>
                <button className="custom-swiper-button-next  p-2 text-xs sm:text-sm md:text-base lg:text-lg rounded-full bg-white text-black border border-gray-300 hover:bg-[#00B207] hover:border-[#00B207] transition-colors duration-300">
                  
                  <FaArrowRight className="text-xs sm:text-sm md:text-base lg:text-lg hover:text-white" />
                </button>
              </div>
            )}
          </div>
          <Swiper {...swiperSettings}>
            {testimonialsData.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div
                  data-aos="fade-left"
                  className="bg-white bg-[rgb(252,252,252)] rounded-lg shadow-lg mx-2 mt-8"
                >
                  <div className="flex p-4 mb-4 text-3xl text-green-500">
                    <img src={quote} alt="Quote" />
                  </div>
                  <p className="text-[#585757] text-center text-[0.7rem] p-3 sm:text-[0.8rem] md:text-[0.8rem] lg:text-[1rem] font-poppins mb-4">
                    {testimonial.compliment}
                  </p>
                  <div className="flex flex-col items-center justify-between p-2 sm:flex sm:items-center md:flex md:flex-row">
                    <div className="flex items-center">
                      <img
                        src={testimonial.img}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="ml-4">
                        <h4 className="font-bold text-gray-800 text-[0.6rem] sm:text-[0.7rem] md:text-[0.9rem] lg:text-[1rem]">
                          {testimonial.name}
                        </h4>
                        <span className="text-gray-500 text-[0.6rem] sm:text-[0.7rem] md:text-[0.9rem] lg:text-[1rem]">
                          {testimonial.role}
                        </span>
                      </div>
                    </div>
                    <div className="flex mt-2">
                      {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                        <span key={i} className="text-[#FF8A00] text-[1rem]">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          
        </div>
      </div>
      {showPagination && (
            <div className="swiper-pagination"></div>
          )}
    </section>
  );
};

export default Testimonials;
