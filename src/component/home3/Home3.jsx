import React from 'react'

import HeaderBottom from '../common/HeaderBottom'
import TopCategory from './home-component/TopCategory'
import Banners from '../common/Banners'
import NewestProducts from './home-component/NewestProducts'
import ClientTestimonials from './home-component/ClientTestimonials'
import HeroBottom4 from '../home4/HeroBottom4'
import HomeHeroSection2 from './home-component/HomeHeroSection2'

function Home3() {
  return (
    <div>
      <HomeHeroSection2/>
      <HeaderBottom />
      <TopCategory />
      <Banners />
      <NewestProducts />
      <ClientTestimonials />
    </div>
  )
}

export default Home3
