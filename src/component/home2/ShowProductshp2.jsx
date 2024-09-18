import React from 'react'
import Veg from '../../assets/common/categories/Vege.svg'
import GreenApple from '../../assets/home3/bestDeals/GreenApple.svg'
import OrangeMalta from '../../assets/home3/bestDeals/OrangeMalta.svg'
import GreenLettuce from '../../assets/home3/bestDeals/GreenLettuce.svg'
import EggPlant from '../../assets/home3/bestSellers/EggPlant.svg'
import RedCapsicum from '../../assets/home3/bestSellers/RedCapsicum.svg'
import RedTomatos from '../../assets/home3/bestSellers/RedTomatos.svg'
import SmallProductCard from '../common/SmallProductCard';
import Shop from '../../assets/home2/shop.svg'
import { FaArrowRight } from "react-icons/fa6";



const products = [
    {

        image: GreenApple,
        productName: 'Green Apple',
        price: '14.99',
        oldPrice: '29.99',
        rating: 1,
        isSale: true,

    },
    {
        image: EggPlant,
        productName: 'Egg Plant',
        rating: 4,
        price: '9.99',
        isBestSeller: true,
        isSale: false,

    },
    {
        image: OrangeMalta,
        productName: 'Orange Malta',
        price: '7.99',
        rating: 4,
        isSale: true,

    },
    {
        image: GreenLettuce,
        productName: 'Green Lettuce',
        price: '19.99',
        rating: 5,
        isBestSeller: false,
        isSale: true,


    },
    {
        image: Veg,
        productName: 'Mango',
        price: '19.99',
        rating: 5,
        isBestSeller: false,
        isSale: false,

    },
    {
        image: Veg,
        productName: 'Mango',
        price: '19.99',
        rating: 2,
        isBestSeller: false,
        isSale: false,

    },
    {
        image: Veg,
        productName: 'Mango',
        price: '19.99',
        rating: 4,
        isBestSeller: false,
        isSale: false,

    },
    {
        image: RedCapsicum,
        productName: 'Red Capsicum',
        price: '19.99',
        rating: 3,
        isBestSeller: true,
        isSale: false,

    },

    {
        image: RedTomatos,
        productName: 'Red Tomatos',
        price: '19.99',
        rating: 5,
        isBestSeller: true,
        isSale: false,

    },
];



const ShowProductshp2 = ({ isHotSale = false }) => {

    const hotDealData = products.filter(product => product.isSale === true);
    const bestSellerData = products.filter(product => product.isBestSeller === true);
    const topRatedProduct = products.filter(product => product.rating >= 4);



    return (
        <section className='w-full py-10'>
        {/* --------- container -------- */}
        <div className='w-11/12 xmd:w-10/12 xlg:w-11/12 xl:w-10/12 mx-auto grid xlg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-y-8 gap-x-6 justify-items-center'>
            {/* -------- hot deals ----- */}
            <div data-aos="fade-right" className='flex flex-col gap-y-6 sm:w-full xs:w-[80%] xxs:w-[90%] w-[95%]'>
                <h1 className='text-xl font-semibold'>Hot Deals</h1>
                {hotDealData.slice(0, 3).map((product, index) => (
                    <SmallProductCard key={index} product={product} />
                ))}
            </div>
    
            {/* --------- best Seller -------- */}
            <div data-aos="fade-up" className='flex flex-col gap-y-6 sm:w-full xs:w-[80%] xxs:w-[90%] w-[95%]'>
                <h1 data-aos="fade-up" className='text-xl font-semibold'>Best Seller</h1>
                {bestSellerData.slice(0, 3).map((product, index) => (
                    <SmallProductCard key={index} product={product} />
                ))}
            </div>
    
            {/* --------- top rated ------------- */}
            <div data-aos="fade-up" className='flex flex-col gap-y-6 sm:w-full xs:w-[80%] xxs:w-[90%] w-[95%]'>
                <h1 data-aos="fade-up" className='text-xl font-semibold'>Top Rated</h1>
                {topRatedProduct.slice(0, 3).map((product, index) => (
                    <SmallProductCard key={index} product={product} />
                ))}
            </div>
    
            {/* --------- Shop Image Column -------- */}
            <div data-aos="fade-left" className='relative flex justify-center items-center sm:w-full xs:w-[80%] xxs:w-[90%] w-[95%]'>
    {/* Shop Image */}
    <img src={Shop} alt="Shop" className="w-[500px] h-[490px] object-cover" />

    {/* Overlay Container for Text and Button */}
    
    <div className='absolute inset-0 flex-col items-center justify-center bg-opacity-40'>
        {/* Static Sale Text */}
        <p className='text-[10px] w-[50%] text-center text-sm mt-4 ml-12 font-normal text-white'>
            <span className='font-semibold'>HOT SALE</span>
        </p>
        
        {/* Main Sale Text */}
        <p className='text-[32px] w-[80%] text-center ml-6 font-normal text-white mt-2'>
            <span className='font-semibold'>Save 37%</span> on Every Order
        </p>

        {/* Shop Now Button */}
        <div className="flex justify-center items-center">
        <button className='flex items-center justify-center mb-4 gap-x-3 bg-white-100 text-primary font-semibold text-sm px-6 py-3 rounded-3xl group transition-all duration-200 hover:text-white-100 hover:bg-primary mt-4'>
            Shop Now
            <FaArrowRight />
        </button>
        </div>
    </div>
</div>



        </div>
    </section>
    
    )
}

export default ShowProductshp2;