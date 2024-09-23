import React from 'react'
import Veg from '../../assets/common/categories/Vege.svg'
import { useState, useEffect } from 'react'
import ProductCard from '../common/ProductCard'
import { useNavigate } from 'react-router-dom'
import './home4Common.css'
import allproductData from '../../data/common/allproductData'


// console.log("ALl product: " , allproductData);

const categories = ["All", "Vegetables", "Fruits", "Snacks"]

const ProductSection = () => {

    const navigate = useNavigate()

    const [selectedCategory, setSelectedcategory] = useState("all")

    useEffect(() => {

        if (selectedCategory === "view all") {
            navigate("/shop1")
        }

    }, [selectedCategory])


    // console.log(filter)


    return (
        <section className='w-full relative bg-gray-50 md:pt-56 pt-72 pb-20'>

            {/* --------- container ----------- */}
            <div className='w-11/12 xmd:w-10/12 mx-auto flex flex-col gap-y-8 items-center '>

                <h1 data-aos="fade-right" className='font-semibold text-4xl sm:text-[40px] text-center'>Introducing Our Products</h1>

                {/* ------------ category (filter) ------------ */}

                <div data-aos="fade-left" className='flex flex-wrap xs:no-wrap  md:w-[80%] gap-y-4 gap-x-6 sm:gap-x-12 justify-center'>
                    {
                        categories.map((category, index) => (
                            <div onClick={() => setSelectedcategory(category.toLowerCase())} key={index} className={` grid place-items-center px-2 cursor-pointer
                    ${selectedCategory === category.toLowerCase() ? "text-primary underline-custom" : "text-gray-500 leading-8 transition-all duration-200 hover:text-primary"
                                }
                `}>
                                {category}

                            </div>
                        ))
                    }

                    <div onClick={() => navigate("/shop1")} className={` grid place-items-center px-2 cursor-pointer text-gray-500 leading-8 transition-all duration-200 hover:text-primary
                        }
                `}>
                        View All

                    </div>


                </div>

                {/* -------------- products ----------- */}

                <div data-aos="fade-up" className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xs:gap-1 gap-2 xlg:grid-cols-4  w-[95%] xxs:w-[80%] xs:w-full'>

                    {
                        selectedCategory === "all" ?

                            allproductData.slice(0, 8).map((product, index) => (
                                <ProductCard
                                product={product}
                                    key={index}
                                    imageSrc={product.images[0].main}
                                    productName={product.name}
                                    price={product.price.discounted}
                                    oldPrice={product.price.original}
                                    rating={product.rating}
                                    // isBestSeller={product.isBestSeller}
                                    // bestSellerText={product.bestSellerText}

                                />
                            )) :



                            allproductData.filter((item) => item.category.toLowerCase() === selectedCategory).slice(0, 8).map((product, index) => (
                                <ProductCard
                                product={product}
                                key={index}
                                imageSrc={product.images[0].main}
                                productName={product.name}
                                price={product.price.discounted}
                                oldPrice={product.price.original}
                                rating={product.rating}
                                // isBestSeller={product.isBestSeller}
                                // bestSellerText={product.bestSellerText}


                                />


                            ))
                    }

                </div>

            </div>

        </section>
    )
}

export default ProductSection