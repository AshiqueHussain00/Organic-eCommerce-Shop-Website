import React, { useEffect, useState, useRef } from 'react';
import ProductCard from '../../common/ProductCard';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('down');
  const ref = useRef(null);

  const handleAddToCart = (productName) => {
    console.log(`Add to Cart clicked for ${productName}`);
  };

  const products = [
    {
      imageSrc: 'https://placehold.jp/302x302.png',
      productName: 'Green Apple',
      price: '14.99',
      oldPrice: '29.99',
      rating: 4,
      isSale: true,
      isBestSeller: false,
      saleText: 'Discount!',
      bestSellerText: '',
    },
    {
      imageSrc: 'https://placehold.jp/302x302.png',
      productName: 'Banana',
      price: '9.99',
      rating: 3,
      isSale: true,
      isBestSeller: false,
      saleText: 'Sale',
      bestSellerText: '',
    },
    {
      imageSrc: 'https://placehold.jp/302x302.png',
      productName: 'Orange',
      price: '7.99',
      rating: 4,
      isSale: false,
      isBestSeller: false,
      saleText: '',
      bestSellerText: '',
    },
    {
      imageSrc: 'https://placehold.jp/302x302.png',
      productName: 'Mango',
      price: '19.99',
      rating: 5,
      isSale: true,
      isBestSeller: true,
      saleText: 'Sale 50%',
      bestSellerText: 'Best Seller',
    },
    {
      imageSrc: 'https://placehold.jp/302x302.png',
      productName: 'Pineapple',
      price: '12.99',
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
    <section ref={ref} className="relative w-full pb-10">
      <div className="w-10/12 mx-auto">
        <div className="flex flex-col items-center justify-between pt-10 pb-10 xs:flex-row">
          <h1 data-aos="fade-right" className="text-[2rem] font-semibold">Featured Products</h1>
          <Link data-aos="fade-left" className="font-medium text-primary">View All →</Link>
        </div>
        <div data-aos="fade-up" className="grid grid-cols-1 gap-1 xs:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
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
