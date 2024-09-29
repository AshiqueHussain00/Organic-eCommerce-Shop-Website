import React from 'react'
import Sidebar from '../component/account/Sidebar'
import { Outlet } from 'react-router-dom'
import BreadCrumbs from '../component/common/BreadCrumbs'
import { HiDotsVertical } from "react-icons/hi";
import { useState } from 'react';
import ResponsiveSidebar from '../component/account/ResponsiveSidebar';
import Logout from '../component/account/Logout';
import Newsletter from '../component/common/NewsletterThree';
import Footer1 from '../component/common/footer/footer1';

const Account1 = () => {

  const [sideOpen, setSideOpen] = useState(false)
  const [isLogout , setIsLogout] = useState(false);

  const handleSidebar = () => {
    setSideOpen(!sideOpen);
  }


  return (
    <section className='w-full '>

      <BreadCrumbs />

      {/* -------- container ------- */}

      <div className='w-11/12 lg:w-10/12 mx-auto pt-12 pb-12 flex flex-col md:flex-row gap-x-4 gap-y-6'>

        {/* ----------- sidebar ------- */}

        <div data-aos="fade-right" className='border rounded-md xl:w-[340px] smd:w-[300px] w-[260px] h-max md:flex hidden '>

          <Sidebar isLogout={isLogout} setIsLogout={setIsLogout}/>

        </div>

        {/* --------- small screen menu ----- */}

        <div className='md:hidden  text-3xl relative'>

          <div
          onClick={handleSidebar}
           className=' w-max cursor-pointer transition-all duration-300 hover:text-primary'>
            <HiDotsVertical />
          </div>


          {
            sideOpen && (<div
              className="fixed z-[5000] w-full bg-opacity-20 inset-0 bg-black-800 "
              onClick={handleSidebar} // Clicking the background will close the sidebar
            ></div>)

          }

          <ResponsiveSidebar sideOpen={sideOpen} setSideOpen={setSideOpen} isLogout={isLogout} setIsLogout={setIsLogout} />



        </div>

        {/* -------- other pages (content) ------ */}

        <div  className='border rounded-md w-full  py-2 h-[80vh] overflow-y-scroll'>

          <Outlet />


        </div>

      </div>

      {
        isLogout && (
          <Logout isLogout={isLogout} setIsLogout={setIsLogout}/>
        )
      }

<Newsletter/>

<Footer1/>


    </section>
  )
}

export default Account1