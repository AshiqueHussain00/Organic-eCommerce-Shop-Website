import React, { useRef, useEffect } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { TopCategoryData } from '../../data/home3/TopCategoryData';

function TopCategory() {
  const ScrollableContainer = ({ children, isLoading }) => {
    const scrollContainerRef = useRef(null);

    useEffect(() => {
      const handleScroll = () => {
        const container = scrollContainerRef.current;
        if (!container) return;
      };

      const container = scrollContainerRef.current;
      if (container) {
        container.addEventListener('scroll', handleScroll);
      }

      return () => {
        if (container) {
          container.removeEventListener('scroll', handleScroll);
        }
      };
    }, []);

    const scrollLeft = () => {
      const container = scrollContainerRef.current;
      if (container) {
        container.scrollBy({ left: -300, behavior: 'smooth' }); // Increased scroll distance
      }
    };

    const scrollRight = () => {
      const container = scrollContainerRef.current;
      if (container) {
        container.scrollBy({ left: 300, behavior: 'smooth' }); // Increased scroll distance
      }
    };

    if (isLoading) {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
          <div className="spinner"></div> {/* Custom spinner or use a library */}
          <p>Loading..</p>
        </div>
      );
    }

    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
       

        <button onClick={scrollLeft} className="p-2 text-xs sm:text-sm md:text-base lg:text-lg rounded-full bg-white text-black border border-gray-300 hover:bg-[#00B207] hover:border-[#00B207] transition-colors duration-300">
                  {/* Left Arrow Icon */}
                  <FiArrowLeft className="arrowleft text-xs sm:text-sm md:text-base lg:text-lg hover:text-white" />
                </button>

        <div
          ref={scrollContainerRef}
          style={{
            display: 'flex',
            overflowX: 'auto', //  horizontal scrolling
            gap: '1rem',
            whiteSpace: 'nowrap',
            scrollbarWidth: 'none', 
          }}
        >
          {children}
        </div>
       
        
        <button onClick={scrollRight} className=" p-2 text-xs sm:text-sm md:text-base lg:text-lg rounded-full bg-white text-black border border-gray-300 hover:bg-[#00B207] hover:border-[#00B207] transition-colors duration-300">
                  {/* Right Arrow Icon */}
                  <FiArrowRight className="text-xs sm:text-sm md:text-base lg:text-lg hover:text-white" />
                </button>
      </div>
    );
  };
  return (
    <section>
      <div className="w-11/12 mx-auto p-4">
        <ScrollableContainer>
          <ul className="flex flex-wrap smd:flex-nowrap  smd:flex-row justify-center gap-4 mx-8">
            {TopCategoryData.map((item) => (
              <li
                key={item.id}
                className="flex flex-col items-center justify-between px-4 py-2 border-2 border-gray-200 
                w-[160px] h-[180px] sm:w-[140px] sm:h-[180px] md:w-[150px] md:h-[180px] lg:w-[150px] lg:h-[180px] hover:border-2 hover:border-green-600 hover:shadow-lg transition-all duration-300 cursor-pointer" // Responsive width and height
              >
                <div className="flex items-center justify-center flex-grow">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[50px] w-[50px]  md:h-[60px] md:w-[60px] object-cover" // Responsive image size
                  />
                </div>
                <div className="flex flex-col items-center">
                  <h3 className="text-center text-sm sm:text-base font-medium">
                    {item.title}
                  </h3>
                  <p className="text-center text-xs sm:text-sm  text-gray-500">
                    {item.description}
                  </p> 
                </div>
              </li>
            ))}
          </ul>
        </ScrollableContainer>
      </div>
    </section>
  );
  

}
export default TopCategory;
