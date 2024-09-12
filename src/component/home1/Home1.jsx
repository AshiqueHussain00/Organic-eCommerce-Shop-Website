import ProductDetails from './home-component/ProductDetails'
import HomeOneHerosection from './home-component/HomeOneHerosection'
import HeaderBottom from '../common/HeaderBottom'
import ProductOffer from './home-component/ProductOffer'
import Banners from '../common/Banners'
import ProductCategory from './home-component/ProductCategory'
import PopularProducts from './home-component/PopularProducts'
import FeaturedProducts from './home-component/FeaturedProducts'
import HomeTestimonial from './home-component/HomeTestimonial'
import HomeLatestNews from './home-component/HomeLatestNews'

function Home1() {
    return (
        <div>
            <HomeOneHerosection />
            <HeaderBottom/>
            <ProductCategory/>
            <PopularProducts/>
            <Banners/>
            <ProductDetails />
            <ProductOffer/>
            <HomeLatestNews/>
            <FeaturedProducts/>
            <HomeTestimonial/>
          
        </div>
    )
}

export default Home1
