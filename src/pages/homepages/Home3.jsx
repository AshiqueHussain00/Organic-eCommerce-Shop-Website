import React from 'react'
import HeaderBottom from '../../component/home3/HeaderBottom'
import FeaturedProducts from '../../component/home3/FeaturedProducts'
import ShowProduct from '../../component/common/ShowProduct'
// import ShowProductshp3 from '../../component/home3/showProductshp3'
import TopCategory from '../../component/home3/TopCategory'
import Banners from '../../component/common/Banners'
import NewestProducts from '../../component/home3/NewestProducts'
import ClientTestimonials from '../../component/home3/ClientTestimonials'
import HeroSection from '../../component/home3/HeroSection'
import Footer3 from '../../component/common/footer/Footer3'

function Home3() {
  return (
    <div>

      <div className="relative">
        <HeroSection/>
        <HeaderBottom />
      </div>
      <FeaturedProducts />
      <ShowProduct/>
      {/* <ShowProductshp3 /> */}
      <TopCategory />
      <Banners />
      <NewestProducts />
      <ClientTestimonials />
      <Footer3/>
    </div>
  )
}

export default Home3
