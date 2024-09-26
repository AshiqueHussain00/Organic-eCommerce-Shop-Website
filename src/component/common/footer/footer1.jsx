import React from 'react'
import { FaLock } from 'react-icons/fa'
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter, FaHeart, FaEye } from 'react-icons/fa'; // Icons from react-icons
import { FaCcApplePay , FaCcVisa ,FaCcDiscover ,FaCcMastercard , } from 'react-icons/fa6';
import Logo from '../../../assets/common/navbar/logo1.svg'

function Footer1() {
    const FooterData = {
        shopery: {
            logo: Logo,
            para: 'Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec',
            number:'(219) 555-0114',
            email : 'Proxy@gmail.com'
        },

        myAccount: {
            title:'My Account',
            para: ['My Account',
                   'Order History',
                   'Shopping Cart',
                   'Wishlist']
               

        },

        helps : {
            title: 'Helps',
            para: ['Contact',
                   'Faqs',
                   'Terms & Condition',
                   'Privacy Policy']
        
        },

        proxy: {
            title: 'Proxy',
            para: ['About',
                  'Shop',
                  'Product',
                 'Track Order']
        },
        categories: {
            title: ' Categories',
            para: ['Fruit & vegitables',
                  'Meat & Fish',
                  'Bread & Bakery',
                  'Beauty & Helth']
        },


        socialMedia : [
            { facebook: FaFacebookF },
            { instagram: FaInstagram },
            { pinterest: FaPinterestP },
            { twitter: FaTwitter }
        ],

        socialLink : ['https://www.facebook.com/', 'https://twitter.com/', 'https://in.pinterest.com/', 'https://www.instagram.com/'],
    }
  return (
    <section>
          <div className="w-full mx-auto p-8 md:px-16 py-8 bg-black-900 "> 
          <div className="gap-10 w-full grid grid-cols-1 md:grid-cols-3 xmd:grid-cols-7 ">
  {/* ABOUT SHOPERY */}
  <div className="col-span-1 xmd:col-span-2 flex flex-col gap-1 p-1">
    {/* Logo */}
    <img src={FooterData.shopery.logo} alt="Shopery Logo" className="" />

    {/* Paragraph */}
    <p className="text-gray-500 text-base font-normal">{FooterData.shopery.para}</p>

    {/* Contact Information */}
    <div className="flex flex-row gap-4 items-center text-sm lg:text-base">
      <span className="text-white-200 underline decoration-green-600 decoration-3 underline-offset-8 font-medium">
        {FooterData.shopery.number}
      </span>
      <p className="text-gray-500 font-medium">or</p>
      <span className="text-white-200 underline decoration-green-600 decoration-3 underline-offset-8 font-medium">
        {FooterData.shopery.email}
      </span>
    </div>
  </div>

  {/* MY ACCOUNT */}
  <div className="col-span-1 md:col-span-1 flex flex-col gap-4 p-2">
    <h2 className="text-white-200 text-lg font-medium">{FooterData.myAccount.title}</h2>
    <ul className="text-gray-500 text-base flex flex-col gap-2">
      {FooterData.myAccount.para.map((item, index) => (
        <li key={index} className="hover:text-white-200 cursor-pointer">{item}</li>
      ))}
    </ul>
  </div>

  {/* HELPS */}
  <div className="col-span-1 md:col-span-1 flex flex-col gap-4 p-2">
    <h2 className="text-white-200 text-lg font-medium">{FooterData.helps.title}</h2>
    <ul className="text-gray-500 text-base flex flex-col gap-2">
      {FooterData.helps.para.map((item, index) => (
        <li key={index} className="hover:text-white-200 cursor-pointer">{item}</li>
      ))}
    </ul>
  </div>

  {/* PROXY */}
  <div className="col-span-1 md:col-span-1 flex flex-col gap-4 p-2">
    <h2 className="text-white-200 text-lg font-medium">{FooterData.proxy.title}</h2>
    <ul className="text-gray-500 text-base flex flex-col gap-2">
      {FooterData.proxy.para.map((item, index) => (
        <li key={index} className="hover:text-white-200 cursor-pointer">{item}</li>
      ))}
    </ul>
  </div>

  {/* CATEGORIES */}
  <div className="col-span-1 md:col-span-1 flex flex-col gap-4 p-2">
    <h2 className="text-white-200 text-lg font-medium">{FooterData.categories.title}</h2>
    <ul className="text-gray-500 text-base flex flex-col gap-2">
      {FooterData.categories.para.map((item, index) => (
        <li key={index} className="hover:text-white-200 cursor-pointer">{item}</li>
      ))}
    </ul>
  </div>

  {/* BOTTOM */}
  <hr className="col-span-1 md:col-span-3 xmd:col-span-7 w-full border-t border-gray-500 my-4" />
</div>

            <div className="grid grid-cols-1 md:grid-cols-2 xmd:grid-cols-7 gap-2 md:gap-2 items-center">
  {/* MESSAGE */}
  <div className="col-span-1 md:col-span-1 xmd:col-span-3">
    <h2 className="text-gray-500 text-xs xlg:text-base">
      Ecobazar eCommerce © 2021. All Rights Reserved
    </h2>
  </div>

  {/* ICON */}
  <div className="col-span-1 md:col-span-2 xmd:col-span-4 flex flex-row gap-1 xlg:gap-3 items-center justify-end"> {/* Adjusted col-span */}
    <FaCcApplePay className="text-white-200 h-[45px] w-[45px] xmd:h-[60px] xmd:w-[65px] xlg:h-[50px] xlg:w-[55px] cursor-pointer" />
    <FaCcVisa className="text-white-200 h-[45px] w-[45px] xmd:h-[60px] xmd:w-[65px] xlg:h-[50px] xlg:w-[55px]" />
    <FaCcDiscover className="text-white-200 h-[45px] w-[45px] xmd:h-[60px] xmd:w-[65px] xlg:h-[50px] xlg:w-[55px]" />
    <FaCcMastercard className="text-white-200 h-[45px] w-[45px] xmd:h-[60px] xmd:w-[65px] xlg:h-[50px] xlg:w-[55px]" />

    <div className="flex flex-col gap-0 text-white-200 p-1 border-2 border-gray-600 rounded-md">
      <div className="flex flex-row items-center"> {/* Fixed align-items to items-center */}
        <FaLock className="h-[10px] w-[10px] xlg:h-[15px] xlg:w-[15px]" />
        <span className="text-xs xlg:text-sm font-medium">Secure</span>
      </div>
      <div>
        <p className="text-xs xlg:text-base font-semibold">Payment</p>
      </div>
    </div>
  </div>
</div>


            </div>
                  
              
             
    </section>
  )
}

export default Footer1;
