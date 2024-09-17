import React from 'react'
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { RxTriangleDown } from "react-icons/rx";


const TestimonialCard4 = ({data}) => {
  return (
    <div data-aos="fade-up" className='relative  z-10 flex flex-col items-center gap-y-8 xsm:w-[90%]  sm:w-[80%] mx-auto md:mx-0 md:w-full' >

      {/* -----------  card -------- */}

      <div className='flex flex-col items-center bg-white-100 pt-12  xs:px-6 px-4 gap-y-6 rounded-xl relative z-10'>

        <div className='text-4xl text-light-branding-success flex justify-center'><BiSolidQuoteAltRight/></div>

        <p className='text-green-gray-scale-600 text-center leading-6'>
          {`" ${data.compliment} "`}
        </p>

        {/* --------- triangle ------ */}
      <div className='text-white-100 relative text-5xl bottom-[-25px]  z-20'>
               <RxTriangleDown/>
      </div>

      </div>

     
     



      {/* ------------ img section-------------- */}

      <div className='flex flex-col items-center gap-y-4'>
        <div>
        <img src={data.img} alt={data.name} />
        </div>

        <div className='flex flex-col '>

        <h2 className='text-center font-meidum text-gray-900' >{data.name}</h2>
        <p className='text-center text-sm text-green-gray-scale-500'>{data.role}</p>

        </div>

     
    
      </div>


    </div>
  )
}

export default TestimonialCard4