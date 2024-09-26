import { useState, useEffect } from "react";
import { PiHandbag } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const LimitedProductCard = ({
    imageSrc,
    productName,
    price,
    oldPrice,
    rating,
    feedbackCount,
    onAddToCart,
    onWishlist,
    onQuickView,
    isSale,
    isBestSeller,
    saleText = "Sale",
    bestSellerText = "Best Seller",
    countdownDate,
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

                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            }
        };

        calculateTimeLeft();
        const intervalId = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(intervalId);
    }, [countdownDate]);

    return (
        <div className="w-full max-w-md mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-white-100"  data-aos="zoom-in-up">
            <div className="relative flex flex-col items-center transition duration-200 bg-white border-2 border-white-100 hover:border-primary hover:border-2 ">

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
                    className="object-cover w-full mb-2 h-[35vh] sm:h-[40vh] md:h-[45vh] lg:h-[50vh] xl:h-[46.5vh]"
                />


                {/* Add to Cart, Wishlist, and Quick View Buttons */}
                <div className="flex gap-3 p-3 sm:gap-4 lg:gap-5 sm:p-4 lg:p-5">
                    <button
                        onClick={onWishlist}
                        className="p-2 bg-gray-200 border rounded-full sm:p-3 hover:bg-primary hover:text-white-100"
                    >
                        <FaRegHeart size={20} sm={25} />
                    </button>
                    <button
                        onClick={onAddToCart}
                        className="flex items-center gap-2 px-5 py-2 font-medium bg-gray-200 rounded-full sm:gap-3 sm:px-8 sm:py-3 hover:bg-primary hover:text-white-100"
                    >
                        <span className="text-sm sm:text-base">Add To Cart</span>
                        <PiHandbag size={20} sm={25} />
                    </button>
                    <button
                        onClick={onQuickView}
                        className="p-2 bg-gray-200 border rounded-full sm:p-3 hover:bg-primary hover:text-white-100"
                    >
                        <MdOutlineRemoveRedEye size={20} sm={25} />
                    </button>
                </div>

                {/* Product Name */}
                <div className="text-center ">
                    <h2 className="text-sm font-medium text-gray-500 sm:text-base lg:text-lg">
                        {productName}
                    </h2>

                    {/* Product Prices */}
                    <p className="text-base text-gray-700 sm:text-lg lg:text-xl">
                        ${price} {oldPrice && <span className="text-gray-400 line-through">${oldPrice}</span>}
                    </p>

                    {/* Rating (Stars) and Feedback Count */}
                    <div className="flex items-center justify-center mb-4">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    className={`w-4 sm:w-5 h-4 sm:h-5 ${i < rating ? "text-yellow-800" : "text-gray-300"}`}
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z" />
                                </svg>
                            ))}
                        </div>
                        <span className="ml-2 text-xs text-gray-600 sm:text-sm">({feedbackCount} reviews)</span>
                    </div>
                </div>

                {/* Countdown Timer */}
                <div className="text-center">
                    <h1 className="text-sm text-gray-400">Hurry up! Offer ends in :</h1>
                </div>

                {showCountdown && (
                    <div className="p-2 text-sm text-center sm:text-lg">
                        <div className="flex justify-center gap-2 sm:gap-4">
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
