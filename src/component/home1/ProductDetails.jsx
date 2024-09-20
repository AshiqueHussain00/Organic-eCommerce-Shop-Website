import { motion } from 'framer-motion';
import LimitedProductCard from '../common/LimitedProductCard';
import ProductCard from '../common/ProductCard';
import { Link } from "react-router-dom";
import Corn from '../../assets/home5/featuredproduct/corn.svg';
import allproductData from '../../data/common/allproductData'; // Assuming this is the correct import for your products data

const ProductDetails = () => {
    // Example handlers
    const handleAddToCart = (productName) => {
        console.log(`Add to Cart clicked for ${productName}`);
    };

    const handleWishlist = () => {
        console.log("Add to Wishlist clicked");
    };

    const handleQuickView = () => {
        console.log("Quick View clicked");
    };

    // Define a sample product for LimitedProductCard
    const featuredProduct = {
        imageSrc: Corn,
        productName: 'Sample Product',
        price: '29.99',
        oldPrice: '39.99',
        rating: 4,
        feedbackCount: 123,
        isSale: true,
        isBestSeller: true,
        countdownDate: new Date().getTime() + 1000 * 60 * 60 * 24 * 3
    };

    // Function to fetch only the first 10 products
    const fetchPopularProducts = () => {
        return allproductData.slice(0, 11); // Fetch only the first 10 products
    };

    // Get the 10 products to display
    const products = fetchPopularProducts();

    // Define the animation
    const cardAnimation = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="relative w-full py-12 bg-gray-50">
            <div className='w-10/12 mx-auto'>
                <div className="flex flex-col items-center justify-between pt-10 pb-10 xs:flex-row">
                    <h1 data-aos="fade-right" className="text-[2rem] font-semibold">Hot Deals</h1>
                    <Link data-aos="fade-left" to="/shop1" className="font-medium text-primary">View All →</Link>
                </div>

                <div data-aos="fade-up" className="grid grid-cols-1 gap-1 xs:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
                    {/* LimitedProductCard occupies the first two rows of the first column */}
                    <motion.div
                        className="xs:col-span-2 xs:row-span-2"
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5 }}
                        variants={cardAnimation}
                    >
                        <LimitedProductCard
                            imageSrc={featuredProduct.imageSrc}
                            productName={featuredProduct.productName}
                            price={featuredProduct.price}
                            oldPrice={featuredProduct.oldPrice}
                            rating={featuredProduct.rating}
                            feedbackCount={featuredProduct.feedbackCount}
                            onAddToCart={() => handleAddToCart(featuredProduct.productName)}
                            onWishlist={handleWishlist}
                            onQuickView={handleQuickView}
                            isSale={featuredProduct.isSale}
                            isBestSeller={featuredProduct.isBestSeller}
                            countdownDate={featuredProduct.countdownDate}
                        />
                    </motion.div>

                    {/* Adjusted Product Cards Layout */}
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id} // Use product id as the unique key
                            className="mmd:col-span-1"
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            variants={cardAnimation}
                        >
                            <ProductCard
                                imageSrc={product.images[0].main}
                                productName={product.name}
                                price={product.price.discounted}
                                oldPrice={product.price.original}
                                rating={product.rating}
                                onAddToCart={() => handleAddToCart(product.name)}
                                isSale={product.promotions?.discount ? true : false}
                                saleText={product.promotions?.discount}
                                bestSellerText={product.promotions?.bestSellerText}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;
