import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import { addToWishlist, removeFromWishlist } from '../../redux/slice/wishlistSlice'
import SingleWishItem from './SingleWishItem'
// import { IoCloseCircleOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';


const iconData = [ 
  {
    id:1,
    icon: FaFacebookF,
    path: "#"
  },
  {
    id:1,
    icon: FaTwitter,
    path: "#"
  },
  {
    id:1,
    icon: FaPinterestP,
    path: "#"
  },
  {
    id:1,
    icon: FaInstagram,
    path: "#"
  },
]

const WishlistBottom = () => {

  const navigate = useNavigate();

  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  console.log(wishlistItems)



  return (
    <div>

      {
        wishlistItems.length !== 0 ? (
          <div className=' '>


            {/* ---------- upper part  ------ */}

            <div className='flex flex-col'>

             {/* ----------- heading ---------- */}
             <div className='grid grid-cols-5 xs:grid-cols-6 md:grid-cols-5 border sm:text-sm text-[13px] font-semibold xsm:font-normal text-gray-500 text-medium uppercase py-3 rounded-t-md w-full'>

              <div className=' col-span-3 md:col-span-2  pl-5 flex items-center'>Product</div>
              <div className=' flex justify-center items-center'>Price</div>
              <div className='flex justify-center items-center text-center md:col-span-1 xs:col-span-2'>Stock Status</div>
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

            <div className='py-6  px-4 border rounded-b-md'>

              <div className='flex gap-x-4 items-center'>
                   <p>Share : </p>
                   <div className='flex xs:gap-x-4 gap-x-2 items-center'>
                    {
                      iconData.map((item) => {
                        const IconComponent = item.icon;

                        return (
                          <Link to={item.path}
                          key={item.id} className='xs:text-lg py-2 px-2 rounded-full cursor-pointer transition-all duration-200 hover:bg-primary hover:text-white-100 '>
                            <IconComponent/>
                          </Link>
                        )
                      })
                    }
                   </div>
              </div>

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