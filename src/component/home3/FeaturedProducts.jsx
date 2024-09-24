import React from 'react'
import ProductCard from '../common/ProductCard';
import image1 from '../../assets/home3/newestProducts/GreenApple.svg'
import image2 from '../../assets/home3/newestProducts/ChaineseCabbage.svg'
import image3 from '../../assets/home3/newestProducts/GreenLettuce.svg'
import image4 from '../../assets/home3/newestProducts/GreenChilli.svg'
import image5 from '../../assets/home3/newestProducts/Corn.svg'
import { motion } from 'framer-motion';
import { Link } from "react-router-dom"
import allproductData from '../../data/common/allproductData';

function FeaturedProducts() {

    const handleAddToCart = () => {
        console.log("Add to Cart clicked");
    };


    const ids = ['f1', 'v2', 'v4', 'v5', 'f13'];

    const products = (ids) => {
        return allproductData.filter((product) => ids.includes(product.id));
    }
    const selectedProducts = products(ids);





    // Define the animation
    const cardAnimation = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };
    return (
        <section className='relative w-full pb-10 mt-60 md:mt-32  smd:mt-24'>
            <div className='w-10/12 mx-auto'>
                <div className="flex flex-col items-center justify-between pt-10 pb-10">
                    <h1 className="text-[1.8rem] md:text-[2rem] font-semibold text-center">Featured Products</h1>

                </div>
                <div data-aos="fade-left" className="grid grid-cols-1 gap-1 xs:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">


                    {/* Adjusted Product Cards Layout */}
                    {selectedProducts.map((product, index) => (
                        <motion.div
                            key={index}
                            className=""
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            variants={cardAnimation}
                        >
                            <ProductCard
                            product={product}
                                productId={product.id}
                                imageSrc={product.images[0].main} // Assuming product has images array
                                productName={product.name}
                                price={product.price.discounted}
                                oldPrice={product.price.original}
                                rating={product.rating}
                                onAddToCart={() => handleAddToCart(product.name)}
                                isSale={product.promotions?.discount ? true : false}
                                isBestSeller={product.promotions?.bestSellerText ? true : false}
                                saleText={product.promotions?.discount}
                                bestSellerText={product.promotions?.bestSellerText}
                                productCategory={product.category}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )

}

export default FeaturedProducts;
