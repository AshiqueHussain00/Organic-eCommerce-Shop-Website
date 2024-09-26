import React from 'react'
import { Link } from 'react-router-dom'


const SidebardLink = ({ nav }) => {

    const IconComponent = nav.icon
    return (
        <Link key={nav.id} to={nav.path} className='hover:bg-green-gray-scale-50 group'>
            <div className='py-3 pl-3 px-2 flex items-center gap-x-2 t text-gray-600 text-base font-normal group-hover:text-gray-900'>

                <p className='text-lg'><IconComponent /></p>
                <p>{nav.title}</p>

            </div>
        </Link>
    )
}

export default SidebardLink