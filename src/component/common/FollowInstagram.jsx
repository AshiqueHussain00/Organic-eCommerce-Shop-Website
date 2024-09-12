import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import PropTypes from 'prop-types';

const FollowInstagram = ({ images, instagramUrl }) => {
  return (
   <section className='relative w-full'>
    <div className='w-10/12 pb-20 mx-auto'>
    <div className="grid gap-8 border-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 ">
      {images.map((image, index) => (
        <a
          href={instagramUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          key={index} 
          className="relative overflow-hidden rounded-lg group"
          aria-label={`View Instagram pic ${index + 1} on Instagram`}
        >
          <img 
            src={image} 
            alt={`Instagram pic ${index + 1}`} 
            className="object-cover w-full h-auto transition-opacity duration-300 h-[23vh] group-hover:opacity-70"
          />
          <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <FaInstagram className="text-4xl text-white-100" />
          </div>
        </a>
      ))}
    </div>
    </div>
   </section>
  );
};

// Define PropTypes for better type checking
FollowInstagram.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  instagramUrl: PropTypes.string.isRequired,
};

export default FollowInstagram;
