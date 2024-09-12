import React from 'react'
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { RxTriangleDown } from "react-icons/rx";
// name: "Dianne Russell",
// img: customer2,
// role: "Customer",
// compliment:
//     "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
// rating: 5,

const TestimonialCard4 = ({data}) => {
  return (
    <div className='relative  z-10 flex flex-col gap-y-6' >

      {/* -----------  card -------- */}

      <div className='flex flex-col bg-white-100 py-12 px-6 gap-y-6 rounded-xl relative z-10'>

        <div className='text-4xl text-light-branding-success flex justify-center'><BiSolidQuoteAltRight/></div>

        <p className='text-green-gray-scale-600 text-center leading-6'>
          {`" ${data.compliment} "`}
        </p>

        {/* --------- triangle ------ */}
      <div className='text-white-100 absolute text-5xl bottom-[-26px] left-[170px] z-50'>
               <RxTriangleDown/>
      </div>

      </div>

     
     



      {/* ------------ img -------------- */}

      <div>
  helllo
  helllo
      </div>


    </div>
  )
}

export default TestimonialCard4