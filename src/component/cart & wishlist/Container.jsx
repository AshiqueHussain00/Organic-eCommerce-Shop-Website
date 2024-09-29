import React from 'react'
import CartBottom from './CartBottom';
import WishlistBottom from './WishlistBottom';
import Newsletter from '../common/NewsletterThree';
import BreadCrumbs from '../common/BreadCrumbs';
import Footer1 from '../common/footer/footer1';

const Container = ({ isCart = true }) => {
  return (
    <section>
      {/* ----------- call header , wll make later ------------- */}

      <div className=''>
        <BreadCrumbs />
      </div>


      {/* ------------- container -------------------- */}

      <div className="w-11/12 xlg:w-10/12 mx-auto  py-16 flex flex-col gap-y-10">


        {/* ------------ heading ----------- */}
        <div data-aos="fade-left" className='flex items-center justify-center '>
          <h1 className='text-[32px] font-semibold text-gray-900 leading-9 tracking-wide text-center'>{isCart ? "My Shopping Cart" : "My Wishlist"}</h1>
        </div>

        {/* -------------- bottom part ---------- */}

        {
          isCart ? (<CartBottom />) : (<WishlistBottom />)
        }





      </div>

      <Newsletter />
      <Footer1/>

    </section>
  )
}

export default Container;