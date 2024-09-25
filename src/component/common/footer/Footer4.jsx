import React from 'react'
import { FaApple, FaLock } from 'react-icons/fa'
import { IoLogoGooglePlaystore } from 'react-icons/io5'
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter, FaHeart, FaEye } from 'react-icons/fa'; // Icons from react-icons
import { FaCcApplePay , FaCcVisa ,FaCcDiscover ,FaCcMastercard , } from 'react-icons/fa6';
import { FiLock } from 'react-icons/fi';

import post1 from '../../../assets/common/followinstagram/post1.svg'
import post2 from '../../../assets/common/followinstagram/post2.svg'
import post3 from '../../../assets/common/followinstagram/post3.svg'
import post4 from '../../../assets/common/followinstagram/post4.svg'
import post5 from '../../../assets/common/followinstagram/post5.svg'
import post6 from '../../../assets/common/followinstagram/post6.svg'
function Footer4() {
    const FooterData = {
        shopery: {
            title: 'About Shopery',
            para: 'Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec',
            number:'(219) 555-0114',
            email : 'Proxy@gmail.com'
        },

        myAccount: {
            title:'My Account',
            para: ['My Account',
                   'Order History',
                   'Shopping Cart',
                   'Wishlist',
                'Settings']

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
                  'Product Details',
                   'Track Order']
        },


        socialMedia : [
            { facebook: FaFacebookF },
            { instagram: FaInstagram },
            { pinterest: FaPinterestP },
            { twitter: FaTwitter }
        ],

        socialLink : ['https://www.facebook.com/', 'https://twitter.com/', 'https://in.pinterest.com/', 'https://www.instagram.com/'],
    }

    const images = [post1, post2, post3, post4, post5, post6];
    const instagramUrl="https://www.instagram.com/yourprofile";
  return (
    <section>
          <div className="w-full mx-auto p-6 md:px-16 py-8 bg-black-900"> 

         <div className=" grid grid-cols-1 md:grid-cols-3 xmd:grid-cols-7 gap-2 md:gap-2">
                
                 {/* ABOUT SHOPERY */}
            <div className="col-span-1 xmd:col-span-2 flex flex-col gap-2 md:gap-4  p-2">
                <h2 className="text-white-200 text-lg font-medium">{FooterData.shopery.title}</h2>
                <p className="text-gray-500 text-base font-normal">{FooterData.shopery.para}</p>
                <div className="flex flex-col xxl:flex-row gap-2 text-sm lg:text-base">
                    <span className=" text-white-200 underline decoration-green-600 decoration-3 underline-offset-8 font-medium ">{FooterData.shopery.number}</span>
                    <p className="text-gray-500 font-medium">or</p>
                    <span className=" text-white-200 underline decoration-green-600 decoration-3 underline-offset-8 font-medium">{FooterData.shopery.email}</span>
                </div> 
            </div>

               {/* MY ACCOUNT */}
            <div className="col-span-1 md:col-span-1 flex flex-col gap-1 md:gap-4 p-2">
                <h2 className="text-white-200 text-lg font-medium">{FooterData.myAccount.title}</h2>
                <ul className="text-gray-500 text-base flex flex-col gap-2">
                    {FooterData.myAccount.para.map((item , index) => (<li key={index} className="hover:text-white-200 cursor-pointer">{item}</li>))}
                </ul>
            </div>

                 {/* HELPS */}
            <div className="col-span-1 md:col-span-1 flex flex-col gap-1 md:gap-4 p-2">
                <h2 className="text-white-200 text-lg font-medium">{FooterData.helps.title}</h2>
                <ul className="text-gray-500  text-base flex flex-col gap-2">
                    {FooterData.helps.para.map((item , index) => (<li key={index} className="hover:text-white-200 cursor-pointer">{item}</li>))}
                </ul>
            </div>
                
                {/* PROXY */}
            
            <div className="col-span-1 md:col-span-1 flex flex-col gap-1 md:gap-4 p-2">
                <h2 className="text-white-200 text-lg font-medium">{FooterData.proxy.title}</h2>
                <ul className="text-gray-500 text-base  flex flex-col gap-2">
                    {FooterData.proxy.para.map((item , index) => (<li key={index} className="hover:text-white-200 cursor-pointer">{item}</li>))}
                </ul>
            </div>

                  {/* DOWNLOAD */}
            <div className="md:col-span-2 flex flex-col gap-2 md:gap-4 p-2">
                <h2 className="text-white-200 text-lg font-medium whitespace-nowrap">Instagram</h2>
               
                <div className="grid gap-2 grid-cols-2  md:grid-cols-3 lg:grid-cols-3">
          {images.map((image, index) => (
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="relative overflow-hidden rounded-lg group"
              aria-label={`View Instagram pic ${index + 1} on Instagram`}
              data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}  // Alternate AOS animation direction
            >
              <img
                src={image}
                alt={`Instagram pic ${index + 1}`}
                className="object-cover md:w-[110px] md:h-[85px] xmd:w-[90px] xmd:h-[80px] transition-opacity duration-300 group-hover:opacity-70"
              />
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <FaInstagram className="text-2xl text-white-100" />
              </div>
            </a>
          ))}
        </div>
            </div>
                                                           {/* BOTTOM */}
                       
                        <hr className="col-span-1 md:col-span-3 xmd:col-span-7 w-full border-t border-gray-500 my-4" />
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-3 xmd:grid-cols-7 gap-2 md:gap-2 items-center">
                                       {/* ICON */}
              <div className="col-span-1 md:col-span-1 xmd:col-span-2  flex  gap-3  justify-center">
               
               {  FooterData.socialMedia.map((social, index) => {
                               const Icon = Object.values(social)[0];
                                 return (
                                     <a
                                         href={FooterData.socialLink[index]}
                                         key={index}
                                         target="_blank"
                                         rel="noopener noreferrer"
                                         
                                     >
                                         <Icon className="h-[30px] w-[30px] xmd:h-[25px] xmd:w-[25px] xlg:h-[30px] xlg:w-[30px] text-gray-600 transition hover:bg-primary hover:text-white-200 p-1 hover:rounded-full" />
                                     </a>
                                 );
                             })}
                 
 
               </div>   


 
                               {/* MESSAGE */}
             <div className="col-span-1 md:col-span-1 xmd:col-span-3">
                 <h2 className="text-gray-500 text-xs xlg:text-base ">Ecobazar eCommerce © 2021.All Rights Reserved</h2>
             </div>
                                {/* ICON */}
             
             <div className="col-span-1 md:col-span-1 xmd:col-span-2 flex flex-row  gap-1 xlg:gap-3 items-center justify-center ">
                 <FaCcApplePay className=" text-white-200  h-[45px] w-[45px] xmd:h-[60px] xmd:w-[65px] xlg:h-[50px] xlg:w-[55px] cursor-pointer"/>
                 <FaCcVisa className=" text-white-200  h-[45px] w-[45px] xmd:h-[60px] xmd:w-[65px] xlg:h-[50px] xlg:w-[55px]"/>
                 <FaCcDiscover className=" text-white-200 h-[45px] w-[45px] xmd:h-[60px] xmd:w-[65px] xlg:h-[50px] xlg:w-[55px]"/>
                 <FaCcMastercard className=" text-white-200 h-[45px] w-[45px] xmd:h-[60px] xmd:w-[65px] xlg:h-[50px] xlg:w-[55px]"/>
                 <div>
                 <div className="flex flex-col gap-0 text-white-200  p-1 border-2 border-gray-600 rounded-md ">
                      <div className="flex flex-row align-items">
                         <FaLock className="h-[10px] w-[10px] xlg:h-[15px] xlg:w-[15px]"/><span className="text-xs xlg:text-sm font-medium">Secure</span>
                      </div>
                      <div>
                         <p className="text-xs xlg:text-base font-semibold">Payment</p>
                      </div>
                 </div>
                 </div>
                
             </div>
             </div>
            </div>
                  
              
             
    </section>
  )
}

export default Footer4;
