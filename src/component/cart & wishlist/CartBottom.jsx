import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SingleItem from './SingleItem';
import { useNavigate } from 'react-router-dom';
import { calculateTotalPrice } from '../../redux/slice/cartSlice';
import { toast } from 'react-hot-toast';





const CartBottom = () => {

    const cartItems = useSelector((state) => state.cart.cart);
    // const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const totalPrice = useSelector((state) => state.cart.totalPrice)

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const updateCart = () => {
        
         dispatch(calculateTotalPrice())
         toast.success("Cart Updated")
    }

    const handleCheckout = () => {

        dispatch(calculateTotalPrice())
        // navigate('/checkout')
    }


    return (
        <div>

            {
                cartItems.length !== 0 ? (
                    <div className=' flex md:flex-row flex-col gap-y-6 md:justify-between'>

                    {/* --------- left --------------- */}
                    <div className='xxl:w-[67%] md:w-[65%] flex flex-col gap-y-8'>
    
                        {/* ---------- upper ---------- */}
    
                        <div>
    
                            {/* -------- heading ----------- */}
    
                            <div className='grid grid-cols-5 xsm:grid-cols-4 xs:grid-cols-6 md:grid-cols-4 xmd:grid-cols-6 border w-full xsm:text-sm text-[13px] font-semibold xsm:font-normal text-gray-500 text-medium uppercase py-3 sm:gap-x-0  gap-x-4 rounded-t-md x'>
    
                                <div className='px-6 col-span-3 xsm:col-span-3 xs:col-span-2  md:col-span-3 xmd:col-span-2 '>Product</div>
                                <div className='hidden xs:flex  md:hidden xmd:flex sm:justify-center '>Price</div>
                                <div className='hidden xs:flex md:hidden xmd:flex sm:justify-center '>Quantity</div>
                                <div className='flex justify-center col-span-2 xsm:col-span-1  pl-4 xsm:pl-0'>SubTotal</div>
    
    
                            </div>
    
    
                            {/* -----------cart content --------- */}
                            <div className='flex flex-col w-full '>
                                {
                                    cartItems.map((item) => (
                                        <SingleItem key={item.id} data={item} />
                                    ))
                                }
                            </div>
                            {/* --------------  btn grp ------------ */}
                            <div className='border py-5 px-4 flex justify-between text-sm rounded-b-md'>
    
                                {/* -- return to shop btn---- */}
                                <button
                                    onClick={() => navigate('/shop1')}
                                    className='xsm:px-6 px-4 xsm:py-3 py-2 rounded-3xl tracking-wide bg-gray-50 transition-all duration-300 border border-gray-50 hover:border-gray-900'>
                                    Return to shop
                                </button>
    
                                {/* -- Update cart btn -- */}
                                <button
                                    onClick={updateCart}
                                    className='xsm:px-6 px-4 xsm:py-3 py-2 rounded-3xl tracking-wide bg-gray-50 transition-all duration-300 border border-gray-50 hover:border-gray-900'>
                                    Update Cart
                                </button>
    
    
                            </div>
    
                        </div>
    
    
    
    
                        {/* --------- bottom -------------- */}
    
                        <div className='xsm:px-4 px-2 py-6 border rounded-md'>
    
                            <div className='flex xs:flex-row flex-col gap-y-3 gap-x-2 justify-between items-center'>
    
                                <h2 className='xs:w-max xl:text-xl sm:text-lg  text-[16px] font-semibold text-gray-900'>Coupon Code</h2>
                                <div className='w-full xs:w-[70%] xl:w-[75%] xxl:w-[80%] relative  xlg:text-[16px] text-sm  '>
    
                                    <input
                                        type="text"
                                        name="coupon-code"
                                        placeholder='Enter code'
                                        className='w-full border rounded-3xl sm:py-3 py-2 px-4 outline-none focus:border-gray-900'
                                    />
    
                                    <button
    
                                        className='absolute bg-gray-800 text-white-100 rounded-3xl px-4 xmd:px-8 sm:py-3 py-2 right-0 border text-sm xsm:text-[16px] border-gray-800'>
                                        Apply Coupon
                                    </button>
    
                                </div>
    
                            </div>
    
    
    
                        </div>
    
                    </div>
    
                    {/* ---------- right --------------- */}
    
                    <div className='xxl:w-[30%] md:w-[33%]  flex flex-col'>
    
    
                        {/* -------- cart total card ---------- */}
                        <div className='py-6 px-4 flex flex-col gap-y-3 border w-full h-max rounded-md'>
    
                            <h2 className='text-xl font-semibold text-gray-900 leading-7 mb-3'>Cart Total</h2>
    
                            <div className='flex justify-between border-b py-2 text-sm'>
                                <span className='text-gray-700 font-normal'>Subtotal:</span>
                                <span className='text-gray-900 font-semibold'>
                                    $ {totalPrice.toFixed(2)}
                                    
                                </span>
                            </div>
    
                            <div className='flex justify-between border-b py-2 text-sm'>
                                <span className='text-gray-700 font-normal'>Shipping:</span>
                                <span className='text-gray-900 font-semibold'>
                                    Free
                                </span>
                            </div>
    
                            <div className='flex justify-between text-sm'>
                                <span className='text-gray-700 font-normal'>Total:</span>
                                <span className='text-gray-900 font-semibold'>
                                    $ {totalPrice.toFixed(2)}
                                 
                                </span>
                            </div>
    
    
                            <button
                            onClick={handleCheckout}
                             className='bg-primary py-3 rounded-3xl md:text-sm text-[16px] font-semibold text-white-100 mt-3 transition-all duration-200 hover:bg-branding-success'>
                                Proceed to checkout
                            </button>
    
    
    
    
                        </div>
    
                    </div>
    
                </div>
                ) : (
                    <div className=' h-[300px] grid place-items-center'>

                        <div className='flex flex-col gap-y-4 items-center'>

                            <p className='text-2xl text-gray-500  tracking-wider text-center '>Your Cart is Empty !</p>
                            <button
                                    onClick={() => navigate('/shop1')}
                                    className='xsm:px-6 px-4 xsm:py-3 py-2 rounded-3xl tracking-wide bg-gray-50 transition-all duration-300 border border-gray-50 hover:border-gray-900'>
                                    Return to shop
                                </button>


                        </div>

                    </div>
                )
            }


          
        </div>
    )
}

export default CartBottom