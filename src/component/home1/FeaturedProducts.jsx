import React, { useState, useEffect, useRef } from 'react';
import ProductCard from '../common/ProductCard';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import allproductData from '../../data/common/allproductData'; // Assuming this is where product data is stored

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  // Fetching only the first 10 featured products (or customize as needed)
  useEffect(() => {
    const fetchFeaturedProducts = () => {
      const featuredProducts = allproductData.slice(0, 5); // Fetch the first 10 products
      setProducts(featuredProducts);
    };

    fetchFeaturedProducts();
  }, []);

  const handleAddToCart = (productName) => {
    console.log(`Add to Cart clicked for ${productName}`);
  };

  // Define the animation for product cards
  const cardAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative w-full py-20 pt-12">
      <div className="w-10/12 mx-auto">
        <div className="flex flex-col items-center justify-between pt-10 pb-10 xs:flex-row">
          <h1 data-aos="fade-right" className="text-[2rem] font-semibold">Featured Products</h1>
          {/* Link to navigate to the Shop page */}
          <Link to="/shop" data-aos="fade-left" className="font-medium text-primary">
            View All →
          </Link>
        </div>

        <div data-aos="fade-up" className="grid grid-cols-1 gap-1 xs:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {/* Product Cards Layout */}
          {products.map((product, index) => (
            <motion.div
              key={product.id} // Using product.id for a unique key
              className=""
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={cardAnimation}
            >
              <ProductCard
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

export default FeaturedProducts;
