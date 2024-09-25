import React, { useEffect, useState, useRef } from 'react';

import ProductCard from '../common/ProductCard';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import chinesecabbage from '../../assets/home5/featuredproduct/chinesecabbage.svg'
import greenapple from '../../assets/home5/featuredproduct/greenapple.svg'
import ladiesfinger from '../../assets/home5/featuredproduct/ladiesfinger.svg'
import greencapsicum from '../../assets/home5/featuredproduct/greencapsicum.svg'
import corn from '../../assets/home5/featuredproduct/corn.svg'
const FeaturedProducts = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('down');
  const ref = useRef(null);

  const handleAddToCart = (productName) => {
    console.log(`Add to Cart clicked for ${productName}`);
  };

  const products = [
    {
      imageSrc: greenapple,
      productName: 'Green Apple',
      price: '14.99',
      oldPrice: '29.99',
      rating: 4,
      isSale: false,
      isBestSeller: true,
      saleText: '',
      bestSellerText: 'Sale 50%',
    },
   
    {
      imageSrc: chinesecabbage,
      productName: 'Chinese Cabbage',
      price: '14.99',
      rating: 4,
      isSale: false,
      isBestSeller: false,
      saleText: '',
      bestSellerText: '',
    },
    {
      imageSrc:greencapsicum,
      productName: 'Green Capsicum',
      price: '19.99',
      rating: 5,
      isSale: false,
      isBestSeller: false,
      saleText: 'Sale 50%',
      bestSellerText: 'Best Seller',
    },
    {
      imageSrc: ladiesfinger,
      productName: 'Ladies Finger',
      price: '12.99',
      rating: 4,
      isSale: false,
      isBestSeller: false,
      saleText: '',
      bestSellerText: 'Best Seller',
    },
    {
      imageSrc: corn,
      productName: 'Corn',
      price: '14.99',
      rating: 4,
      isSale: false,
      isBestSeller: true,
      saleText: '',
      bestSellerText: 'Best Seller',
    },
  ];

  // Define animations for the scroll direction
  const cardAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };


  return (
    <section ref={ref} className="relative w-full pb-2 ">
      <div className="w-10/12 mx-auto">
        <div className="flex flex-col  items-center justify-between pt-10 pb-10 xs:flex-row">
          <h1 className="text-[2rem] font-semibold">Featured Products</h1>
          <Link className="font-medium text-primary">View All →</Link>
        </div>
        <div className="grid grid-cols-1 gap-1 xs:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {/* Product Cards Layout */}
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
  );
};

export default FeaturedProducts;
