
import React from 'react';
import Bannar from '../../assets/home2/Bannar.png'; 


const BannerHome2 = () => {
    return (
        <section className='w-full'>
            <div className='w-11/12  mx-auto xmd:w-10/12 flex item-center justify-center mt-4  xs:max-h-[500px]'>
          
          {/* <div className="relative lg:w-8/12 md:w-11/12 sm:w-full "> */}
          <img
            src={Bannar} // Replace with your image URL
            alt="bannar"
            className="w-full object-cover"
          />
        </div>
     
      </section>
      );
}

export default BannerHome2