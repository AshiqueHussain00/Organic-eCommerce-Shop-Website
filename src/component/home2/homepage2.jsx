import Navbar from '../../component/common/navbar'
import Home2 from './home2'
import VideoComponent from './video'
import Members from './Members'
import HeaderBottom from '../../component/common/HeaderBottom'
 //import Banner from '../../component/home4/Banner'
 //import TopCategory from '../home3/home-component/TopCategory'
import PopularCategory from '../home1/home-component/ProductCategory'
 import FeaturedProducts from '../../component/home1/home-component/FeaturedProducts'
import HomeTestimonial from '../../component/home1/home-component/HomeTestimonial'

function Homepage2() {
    return (
        <div>
             <Navbar/>
     <Home2/>
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
