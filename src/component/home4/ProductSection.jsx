import React from 'react'
import Veg from '../../assets/common/categories/Vege.svg'
import { useState, useEffect } from 'react'
import ProductCard from '../common/ProductCard'
import { useNavigate } from 'react-router-dom'

const productData = [
    {
        id: 1,
        category: "Vegetable",
        products: [
            {
                id: 101,
                imageSrc: Veg,
                type: "Vegetable",
                productName: 'Green Apple',
                price: '14.99',
                oldPrice: '29.99',
                rating: 4,
                isSale: true,
                isBestSeller: true,
                saleText: 'Discount!',
                bestSellerText: 'Sale 50%'
            },
            {
                id: 102,
                imageSrc: Veg,
                type: "Vegetable",
                productName: 'Green Apple',
                price: '14.99',
                oldPrice: '29.99',
                rating: 4,
                isSale: true,
                isBestSeller: false,
                saleText: 'Discount!',
                bestSellerText: ''
            },
            {
                id: 103,
                imageSrc: Veg,
                type: "Vegetable",
                productName: 'Green Apple',
                price: '14.99',
                oldPrice: '29.99',
                rating: 4,
                isSale: true,
                isBestSeller: false,
                saleText: 'Discount!',
                bestSellerText: ''
            },
            {
                id: 104,
                imageSrc: Veg,
                type: "Vegetable",
                productName: 'Green Apple',
                price: '14.99',
                oldPrice: '29.99',
                rating: 4,
                isSale: true,
                isBestSeller: false,
                saleText: 'Discount!',
                bestSellerText: ''
            }
        ]
    },
    {
        id: 2,
        category: "Fruit",
        products: [
            {
                id: 201,
                imageSrc: Veg,
                type: "fruit",
                productName: 'Green Apple',
                price: '14.99',
                oldPrice: '29.99',
                rating: 4,
                isSale: true,
                isBestSeller: false,
                saleText: 'Discount!',
                bestSellerText: ''
            },
            {
                id: 202,
                imageSrc: Veg,
                type: "fruit",
                productName: 'Green Apple',
                price: '14.99',
                oldPrice: '29.99',
                rating: 4,
                isSale: true,
                isBestSeller: false,
                saleText: 'Discount!',
                bestSellerText: ''
            },
            {
                id: 203,
                imageSrc: Veg,
                type: "Fruit",
                productName: 'Green Apple',
                price: '14.99',
                oldPrice: '29.99',
                rating: 4,
                isSale: true,
                isBestSeller: false,
                saleText: 'Discount!',
                bestSellerText: ''
            },
            {
                id: 204,
                imageSrc: Veg,
                type: "Fruit",
                productName: 'Green Apple',
                price: '14.99',
                oldPrice: '29.99',
                rating: 4,
                isSale: true,
                isBestSeller: false,
                saleText: 'Discount!',
                bestSellerText: ''
            }
        ]
    },
    {
        id: 3,
        category: "Meat & Fish",
        products: [
            {
                id: 301,
                imageSrc: Veg,
                type: "fruit",
                productName: 'Green Apple',
                price: '14.99',
                oldPrice: '29.99',
                rating: 4,
                isSale: true,
                isBestSeller: false,
                saleText: 'Discount!',
                bestSellerText: ''
            },
            {
                id: 302,
                imageSrc: Veg,
                type: "fruit",
                productName: 'Green Apple',
                price: '14.99',
                oldPrice: '29.99',
                rating: 4,
                isSale: true,
                isBestSeller: false,
                saleText: 'Discount!',
                bestSellerText: ''
            },
            {
                id: 303,
                imageSrc: Veg,
                type: "Fruit",
                productName: 'Green Apple',
                price: '14.99',
                oldPrice: '29.99',
                rating: 4,
                isSale: true,
                isBestSeller: false,
                saleText: 'Discount!',
                bestSellerText: ''
            },
            {
                id: 304,
                imageSrc: Veg,
                type: "Fruit",
                productName: 'Green Apple',
                price: '14.99',
                oldPrice: '29.99',
                rating: 4,
                isSale: true,
                isBestSeller: false,
                saleText: 'Discount!',
                bestSellerText: ''
            }
        ]
    },
]

const categories = ["All", "Vegetable", "Fruit", "Meat & Fish"]

const ProductSection = () => {

    const navigate = useNavigate()

    const [selectedCategory, setSelectedcategory] = useState("all")

    useEffect(() => {

        if (selectedCategory === "view all") {
            navigate("/shop")
        }

    }, [selectedCategory])


    // console.log(filter)


    return (
        <section className='w-full relative bg-gray-50 py-40 pb-20'>

            {/* --------- container ----------- */}
            <div className='w-11/12 xmd:w-10/12 mx-auto flex flex-col gap-y-8 items-center '>

                <h1 className='font-semibold text-4xl sm:text-[40px] text-center'>Introducing Our Products</h1>

                {/* ------------ category (filter) ------------ */}

                <div className='flex flex-wrap xs:no-wrap  md:w-[80%] gap-y-4 gap-x-6 sm:gap-x-12 justify-center'>
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

                    <div onClick={() => navigate("/shop")} className={` grid place-items-center px-2 cursor-pointer text-gray-500 leading-8 transition-all duration-200 hover:text-primary
                        }
                `}>
                        View All

                    </div>


                </div>

                {/* -------------- products ----------- */}

                <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xs:gap-1 gap-2 xlg:grid-cols-4  w-[95%] xxs:w-[80%] xs:w-full'>

                    {
                        selectedCategory === "all" ?

                            productData.flatMap((item) => item.products).slice(0, 8).map((product, index) => (
                                <ProductCard
                                    key={index}
                                    imageSrc={product.imageSrc}
                                    productName={product.productName}
                                    price={product.price}
                                    oldPrice={product.oldPrice}
                                    rating={product.rating}
                                    isBestSeller={product.isBestSeller}
                                    bestSellerText={product.bestSellerText}

                                />
                            )) :



                            productData.find((item) => item.category.toLowerCase() === selectedCategory).products.slice(0, 8).map((product, index) => (
                                <ProductCard
                                    key={index}
                                    imageSrc={product.imageSrc}
                                    productName={product.productName}
                                    price={product.price}
                                    oldPrice={product.oldPrice}
                                    rating={product.rating}
                                    isBestSeller={product.isBestSeller}
                                    bestSellerText={product.bestSellerText}

                                />


                            ))
                    }

                </div>

            </div>

        </section>
    )
}

export default ProductSection