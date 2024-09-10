import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import quote from '../../assets/common/Testimonial/quote.svg'
const TestimonialCard = ({ testimonial }) => {
  return (
    <section className='w-10/12 mx-auto'>
      <div className='w-10/12'>
        <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-lg mx-2">
          <div className="flex mb-4 text-green-500 text-3xl"><img src={quote}/></div>
          <p className="text-[#585757] font-[1.8rem] font-poppins mb-4">{testimonial.compliment}</p>
          <div className='flex items-center justify-between'>
            <div className="flex items-center">
              <img src={testimonial.img} alt={testimonial.name} className="w-12 h-12 rounded-full" />
              <div className="ml-4">
                <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                <span className="text-gray-500">{testimonial.role}</span>
              </div>
            </div>
            <div className="flex mt-4">
              {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                <span key={i} className="text-[rgb(255,138,0)] text-xl">★</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = ({ testimonialsData = [], showButtons = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonialsPerPage = 3;
  const totalTestimonials = testimonialsData.length;
  const totalSlides = Math.ceil(totalTestimonials / testimonialsPerPage);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % totalSlides
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + totalSlides) % totalSlides
    );
  };

  if (testimonialsData.length === 0) {
    return <p>No testimonials available.</p>;
  }

  const startIndex = currentIndex * testimonialsPerPage;
  const visibleTestimonials = testimonialsData.slice(startIndex, startIndex + testimonialsPerPage);

  return (
    <div className="relative py-8 px-4">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Client Testimonials</h2>
        
        {showButtons && (
          <div className="flex space-x-2 ">
            <button
              className="p-2 rounded-full bg-white text-black border border-gray-300 hover:bg-[rgb(0,178,7)] hover:text-white transition-colors duration-300"
              onClick={handlePrev}
            >
              <FaArrowLeft className='text-lg' />
            </button>
            <button
              className="p-2 rounded-full bg-white text-black border border-gray-300 hover:bg-[rgb(0,178,7)] hover:text-white transition-colors duration-300"
              onClick={handleNext}
            >
              <FaArrowRight className='text-lg' />
            </button>
          </div>
        )}
      </div>

      {/* Testimonial Cards */}
      <div className="relative overflow-hidden">
        <div className="flex xxl:flex-wrap gap-3">
          {visibleTestimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-wrap">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
