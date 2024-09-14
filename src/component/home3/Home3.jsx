import React from 'react'
import HeaderBottom from '../home3/home-component/HeaderBottom'
import FeaturedProducts from './home-component/FeaturedProducts'
import ShowProduct from '../common/ShowProduct'
import ShowProductshp3 from './home-component/showProductshp3'
import TopCategory from './home-component/TopCategory'
import Banners from '../common/Banners'
import NewestProducts from './home-component/NewestProducts'
import ClientTestimonials from './home-component/ClientTestimonials'
import HeroBottom4 from '../home4/HeroBottom4'
import HomeHeroSection2 from './home-component/HomeHeroSection2'

function Home3() {
  return (
    <div>
     
      <div className="relative">
      <HomeHeroSection2 />
      <HeaderBottom />
    </div>
      <FeaturedProducts/>
      <ShowProductshp3/>
      <TopCategory />
      <Banners />
      <NewestProducts />
      <ClientTestimonials />
    </div>
  )
}

export default Home3
