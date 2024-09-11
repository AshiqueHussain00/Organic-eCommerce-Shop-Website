import React from 'react'
import { categories } from '../../data/common/category'
import { Link } from 'react-router-dom'


const Category = () => {
  return (
    <div className='grid w-full grid-cols-2 xlg:grid-cols-6 mmd:grid-cols-5 md:grid-cols-4 xs:grid-cols-3 gap-y-6 xl:gap-x-6 gap-x-3'>
     
     {
        categories.map((category)=> (

            <Link to={category.path} key={category.id}>
            <div className='flex flex-col items-center px-2 py-4 transition-all duration-200 border border-gray-100 rounded-lg gap-y-4 xl:px-3 hover:border-branding-success green-shadow group' >
                <div>
                <img src={category.image} alt={category.title} />
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


