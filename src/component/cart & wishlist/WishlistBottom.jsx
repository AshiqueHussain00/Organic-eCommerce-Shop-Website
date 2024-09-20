import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToWishlist, removeFromWishlist } from '../../redux/slice/wishlistSlice'

const WishlistBottom = () => {

  const navigate = useNavigate();

  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  console.log(wishlistItems)



  return (
    <div>

      {
        wishlistItems.length !== 0 ? (
          <div className='border-2 border-green-600'>

            {/* ----------- heading ---------- */}



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