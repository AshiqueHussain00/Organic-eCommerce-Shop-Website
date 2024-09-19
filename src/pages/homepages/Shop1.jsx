import React from 'react'
import FilterOne from '../../component/common/FilterOne'
import allproductData from '../../data/common/allproductData'

function Shop1() {
  return (
    <section className='relative w-full pt-10 pb-10'>
        <div className='w-full mx-auto lg:w-10/12 '>
        <FilterOne products={allproductData}/>
        </div>
    </section>
  )
}

export default Shop1
