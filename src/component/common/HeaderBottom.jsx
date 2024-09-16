import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { HeaderBottomData } from '../../data/common/HeaderBottomData';

const HeaderBottom = ({
  innerFlexDirection = 'row',
  innerAlignItems = 'center',
  innerJustifyContent = 'center'
}) => {
  const [scrollDirection, setScrollDirection] = useState('down');
  const ref = useRef(null);

  const cardAnimation = {
    hidden: { opacity: 0, y: scrollDirection === 'up' ? 50 : -50 },
    visible: { opacity: 1, y: 0 },
  };

  // Detect the scroll direction
  useEffect(() => {
    let lastScrollTop = window.pageYOffset;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > lastScrollTop) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll values
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate="visible"
      variants={cardAnimation}
      transition={{ duration: 0.8 }}
    >
      <div className="w-11/12 mx-auto mt-2 xmd:w-10/12 bg-white-200 text-black-800">
        <ul
          data-aos="fade-right"
          className="flex flex-wrap items-center justify-center gap-2 p-4 border rounded-lg shadow-xl sm:gap-20"
        >
          {HeaderBottomData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.li
                key={index}
                initial="hidden"
                animate="visible"
                variants={cardAnimation}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center gap-2 p-2 border-b-4 cursor-pointer border-white-100 group hover:border-primary hover:border-b-4"
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: innerFlexDirection,
                    alignItems: innerAlignItems,
                    justifyContent: innerJustifyContent,
                  }}
                  className="w-16 h-16 transition-all duration-300 ease-in-out bg-gray-100 border-2 rounded-full group-hover:border-primary group-hover:bg-primary group-hover:text-white"
                >
                  {/* Render icon as a component */}
                  <IconComponent className="text-2xl transition-colors duration-300 ease-in-out text-primary group-hover:text-white-100" />
                </div>

                <div className="text-center">
                  <h4 className="text-sm font-semibold text-gray-800 sm:text-base">
                    {item.title}
                  </h4>
                  <p className="text-xs font-normal text-gray-500 sm:text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </motion.section>
  );
};

// Define PropTypes for better type checking
HeaderBottom.propTypes = {
  innerFlexDirection: PropTypes.oneOf(['row', 'column']),
  innerAlignItems: PropTypes.oneOf(['start', 'center', 'end']),
  innerJustifyContent: PropTypes.oneOf(['start', 'center', 'end', 'between', 'around']),
};

export default HeaderBottom;
