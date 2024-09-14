import React, { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import bestdealImage1 from "../../../assets/home4/bestdeal1.svg"; // Path to your first image
// import bestdealImage2 from "../../../assets/home4/bestdeal2.svg"; // Path to your second image
// import bestdealImage3 from "../../../assets/home4/bestdeal3.svg"; // Path to your third image

const slides = [
  {
    Subtitle: "WELCOME TO SHOPERY",
    title: "Fresh & Healthy Organic Food",
    subtitle_1: "Sale up to",
    subtitle_2: "30% OFF",
    description: "Free shipping on all your orders, we deliver, you enjoy.",
    buttonText: "Shop Now",
    image: bestdealImage1, // First slide image
  },
  {
    Subtitle: "WELCOME TO SHOPERY",
    title: "100% Organic Vegetables",
    subtitle_1: "Special Discount for ",
    subtitle_2: "Today",
    description: "Discover our wide range of organic products.",
    buttonText: "Explore",
    image: bestdealImage1, // Second slide image
  },
  {
    Subtitle: "WELCOME TO SHOPERY",
    title: "Fresh Fruits & Vegetables",
    subtitle_1: "Save Big on",
    subtitle_2: "All Organic Products",
    description: "Fresh from farm to your door, shop now.",
    buttonText: "Buy Now",
    image: bestdealImage1, // Third slide image
  },
];

const HomeHeroSection2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 6000);

    return () => clearInterval(slideInterval);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-[500px] md:h-[650px] lg:h-[500px] overflow-hidden bg-gray-50">
      {/* Slides */}
      <div className="flex w-11/12 mx-auto   transition-transform duration-1000 ease-in-out">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full flex flex-col lg:flex-row justify-between items-center transition-transform duration-1000 ease-in-out ${
              currentSlide === index ? "translate-x-0" : "translate-x-full"
            }`}
          >
           
           <div className="flex  flex-wrap md:flex-row">
            
            {/* Content */}
            <div className="relative z-10 flex flex-col items-start justify-center flex-1 max-w-lg px-4 text-left md:px-6 lg:px-10 xl:px-16 mx-6 md:mx-12 lg:mx-16 xl:mx-24 space-y-3 md:space-y-5">
              <h1 className="mb-2 text-xs font-bold text-green-500 md:text-sm lg:text-base">
                {slide.Subtitle}
              </h1>
              <h1 className="mb-2 text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl xl:text-5xl">
                {slide.title}
              </h1>
              <h2 className="mb-1 text-base text-gray-700 md:text-lg lg:text-xl">
                {slide.subtitle_1}{" "}
                <span className="text-warning">{slide.subtitle_2}</span>
              </h2>
              <p className="mb-3 text-sm text-gray-600 md:text-base lg:text-lg">
                {slide.description}
              </p>
              <button className="px-4 py-2 text-xs transition duration-200 rounded-full shadow-xl bg-white-100 text-black-900 hover:text-white-100 md:text-lg lg:text-xl hover:bg-primary">
                {slide.buttonText}
              </button>
            </div>

            {/* Right Side Image */}
            <div className="relative z-10 flex justify-center flex-1">
              <img
                src={slide.image}
                alt="Best Deal"
                className="w-full h-full max-w-xs md:max-w-sm  lg:max-w-md"
              />
            </div>
           </div>

          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrevSlide}
        className="absolute p-3 text-black transition transform -translate-y-1/2 bg-white rounded-full shadow-lg left-6 md:left-8 lg:left-16 top-1/2 hover:bg-gray-200"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute p-3 text-black transition transform -translate-y-1/2 bg-white rounded-full shadow-lg right-6 md:right-8 lg:right-16 top-1/2 hover:bg-gray-200"
      >
        <FaChevronRight />
      </button>

      {/* Slide Indicator Dots */}
      <div className="absolute flex space-x-2 transform -translate-x-1/2 bottom-16 left-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full transition ${
              currentSlide === index ? "bg-green-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HomeHeroSection2;

