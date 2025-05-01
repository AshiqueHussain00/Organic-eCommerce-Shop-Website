import React from 'react'
import { FaApple, FaLock } from 'react-icons/fa'
import { IoLogoGooglePlaystore } from 'react-icons/io5'
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter, FaHeart, FaEye } from 'react-icons/fa'; // Icons from react-icons
// import { FaCcApplePay , FaCcVisa ,FaCcDiscover ,FaCcMastercard , } from 'react-icons/fa6';
import Img1 from '../../../assets/home2/ApplePay.svg'
// import VisaImg from '../../../assets/home2/visa.svg'
import DiscoverImg from '../../../assets/home2/Discover.svg'
import MastercardImg from '../../../assets/home2/Mastercard.svg'
import LockImg from '../../../assets/home2/Cart.svg'
import { useNavigate ,NavLink } from 'react-router-dom';

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
            number: '(219) 555-0114',
            email: 'Proxy@gmail.com'
        },


        myAccount: {
            title: 'My Account',
            para: [{title: 'My Account' , path: '/account/dashboard'},
                {title:'Order History' , path: '/account/order-history'},
                {title:'Shopping Cart' , path: '/shopping-cart'},
                {title:'Wishlist' , path:'/wishlist'},
                {title:'Settings',path:'/account/settings'}]

        },


        helps: {
            title: 'Helps',
            para: [{title:'Contact' , path:'/contact-us'},
                {title:'Faqs' , path:''},
                {title:'Terms & Condition',path:''},
                {title:'Privacy Policy',path:''}]

        },

        proxy: {
            title: 'Proxy',
            para: [{title:'About' , path:'/about-us'},
                {title:'Shop' ,path:'/shop1'},
                {title:'Product',path:'/shop2'},
                {title:'Product Details' , path:'/product/Fruits/f9'},
                {title:'Track Order' , path:'/account/dashboard'}]
        },



        socialMedia: [
            { facebook: FaFacebookF },
            { instagram: FaInstagram },
            { pinterest: FaPinterestP },
            { twitter: FaTwitter }
        ],

        socialLink: ['https://www.facebook.com/', 'https://twitter.com/', 'https://in.pinterest.com/', 'https://www.instagram.com/'],
    }

    const navigate = useNavigate();
    
    const handleClick = (page)=>{
       navigate(page);
    }

    const images = [post1, post2, post3, post4, post5, post6];
    const instagramUrl = "https://www.instagram.com/yourprofile";
    return (
        <section>
            <div className="w-full px-6 pt-16 pb-8 mx-auto md:px-16 bg-black-900">

                <div className="grid grid-cols-1 gap-2 md:grid-cols-3 xmd:grid-cols-7 md:gap-2">

                    {/* ABOUT SHOPERY */}
                    <div className="flex flex-col col-span-1 gap-2 p-2 xmd:col-span-2 md:gap-4">
                        <h2 className="text-lg font-medium text-white-200">{FooterData.shopery.title}</h2>
                        <p className="text-base font-normal text-gray-500">{FooterData.shopery.para}</p>
                        <div className="flex flex-col gap-2 text-sm xxl:flex-row lg:text-base">
                            <span className="font-medium underline text-white-200 decoration-green-600 decoration-3 underline-offset-8">{FooterData.shopery.number}</span>
                            <p className="font-medium text-gray-500">or</p>
                            <span className="font-medium underline text-white-200 decoration-green-600 decoration-3 underline-offset-8"><a href="https://mail.google.com">{FooterData.shopery.email}</a></span>
                        </div>
                    </div>

                    {/* MY ACCOUNT */}
                    <div className="flex flex-col col-span-1 gap-1 p-2 md:col-span-1 md:gap-4">
                        <h2 className="text-lg font-medium text-white-200">{FooterData.myAccount.title}</h2>
                        <ul className="flex flex-col gap-2 text-base text-gray-500">
                            {FooterData.myAccount.para.map((item, index) => (<li key={index} onClick={()=>{handleClick(item.path)}} className="cursor-pointer hover:text-white-200">{item.title}</li>))}
                        </ul>
                    </div>

                    {/* HELPS */}
                    <div className="flex flex-col col-span-1 gap-1 p-2 md:col-span-1 md:gap-4">
                        <h2 className="text-lg font-medium text-white-200">{FooterData.helps.title}</h2>
                        <ul className="flex flex-col gap-2 text-base text-gray-500">
                            {FooterData.helps.para.map((item, index) => (<li key={index} onClick={()=>{handleClick(item.path)}} className="cursor-pointer hover:text-white-200">{item.title}</li>))}
                        </ul>
                    </div>

                    {/* PROXY */}

                    <div className="flex flex-col col-span-1 gap-1 p-2 md:col-span-1 md:gap-4">
                        <h2 className="text-lg font-medium text-white-200">{FooterData.proxy.title}</h2>
                        <ul className="flex flex-col gap-2 text-base text-gray-500">
                            {FooterData.proxy.para.map((item, index) => (<li key={index} onClick={()=>{handleClick(item.path)}}className="cursor-pointer hover:text-white-200">{item.title}</li>))}
                        </ul>
                    </div>

                    {/* DOWNLOAD */}
                    <div className="flex flex-col gap-2 p-2 md:col-span-2 md:gap-4">
                        <h2 className="text-lg font-medium text-white-200 whitespace-nowrap">Instagram</h2>

                        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-3">
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
                                        className="object-cover w-full h-full transition-opacity duration-300 rounded-md group-hover:opacity-70"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                        <FaInstagram className="text-2xl text-white-100 " />
                                    </div>
                                </a>
                            ))}

                      

                        </div>
                    </div>
                    {/* BOTTOM */}

                    <hr className="w-full col-span-1 my-2 border-t border-gray-500 md:col-span-3 xmd:col-span-7" />
                </div>

                <div className="grid items-center grid-cols-1 gap-2 md:grid-cols-3 xmd:grid-cols-7 md:gap-2">
                    {/* ICON */}
                    <div className="flex justify-center col-span-1 gap-3 md:col-span-1 xmd:col-span-2">

                        {FooterData.socialMedia.map((social, index) => {
                            const Icon = Object.values(social)[0];
                            return (
                                <a
                                    href={FooterData.socialLink[index]}
                                    key={index}
                                    target="_blank"
                                    rel="noopener noreferrer"

                                >
                                    <Icon className="h-[25px] w-[25px] xlg:h-[30px] xlg:w-[30px] text-gray-600 transition hover:bg-primary hover:text-white-200 p-1 hover:rounded-full" />
                                </a>
                            );
                        })}


                    </div>



                    {/* MESSAGE */}
                    <div className="col-span-1 md:col-span-1 xmd:col-span-3 ">
                        <h2 className="text-xs text-center text-gray-500 xlg:text-sm">Ecobazar eCommerce © 2021.All Rights Reserved</h2>
                    </div>
                    {/* ICON */}

                    <div className="flex flex-row items-center justify-center col-span-1 gap-1 md:col-span-1 xmd:col-span-2 xlg:gap-3 ">

                        <img src={Img1} alt="Apple Pay" className="w-10 h-auto" />
                        {/* <img src={VisaImg} alt="Visa" className="w-10 h-auto" /> */}
                        <img src={DiscoverImg} alt="Discover" className="w-10 h-auto" />
                        <img src={MastercardImg} alt="Mastercard" className="w-10 h-auto" />
                        <img src={LockImg} alt="Lock" className="w-10 h-auto" />


                    </div>
                </div>
            </div>



        </section>
    )
}

export default Footer4;
