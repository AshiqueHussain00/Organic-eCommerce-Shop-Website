import { useState, useEffect } from "react";
import { PiHandbag } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const LimitedProductCard = ({
    imageSrc,
    productName,
    price,
    oldPrice, // Add this prop for the "before" price
    rating,
    feedbackCount, // Add this prop for the number of feedbacks
    onAddToCart,
    onWishlist,
    onQuickView,
    isSale,
    isBestSeller,
    saleText = "Sale", // Default text for Sale
    bestSellerText = "Best Seller", // Default text for Best Seller
    countdownDate, // Date object for countdown
}) => {
    const [timeLeft, setTimeLeft] = useState({});
    const [showCountdown, setShowCountdown] = useState(false);

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            if (distance <= 0) {
                setTimeLeft({});
                setShowCountdown(false);
            } else {
                setShowCountdown(true);

                // Calculate remaining time in days, hours, minutes, and seconds
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            }
        };

        calculateTimeLeft(); // Calculate immediately when component mounts
        const intervalId = setInterval(calculateTimeLeft, 1000); // Update every second

        return () => clearInterval(intervalId); // Clean up interval on component unmount
    }, [countdownDate]);

    return (
        <div>
            <div className="relative flex flex-col items-center p-2 transition duration-200 bg-white border border-gray-400 hover:border-primary hover:border-2">

                {/* Sale and Best Seller Tags */}
                <div className="absolute flex space-x-2 top-2 left-2">
                    {isSale && (
                        <div className="px-2 py-1 text-xs bg-blue-600 rounded text-white-100">
                            {saleText}
                        </div>
                    )}
                    {isBestSeller && (
                        <div className="px-2 py-1 text-xs rounded text-white-100 bg-danger">
                            {bestSellerText}
                        </div>
                    )}
                </div>

                {/* Product Image */}
                <img
                    src={imageSrc}
                    alt={productName}
                    className="object-cover w-full h-48 mb-2 rounded-md"
                />

                {/* Add to Cart, Wishlist, and Quick View Buttons */}
                <div className="flex gap-5 p-5 pt-2">
                    <button
                        onClick={onWishlist}
                        className="p-3 bg-gray-200 border rounded-full hover:bg-primary hover:text-white-100"
                    >
                        <FaRegHeart size={25} />
                    </button>
                    <button
                        onClick={onAddToCart}
                        className="flex gap-5 px-20 py-3 font-medium bg-gray-200 rounded-full hover:bg-primary hover:text-white-100"
                    >
                        <span>Add To Cart</span>
                        <PiHandbag size={25} />
                    </button>
                    <button
                        onClick={onQuickView}
                        className="p-3 bg-gray-200 border rounded-full hover:bg-primary hover:text-white-100"
                    >
                        <MdOutlineRemoveRedEye size={25} />
                    </button>
                </div>

                {/* Product Name */}
                <div className="flex gap-5 text-center">
                    <div>
                        <h2 className="text-base font-medium text-gray-500 md:text-lg lg:text-xl">
                            {productName}
                        </h2>

                        {/* Product Prices */}
                        <p className="text-sm text-gray-700 md:text-xl lg:text-2xl">
                        ${price} {oldPrice && <span className="text-gray-400 line-through">${oldPrice}</span>} 
                        </p>

                        {/* Rating (Stars) and Feedback Count */}
                        <div className="flex items-center justify-center mb-4">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className={`w-5 h-5 ${i < rating ? "text-yellow-800" : "text-gray-300"}`}
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z" />
                                    </svg>
                                ))}
                            </div>
                            <span className="ml-2 text-sm text-gray-600">({feedbackCount} reviews)</span>
                        </div>
                    </div>
                </div>

                {/* Countdown Timer */}
                <div className="text-gray-400">
                    <h1>Hurry up! Offer ends in :</h1>
                </div>
                    
                {showCountdown && (
                    <div className="p-2 text-lg text-center">
                        <div className="flex justify-center gap-4">
                            <div className="flex flex-col items-center">
                                <span>{timeLeft.days}</span>
                                <span className="text-xs">Days</span>
                            </div>
                            <span>:</span>
                            <div className="flex flex-col items-center">
                                <span>{timeLeft.hours}</span>
                                <span className="text-xs">Hours</span>
                            </div>
                            <span>:</span>
                            <div className="flex flex-col items-center">
                                <span>{timeLeft.minutes}</span>
                                <span className="text-xs">Mins</span>
                            </div>
                            <span>:</span>
                            <div className="flex flex-col items-center">
                                <span>{timeLeft.seconds}</span>
                                <span className="text-xs">Secs</span>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default LimitedProductCard;
