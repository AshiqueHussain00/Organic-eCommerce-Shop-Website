import React from 'react'
import HeaderBottom from '../../component/home3/HeaderBottom'
import FeaturedProducts from '../../component/home3/FeaturedProducts'
import ShowProductshp3 from '../../component/home3/showProductshp3'
import TopCategory from '../../component/home3/TopCategory'
import Banners from '../../component/common/Banners'
import NewestProducts from '../../component/home3/NewestProducts'
import ClientTestimonials from '../../component/home3/ClientTestimonials'
import HeroSection from '../../component/home3/HeroSection'

function Home3() {
  return (
    <div>

      <div className="relative">
        <HeroSection/>
        <HeaderBottom />
      </div>
      <FeaturedProducts />
      <ShowProductshp3 />
      <TopCategory />
      <Banners />
      <NewestProducts />
      <ClientTestimonials />
    </div>
  )
}

export default Home3
