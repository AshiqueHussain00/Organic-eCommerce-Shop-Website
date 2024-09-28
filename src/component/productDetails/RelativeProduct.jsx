import React from 'react';
import ProductCard from '../common/ProductCard';
import allproductData from '../../data/common/allproductData';
import { motion } from 'framer-motion';

function RelativeProducts() {
  const handleAddToCart = (productName) => {
    console.log(`${productName} added to cart`);
  };

  const ids = ['f1', 'v2', 'v4', 'v5', 'f13'];

  // Filter the selected products
  const selectedProducts = allproductData.filter((product) => ids.includes(product.id));

  // Animation for product cards
  const cardAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative w-full pb-10 mt-60 md:mt-32 smd:mt-24">
      <div className="w-10/12 mx-auto">
        <div className="flex flex-col items-center justify-between pt-10 pb-10">
          <h1 className="text-[1.8rem] md:text-[2rem] font-semibold text-center">Related Products</h1>
        </div>
        <div data-aos="fade-left" className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Render only 4 Product Cards with equal gaps */}
          {selectedProducts.slice(0, 4).map((product, index) => (
            <motion.div
              key={product.id}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={cardAnimation}
            >
              <ProductCard
                product={product}
                productId={product.id}
                imageSrc={product.images[0]?.main} // Ensure images array exists and has a main image
                productName={product.name}
                price={product.price.discounted}
                oldPrice={product.price.original}
                rating={product.rating}
                onAddToCart={() => handleAddToCart(product.name)}
                // Show "Sale 50%" only on the first product card, no sale for 2nd, 3rd, and 4th cards
                isSale={index === 0 ? true : false}
                saleText={index === 0 ? 'Sale 50%' : null}
                isBestSeller={!!product.promotions?.bestSellerText}
                bestSellerText={product.promotions?.bestSellerText}
                productCategory={product.category}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RelativeProducts;
