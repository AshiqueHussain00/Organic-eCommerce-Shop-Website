import LimitedProductCard from './LimitedProductCard';
import ProductCard from './ProductCard';

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
            imageSrc: 'https://placehold.jp/302x302.png',
            productName: 'Green Apple',
            price: '14.99',
            rating: 4,
            isSale: true,
            isBestSeller: false,
            saleText: 'Discount!',
            bestSellerText: ''
        },
        {
            imageSrc: 'https://placehold.jp/302x302.png',
            productName: 'Red Apple',
            price: '12.99',
            rating: 5,
            isSale: false,
            isBestSeller: true,
            saleText: '',
            bestSellerText: 'Top Pick!'
        },
        {
            imageSrc: 'https://placehold.jp/302x302.png',
            productName: 'Banana',
            price: '9.99',
            rating: 3,
            isSale: true,
            isBestSeller: false,
            saleText: 'Sale',
            bestSellerText: ''
        },
        {
            imageSrc: 'https://placehold.jp/302x302.png',
            productName: 'Orange',
            price: '7.99',
            rating: 4,
            isSale: false,
            isBestSeller: false,
            saleText: '',
            bestSellerText: ''
        },
        {
            imageSrc: 'https://placehold.jp/302x302.png',
            productName: 'Mango',
            price: '19.99',
            rating: 5,
            isSale: true,
            isBestSeller: true,
            saleText: 'Sale 50%',
            bestSellerText: 'Best Seller'
        },
    ];
    
   // Example product data
   const product = {
    imageSrc: 'https://placehold.jp/525x466.png', // Replace with actual image URL
    productName: 'Sample Product',
    price: '29.99',
    oldPrice: '39.99', // Optional, only include if there is an old price
    rating: 4, // Out of 5
    feedbackCount: 123, // Number of reviews
    isSale: true,
    isBestSeller: true,
    countdownDate: new Date().getTime() + 1000 * 60 * 60 * 24 * 3 // 1 week from now
};


    return (
        <section>
            <div className='w-10/12 mx-auto '>

                <div className="flex justify-center">
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
                </div>

                {/* Responsive grid layout with consistent card sizes */}
                {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

                    {products.map((product, index) => (
                        <div className="flex justify-center" key={index}>
                            <ProductCard
                                imageSrc={product.imageSrc}
                                productName={product.productName}
                                price={product.price}
                                rating={product.rating}
                                onAddToCart={() => handleAddToCart(product.productName)}
                                isSale={product.isSale}
                                isBestSeller={product.isBestSeller}
                                saleText={product.saleText}
                                bestSellerText={product.bestSellerText}
                            />
                        </div>
                    ))}
                </div> */}
            </div>
        </section>
    );
};

export default ProductDetails;
