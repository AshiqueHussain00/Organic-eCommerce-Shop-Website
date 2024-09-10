import LimitedProductCard from '../../common/LimitedProductCard';
import ProductCard from '../../common/ProductCard';

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
            oldPrice: '29.99', 
            rating: 4,
            isSale: true,
            isBestSeller: false,
            saleText: 'Discount!',
            bestSellerText: ''
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

    const product = {
        imageSrc: 'https://placehold.jp/525x466.png', 
        productName: 'Sample Product',
        price: '29.99',
        oldPrice: '39.99', 
        rating: 4, 
        feedbackCount: 123, 
        isSale: true,
        isBestSeller: true,
        countdownDate: new Date().getTime() + 1000 * 60 * 60 * 24 * 3 
    };

    return (
        <section className="py-8">
            <div className='w-10/12 mx-auto'>
                <div className="grid grid-cols-1 gap-1 xs:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 ">
                    {/* LimitedProductCard occupies the first two rows of the first column */}
                    <div className="xs:col-span-2 xs:row-span-2">
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

                    {/* Adjusted Product Cards Layout */}
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="mmd:col-span-1 "
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default ProductDetails;