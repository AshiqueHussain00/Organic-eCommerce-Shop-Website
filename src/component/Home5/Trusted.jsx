import React from 'react';
import { FaArrowRight, FaCheck } from 'react-icons/fa';
import BG from '../../assets/home5/trusted/BG.svg';
import image1 from '../../assets/home5/trusted/image1.svg';
import image2 from '../../assets/home5/trusted/image2.svg';
import leaf from '../../assets/home5/trusted/leaf.svg';

const Trusted = () => {
  return (
    <section>
      <div className="bg-no-repeat bg-contain " style={{ backgroundImage: `url(${BG})` }}>
        <div className="relative w-10/12 p-4 mx-auto gap-4 flex flex-col md:flex-row items-center justify-between">
          {/* Left Section - Images */}
          <div data-aos="fade-right" className="relative flex flex-col md:flex-row gap-2 w-full md:w-1/2">
            {/* Container for First Image and Leaf */}
            <div className="relative mx-auto h-[30%] md:h-[50%]">
              <img src={image1} alt="Farmer holding apples" className="rounded-lg w-full md:h-full object-cover" />
              {/* Leaf Image */}
              <img src={leaf} alt="Leaf decoration" className="absolute bottom-[-40px] left-[-30px] w-16 h-16 md:w-24 md:h-24 object-cover" />
            </div>
            {/* Second Image - Larger on lg and above */}
            <div className="mx-auto">
              <img src={image2} alt="Person picking apples" className="rounded-lg w-full h-[40vh] md:h-full object-cover" />
            </div>
          </div>

          {/* Right Section - Text Content */}
          <div data-aos="fade-left" className="p-4 md:w-1/2 mt-10 md:mt-0 flex flex-col items-start">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-5 text-gray-800">
              100% Trusted Organic Food Store
            </h2>

            {/* Bullet Points */}
            <div className="space-y-5 mb-6">
              <div className="flex items-start space-x-3 ">
                {/* Icon */}
                <div className="bg-[rgb(0,178,7)] text-white rounded-full flex items-center justify-center ">
                  <FaCheck className="w-7 h-7 p-2 text-white-300" />
                </div>
                {/* Text */}
                <p className="text-gray-600 ">
                  <span className="font-bold">Every day fresh and quality products</span> for you.
                  <br />
                  Maecenas vehicula o justo quis laoreet. Sed in placerat.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                {/* Icon */}
                <div className="bg-[rgb(0,178,7)] text-white rounded-full flex items-center justify-center ">
                  <FaCheck className="w-7 h-7 p-2 text-white-300" />
                </div>
                {/* Text */}
                <p className="text-gray-600">
                  <span className="font-bold">Every day fresh and quality products</span> for you.
                  <br />
                  Maecenas vehicula o justo quis laoreet. Sed in placerat.
                </p>
              </div>
            </div>

            {/* Button */}
            <button className="px-4 py-2 flex items-center gap-2 text-white rounded-full shadow-lg bg-[rgb(0,178,7)]">
              <span className="font-poppins text-white-300">Shop now</span>
              <span className="font-poppins text-white-300"><FaArrowRight /></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trusted;
