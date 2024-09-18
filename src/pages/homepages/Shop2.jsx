import React from 'react'
import FilterTwo from '../../component/common/FilterTwo'
import allproductData from '../../data/common/allproductData'

function Shop2() {
  return (
    <section className='relative w-full pt-10 pb-10'>
        <div className='w-full mx-auto lg:w-10/12 '>
        <FilterTwo products={allproductData}/>
        </div>
    </section>
  )
}

export default Shop2