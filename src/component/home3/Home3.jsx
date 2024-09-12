import React from 'react'

import HeaderBottom from '../common/HeaderBottom'
import TopCategory from './home-component/TopCategory'
import Banners from '../common/Banners'
import NewestProducts from './home-component/NewestProducts'
import ClientTestimonials from './home-component/ClientTestimonials'

function Home3() {
  return (
    <div>
      <HeaderBottom/>
      <TopCategory/>
       <Banners/>
     <NewestProducts/>
        <ClientTestimonials/>
    </div>
  )
}

export default Home3
