import React from 'react'
import ProductCard from '../common/ProductCard';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom"
import Vege from '../../assets/home5/featuredproduct/chinesecabbage.svg'

const PopularProducts = () => {
    const handleAddToCart = () => {
        console.log("Add to Cart clicked");
    };


    const products = [
        {
            imageSrc: Vege,
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
            imageSrc:  Vege,
            productName: 'Banana',
            price: '9.99',
            rating: 3,
            isSale: true,
            isBestSeller: false,
            saleText: 'Sale',
            bestSellerText: ''
        },
        {
            imageSrc: Vege,
            productName: 'Orange',
            price: '7.99',
            rating: 4,
            isSale: false,
            isBestSeller: false,
            saleText: '',
            bestSellerText: ''
        },
        {
            imageSrc: Vege,
            productName: 'Mango',
            price: '19.99',
            rating: 5,
            isSale: true,
            isBestSeller: true,
            saleText: 'Sale 50%',
            bestSellerText: 'Best Seller'
        },
        {
            imageSrc: Vege,
            productName: 'Mango',
            price: '19.99',
            rating: 5,
            isSale: true,
            isBestSeller: true,
            saleText: 'Sale 50%',
            bestSellerText: 'Best Seller'
        },
        {
            imageSrc: Vege,
            productName: 'Mango',
            price: '19.99',
            rating: 5,
            isSale: true,
            isBestSeller: true,
            saleText: 'Sale 50%',
            bestSellerText: 'Best Seller'
        },
        {
            imageSrc: Vege,
            productName: 'Mango',
            price: '19.99',
            rating: 5,
            isSale: true,
            isBestSeller: true,
            saleText: 'Sale 50%',
            bestSellerText: 'Best Seller'
        },
        {
            imageSrc: Vege,
            productName: 'Mango',
            price: '19.99',
            rating: 5,
            isSale: true,
            isBestSeller: true,
            saleText: 'Sale 50%',
            bestSellerText: 'Best Seller'
        },

        {
            imageSrc: Vege,
            productName: 'Mango',
            price: '19.99',
            rating: 5,
            isSale: true,
            isBestSeller: true,
            saleText: 'Sale 50%',
            bestSellerText: 'Best Seller'
        },
        {
            imageSrc: Vege,
            productName: 'Mango',
            price: '19.99',
            rating: 5,
            isSale: true,
            isBestSeller: true,
            saleText: 'Sale 50%',
            bestSellerText: 'Best Seller'
        },
    ];



    // Define the animation
    const cardAnimation = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };
    return (
        <section className='relative w-full pb-10'>
            <div className='w-10/12 mx-auto'>
                <div className="flex flex-col items-center justify-between pt-10 pb-10 xs:flex-row">
                    <h1 data-aos="fade-right" className="text-[2rem] font-semibold">Popular Products</h1>
                    <Link data-aos="fade-left" className="font-medium text-primary">View All →</Link>
                </div>
                <div data-aos="fade-up" className="grid grid-cols-1 gap-1 xs:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">


                    {/* Adjusted Product Cards Layout */}
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            className=""
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            variants={cardAnimation}
                        >
                            <ProductCard
                                imageSrc={product.imageSrc}
                                productName={product.productName}
                                price={product.price}
                                oldPrice={product.oldPrice}
                                rating={product.rating}
                                onAddToCart={() => handleAddToCart(product.productName)}
                                isSale={product.isSale}
                                isBestSeller={product.isBestSeller}
                                saleText={product.saleText}
                                bestSellerText={product.bestSellerText}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PopularProducts
