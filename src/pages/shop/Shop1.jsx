import React from 'react'
import FilterOne from '../../component/shop1/FilterOne'
import allproductData from '../../data/common/allproductData'
import BreadCrumbs from '../../component/common/BreadCrumbs'
import Footer1 from '../../component/common/footer/footer1'

function Shop1() {
  return (
    <section className='relative w-full'>
        <BreadCrumbs/>
        <div className='w-full pb-10 mx-auto lg:w-10/12'>
      
        <FilterOne products={allproductData}/>
       
        </div>
        <Footer1/>
    </section>
  )
}

export default Shop1
