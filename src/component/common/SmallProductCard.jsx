import React from 'react'
import { useState } from 'react';
import { PiHandbagLight } from "react-icons/pi";
import { IoEyeOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { addToCart } from '../../redux/slice/cartSlice';
import { toast } from 'react-hot-toast';
import { addToWishlist } from '../../redux/slice/wishlistSlice';
import { addInView } from '../../redux/slice/viewSlice';
import { useDispatch , useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SmallProductCard = ({ product }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cart = useSelector((state) => state.cart.cart)
    const [isHover, setIsHover] = useState(false);


    const handleAddToCart = (product, events) => {

        events.stopPropagation();



        if(cart.find(item => item.id === product.id)){
            
            dispatch(addToCart(product));
        }
        else if (product.inStock) {
            dispatch(addToCart(product));
            toast.success("Added to Cart")
            dispatch(calculateTotalPrice());


        } else {
            toast.error("Sorry , Product is Out of Stock")
        }



    }

    const handleAddToWishlist  = (product , events) => {
          
        events.stopPropagation();

    if(product){
        dispatch(addToWishlist(product));
        toast.success("Added to Wishlist")
    }
    }

    const handleInView = (product , events) =>{

        events.stopPropagation();

        if(product){
            dispatch(addInView(product));
            
        }
    }

    const handlePageDescription = (category, id) => {
        navigate(`/product/${category}/${id}` , { state: { productId: true } });

    }

    return (
        <div
            onClick={()=> handlePageDescription(product.category , product.id)}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className=' flex gap-x-3  border border-gray-100 pr-4 py-3  transition-all duration-400 hover:border-branding-success green-shadow group h-[140px] xlg:h-[130px] cursor-pointer'>

            <div className='w-[130px]'>
                <img src={product.images[0].main} alt={product.name} className='h-full w-full object-cover' />
            </div>


            {/* -------- content  ------- */}
            <div className={`flex flex-col gap-y-2  justify-center 
            
            `}>

                {/* ----- product name ------ */}

                <p className=' font-normal transition-colors duration-200 group-hover:text-branding-success'>{product.name}</p>

                {/* --------- price and rating ----------- */}




                <div


                    className={`flex flex-col gap-y-2  justify-center
                                    ${isHover ? "hidden" : ""
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

                            <div
                                onClick={(events) => handleAddToCart(product, events)}
                                className='border border-gray-100 xl:text-xl xlg:text-lg sm:text-xl text-lg py-2 px-2 rounded-full cursor-pointer transition-all duration-200 hover:bg-primary hover:text-white-100 hover:border-none'>
                                <PiHandbagLight />
                            </div>

                            {/* ------- view ------- */}

                            <div 
                            onClick={(events) => handleInView(product, events)}
                            className='border border-gray-100 xl:text-xl xlg:text-lg sm:text-xl text-lg py-2 px-2 rounded-full cursor-pointer transition-all duration-200 hover:bg-primary hover:text-white-100 hover:border-none'>
                                <IoEyeOutline />
                            </div>

                            {/* ------ wishlist ----- */}

                            <div
                            onClick={(events)=> handleAddToWishlist(product , events)}
                             className='border border-gray-100 xl:text-xl xlg:text-lg sm:text-xl text-lg py-2 px-2 rounded-full cursor-pointer transition-all duration-200 hover:bg-primary hover:text-white-100 hover:border-none'>
                                <GoHeart />
                            </div>

                        </motion.div>

                    )


                }




            </div>


        </div>
    )
}

export default SmallProductCard