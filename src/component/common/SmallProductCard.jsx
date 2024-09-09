import React from 'react'
import { useState } from 'react';

const SmallProductCard = ({ product }) => {

    const [isHover, setIsHover] = useState(false);


    return (
        <div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className='flex gap-x-3  border border-gray-100 pr-4 py-3 rounded-lg  transition-all duration-200 hover:border-branding-success green-shadow group'>

            <div>
                <img src={product.image} alt={product.productName} />
            </div>

            {/* -------- content  ------- */}
            <div className={`flex flex-col gap-y-2  justify-center
            
            `}>

                {/* ----- product name ------ */}

                <p className='text-sm font-normal'>{product.productName}</p>

                {/* --------- price and rating ----------- */}

                <div className={`flex flex-col gap-y-2  justify-center
               ${isHover ? "hidden" : ""
                    }
            `}>


                    <p className='text-sm font-medium'>{`$${product.price}`}</p>

                    {/* Rating (Stars) */}
                    <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                            <svg
                                key={i}
                                className={`w-5 h-5 ${i < product.rating ? 'text-branding-warning' : 'text-gray-300'}`}
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z" />
                            </svg>
                        ))}
                    </div>


                </div>

                {/* ---------- icons ----------- */}

            </div>

        </div>
    )
}

export default SmallProductCard