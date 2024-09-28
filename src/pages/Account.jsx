import React from 'react'
import Sidebar from '../component/account/Sidebar'
import Dashboard from '../component/account/Dashboard'
import { Outlet } from 'react-router-dom'
import BreadCrumbs from '../component/common/BreadCrumbs'
import { HiDotsVertical } from "react-icons/hi";
import { useState } from 'react';
import ResponsiveSidebar from '../component/account/ResponsiveSidebar';

const Account1 = () => {

  const [sideOpen, setSideOpen] = useState(false)

  const handleSidebar = () => {
    setSideOpen(!sideOpen);
  }


  return (
    <section className='w-full '>

      <BreadCrumbs />

      {/* -------- container ------- */}

      <div className='w-11/12 lg:w-10/12 mx-auto pt-12 pb-12 flex flex-col md:flex-row gap-x-4 gap-y-6'>

        {/* ----------- sidebar ------- */}

        <div className='border rounded-md xl:w-[340px] smd:w-[300px] w-[260px] h-max md:flex hidden '>

          <Sidebar />

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

          <ResponsiveSidebar sideOpen={sideOpen} setSideOpen={setSideOpen} />



        </div>

        {/* -------- other pages (content) ------ */}

        <div className='border rounded-md w-full  py-2'>

          <Outlet />


        </div>

      </div>



    </section>
  )
}

export default Account1