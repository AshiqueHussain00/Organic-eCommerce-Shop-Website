import React from 'react'
import { useState } from 'react';
import { PiHandbagLight } from "react-icons/pi";
import { IoEyeOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const SmallProductCard = ({ product }) => {

    const [isHover, setIsHover] = useState(false);


    return (
        <div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className=' flex gap-x-3  border border-gray-100 pr-4 py-3  transition-all duration-200 hover:border-branding-success green-shadow group h-[140px] xlg:h-[130px]'>

            <div>
                <img src={product.images[0].main} alt={product.name} />
            </div>
         

            {/* -------- content  ------- */}
            <div className={`flex flex-col gap-y-2  justify-center 
            
            `}>

                {/* ----- product name ------ */}

                <p className=' font-normal transition-colors duration-200 group-hover:text-branding-success'>{product.name}</p>

                {/* --------- price and rating ----------- */}

             

                     
                            <div


                                className={`flex flex-col gap-y-2  justify-center
                                    ${
                                        isHover ?  "hidden" : ""
                                    }
             
            `}>


                                <p className='text-sm font-medium'>{`$${product.price.discounted}`}</p>

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

           
                    {
                        isHover && (


                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 200 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className={`flex gap-x-3 items-center mt-2
                   
                   `}>

                                {/* ------ cart --- */}
  
                                <Link to="/cart" className='border border-gray-100 xl:text-xl xlg:text-lg sm:text-xl text-lg py-2 px-2 rounded-full cursor-pointer transition-all duration-200 hover:bg-primary hover:text-white-100 hover:border-none'>
                                    <PiHandbagLight />
                                </Link>

                                {/* ------- view ------- */}

                                <div className='border border-gray-100 xl:text-xl xlg:text-lg sm:text-xl text-lg py-2 px-2 rounded-full cursor-pointer transition-all duration-200 hover:bg-primary hover:text-white-100 hover:border-none'>
                                    <IoEyeOutline />
                                </div>

                                {/* ------ wishlist ----- */}

                                <Link to="/wishlist" className='border border-gray-100 xl:text-xl xlg:text-lg sm:text-xl text-lg py-2 px-2 rounded-full cursor-pointer transition-all duration-200 hover:bg-primary hover:text-white-100 hover:border-none'>
                                    <GoHeart />
                                </Link>

                            </motion.div>

                        )


                    }
            



            </div>


        </div>
    )
}

export default SmallProductCard