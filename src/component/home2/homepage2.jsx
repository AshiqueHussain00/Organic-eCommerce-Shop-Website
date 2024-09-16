
import VideoComponent from './video'
import Members from './Members'
import HeaderBottom from '../../component/common/HeaderBottom'
 //import Banner from '../../component/home4/Banner'
 //import TopCategory from '../home3/home-component/TopCategory'
import PopularCategory from '../home1/home-component/ProductCategory'
 import FeaturedProducts from '../../component/home1/home-component/FeaturedProducts'
import HomeTestimonial from '../../component/home1/home-component/HomeTestimonial'
import BannerHome2 from './BannerHome2'

function Homepage2() {
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

export default Homepage2
