import React from 'react';
import ProductCard from '../common/ProductCard';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import allproductData from '../../data/common/allproductData';

const PopularProducts = () => {
    // Define the animation
    const cardAnimation = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    // Function to fetch only the first 10 products
    const fetchPopularProducts = () => {
        return allproductData.slice(0, 10); // Fetch only the first 10 products
    };

    // Get the 10 products to display
    const products = fetchPopularProducts();

   

    
    return (
        <section className='relative w-full pb-10'>
            <div className='w-10/12 mx-auto'>
                <div className="flex flex-col items-center justify-between pt-10 pb-10 xs:flex-row">
                    <h1 data-aos="fade-right" className="text-[2rem] font-semibold">Popular Products</h1>
                    <Link data-aos="fade-left" to="/shop2" className="font-medium text-primary">View All →</Link>
                </div>
                <div data-aos="fade-up" className="grid grid-cols-1 gap-1 xs:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id} // It's better to use a unique key, like the product id
                            className=""
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            variants={cardAnimation}
                        >
                            <ProductCard
                            product={product}
                                productId = {product.id}
                                imageSrc={product.images[0].main}
                                productName={product.name}
                                price={product.price.discounted}
                                oldPrice={product.price.original}
                                rating={product.rating}
                                isSale={product.promotions?.discount ? true : false}
                                saleText={product.promotions?.discount}
                                bestSellerText={product.promotions?.bestSellerText}
                                productCategory = {product.category}  
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularProducts;
