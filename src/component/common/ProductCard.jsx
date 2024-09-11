import { PiHandbag } from "react-icons/pi";
import { IoEyeOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { useState } from "react";
import { Link } from "react-router-dom";

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

    const [isHover, setIsHover] = useState(false)


    return (
        <div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className="relative flex flex-col transition duration-200 bg-white border bg-white-100 hover:border hover:border-primary green-shadow" >
            {/* Sale and Best Seller Tags */}
            {/* Sale and Best Seller Tags */}
            <div className="absolute flex space-x-2 top-2 left-2">
                {isSale && (
                    <div className="px-2 py-1 text-sm font-semibold bg-blue-600 rounded text-white-100">
                        {saleText}
                    </div>
                )}
                {isBestSeller && (
                    <div className="px-2 py-1 text-sm font-semibold rounded text-white-100 bg-danger">
                        {bestSellerText}
                    </div>
                )}
            </div>


            {/* ------------ wishlist aur watch icon---------- */}

            <div className={`absolute flex flex-col items-center gap-y-3 top-4 right-2 
                  ${isHover ? "opacity-100" : "opacity-0"
                }
                `}>

                {/* ------ wishlist ----- */}

                <Link to="/wishlist" className='grid px-2 py-2 text-lg transition-all duration-200 border border-gray-100 rounded-full cursor-pointer place-items-center xl:text-xl xlg:text-lg sm:text-xl hover:bg-primary hover:text-white-100 hover:border-none'>
                    <GoHeart />
                </Link>

                {/* ------- view ------- */}

                <div className='grid px-2 py-2 text-lg transition-all duration-200 border border-gray-100 rounded-full cursor-pointer place-items-center xl:text-xl xlg:text-lg sm:text-xl hover:bg-primary hover:text-white-100 hover:border-none'>
                    <IoEyeOutline />
                </div>

            </div>


            {/* Product Image */}
            <img
                src={imageSrc}
                alt={productName}
                className="object-cover w-full h-48 mb-4 "
            />

            {/* Product Name */}
            <div className='flex items-start p-2'>
                <div className="mr-8 md:mr-6 lg:mr-4 xl:mr-1">
                    <h2 className="text-[16px] font-normal text-gren-gray-scale-700 ">{productName}</h2>

                    {/* Product Prices */}
                    <p className="flex gap-3 mt-2 text-lg font-medium text-green-gray-scale-900 ">
                        ${price} {oldPrice && <span className="line-through text-green-gray-scale-400">${oldPrice}</span>}
                    </p>

                    {/* Rating (Stars) */}
                    <div className="flex items-center mt-2 mb-4">
                        {[...Array(5)].map((_, i) => (
                            <svg
                                key={i}
                                className={`w-5 h-5 ${i < rating ? 'text-branding-warning' : 'text-gray-300'}`}
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
                        <PiHandbag className="text-xl" />
                    </button>
                </div>
            </div>



        </div>
    );
};

export default ProductCard;
