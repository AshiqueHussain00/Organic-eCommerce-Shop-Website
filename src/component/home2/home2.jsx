import React, { useState } from 'react';
import Bannar from '../../assets/home2/Bannar.png'; 
const home2 = () => {
    return (
        <div className='relative w-11/12 mx-auto flex item-right justify-right mt-4'>
        {/* <div className="relative lg:w-8/12 md:w-11/12 sm:w-full "> */}
        <img
          src={Bannar} // Replace with your image URL
          alt="bannar"
          className="w-full h-auto object-contain"
        />
      </div>
    //   </div>
    );
  };
  
  export default home2;
  