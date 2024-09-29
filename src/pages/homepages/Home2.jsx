import React from 'react'
import VideoComponent from '../../component/home2/video'
import Members from '../../component/home2/Members'
import HeaderBottom from '../../component/common/HeaderBottom'
import Banners from '../../component/common/Banners'
import ShowProduct from '../../component/common/ShowProduct'
import PopularCategory from '../../component/home1/ProductCategory'
import Fproducts from '../../component/home2/Fproducts'
import HomeTestimonial from '../../component/home1/HomeTestimonial'
import BannerHome2 from '../../component/home2/BannerHome2'
import Footer2 from '../../component/common/footer/footer2'
import NewsletterTwo from '../../component/common/NewsletterTwo'

const Home2 = () => {
  return (
    <div>

      <BannerHome2 />
      <HeaderBottom />
      <Banners />
      <PopularCategory />
      <Fproducts />
      <ShowProduct />
      <VideoComponent />
      <Members />
      <HomeTestimonial />
      <NewsletterTwo />
      <Footer2 />



      {/* <HomeOneHerosection />
    
       
        <PopularProducts/>
       
        <ProductDetails />
        <ProductOffer/>
      
        */}

    </div>
  )
}

export default Home2