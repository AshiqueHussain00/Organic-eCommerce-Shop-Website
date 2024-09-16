import React, { useEffect, useState } from 'react';
import BG from '../../assets/home5/happycustomer/BG.svg';

const AnimatedNumber = ({ value, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startCount = 0;
    const duration = 2000; // Duration of the animation in milliseconds
    const increment = value / (duration / 16); // Change per frame (~16ms per frame)

    const interval = setInterval(() => {
      setCount((prev) => {
        const nextValue = prev + increment;
        if (nextValue >= value) {
          clearInterval(interval);
          return value;
        }
        return nextValue;
      });
    }, 16); // Update every frame (~16ms)

    return () => clearInterval(interval); // Cleanup on unmount
  }, [value]);

  // Formatting large numbers with "k+" suffix without decimals
  const formattedValue = (num) => {
    if (num >= 1000 && num < 1000000) {
      return Math.floor(num / 1000) + 'k';
    } else if (num >= 1000000) {
      return Math.floor(num / 1000000) + 'M';
    }
    return Math.floor(num); // For smaller values
  };

  return (
    <span>
      {formattedValue(count)}
      {suffix}
    </span>
  );
};

const HappyCustomer = () => {
  return (
    <section className="relative ">
      <div className="bg-cover" style={{ backgroundImage: `url(${BG})` }}>
        <div className="absolute inset-0 bg-black opacity-50  w-full"></div>
        <div className="relative z-10 py-4 w-10/12 mx-auto ">
          <div className="flex  flex-col md:flex-row justify-between items-center rounded-lg shadow-md p-4">
            <div className="text-center p-2 ">
              <h3 className="text-[rgb(0,178,7)] text-3xl font-[300] font-poppins">
                <AnimatedNumber value={37} suffix="+" />
              </h3>
              <p className="text-white-300 text-sm font-poppins">Years of Hard Work</p>
            </div>
            <div className="text-center">
              <h3 className="text-[rgb(0,178,7)] text-3xl font-[300] font-poppins">
                <AnimatedNumber value={500000} suffix="+" />
              </h3>
              <p className="text-white-300 text-sm font-poppins">Happy Customers</p>
            </div>
            <div className="text-center">
              <h3 className="text-[rgb(0,178,7)] text-3xl font-[300] font-poppins">
                <AnimatedNumber value={28} />
              </h3>
              <p className="text-white-300 text-sm font-poppins">Qualified Team Members</p>
            </div>
            <div className="text-center">
              <h3 className="text-[rgb(0,178,7)] text-3xl font-[300] font-poppins">
                <AnimatedNumber value={750000} suffix="+" />
              </h3>
              <p className="text-white-300 text-sm font-poppins">Monthly Orders</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappyCustomer;
