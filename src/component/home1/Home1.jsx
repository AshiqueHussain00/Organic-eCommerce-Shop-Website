import ProductDetails from './home-component/ProductDetails'
import HomeOneHerosection from './home-component/HomeOneHerosection'
import HeaderBottom from '../home3/HeaderBottom'
import ProductOffer from './home-component/ProductOffer'
import Banner from '../../component/home3/Banner'
import ProductCategory from './home-component/ProductCategory'
import PopularProducts from './home-component/PopularProducts'
import FeaturedProducts from './home-component/FeaturedProducts'
import HomeTestimonial from './home-component/HomeTestimonial'

function Home1() {
    return (
        <div>
            <HomeOneHerosection />
            <HeaderBottom/>
            <ProductCategory/>
            <PopularProducts/>
            <Banner/>
            <ProductDetails />
            <ProductOffer/>
            <FeaturedProducts/>
            <HomeTestimonial/>
          
        </div>
    )
}

export default Home1
