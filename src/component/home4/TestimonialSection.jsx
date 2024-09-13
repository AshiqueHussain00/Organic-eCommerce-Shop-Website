import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import '../../styles/swiper.css';
import customer1 from  "../../assets/common/Testimonial/customer1.svg"


import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';


import TestimonialCard4 from './TestimonialCard4';


const testimonialsData = [
    {
        name: "Robert Fox",
        img: customer1,
        role: "Customer",
        compliment:
            "PPellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
        rating: 2,
    },
    {
        name: "Dianne Russell",
        img: customer1,
        role: "Customer",
        compliment:
            "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
        rating: 3,
    },
    {
        name: "Dianne Russell",
        img: customer1,
        role: "Customer",
        compliment:
            "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
        rating: 4,
    },
    {
        name: "Dianne Russell",
        img: customer1,
        role: "Customer",
        compliment:
            "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
        rating: 5,
    },
    {
        name: "Dianne Russell",
        img: customer1,
        role: "Customer",
        compliment:
            "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
        rating: 5,
    },
    {
        name: "Dianne Russell",
        img: customer1,
        role: "Customer",
        compliment:
            "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
        rating: 5,
    },
    
];

const TestimonialSection = () => {
    // Swiper configuration settings for slides, breakpoints, and navigation
    const swiperSettings = {
        slidesPerView: 1,
        spaceBetween: 16,
        breakpoints: {
            640: { slidesPerView: 1  },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3  },
        },
       
        loop: false, // No infinite looping
        pagination: {
            clickable: true,
            el: '.custom-swiper-pagination', // Custom pagination class
        },
        navigation: {
            nextEl: '.custom-swiper-button-next', // Custom next button
            prevEl: '.custom-swiper-button-prev', // Custom previous button
        },
        autoplay: true ? {
            delay: 5000, // Adjust delay as needed
            disableOnInteraction: false,
        } : false, // Autoplay setting
        modules: [Navigation, Pagination, Autoplay, EffectFade], // Swiper modules for additional features
    };

    // Return message if no testimonials are available
    if (testimonialsData.length === 0) {
        return <p>No testimonials available.</p>;
    }

    return (
        <section className='w-full pt-24 pb-16 xsm:pb-24 xs:pb-32 sm:pb-40 xlg:pb-60 xxl:pb-80 bg-green-gray-scale-50'>
            {/* Container  */}
           
                <div className="relative w-11/12 xmd:w-10/12  mx-auto pb-16">
                   
                        <h2 className="text-center xmd:text-[40px] text-4xl font-semibold md:mb-10 mb-16 leading-[48px] tracking-wide">
                            What our Client Says
                            
                        </h2>


                    {/* Swiper Carousel with Testimonial Cards */}
                    <Swiper {...swiperSettings}>
                        {testimonialsData.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <TestimonialCard4 data={testimonial} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Pagination Dots */}
                    <div className="mx-auto custom-swiper-pagination"></div>
                </div>
       
        </section>
    );
};

export default TestimonialSection;