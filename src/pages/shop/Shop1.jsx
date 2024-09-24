import React from 'react'
import FilterOne from '../../component/shop1/FilterOne'
import allproductData from '../../data/common/allproductData'
import BreadCrumbs from '../../component/common/BreadCrumbs'

function Shop1() {
  return (
    <section className='relative w-full pb-10'>
        <BreadCrumbs/>
        <div className='w-full mx-auto lg:w-10/12 '>
      
        <FilterOne products={allproductData}/>
        </div>
    </section>
  )
}

export default Shop1
