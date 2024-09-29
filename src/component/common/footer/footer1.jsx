import React from 'react'
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from 'react-icons/fa'; // Icons from react-icons
import Logo from '../../../assets/home2/Ecologo.svg'
import Img1 from '../../../assets/home2/ApplePay.svg'
import VisaImg from '../../../assets/home2/visa.svg'
import DiscoverImg from '../../../assets/home2/discover.svg'
import MastercardImg from '../../../assets/home2/mastercard.svg'
import LockImg from '../../../assets/home2/cart.svg'
import { useNavigate } from 'react-router-dom';

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
      para: [{ title: 'My Account', path: '/account/dashboard' },
      { title: 'Order History', path: '/account/order-history' },
      { title: 'Shopping Cart', path: '/shopping-cart' },
      { title: 'Wishlist', path: '/wishlist' },
      { title: 'Settings', path: '/account/settings' }],
    },
    helps: {
      title: 'Helps',
      para: [{ title: 'Contact', path: '/contact-us' },
      { title: 'Faqs', path: '' },
      { title: 'Terms & Condition', path: '' },
      { title: 'Privacy Policy', path: '' }],
    },
    proxy: {
      title: 'Proxy',
      para: [{ title: 'About', path: '/about-us' },
      { title: 'Shop', path: '/shop1' },
      { title: 'Product', path: '/shop2' },
      { title: 'Product Details', path: '/product/Fruits/f9' },
      { title: 'Track Order', path: '/account/dashboard' }],
    },
    categories: {
      title: 'Categories',
      para: [{title:'Fruit & Vegetables' , path:'/shop1'}, {title:'Meat & Fish' , path:'/shop1'}, {title:'Bread & Bakery' , path:'/shop1'}, {title:'Beauty & Health',path:'/shop1'}],
    },
    socialLink: ['https://www.facebook.com/', 'https://twitter.com/', 'https://in.pinterest.com/', 'https://www.instagram.com/'],
  }


  const navigate = useNavigate();

  const handleClick = (page) => {
    navigate(page);
  }

  return (
    <section className="w-full text-gray-500 bg-black-900">
      <div className="px-4 pt-16 pb-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-6 ">
          {/* ABOUT SHOPERY */}
         
          <div className="flex flex-col col-span-2 gap-4 ">
            <img src={FooterData.shopery.logo} alt="Shopery Logo" className="w-32" />
            <p className="text-sm text-gray-400 sm:text-base">{FooterData.shopery.para}</p>
            <div className="flex space-x-4">
              <span className="text-sm font-medium underline text-white-100 decoration-green-600 decoration-3 underline-offset-8 lg:text-base">
                {FooterData.shopery.number}
              </span>
              <span className="font-medium text-gray-500">or</span>
              <span className="text-sm font-medium underline text-white-100 decoration-green-600 lg:text-base decoration-3 underline-offset-8">
                {FooterData.shopery.email}
              </span>
            </div>
          </div>

          {/* MY ACCOUNT and HELPS in one row */}
          <div className="grid grid-cols-2 col-span-2 gap-8">
            {/* MY ACCOUNT */}
            <div className="flex flex-col gap-4">
              <h2 className="text-lg font-medium text-white-100">{FooterData.myAccount.title}</h2>
              <ul className="flex flex-col gap-y-2">
                {FooterData.myAccount.para.map((item, index) => (
                  <li key={index} onClick={() => { handleClick(item.path) }} className="text-sm cursor-pointer hover:text-white-100 md:text-base">{item.title}</li>
                ))}
              </ul>
            </div>

            {/* HELPS */}
            <div className="flex flex-col gap-4">
              <h2 className="text-lg font-medium text-white-100 ">{FooterData.helps.title}</h2>
              <ul className="flex flex-col gap-y-2">
                {FooterData.helps.para.map((item, index) => (
                  <li key={index} onClick={() => { handleClick(item.path) }} className="text-sm cursor-pointer hover:text-white-100 md:text-base">{item.title}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* PROXY and CATEGORIES in one row */}
          <div className="grid grid-cols-2 col-span-2 gap-8">
            {/* PROXY */}
            <div className="flex flex-col gap-4">
              <h2 className="text-lg font-medium text-white-100">{FooterData.proxy.title}</h2>
              <ul className="flex flex-col gap-y-2">
                {FooterData.proxy.para.map((item, index) => (
                  <li key={index} onClick={() => { handleClick(item.path) }} className="text-sm cursor-pointer hover:text-white-100 md:text-base">{item.title}</li>
                ))}
              </ul>
            </div>

            {/* CATEGORIES */}
            <div className="flex flex-col gap-4">
              <h2 className="text-lg font-medium text-white-100">{FooterData.categories.title}</h2>
              <ul className="flex flex-col gap-y-2">
                {FooterData.categories.para.map((item, index) => (
                  <li key={index} onClick = {()=>{handleClick(item.path)}} className="text-sm cursor-pointer hover:text-white-100 md:text-base">{item.title}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <hr className="my-6 border-gray-700" />
        <div className="flex flex-col justify-between gap-4 lg:flex-row">
          {/* COPYRIGHT MESSAGE */}
          <h2 className="text-sm text-center text-gray-400 lg:text-base">Ecobazar eCommerce © 2021. All Rights Reserved</h2>

          {/* PAYMENT ICONS */}
          <div className="flex space-x-4">
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
