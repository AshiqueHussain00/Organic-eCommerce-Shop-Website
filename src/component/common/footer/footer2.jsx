import React from 'react'
import { FaApple, FaLock } from 'react-icons/fa'
import { IoLogoGooglePlaystore } from 'react-icons/io5'
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter, FaHeart, FaEye } from 'react-icons/fa'; // Icons from react-icons
import {FaCcDiscover ,FaCcMastercard , } from 'react-icons/fa6';
import { FaApplePay } from "react-icons/fa";
import { SiVisa } from "react-icons/si";
import Logo from '../../../assets/common/navbar/Logo.svg'
function Footer2() {
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
                  'Product Details',]
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
    <div className="w-full mx-auto p-6 md:px-16 py-8 bg-gray-100"> {/* Set background to white */}
        <div className="gap-10 w-full grid grid-cols-1 md:grid-cols-3 xmd:grid-cols-7 gap-2 md:gap-2">
            {/* ABOUT SHOPERY */}
            <div className="col-span-1 xmd:col-span-2 flex flex-col gap-2 md:gap-1 p-2 text-black"> {/* Set text to black */}
                <img src={FooterData.shopery.logo} alt="Shopery Logo" className="" />
                <p className="text-black text-base font-normal">{FooterData.shopery.para}</p>
                <div className="flex flex-row gap-4 items-center text-sm lg:text-base">
      <span className="text-black-900 underline decoration-green-600 decoration-3 underline-offset-8 font-medium">
        {FooterData.shopery.number}
      </span>
      <p className="text-gray-500 font-medium">or</p>
      <span className="text-black-900 underline decoration-green-600 decoration-3 underline-offset-8 font-medium">
        {FooterData.shopery.email}
      </span>
    </div>
            </div>

            {/* MY ACCOUNT */}
            <div className="col-span-1 md:col-span-1 flex flex-col gap-1 md:gap-4 p-2 text-black"> {/* Set text to black */}
                <h2 className="text-black text-lg font-medium">{FooterData.myAccount.title}</h2>
                <ul className="text-black text-base flex flex-col gap-2">
                    {FooterData.myAccount.para.map((item, index) => (
                        <li key={index} className="hover:text-black cursor-pointer">{item}</li>
                    ))}
                </ul>
            </div>

            {/* HELPS */}
            <div className="col-span-1 md:col-span-1 flex flex-col gap-1 md:gap-4 p-2 text-black"> {/* Set text to black */}
                <h2 className="text-black text-lg font-medium">{FooterData.helps.title}</h2>
                <ul className="text-black text-base flex flex-col gap-2">
                    {FooterData.helps.para.map((item, index) => (
                        <li key={index} className="hover:text-black cursor-pointer">{item}</li>
                    ))}
                </ul>
            </div>

            {/* PROXY */}
            <div className="col-span-1 md:col-span-1 flex flex-col gap-1 md:gap-4 p-2 text-black"> {/* Set text to black */}
                <h2 className="text-black text-lg font-medium">{FooterData.proxy.title}</h2>
                <ul className="text-black text-base flex flex-col gap-2">
                    {FooterData.proxy.para.map((item, index) => (
                        <li key={index} className="hover:text-black cursor-pointer">{item}</li>
                    ))}
                </ul>
            </div>

            {/* DOWNLOAD */}
            <div className="md:col-span-2 flex flex-col gap-2 md:gap-4 p-2 text-black-900"> {/* Set text to black */}
                <h2 className="text-black-900 text-lg font-medium whitespace-nowrap">Download our Mobile App</h2>
                <div className="flex flex-col xxs:flex-row gap-2">
                    <div className="flex flex-row bg-white-100 px-1 py-2 rounded-md gap-2 justify-center items-center">
                        <div className="flex">
                            <FaApple className="h-[45px] w-[45px] lg:h-[30px] lg:w-[30px] xl:h-[40px] xl:w-[40px]" style={{ color: 'black' }} />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-gray-500 text-md lg:text-sm font-normal whitespace-nowrap">Download on the</p>
                            <p className="text-black text-lg font-medium">App Store</p>
                        </div>
                    </div>

                    <div className="flex flex-row bg-white-100 px-1 py-1 rounded-md gap-1 justify-center items-center">
                        <div className="flex">
                            <IoLogoGooglePlaystore className="h-[40px] w-[40px] lg:h-[25px] lg:w-[25px] xl:h-[40px] xl:w-[40px]" style={{ color: 'black' }} />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-gray-500 text-md lg:text-sm font-normal whitespace-nowrap">Download on the</p>
                            <p className="text-black text-lg font-medium">Google Play</p>
                        </div>
                    </div>
                </div>
            </div>
            


            
        </div>
        </div>


  
        <div className="w-11/12 mx-auto grid grid-cols-1 bg-white md:grid-cols-2 xmd:grid-cols-7 gap-2 md:gap-2 items-center">
        

            {/* MESSAGE */}
            <div className="col-span-1 md:col-span-1 xmd:col-span-3">
                <h2 className="text-black text-xs xlg:text-base">Ecobazar eCommerce © 2021. All Rights Reserved</h2>
            </div>

            <div className="col-span-1 md:col-span-2 xmd:col-span-4 flex flex-row gap-1 xlg:gap-3 items-center justify-end"> {/* Adjusted col-span */}
            <FaApplePay className="bg-white-100 h-[30px] w-[40px] xmd:h-[40px] xmd:w-[50px] xlg:h-[35px] xlg:w-[45px] cursor-pointer  p-1 border-2 border-gray-600 rounded-md" />

    <SiVisa className="text-blue-900 h-[30px] w-[40px] xmd:h-[40px] xmd:w-[50px] xlg:h-[35px] xlg:w-[45px]  p-1 border-2 border-gray-600 rounded-md" />
    <FaCcDiscover className="text-white-900 h-[30px] w-[40px] xmd:h-[40px] xmd:w-[50px] xlg:h-[35px] xlg:w-[45px]" />
   
    <div className="flex flex-col gap-0 text-black-900 p-0.5 border-2 border-gray-600 rounded-md"> {/* Reduced padding */}
  <div className="flex flex-row items-center gap-1"> {/* Added gap to control spacing */}
    <FaLock className="h-[8px] w-[8px] xlg:h-[10px] xlg:w-[10px]" /> {/* Small icon size */}
    <span className="text-xs xlg:text-sm font-medium leading-tight">Secure</span> {/* Reduced line height */}
  </div>
  <div>
    <p className="text-xs xlg:text-sm font-semibold leading-tight">Payment</p> {/* Reduced line height */}
  </div>
</div>


    <FaCcMastercard className="text-black-900 h-[30px] w-[40px] xmd:h-[40px] xmd:w-[50px] xlg:h-[35px] xlg:w-[45px]  p-1 border-2 border-gray-600 rounded-md" />
  </div>
        </div>
        </section>
        )
    }
       
export default Footer2;
