import ProductCard from './ProductCard';

const ProductDetails = () => {
    const handleAddToCart = (productName) => {
        console.log(`${productName} added to cart`);
    };

    const products = [
        {
            imageSrc: 'https://placehold.jp/302x302.png',
            productName: 'Green Apple',
            price: '14.99',
            rating: 4,
            isSale: true,
            isBestSeller: false,
            saleText: 'Discount!',          // Custom Sale text
            bestSellerText: ''              // No Best Seller text
        },
        {
            imageSrc: 'https://placehold.jp/302x302.png',
            productName: 'Red Apple',
            price: '12.99',
            rating: 5,
            isSale: false,
            isBestSeller: true,
            saleText: '',
            bestSellerText: 'Top Pick!'     // Custom Best Seller text
        },
        {
            imageSrc: 'https://placehold.jp/302x302.png',
            productName: 'Banana',
            price: '9.99',
            rating: 3,
            isSale: true,
            isBestSeller: false,
            saleText: 'Sale',               // Default text
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
            bestSellerText: 'Best Seller'  // Default text
        },
    ];

    return (
        <section>
            <div className='w-10/12 mx-auto'>
                {/* Responsive grid layout with varying columns */}
                <div className="grid grid-cols-1 pt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
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
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;
