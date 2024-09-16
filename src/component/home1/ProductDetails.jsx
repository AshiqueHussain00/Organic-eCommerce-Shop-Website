import { motion } from 'framer-motion';
import LimitedProductCard from '../common/LimitedProductCard';
import ProductCard from '../common/ProductCard';
import { Link } from "react-router-dom"
import Corn from '../../assets/home5/featuredproduct/corn.svg'

const ProductDetails = () => {
    // Example handlers
    const handleAddToCart = () => {
        console.log("Add to Cart clicked");
    };

    const handleWishlist = () => {
        console.log("Add to Wishlist clicked");
    };

    const handleQuickView = () => {
        console.log("Quick View clicked");
    };

    const products = [
        {
            imageSrc: Corn,
            productName: 'Green Apple',
            price: '14.99',
            oldPrice: '29.99',
            rating: 4,
            isSale: true,
            isBestSeller: false,
            saleText: 'Discount!',
            bestSellerText: ''
        },
        {
            imageSrc: Corn,
            productName: 'Banana',
            price: '9.99',
            rating: 3,
            isSale: true,
            isBestSeller: false,
            saleText: 'Sale',
            bestSellerText: ''
        },
        {
            imageSrc: Corn,
            productName: 'Orange',
            price: '7.99',
            rating: 4,
            isSale: false,
            isBestSeller: false,
            saleText: '',
            bestSellerText: ''
        },
        {
            imageSrc: Corn,
            productName: 'Mango',
            price: '19.99',
            rating: 5,
            isSale: true,
            isBestSeller: true,
            saleText: 'Sale 50%',
            bestSellerText: 'Best Seller'
        },
        {
            imageSrc: Corn,
            productName: 'Mango',
            price: '19.99',
            rating: 5,
            isSale: true,
            isBestSeller: true,
            saleText: 'Sale 50%',
            bestSellerText: 'Best Seller'
        },
        {
            imageSrc: Corn,
            productName: 'Mango',
            price: '19.99',
            rating: 5,
            isSale: true,
            isBestSeller: true,
            saleText: 'Sale 50%',
            bestSellerText: 'Best Seller'
        },
        {
            imageSrc: Corn,
            productName: 'Mango',
            price: '19.99',
            rating: 5,
            isSale: true,
            isBestSeller: true,
            saleText: 'Sale 50%',
            bestSellerText: 'Best Seller'
        },
        {
            imageSrc: Corn,
            productName: 'Mango',
            price: '19.99',
            rating: 5,
            isSale: true,
            isBestSeller: true,
            saleText: 'Sale 50%',
            bestSellerText: 'Best Seller'
        },  {
            imageSrc: Corn,
            productName: 'Mango',
            price: '19.99',
            rating: 5,
            isSale: true,
            isBestSeller: true,
            saleText: 'Sale 50%',
            bestSellerText: 'Best Seller'
        },
        {
            imageSrc: Corn,
            productName: 'Mango',
            price: '19.99',
            rating: 5,
            isSale: true,
            isBestSeller: true,
            saleText: 'Sale 50%',
            bestSellerText: 'Best Seller'
        },

        {
            imageSrc: Corn,
            productName: 'Mango',
            price: '19.99',
            rating: 5,
            isSale: true,
            isBestSeller: true,
            saleText: 'Sale 50%',
            bestSellerText: 'Best Seller'
        },
    ];

    const product = {
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

    // Define the animation
    const cardAnimation = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="relative w-full py-12  bg-gray-50">
            <div className='w-10/12 mx-auto'>
                <div className="flex flex-col items-center justify-between pt-10 pb-10 xs:flex-row">
                    <h1 data-aos="fade-right" className="text-[2rem] font-semibold">Hot Deals</h1>
                    <Link data-aos="fade-left" className="font-medium text-primary">View All →</Link>
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
                            imageSrc={product.imageSrc}
                            productName={product.productName}
                            price={product.price}
                            oldPrice={product.oldPrice}
                            rating={product.rating}
                            feedbackCount={product.feedbackCount}
                            onAddToCart={handleAddToCart}
                            onWishlist={handleWishlist}
                            onQuickView={handleQuickView}
                            isSale={product.isSale}
                            isBestSeller={product.isBestSeller}
                            countdownDate={product.countdownDate}
                        />
                    </motion.div>

                    {/* Adjusted Product Cards Layout */}
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            className="mmd:col-span-1"
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
export default ProductDetails;