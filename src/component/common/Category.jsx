import React from 'react'
import { categories } from '../../data/common/category'
import { Link } from 'react-router-dom'


const Category = () => {
  return (
    <div className='w-full grid xlg:grid-cols-6 mmd:grid-cols-5 md:grid-cols-4 xs:grid-cols-3 grid-cols-2 gap-y-6 xl:gap-x-6 gap-x-3'>
     
     {
        categories.map((category)=> (

            <Link to={category.path} key={category.id}>
            <div className='border border-gray-100 flex flex-col gap-y-4 items-center py-4 xl:px-3 px-2 rounded-lg  transition-all duration-200 hover:border-branding-success green-shadow group' >
                <div>
                <img src={category.image} alt="" />
                </div>

                <p className=' text-[16px] xxl:text-lg text-gray-900 leading-[27px] font-medium transition-all duration-200 group-hover:text-branding-success text-center'>{category.title}</p>
             
            </div>
            </Link>
        ))
     }
      
        

    </div>
  )
}

export default Category


