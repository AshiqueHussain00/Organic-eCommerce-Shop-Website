import React, { useState } from 'react';
import ProductCard from '../common/ProductCard';
import image1 from '../../assets/home2/allveg.svg';
import image2 from '../../assets/home3/newestProducts/ChaineseCabbage.svg';
import image3 from '../../assets/home3/newestProducts/GreenLettuce.svg';
import image4 from '../../assets/home3/newestProducts/GreenChilli.svg';
import image5 from '../../assets/home3/newestProducts/Corn.svg';
import { motion } from 'framer-motion';
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
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={cardAnimation}
            >
              {index === 0 ? (
                // If it's the first card, show only the image
                <div className="flex justify-center items-center">
                  <img
  src={product.imageSrc}
  alt={product.productName || 'Featured Product'}
  className="w-full max-w-[400px] h-[330px] border-2 border-gray-100 object-cover" // Responsive example
/>

                </div>
              ) : (
                // For other cards, render the full ProductCard component
                <ProductCard
                  imageSrc={product.imageSrc}
                  productName={product.productName || 'Unknown Product'}
                  price={product.price || '0.00'}
                  oldPrice={product.oldPrice}
                  rating={product.rating || 0}
                  onAddToCart={() => handleAddToCart(product.productName)}
                  isSale={product.isSale}
                  isBestSeller={product.isBestSeller}
                  saleText={product.saleText}
                  bestSellerText={product.bestSellerText}
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
