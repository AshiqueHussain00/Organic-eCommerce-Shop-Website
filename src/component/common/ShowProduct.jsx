import React from 'react'
import Veg from '../../assets/common/categories/Vege.svg'
import SmallProductCard from './SmallProductCard';
import { FaArrowRight } from "react-icons/fa6";
import allproductData from '../../data/common/allproductData'




const ShowProduct = ({ isHotSale = true }) => {

    const hotDealData = allproductData.filter(product => product.price.discounted < 20);
    const bestSellerData = allproductData.filter(product => product.reviews > 5);
    const topRatedProduct = allproductData.filter(product => product.rating >= 4);

    console.log("Hello")
    console.log("Hot : " , hotDealData);



    return (
        <section className='w-full py-10'>

            {/* --------- container -------- */}

            <div  className='w-11/12 xmd:w-10/12 xlg:w-11/12 xl:w-10/12 mx-auto grid xlg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-y-8 gap-x-6 justify-items-center'>



                {/* -------- hot deals ----- */}
                <div className='flex flex-col gap-y-6 sm:w-full xs:w-[80%] xxs:w-[90%] w-[95%]'>

                    <h1 className='text-xl font-semibold'>Hot Deals</h1>

                    {
                        hotDealData.slice(0, 3).map((product, index) => (

                            <SmallProductCard key={index} product={product} />
                        ))
                    }


                </div>

                {/* --------- best Seller -------- */}
                <div className='flex flex-col gap-y-6 sm:w-full xs:w-[80%] xxs:w-[90%] w-[95%]'>

                    <h1 className='text-xl font-semibold'>Best Seller</h1>

                    {
                        bestSellerData.slice(0, 3).map((product, index) => (

                            <SmallProductCard key={index} product={product} />
                        ))
                    }


                </div>

                {/* --------- top rated ------------- */}

                <div className='flex flex-col gap-y-6 sm:w-full xs:w-[80%] xxs:w-[90%] w-[95%]'>

                    <h1 className='text-xl font-semibold'>Top Rated</h1>

                    {
                       topRatedProduct.slice(0, 3).map((product, index) => (

                            <SmallProductCard key={index} product={product} />
                        ))
                    }


                </div>

                {/* -------------- sales -------------- */}

                <div className={`flex flex-col items-center gap-y-4 py-8 sm:w-full xs:w-[80%] xxs:w-[90%] w-[95%] 
                ${
                    isHotSale ? "hot-sale" : "summer-sale"
                }
                    `}>

                        {/* ------ sale------ */}
                        <p className='uppercase text-sm'>
                            {isHotSale ? "Hot Sale" : "Summer Sale"}
                        </p>


                        {/* ------- title --------- */}
                       {
                        isHotSale ? (<p className=' text-[32px] w-[80%] text-center font-normal'>
                            <span className='font-semibold'>Save 37%</span> on Every Order
                        </p>) : (<p className='w-[80%]  text-center text-[32px] text-branding-success font-semibold'>
                            75% off
                        </p>)
                       }

                       {/* -------- shop now btn -------- */}

                       <div>
                        <button className='flex items-center gap-x-3 bg-white-100 text-branding-success font-semibold text-sm px-6 py-3 rounded-3xl group transition-all duration-200 hover:text-white-100 hover:bg-primary'>
                            Shop Now
                            <FaArrowRight/>
                        </button>
                       </div>

                </div>

            </div>



        </section>
    )
}

export default ShowProduct