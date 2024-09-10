import ProductDetails from './home-component/ProductDetails'
import HomeOneHerosection from './home-component/HomeOneHerosection'
import HeaderBottom from '../home3/HeaderBottom'
import ProductOffer from './home-component/ProductOffer'

function Home1() {
    return (
        <div>
            <HomeOneHerosection />
            <HeaderBottom/>
            <ProductDetails />
            <ProductOffer/>
        </div>
    )
}

export default Home1
