import React, { useRef } from 'react';
import ProductCard from '../common/ProductCard';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import allproductData from '../../data/common/allproductData';

const BestSeller = () => {
  const ref = useRef(null);

  const handleAddToCart = (productName) => {
    console.log(`Add to Cart clicked for ${productName}`);
  };

  // Define animations for the scroll direction
  const cardAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section ref={ref} className="relative w-full pt-8 pb-16">
      <div className="w-10/12 mx-auto">
        <div className="flex flex-col items-center justify-between pt-10 pb-10 xs:flex-row">
          <h1 className="text-[2rem] font-semibold">Best Seller Products</h1>
          <Link className="font-medium text-primary">View All →</Link>
        </div>
        <div className="grid grid-cols-1 gap-1 xs:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {/* Product Cards Layout */}
          {allproductData.map((product, index) => (
            <motion.div
              key={product.id}
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
  );
};

export default BestSeller;
