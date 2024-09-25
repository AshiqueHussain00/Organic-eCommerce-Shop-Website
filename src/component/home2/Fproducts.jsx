import React, { useState } from 'react';
import ProductCard from '../common/ProductCard';
import image1 from '../../assets/home2/allveg.svg';
import image2 from '../../assets/home3/newestProducts/ChaineseCabbage.svg';
import image3 from '../../assets/home3/newestProducts/GreenLettuce.svg';
import image4 from '../../assets/home3/newestProducts/GreenChilli.svg';
import image5 from '../../assets/home3/newestProducts/Corn.svg';
import { motion } from 'framer-motion';
import allproductData from '../../data/common/allproductData';
import { FaArrowRight } from 'react-icons/fa'; // Ensure FaArrowRight is imported


function Fproducts() {
  // Define isHotSale (you can set it to true or false based on logic or state)
  const [isHotSale] = useState(true); // Example: set to true or false as needed

  const handleAddToCart = (productName) => {
    console.log(`Add to Cart clicked for ${productName}`);
  };

  const products = [
    {
      imageSrc: image1,
      productName: 'Mixed Vegetables',
      price: '12.99',
      rating: 4,
      isSale: false,
      isBestSeller: false,
      saleText: 'Sale',
      bestSellerText: '',
    },
    {
      imageSrc: image2,
      productName: 'Chinese Cabbage',
      price: '9.99',
      rating: 3,
      isSale: false,
      isBestSeller: false,
      saleText: '',
      bestSellerText: '',
    },
    {
      imageSrc: image3,
      productName: 'Green Lettuce',
      price: '7.99',
      rating: 4,
      isSale: false,
      isBestSeller: false,
      saleText: '',
      bestSellerText: '',
    },
    {
      imageSrc: image4,
      productName: 'Green Chilli',
      price: '19.99',
      rating: 5,
      isSale: false,
      isBestSeller: false,
      saleText: 'Sale 50%',
      bestSellerText: 'Best Seller',
    },
    {
      imageSrc: image5,
      productName: 'Corn',
      price: '19.99',
      rating: 5,
      isSale: false,
      isBestSeller: false,
      saleText: 'Sale 50%',
      bestSellerText: 'Best Seller',
    },
  ];

  // Define the animation
  const cardAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative w-full pb-10 mt-60 md:mt-32 smd:mt-24">
      <div className="w-10/12 mx-auto">
        <div className="flex flex-col items-center justify-between pt-10 pb-10">
          <h1 className="text-[1.8rem] md:text-[2rem] font-semibold text-center">
            Our Featured Products
          </h1>
        </div>

        {/* Sale Section */}

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 gap-1 xs:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {allproductData.slice(0,5).map((product, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={cardAnimation}
            >
              {index === 0 ? (
                // If it's the first card, show only the image
                <div className="relative flex justify-center items-center summer-sale bg-green-400 h-full w-full border">
                  {/* Image */}
                 

                  {/* Overlay */}
                  <div className="absolute inset-0 flex-col justify-center items-center text-center text-black-900 bg-gray-100 bg-opacity-0 z-10">
                    {/* Sale Text */}
                    <div className="mb-2">
                      <p className="text-xs font-bold mt-8">SUMMER SALE</p>
                      <p className="text-3xl mt-3 text-primary font-bold">75% Off</p>
                    </div>

                    {/* Shop Now Button */}
                    <div className="flex justify-center items-center">
                      <button className="flex items-center justify-center gap-x-3 bg-white-100 text-branding-success font-semibold text-sm px-6 py-3 rounded-3xl group transition-all duration-200 hover:text-white-100 hover:bg-primary">
                        Shop Now
                        <FaArrowRight />
                      </button>
                    </div>

                  </div>
                </div>


              ) : (
                // For other cards, render the full ProductCard component
                <ProductCard
                  product={product}
                  productId={product.id}
                  key={index}
                  imageSrc={product.images[0].main}
                  productName={product.name}
                  price={product.price.discounted}
                  oldPrice={product.price.original}
                  rating={product.rating}
                  productCategory={product.category}
                // isBestSeller={product.isBestSeller}
                // bestSellerText={product.bestSellerText}


                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Fproducts;
