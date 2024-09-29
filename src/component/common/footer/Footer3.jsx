import React from 'react'
import { FaApple, FaLock } from 'react-icons/fa'
import { IoLogoGooglePlaystore } from 'react-icons/io5'
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter, FaHeart, FaEye } from 'react-icons/fa'; // Icons from react-icons
import Img1 from '../../../assets/home2/ApplePay.svg'
import VisaImg from '../../../assets/home2/visa.svg'
import DiscoverImg from '../../../assets/home2/discover.svg'
import MastercardImg from '../../../assets/home2/mastercard.svg'
import LockImg from '../../../assets/home2/cart.svg'
import { useNavigate } from 'react-router-dom';
function Footer3() {
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
        
    //Navigation Functionality
    const navigate = useNavigate();

    const handleClick = (page)=>{
         navigate(page);
    }
    return (
        <section>
            <div className="w-full mx-auto pb-8 py-16 md:px-16 bg-black-900">

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
                            {FooterData.myAccount.para.map((item, index) => (<li key={index} onClick = {()=>{handleClick(item.path)}}  className="hover:text-white-200 cursor-pointer">{item.title}</li>))}
                        </ul>
                    </div>

                    {/* HELPS */}
                    <div className="col-span-1 md:col-span-1 flex flex-col gap-1 md:gap-4 p-2">
                        <h2 className="text-white-200 text-lg font-medium">{FooterData.helps.title}</h2>
                        <ul className="text-gray-500  text-base flex flex-col gap-2">
                            {FooterData.helps.para.map((item, index) => (<li key={index} onClick={()=>{handleClick(item.path)}} className="hover:text-white-200 cursor-pointer">{item.title}</li>))}
                        </ul>
                    </div>

                    {/* PROXY */}

                    <div className="col-span-1 md:col-span-1 flex flex-col gap-1 md:gap-4 p-2">
                        <h2 className="text-white-200 text-lg font-medium">{FooterData.proxy.title}</h2>
                        <ul className="text-gray-500 text-base  flex flex-col gap-2">
                            {FooterData.proxy.para.map((item, index) => (<li key={index} onClick={()=>{handleClick(item.path)}} className="hover:text-white-200 cursor-pointer">{item.title}</li>))}
                        </ul>
                    </div>

                    {/* DOWNLOAD */}
                    <div className="md:col-span-2 flex flex-col gap-2 md:gap-4 p-2">
                        <h2 className="text-white-200 text-lg font-medium whitespace-nowrap">Download our Mobile App</h2>
                        <div className="flex flex-col xxs:flex-row gap-2">

                            <div className="flex flex-row bg-gray-700 px-1 py-2 rounded-md gap-2 justify-center items-center">
                                <div className="flex">
                                    <FaApple className="h-[45px] w-[45px] lg:h-[30px] lg:w-[30px] xl:h-[40px] xl:w-[40px]" style={{ color: 'white' }} />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-gray-500 text-md lg:text-sm font-normal whitespace-nowrap">Download on the</p>
                                    <p className="text-white-200 text-lg   font-medium">App Store</p>
                                </div>
                            </div>

                            <div className="flex flex-row  bg-gray-700 px-1 py-1 rounded-md gap-1 justify-center items-center">
                                <div className="flex">
                                    <IoLogoGooglePlaystore className="h-[40px] w-[40px] lg:h-[25px] lg:w-[25px] xl:h-[40px] xl:w-[40px]" style={{ color: 'white' }} />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-gray-500 text-md lg:text-sm xl: font-normal whitespace-nowrap">Download on the</p>
                                    <p className="text-white-200 text-lg  font-medium">Google play</p>
                                </div>
                            </div>

                        </div>

                    </div>
                    {/* BOTTOM */}

                    <hr className="col-span-1 md:col-span-3 xmd:col-span-7 w-full border-t border-gray-500 my-2" />
                </div>

                <div className=" grid grid-cols-1 md:grid-cols-3 xmd:grid-cols-7 gap-2 md:gap-2 items-center">
                    {/* ICON */}
                    <div className="col-span-1 md:col-span-1 xmd:col-span-2  flex  gap-3  justify-center">

                        {FooterData.socialMedia.map((social, index) => {
                            const Icon = Object.values(social)[0];
                            return (
                                <a
                                    href={FooterData.socialLink[index]}
                                    key={index}
                                    target="_blank"
                                    rel="noopener noreferrer"

                                >
                                    <Icon className="h-[25px] w-[25px]  xlg:h-[30px] xlg:w-[30px] text-gray-600 transition hover:bg-primary hover:text-white-200 p-1 hover:rounded-full" />
                                </a>
                            );
                        })}


                    </div>



                    {/* MESSAGE */}
                    <div className="col-span-1 md:col-span-1 xmd:col-span-3">
                        <h2 className="text-gray-500 text-xs xlg:text-sm  text-center">Ecobazar eCommerce © 2021.All Rights Reserved</h2>
                    </div>
                    {/* ICON */}

                    <div className="col-span-1 md:col-span-1 xmd:col-span-2 flex flex-row  gap-1 xlg:gap-3 items-center justify-center ">

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

export default Footer3;
