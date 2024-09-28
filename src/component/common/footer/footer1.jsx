import React from 'react'
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from 'react-icons/fa'; // Icons from react-icons
import Logo from '../../../assets/home2/Ecologo.svg'
import Img1 from '../../../assets/home2/ApplePay.svg'
import VisaImg from '../../../assets/home2/visa.svg'
import DiscoverImg from '../../../assets/home2/discover.svg'
import MastercardImg from '../../../assets/home2/mastercard.svg'
import LockImg from '../../../assets/home2/cart.svg'

function Footer1() {
  const FooterData = {
    shopery: {
      logo: Logo,
      para: 'Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec',
      number: '(219) 555-0114',
      email: 'Proxy@gmail.com',
    },
    myAccount: {
      title: 'My Account',
      para: ['My Account', 'Order History', 'Shopping Cart', 'Wishlist'],
    },
    helps: {
      title: 'Helps',
      para: ['Contact', 'Faqs', 'Terms & Condition', 'Privacy Policy'],
    },
    proxy: {
      title: 'Proxy',
      para: ['About', 'Shop', 'Product', 'Track Order'],
    },
    categories: {
      title: 'Categories',
      para: ['Fruit & Vegetables', 'Meat & Fish', 'Bread & Bakery', 'Beauty & Health'],
    },
    socialLink: ['https://www.facebook.com/', 'https://twitter.com/', 'https://in.pinterest.com/', 'https://www.instagram.com/'],
  }

  return (
    <section className="w-full bg-black-900 text-gray-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 pt-16">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-6">
          {/* ABOUT SHOPERY */}
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-4">
            <img src={FooterData.shopery.logo} alt="Shopery Logo" className="w-32" />
            <p className="text-gray-400 text-sm sm:text-base">{FooterData.shopery.para}</p>
            <div className="flex items-center space-x-4">
              <span className="text-white-100 underline decoration-green-600 decoration-3 underline-offset-8 font-medium">
                {FooterData.shopery.number}
              </span>
              <span className="text-gray-500 font-medium">or</span>
              <span className="text-white-100 underline decoration-green-600 decoration-3 underline-offset-8 font-medium">
                {FooterData.shopery.email}
              </span>
            </div>
          </div>

          {/* MY ACCOUNT and HELPS in one row */}
          <div className="grid grid-cols-2 gap-8 col-span-2">
            {/* MY ACCOUNT */}
            <div className="flex flex-col gap-4">
              <h2 className="text-white-100 text-lg font-medium">{FooterData.myAccount.title}</h2>
              <ul className="space-y-2">
                {FooterData.myAccount.para.map((item, index) => (
                  <li key={index} className="hover:text-white-100 cursor-pointer text-sm md:text-base">{item}</li>
                ))}
              </ul>
            </div>

            {/* HELPS */}
            <div className="flex flex-col gap-4">
              <h2 className="text-white-100 text-lg font-medium">{FooterData.helps.title}</h2>
              <ul className="space-y-2">
                {FooterData.helps.para.map((item, index) => (
                  <li key={index} className="hover:text-white-100 cursor-pointer text-sm md:text-base">{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* PROXY and CATEGORIES in one row */}
          <div className="grid grid-cols-2 gap-8 col-span-2">
            {/* PROXY */}
            <div className="flex flex-col gap-4">
              <h2 className="text-white-100 text-lg font-medium">{FooterData.proxy.title}</h2>
              <ul className="space-y-2">
                {FooterData.proxy.para.map((item, index) => (
                  <li key={index} className="hover:text-white-100 cursor-pointer text-sm md:text-base">{item}</li>
                ))}
              </ul>
            </div>

            {/* CATEGORIES */}
            <div className="flex flex-col gap-4">
              <h2 className="text-white-100 text-lg font-medium">{FooterData.categories.title}</h2>
              <ul className="space-y-2">
                {FooterData.categories.para.map((item, index) => (
                  <li key={index} className="hover:text-white-100 cursor-pointer text-sm md:text-base">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <hr className="my-6 border-gray-700" />
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          {/* COPYRIGHT MESSAGE */}
          <h2 className="text-gray-400 text-sm lg:text-base">Ecobazar eCommerce © 2021. All Rights Reserved</h2>

          {/* PAYMENT ICONS */}
          <div className="flex items-center space-x-4">
            <img src={Img1} alt="Apple Pay" className="w-10 h-auto" />
            <img src={VisaImg} alt="Visa" className="w-10 h-auto" />
            <img src={DiscoverImg} alt="Discover" className="w-10 h-auto" />
            <img src={MastercardImg} alt="Mastercard" className="w-10 h-auto" />
            <img src={LockImg} alt="Lock" className="w-10 h-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer1;
