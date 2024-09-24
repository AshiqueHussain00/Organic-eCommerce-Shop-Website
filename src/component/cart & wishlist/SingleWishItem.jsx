import React from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slice/cartSlice';
import { removeFromWishlist } from '../../redux/slice/wishlistSlice';
import { toast } from 'react-hot-toast';

const SingleWishItem = ({ data }) => {

    const dispatch = useDispatch();

    const handleAddToCart = (product) => {

        if (product.inStock) {
            dispatch(addToCart(product));
            toast.success("Added to Cart")
        } else {
            toast.error("Sorry , Product is Out of Stock")
        }

    }

    const handleRemoveFromWishlist = (id) => {

   
        dispatch(removeFromWishlist(id))
        toast.error("Remove from wishlist")

    }



    return (
        <div className='md:py-6 xs:py-8 py-10 border grid grid-cols-5 xs:grid-cols-6 md:grid-cols-5 text-sm sm:text-[16px]'>


            {/* --------- product --------- */}
            <div className='flex  items-center md:gap-x-3 sm:gap-x-4 gap-x-3 col-span-3  md:col-span-2 pl-2  relative'>
                <div className='xs:w-[100px] xs:h-[100px] w-[80px] h-[80px]  '>
                    <img src={data.images[0].main} alt={data.name} className='w-full h-full object-contain' />
                </div>

                <div className='flex flex-col gap-y-4 justify-center '>
                    <p className='tracking-wide text-center'>{data.name}</p>

                    {/* ----------- add to cart and remove icon ------ */}

                    <div className='flex   md:hidden justify-center item-center gap-x-3 '>



                        <div className='grid place-items-center'>
                            <button
                                onClick={() => handleAddToCart(data)}
                                className={` px-2 ssm:px-3 ssm:py-2 py-1 rounded-3xl xsm:text-sm text-[13px]
${data.inStock ? "bg-primary text-white-100" : " bg-gray-50 text-gray-400"
                                    }
`}>

                                Add To Cart

                            </button>
                        </div>


                        <div

                            className='text-xl xlg:text-2xl  flex items-center justify-center ssm:relative absolute top-[-25px] xs:top[-20px] left-2'>
                            <p onClick={() => handleRemoveFromWishlist(data.id)} className='cursor-pointer '>
                                <IoCloseCircleOutline className='text-gray-700 transition-all duration-300 hover:text-gray-400' />
                            </p>

                        </div>

                    </div>

                </div>



            </div>


            {/* ---------- price ---------- */}

            <div className=' flex items-center justify-center '>
                $ {data.price.discounted}
            </div>


            {/* ---------- stock status --------- */}

            <div className=' flex items-center justify-center xs:text-sm md:col-span-1 xs:col-span-2  text-[12px]'>
                {
                    data.inStock ? (<span className='text-branding-success bg-green-100 py-1 xs:px-2 px-1'> In Stock</span>) : (<span className='text-red-600 bg-red-100 py-1 px-1 xs:px-2'> Out of Stock</span>)
                }
            </div>


            {/* ---------- cart btn and remove btn -------------- */}

            <div className='hidden md:flex justify-center item-center gap-x-3 '>



                <div className='grid place-items-center'>
                    <button
                        onClick={() => handleAddToCart(data)}
                        className={` px-3 py-2 rounded-3xl text-sm
                            ${data.inStock ? "bg-primary text-white-100 transition-all duration-200 hover:bg-branding-success" : " bg-gray-50 text-gray-400"
                            }
                        `}>

                        Add To Cart

                    </button>
                </div>


                <div

                    className='text-xl xlg:text-2xl  flex items-center justify-center  '>
                    <p onClick={() => handleRemoveFromWishlist(data.id)} className='cursor-pointer '>
                        <IoCloseCircleOutline className='text-gray-700 transition-all duration-300 hover:text-gray-400' />
                    </p>

                </div>

            </div>




        </div>
    )
}

export default SingleWishItem