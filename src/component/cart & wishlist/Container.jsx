import React from 'react'
import CartBottom from './CartBottom';
import WishlistBottom from './WishlistBottom';
import Newsletter from '../common/NewsletterThree';

const Container = ({isCart = true}) => {
  return (
    <section>
        {/* ----------- call header , wll make later ------------- */}

        {/* ------------- container -------------------- */}

        <div className="w-11/12 xlg:w-10/12 mx-auto border-2 border-red-800 py-16 flex flex-col gap-y-10">
              

              {/* ------------ heading ----------- */}
              <div className='flex items-center justify-center border'>
                <h1 className='text-[32px] font-semibold text-gray-900 leading-9 tracking-wide'>{isCart ? "My Shopping Cart" : "My Wishlist"}</h1>
              </div>

              {/* -------------- bottom part ---------- */}

              {
                isCart ? (<CartBottom/>) : (<WishlistBottom/>)
              }

              



        </div>

       <Newsletter/>

    </section>
  )
}

export default Container;