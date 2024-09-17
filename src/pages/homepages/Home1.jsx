import ProductDetails from '../../component/home1/ProductDetails'
import HomeHerosection from '../../component/home1/HomeHerosection'
import HeaderBottom from '../../component/common/HeaderBottom'
import ProductOffer from '../../component/home1/ProductOffer'
import Banners from '../../component/common/Banners'
import ProductCategory from '../../component/home1/ProductCategory'
import PopularProducts from '../../component/home1/PopularProducts'
import FeaturedProducts from '../../component/home1/FeaturedProducts'
import HomeTestimonial from '../../component/home1/HomeTestimonial'
import HomeLatestNews from '../../component/home1/HomeLatestNews'
import Newsletter from '../../component/common/Newsletter'
import NewsletterTwo from '../../component/common/NewsletterTwo'
import NewsletterThree from '../../component/common/NewsletterThree'

function Home1() {
    return (
        <div>
            <HomeHerosection />
            <HeaderBottom/>
            <ProductCategory/>
            <PopularProducts/>
            <Banners/>
            <ProductDetails />
            <ProductOffer/>
            <FeaturedProducts/>
            <HomeLatestNews/>
            <HomeTestimonial/>
            <Newsletter/>
            <NewsletterTwo/>
            <NewsletterThree/>
          
        </div>
    )
}

export default Home1