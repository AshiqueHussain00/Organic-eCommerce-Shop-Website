import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import SingleItem from './SingleItem'
import { useNavigate } from 'react-router-dom'
import { calculateTotalPrice } from '../../redux/slice/cartSlice'
import { toast } from 'react-hot-toast'

const CartBottom = () => {
  const cartItems = useSelector(state => state.cart.cart)
  // const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector(state => state.cart.totalPrice)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const updateCart = () => {
    dispatch(calculateTotalPrice())
    toast.success('Cart Updated')
  }

  const handleCheckout = () => {
    dispatch(calculateTotalPrice())
    // navigate('/checkout')
  }

  return (
    <div>
      {cartItems.length !== 0 ? (
        <div className='flex flex-col md:flex-row gap-y-6 md:justify-between'>
          {/* --------- left --------------- */}
          <div className='xxl:w-[67%] md:w-[65%] flex flex-col gap-y-8'>
            {/* ---------- upper ---------- */}

            <div>
              {/* -------- heading ----------- */}

              <div className='grid grid-cols-5 xsm:grid-cols-4 xs:grid-cols-6 md:grid-cols-4 xmd:grid-cols-6 border w-full xsm:text-sm text-[13px] font-semibold xsm:font-normal text-gray-500 text-medium uppercase py-3 sm:gap-x-0  gap-x-4 rounded-t-md x'>
                <div className='col-span-3 px-6 xsm:col-span-3 xs:col-span-2 md:col-span-3 xmd:col-span-2 '>
                  Product
                </div>
                <div className='hidden xs:flex md:hidden xmd:flex sm:justify-center '>
                  Price
                </div>
                <div className='hidden xs:flex md:hidden xmd:flex sm:justify-center '>
                  Quantity
                </div>
                <div className='flex justify-center col-span-2 pl-4 xsm:col-span-1 xsm:pl-0'>
                  SubTotal
                </div>
              </div>

              {/* -----------cart content --------- */}
              <div className='flex flex-col w-full '>
                {cartItems.map(item => (
                  <SingleItem key={item.id} data={item} />
                ))}
              </div>
              {/* --------------  btn grp ------------ */}
              <div className='flex justify-between px-4 py-5 text-sm border rounded-b-md'>
                {/* -- return to shop btn---- */}
                <button
                  onClick={() => navigate('/shop1')}
                  className='px-4 py-2 tracking-wide transition-all duration-300 border xsm:px-6 xsm:py-3 rounded-3xl bg-gray-50 border-gray-50 hover:border-gray-900'
                >
                  Return to shop
                </button>

                {/* -- Update cart btn -- */}
                <button
                  onClick={updateCart}
                  className='px-4 py-2 tracking-wide transition-all duration-300 border xsm:px-6 xsm:py-3 rounded-3xl bg-gray-50 border-gray-50 hover:border-gray-900'
                >
                  Update Cart
                </button>
              </div>
            </div>

            {/* --------- bottom -------------- */}

            <div className='px-2 py-6 border rounded-md xsm:px-4'>
              <div className='flex flex-col items-center justify-between xs:flex-row gap-y-3 gap-x-2'>
                <h2 className='xs:w-max xl:text-xl sm:text-lg  text-[16px] font-semibold text-gray-900'>
                  Coupon Code
                </h2>
                <div className='w-full xs:w-[70%] xl:w-[75%] xxl:w-[80%] relative  xlg:text-[16px] text-sm  '>
                  <input
                    type='text'
                    name='coupon-code'
                    placeholder='Enter code'
                    className='w-full px-4 py-2 border outline-none rounded-3xl sm:py-3 focus:border-gray-900'
                  />

                  <button className='absolute bg-gray-800 text-white-100 rounded-3xl px-4 xmd:px-8 sm:py-3 py-2 right-0 border text-sm xsm:text-[16px] border-gray-800'>
                    Apply Coupon
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ---------- right --------------- */}

          <div className='xxl:w-[30%] md:w-[33%]  flex flex-col'>
            {/* -------- cart total card ---------- */}
            <div className='flex flex-col w-full px-4 py-6 border rounded-md gap-y-3 h-max'>
              <h2 className='mb-3 text-xl font-semibold leading-7 text-gray-900'>
                Cart Total
              </h2>

              <div className='flex justify-between py-2 text-sm border-b'>
                <span className='font-normal text-gray-700'>Subtotal:</span>
                <span className='font-semibold text-gray-900'>
                  $ {totalPrice.toFixed(2)}
                </span>
              </div>

              <div className='flex justify-between py-2 text-sm border-b'>
                <span className='font-normal text-gray-700'>Shipping:</span>
                <span className='font-semibold text-gray-900'>Free</span>
              </div>

              <div className='flex justify-between text-sm'>
                <span className='font-normal text-gray-700'>Total:</span>
                <span className='font-semibold text-gray-900'>
                  $ {totalPrice.toFixed(2)}
                </span>
              </div>

              <button
                onClick={handleCheckout}
                className='bg-primary py-3 rounded-3xl md:text-sm text-[16px] font-semibold text-white-100 mt-3 transition-all duration-200 hover:bg-branding-success'
              >
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className=' h-[300px] grid place-items-center'>
          <div className='flex flex-col items-center gap-y-4'>
            <p className='text-2xl tracking-wider text-center text-gray-500 '>
              Your Cart is Empty !
            </p>
            <button
              onClick={() => navigate('/shop1')}
              className='px-4 py-2 tracking-wide transition-all duration-300 border xsm:px-6 xsm:py-3 rounded-3xl bg-gray-50 border-gray-50 hover:border-gray-900'
            >
              Return to shop
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CartBottom
