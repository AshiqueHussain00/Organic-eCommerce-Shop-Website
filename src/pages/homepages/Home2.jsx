import React from 'react'
import VideoComponent from '../../component/home2/video'
import Members from '../../component/home2/Members'
import HeaderBottom from '../../component/common/HeaderBottom'
 //import Banner from '../../component/home4/Banner'
 //import TopCategory from '../home3/home-component/TopCategory'
import PopularCategory from '../../component/home1/ProductCategory'
 import FeaturedProducts from '../../component/home1/FeaturedProducts'
import HomeTestimonial from '../../component/home1/HomeTestimonial'
import BannerHome2 from '../../component/home2/BannerHome2'

const Home2 = () => {
  return (
    <div>
      
 <BannerHome2/>
 <HeaderBottom/>
 <PopularCategory/>
 <FeaturedProducts/>
 <VideoComponent/>
 <Members/>
 <HomeTestimonial/>
 
        {/* <HomeOneHerosection />
    
       
        <PopularProducts/>
       
        <ProductDetails />
        <ProductOffer/>
      
        */}
      
    </div>
)
}

export default Home2