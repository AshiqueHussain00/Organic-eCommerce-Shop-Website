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
      <div className="relative border-2 border-blue-500">
  <HomeHeroSection2 className="border-4 border-red-500" />
  <HeaderBottom className="absolute -top-20 left-0 z-10 border border-green-500" />
</div>
      {/* <div className="relative">
      <HomeHeroSection2 />
      <HeaderBottom className="absolute -top-20 left-0 z-10" />
    </div> */}
      <TopCategory />
      <Banners />
      <NewestProducts />
      <ClientTestimonials />
    </div>
  )
}

export default Home3
