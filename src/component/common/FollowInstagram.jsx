import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import PropTypes from 'prop-types';

const FollowInstagram = ({ images, instagramUrl }) => {
  return (
   <section>
    <div className='w-10/12 mx-auto'>
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 ">
      {images.map((image, index) => (
        <a
          href={instagramUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          key={index} 
          className="relative group overflow-hidden rounded-lg"
          aria-label={`View Instagram pic ${index + 1} on Instagram`}
        >
          <img 
            src={image} 
            alt={`Instagram pic ${index + 1}`} 
            className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-70"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FaInstagram className="text-white text-4xl" />
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
