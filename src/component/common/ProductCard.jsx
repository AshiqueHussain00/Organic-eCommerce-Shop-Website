import { PiHandbag } from "react-icons/pi";

const ProductCard = ({
    imageSrc,
    productName,
    price,
    oldPrice,
    rating,
    onAddToCart,
    isSale,
    isBestSeller,
    saleText = 'Sale',         // Default text for Sale
    bestSellerText = 'Best Seller' // Default text for Best Seller
}) => {
    return (
        <div className="relative flex flex-col items-center  transition duration-200 bg-white border-2 border-gray-400 hover:border-primary hover:border-2 hover:scale-[100rem]">
            {/* Sale and Best Seller Tags */}
            {/* Sale and Best Seller Tags */}
            <div className="absolute flex space-x-2 top-2 left-2">
                {isSale && (
                    <div className="px-2 py-1 text-xs font-semibold bg-blue-600 rounded text-white-100">
                        {saleText}
                    </div>
                )}
                {isBestSeller && (
                    <div className="px-2 py-1 text-xs font-semibold rounded text-white-100 bg-danger">
                        {bestSellerText}
                    </div>
                )}
            </div>


            {/* Product Image */}
            <img
                src={imageSrc}
                alt={productName}
                className="object-cover w-full h-48 mb-4 "
            />

            {/* Product Name */}
            <div className='flex items-start'>
    <div className="mr-8 md:mr-6 lg:mr-4 xl:mr-2">
        <h2 className="text-base font-medium text-gray-500 md:text-lg lg:text-xl">{productName}</h2>

        {/* Product Prices */}
        <p className="flex gap-2 text-sm text-gray-700 md:text-lg lg:text-xl">
            ${price} {oldPrice && <span className="text-gray-400 line-through">${oldPrice}</span>}
        </p>

        {/* Rating (Stars) */}
        <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z" />
                </svg>
            ))}
        </div>
    </div>

    {/* Add to Cart Button */}
    <div className="p-2 ml-auto">
        <button
            onClick={onAddToCart}
            className="p-2 bg-gray-200 rounded-full hover:bg-primary hover:text-white-100"
        >
            <PiHandbag size={25} />
        </button>
    </div>
</div>



        </div>
    );
};

export default ProductCard;
