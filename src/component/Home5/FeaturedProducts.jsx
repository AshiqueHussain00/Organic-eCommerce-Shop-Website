import React, { useRef, useState } from 'react';
import ProductCard from '../common/ProductCard';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import allproductData from '../../data/common/allproductData';

const FeaturedProducts = () => {
  const ref = useRef(null);
  const [showAll, setShowAll] = useState(false); // State to manage showing all products

  const handleAddToCart = (productName) => {
    console.log(`Add to Cart clicked for ${productName}`);
  };

  // Define animations for the scroll direction
  const cardAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section ref={ref} className="relative w-full pb-2 ">
      <div className="w-10/12 mx-auto">
        <div className="flex flex-col items-center justify-between pt-10 pb-10 xs:flex-row">
          <h1 className="text-[2rem] font-semibold">Featured Products</h1>
          <Link 
            to="#" // Add your actual route here for viewing all products
            className="font-medium text-primary"
            onClick={() => setShowAll(!showAll)} // Toggle showAll state
          >
            {showAll ? 'View Less →' : 'View All →'}
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-1 xs:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {/* Map through allproductData */}
          {(showAll ? allproductData : allproductData.slice(0, 5)).map((product, index) => (
            <motion.div
              key={product.id}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={cardAnimation}
            >
              <ProductCard
                imageSrc={product.images[0]?.main} // Assuming the first image is used
                productName={product.name}
                price={product.price.discounted.toFixed(2)} // Using the discounted price
                oldPrice={product.price.original.toFixed(2)} // Using the original price
                rating={product.rating}
                onAddToCart={() => handleAddToCart(product.name)}
                isSale={product.promotions?.discount ? '':''}
                isBestSeller={product.promotions?.organic ? true : false}
                saleText={product.promotions?.discount || ''}
                bestSellerText={product.promotions?.organic || ''}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
