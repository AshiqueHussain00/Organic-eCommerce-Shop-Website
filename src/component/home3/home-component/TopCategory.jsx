// import React, { useRef, useEffect } from 'react';
// import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
// import { TopCategoryData } from '../../../data/common/TopCategoryData';

// function TopCategory() {
//   const ScrollableContainer = ({ children, isLoading }) => {
//     const scrollContainerRef = useRef(null);

//     useEffect(() => {
//       const handleScroll = () => {
//         const container = scrollContainerRef.current;
//         if (!container) return;
//       };

//       const container = scrollContainerRef.current;
//       if (container) {
//         container.addEventListener('scroll', handleScroll);
//       }

//       return () => {
//         if (container) {
//           container.removeEventListener('scroll', handleScroll);
//         }
//       };
//     }, []);

//     const scrollLeft = () => {
//       const container = scrollContainerRef.current;
//       if (container) {
//         container.scrollBy({ left: -160, behavior: 'smooth' }); // Increased scroll distance
//       }
//     };

//     const scrollRight = () => {
//       const container = scrollContainerRef.current;
//       if (container) {
//         container.scrollBy({ left: 160, behavior: 'smooth' }); // Increased scroll distance
//       }
//     };

//     if (isLoading) {
//       return (
//         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
//           <div className="spinner"></div> {/* Custom spinner or use a library */}
//           <p>Loading..</p>
//         </div>
//       );
//     }

//     return (
//       <div  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>


//         <button onClick={scrollLeft} className="p-2 text-xs sm:text-sm md:text-base lg:text-lg rounded-full bg-white text-black border border-gray-300 hover:bg-[#00B207] hover:border-[#00B207] transition-colors duration-300">
//           {/* Left Arrow Icon */}
//           <FiArrowLeft className="arrowleft text-xs sm:text-sm md:text-base lg:text-lg hover:text-white" />
//         </button>

//         <div
//           ref={scrollContainerRef}
//           style={{
//             display: 'flex',
//             overflowX: 'auto', //  horizontal scrolling
//             gap: '1rem',
//             whiteSpace: 'nowrap',
//             scrollbarWidth: 'none',
//           }}
//         >
//           {children}
//         </div>


//         <button onClick={scrollRight} className=" p-2 text-xs sm:text-sm md:text-base lg:text-lg rounded-full bg-white text-black border border-gray-300 hover:bg-[#00B207] hover:border-[#00B207] transition-colors duration-300">
//           {/* Right Arrow Icon */}
//           <FiArrowRight className="text-xs sm:text-sm md:text-base lg:text-lg hover:text-white" />
//         </button>
//       </div>
//     );
//   };
//   return (
//     <section>
//       <div className="w-10/12 smd:w-11/12  mx-auto pt-5 pb-10">
//         <div className="pt-10 pb-10 xs:flex-row">
//           <h1 className="text-[2rem] text-center font-semibold">Top Category</h1>
//         </div>
//         <ScrollableContainer>
//           <ul className="w-full flex items-center justify-center gap-5 ">
//             {TopCategoryData.map((item) => (
//               <li
//                 key={item.id}
//                 className="flex flex-col items-center justify-center  px-2 sm:px-4 py-2 border-2 border-gray-200 
//                 w-[150px] h-[160px] sm:w-[140px] sm:h-[180px] md:w-[150px] md:h-[180px] lg:w-[190px] lg:h-[200px] hover:border-2 hover:border-green-600 hover:shadow-lg transition-all duration-300 cursor-pointer" // Responsive width and height
//               >
//                 <div className="flex items-center justify-center flex-grow">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="h-[50px] w-[50px]  md:h-[60px] md:w-[60px] object-cover" // Responsive image size
//                   />
//                 </div>
//                 <div className="flex flex-col items-center">
//                   <h3 className="text-center text-sm sm:text-base font-medium">
//                     {item.title}
//                   </h3>
//                   <p className="text-center text-xs sm:text-sm  text-gray-500">
//                     {item.description}
//                   </p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </ScrollableContainer>
//       </div>
//     </section>
//   );


// }
// export default TopCategory;

import React, { useRef, useEffect } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { TopCategoryData } from '../../../data/common/TopCategoryData';

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
        const scrollAmount = window.innerWidth < 640 ? 120 : 160; // Adjust scroll amount for smaller screens
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    };

    const scrollRight = () => {
      const container = scrollContainerRef.current;
      if (container) {
        const scrollAmount = window.innerWidth < 640 ? 120 : 160; // Adjust scroll amount for smaller screens
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
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
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button
          onClick={scrollLeft}
          className="p-2 text-xs sm:text-sm md:text-base lg:text-lg rounded-full bg-white text-black border border-gray-300 hover:bg-[#00B207] hover:border-[#00B207] transition-colors duration-300"
        >
          <FiArrowLeft className="arrowleft text-xs sm:text-sm md:text-base lg:text-lg hover:text-white" />
        </button>

        <div
          ref={scrollContainerRef}
          style={{
            display: 'flex',
            overflowX: 'auto',
            gap: '1rem',
            whiteSpace: 'nowrap',
            scrollbarWidth: 'none', // Hide scrollbar on Firefox
          }}
          className="hide-scrollbar" // Add a custom class for hiding the scrollbar
        >
          {children}
        </div>

        <button
          onClick={scrollRight}
          className="p-2 text-xs sm:text-sm md:text-base lg:text-lg rounded-full bg-white text-black border border-gray-300 hover:bg-[#00B207] hover:border-[#00B207] transition-colors duration-300"
        >
          <FiArrowRight className="text-xs sm:text-sm md:text-base lg:text-lg hover:text-white" />
        </button>
      </div>
    );
  };

  return (
    <section>
      <div className="w-10/12 sm:w-11/12 mx-auto pt-5 pb-10">
        <div className="pt-10 pb-10 flex justify-center">
          <h1 className="text-[2rem] text-center font-semibold">Top Category</h1>
        </div>
        <ScrollableContainer>
          <ul className=" flex items-center justify-center gap-5 p-2">
            {TopCategoryData.map((item) => (
              <li
                key={item.id}
                className="flex flex-col items-center justify-center px-2 sm:px-4 py-2 border-2 border-gray-200 
                w-[160px] h-[170px]  md:w-[170px] md:h-[180px] lg:w-[190px] lg:h-[200px] hover:border-2 hover:border-green-600 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-center flex-grow">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[50px] w-[50px] md:h-[60px] md:w-[60px] object-cover"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <h3 className="text-center text-sm sm:text-base font-medium">{item.title}</h3>
                  <p className="text-center text-xs sm:text-sm text-gray-500">{item.description}</p>
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


