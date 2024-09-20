import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToWishlist, removeFromWishlist } from '../../redux/slice/wishlistSlice'
import SingleWishItem from './SingleWishItem'
import { IoCloseCircleOutline } from "react-icons/io5";

const WishlistBottom = () => {

  const navigate = useNavigate();

  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  console.log(wishlistItems)



  return (
    <div>

      {
        wishlistItems.length !== 0 ? (
          <div className='border-2 border-green-600 '>


            {/* ---------- upper part  ------ */}

            <div className='flex flex-col'>

             {/* ----------- heading ---------- */}
             <div className='grid grid-cols-5 border xsm:text-sm text-[13px] font-semibold xsm:font-normal text-gray-500 text-medium uppercase py-3 rounded-t-md w-full'>

              <div className=' col-span-3md:col-span-2 border pl-5'>Product</div>
              <div className='border flex justify-center items-center'>Price</div>
              <div className='border flex justify-center items-center'>Stock Status</div>
              <div className='md:flex hidden'>

              </div>
              </div>

                {/* ------- products ------- */}
              <div className='flex flex-col w-full '>

                {
                  wishlistItems.map((item ) => (
                    <SingleWishItem data={item} key={item.id}/>
                  ))
                }

              </div>



             



            </div>

            {/* -------- bottom part ------- */}

            <div>

            </div>

     



          </div>
        ) : (
          <div className=' h-[300px] grid place-items-center'>

            <div className='flex flex-col gap-y-4 items-center'>

              <p className='text-2xl text-gray-500  tracking-wider text-center '>Your Wishlist is Empty !</p>
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

export default WishlistBottom