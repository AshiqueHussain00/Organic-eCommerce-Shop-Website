import React from 'react'
import { Link } from 'react-router-dom'


const SidebardLink = ({ nav, setIsLogout }) => {

    const IconComponent = nav.icon
    return (
        <>
            {
                nav.title.toLowerCase() === "logout" ? (

                    <div onClick={() => setIsLogout(true)} className='hover:bg-green-gray-scale-50 cursor-pointer group'>
                        <div className='py-3 pl-6 md:pr-2 pr-4 flex items-center gap-x-2 t text-gray-600 smd:text-base text-sm font-normal group-hover:text-gray-900'>

                            <p className='text-lg'><IconComponent /></p>


                            <p>{nav.title}</p>



                        </div>
                    </div>

                ) : (
                    <Link to={nav.path} className='hover:bg-green-gray-scale-50 group'>
                        <div className='py-3 pl-6 md:pr-2 pr-4 flex items-center gap-x-2 t text-gray-600 smd:text-base md:text-sm xs:text-base text-sm font-normal group-hover:text-gray-900'>

                            <p className='text-lg'><IconComponent /></p>


                            <p>{nav.title}</p>



                        </div>
                    </Link>

                )

            }


        </>
    )
}

export default SidebardLink