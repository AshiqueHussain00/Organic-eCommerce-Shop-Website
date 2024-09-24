import React from 'react';
import { FiCheckCircle, FiPhone, FiSmile, FiShield, FiTruck } from 'react-icons/fi';
import aboutImage from '../../assets/about/about2.svg'; // Replace with actual image path

const TrustedOrganicStore2 = () => {
  return (
    <section className="flex flex-col-reverse items-center w-full mx-auto xl:flex-row lg:items-start">
      {/* Image Section */}
      <div className="mb-8 lg:mb-0" data-aos="fade-right">
        <img
          src={aboutImage} 
          alt="Farmer with organic food" 
          className=""
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-center w-11/12 space-y-6 lg:w-8/12 lg:pl-8" data-aos="fade-left">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
          100% Trusted <br /> Organic Food Store
        </h2>
        <p className="text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl">
          Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a mi.
        </p>

        {/* Features Section */}
        <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2">
          <div className="flex items-start">
            <FiCheckCircle className="w-8 h-8 mr-4 text-green-500" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">100% Organic food</h4>
              <p className="text-sm text-gray-600">100% healthy & fresh food.</p>
            </div>
          </div>

          <div className="flex items-start">
            <FiPhone className="w-8 h-8 mr-4 text-green-500" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">Great Support 24/7</h4>
              <p className="text-sm text-gray-600">Instant access to Contact.</p>
            </div>
          </div>

          <div className="flex items-start">
            <FiSmile className="w-8 h-8 mr-4 text-green-500" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">Customer Feedback</h4>
              <p className="text-sm text-gray-600">Our happy customer</p>
            </div>
          </div>

          <div className="flex items-start">
            <FiShield className="w-8 h-8 mr-4 text-green-500" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">100% Secure Payment</h4>
              <p className="text-sm text-gray-600">We ensure your money is safe.</p>
            </div>
          </div>

          <div className="flex items-start">
            <FiTruck className="w-8 h-8 mr-4 text-green-500" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">Free Shipping</h4>
              <p className="text-sm text-gray-600">Free shipping with discount.</p>
            </div>
          </div>

          <div className="flex items-start">
            <FiCheckCircle className="w-8 h-8 mr-4 text-green-500" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">100% Organic Food</h4>
              <p className="text-sm text-gray-600">100% healthy & fresh food.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedOrganicStore2;
