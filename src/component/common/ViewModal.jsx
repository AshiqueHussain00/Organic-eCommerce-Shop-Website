import React, { useState } from 'react'
import { MdOutlineClose } from "react-icons/md";
import { useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useOnclickOutside } from '../../hooks/useOnclickOutside'
import { useDispatch, useSelector } from 'react-redux';
import { removeInView } from '../../redux/slice/viewSlice';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GoHeart } from "react-icons/go";
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter, FaHeart, FaEye } from 'react-icons/fa';
import { addToCart, increaseQuantity, decreaseQuantity } from '../../redux/slice/cartSlice';
import { addToWishlist } from '../../redux/slice/wishlistSlice';
import { toast } from 'react-hot-toast';




const ViewModal = () => {

    const dispatch = useDispatch();
    const product = useSelector((state) => state.view.product);
    const cart = useSelector((state) => state.cart.cart);

    const [quantity, setQuantity] = useState(0)

    useEffect(() => {

        let filterProduct = [];
        filterProduct = cart.filter(item => item.id === product.id)
       
        if (filterProduct.length !== 0) {
            setQuantity(filterProduct[0].quantity)
        }


    }, [cart])




    const socialMedia = [
        { facebook: FaFacebookF },
        { instagram: FaInstagram },
        { pinterest: FaPinterestP },
        { twitter: FaTwitter }
    ];
    const socialLink = ['https://www.facebook.com/', 'https://twitter.com/', 'https://in.pinterest.com/', 'https://www.instagram.com/'];

    const actions = [
        { like: FaHeart },
        { views: FaEye }
    ];



    const closeHandler = () => {


        dispatch(removeInView())
    }

    const modalRef = useRef(null);

    useOnclickOutside(modalRef, closeHandler)


    const modalVariants = {
        hidden: { opacity: 0, scale: 0.4 }, // Modal starts off-screen (above the viewport)
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4

            },
        },
        exit: { opacity: 0, scale: 0, transition: { duration: 0.3 } }, // Exit animation
    };


    const thumbnails = product.images[0].thumbnails;
    const imagesList = [product.images[0].main, ...thumbnails];




    const [selectedIndex, setSelectedIndex] = useState(0);


    useEffect(() => {

        if (product) {
            document.body.style.overflow = 'hidden';
        } else {

            document.body.style.overflow = 'auto';

        }

        return () => {
            document.body.style.overflow = 'auto';
        }

    }, [product])


    const handleAddToCart = (product) => {


        if (cart.find(item => item.id !== product.id)) {
            dispatch(addToCart(product));
            toast.success("Added to Cart")

        } else {
            dispatch(addToCart(product));
        }


    }

    const handleAddToWishlist = (product) => {


        dispatch(addToWishlist(product));
        toast.success("Added to Wishlist")
    }

    const handleAddToIncrement = (product) => {



        if (cart.find(item => item.id === product.id)) {
            dispatch(increaseQuantity(product.id));

        } else {
            dispatch(addToCart(product));
        }



    }


    const handleAddToDecrement = (product) => {

        if (cart.find(item => item.id === product.id)) {
            dispatch(decreaseQuantity(product.id));

        }

    }

    return (
        <motion.div className='fixed inset-0 z-[99999] grid md:place-items-center justify-center bg-gray-900 bg-opacity-70 overflow-auto xsm:px-10 xxs:px-8 px-6 mmd:px-16  py-24'>

            <p className='absolute right-10 top-6 text-4xl cursor-pointer text-white-100' onClick={closeHandler}><MdOutlineClose /></p>


            {/* -------------- modal ----------------- */}
            <AnimatePresence>
                <motion.div
                    variants={modalVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    ref={modalRef} onClick={(events) => events.stopPropagation()} className='  flex flex-col gap-y-6 md:flex-row gap-x-6  rounded-lg bg-white-100 py-6 xs:px-6 px-4 xlg:max-w-[980px] w-full'>

                    {/* ----------- image part ------------ */}

                    <div className='flex lg:max-w-[450px]  md:max-w-[300px]'>

                        {/* ------- image list ------- */}

                        <div className='grid grid-cols-1 gap-y-5 h-full  py-10 w-[100px]'>
                            {
                                imagesList.filter((image, index) => index !== selectedIndex).slice(0, 4).map((item, index) => (
                                    <div
                                        onClick={() => setSelectedIndex(index)}
                                        key={index}
                                        className=' w-full  cursor-pointer transition-all duration-300 hover:scale-105 border'>
                                        <img src={item} alt="product" className='w-full h-full xs:object-contain object-cover' />
                                    </div>
                                ))
                            }

                        </div>

                        {/* ----------- selected Image -------- */}
                        <div className='h-[500px] xmd:p-4 p-2 flex items-cente '>

                            <img src={imagesList[selectedIndex]} alt="product" className='w-full h-full object-contain ' />

                        </div>

                    </div>

                    {/* ------------ content part ---------- */}

                    <div className='flex flex-col xxs:px-4'>

                        {/* ----------- 1st row --------- */}

                        <div className='flex flex-col gap-y-3 border-b xs:pb-6 pb-4'>

                            <div className='flex items-center gap-x-4'>
                                <h1 className='xlg:text-4xl xs:text-3xl text-2xl font-semibold'>{product.name}</h1>
                                <p className='text-sm'>
                                    {
                                        product.inStock ? (<span className='text-branding-success bg-green-100 py-1 xs:px-2 px-1'> In Stock</span>) : (<span className='text-red-600 bg-red-100 py-1 px-1 xs:px-2'> Out of Stock</span>)
                                    }
                                </p>
                            </div>


                            <div className='flex items-center gap-x-5'>

                                {/* -------- rating and review ---- */}

                                <div className='flex items-center gap-x-2'>
                                    <p className='flex '>
                                        {Array.from({ length: 5 }, (elem, index) => {
                                            {/* let number = index + 0.5; */ }
                                            return (<span key={index}>
                                                {product.rating >= index ? (
                                                    <FaStar className="text-branding-warning h-[12px] w-[12px]" />
                                                ) : (
                                                    <FaRegStar className="text-branding-warning h-[12px] w-[12px]" />
                                                )}

                                            </span>)
                                        })}
                                    </p>

                                    <p className='text-sm'>
                                        {product.reviews} Reviews
                                    </p>


                                </div>

                                {/* ------ SKU Code ------- */}

                                <p className='text-sm font-semibold'>
                                    SKU: <span className='text-gray-700 font-normal'>{product.sku.toLocaleString()}</span>
                                </p>



                            </div>


                            {/* PRICE && DISCOUNT */}
                            <div className="flex flex-row gap-2 items-center  text-sm">
                                <p className="font-bold text-gray-400 flex flex-row items-center">
                                    <span className="  text-gray-400 line-through">${product.price.original}</span>
                                    <span className="ml-2 mr-2  text-green-500">${product.price.discounted}</span>
                                </p>
                                <p className="font-semibold bg-red-100 p-1 rounded-lg text-red-500">{product.promotions.discount}</p>

                            </div>


                        </div>


                        {/* ------------ 2nd row ---------- */}

                        <div className="flex flex-col gap-y-4 xs:py-6 py-4 text-sm border-b">

                            {/* BRAND && SHARE ITEM */}
                            <div className="flex xmd:flex-row  md:flex-col xsm:flex-row flex-col items-center xmd:justify-between md:justify-start xsm:justify-between gap-4 ">

                                <h3 className=" font-semibold">Brand: <span className=" font-medium text-xs">{product.brand}</span></h3>

                                <h3 className="flex gap-x-1 items-center font-semibold text-gray-800">Share Item: {
                                    socialMedia.map((social, index) => {
                                        const Icon = Object.values(social)[0];
                                        return (
                                            <a
                                                href={socialLink[index]}
                                                key={index}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-600 transition hover:bg-primary hover:text-white-200 p-1 rounded-full"
                                            >
                                                <Icon className="text-lg" />
                                            </a>
                                        );
                                    })}</h3>

                            </div>

                            {/* MAIN DESCRIPTION */}

                            <div className='xmd:text-left md:text-center xsm:text-left text-center'>
                                <p className="text-sm text-gray-500">{product.mainDec}</p>
                            </div>

                        </div>

                        {/* ----------- 3rd row ------- */}

                        <div className=' flex xs:py-6 py-4 justify-between border-b'>


                            {/* ---------- quantity part ------ */}

                            <div className='flex items-center border py-1 px-2 gap-x-2 rounded-3xl text-sm '>
                                <div
                                    onClick={() => handleAddToDecrement(product)}
                                    className='border  w-6 h-6 flex items-center justify-center rounded-full cursor-pointer text-lg bg-gray-50 transition-all duration-300  border-gray-50 hover:border-gray-900'>-</div>
                                <div>{quantity}</div>
                                <div
                                    onClick={() => handleAddToIncrement(product)}
                                    className='  w-6 h-6 flex items-center justify-center rounded-full text-lg bg-gray-50 cursor-pointer transition-all duration-300 border border-gray-50 hover:border-gray-900'>+</div>
                            </div>

                            {/* ---------- Add to cart part ------- */}

                            <div className='grid place-items-center'>
                                <button onClick={() => handleAddToCart(product)}

                                    className={` xlg:px-8 md:px-2 ssm:px-16 xsm:px-6 px-3 md:py-2 ssm:py-3 py-2 rounded-3xl text-sm flex gap-x-3 items-center
                            ${product.inStock ? "bg-primary text-white-100 transition-all duration-200 hover:bg-branding-success" : " bg-gray-50 text-gray-400"
                                        }
                        `}>

                                    Add To Cart
                                    <HiOutlineShoppingBag className='text-lg' />

                                </button>
                            </div>


                            {/* ----------- wishlist -------- */}

                            <div
                                onClick={() => handleAddToWishlist(product)}
                                className='items-center text-lg  bg-gray-50 w-8 h-8 grid place-items-center rounded-full hover:bg-primary hover:text-white-100 transition-all duration-200 cursor-pointer'>
                                <GoHeart />
                            </div>





                        </div>

                        {/* ----------- 4th row --------- */}

                        <div className="flex flex-col gap-2 xs:py-6 py-4">

                            <h3 className="text-sm  flex items-center font-semibold text-black-900 ">Categories: <span className="text-sm ml-2 font-normal text-gray-500">{product.category}</span></h3>
                            <h3 className="text-sm md:text-base font-semibold">Tag: {""}<span>{product.tags.map((tag, index) => (<span key={index} className="mr-2 text-sm font-normal text-gray-500"> {tag},</span>))}</span></h3>
                        </div>


                    </div>



                </motion.div>
            </AnimatePresence>
        </motion.div>
    )
}

export default ViewModal