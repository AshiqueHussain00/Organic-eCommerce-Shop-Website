import React from 'react'
import Sidebar from '../component/account/Sidebar'
import { Outlet } from 'react-router-dom'
import BreadCrumbs from '../component/common/BreadCrumbs'

const Account1 = () => {
  return (
    <section className='w-full '>

      <BreadCrumbs/>

      {/* -------- container ------- */}

      <div className='w-11/12 xmd:w-10/12 mx-auto border-2 border-green-300 pt-12 pb-12 flex gap-x-4'>

        {/* ----------- sidebar ------- */}

        <div className='border rounded-md w-[340px] h-max '>

          <Sidebar />

        </div>

        {/* -------- other pages (content) ------ */}

        <div className='border rounded-md w-full  py-4'>

          <Outlet />


        </div>

      </div>



    </section>
  )
}

export default Account1