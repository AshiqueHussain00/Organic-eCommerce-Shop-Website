import React from 'react'
import Sidebar from '../component/account/Sidebar'

const Account1 = () => {
  return (
    <section className='w-full '>

        {/* -------- container ------- */}

        <div className='w-11/12 xmd:w-10/12 mx-auto border-2 border-green pt-16 pb-24 flex gap-x-2'>

        {/* ----------- sidebar ------- */}

        <div className='border-2 border-green-500 w-[340px] '>

            <Sidebar/>

        </div>

        {/* -------- other pages (content) ------ */}

        <div className='border-2 border-red-500 w-full'>

        </div>

        </div>



    </section>
  )
}

export default Account1