import React from 'react'
import { FaApple, FaLock } from 'react-icons/fa'
import { IoLogoGooglePlaystore } from 'react-icons/io5'
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter, FaHeart, FaEye } from 'react-icons/fa'; // Icons from react-icons
import { FaCcDiscover, FaCcMastercard, } from 'react-icons/fa6';
import { FaApplePay } from "react-icons/fa";
import { SiVisa } from "react-icons/si";
import Logo from '../../../assets/home2/Bazarlogo.svg'
import Img1 from '../../../assets/home2/image1.svg'
import VisaImg from '../../../assets/home2/image2.svg'
import DiscoverImg from '../../../assets/home2/image3.svg'
import MastercardImg from '../../../assets/home2/image4.svg'
import LockImg from '../../../assets/home2/image5.svg'
import { useNavigate } from 'react-router-dom';
function Footer2() {
    const FooterData = {
        shopery: {
            logo: Logo,
            para: 'Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec',
            number: '(219) 555-0114',
            email: 'Proxy@gmail.com'
        },

        myAccount: {
            title: 'My Account',
            para: [{ title: 'My Account', path: '/account/dashboard' },
            { title: 'Order History', path: '/account/order-history' },
            { title: 'Shopping Cart', path: '/shopping-cart' },
            { title: 'Wishlist', path: '/wishlist' },
            { title: 'Settings', path: '/account/settings' }]

        },

        helps: {
            title: 'Helps',
            para: [{ title: 'Contact', path: '/contact-us' },
            { title: 'Faqs', path: '' },
            { title: 'Terms & Condition', path: '' },
            { title: 'Privacy Policy', path: '' }]

        },

        proxy: {
            title: 'Proxy',
            para: [{ title: 'About', path: '/about-us' },
            { title: 'Shop', path: '/shop1' },
            { title: 'Product', path: '/shop2' },
            { title: 'Product Details', path: '/product/Fruits/f9' },
            { title: 'Track Order', path: '/account/dashboard' }]
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
    const handleClick = (page) => {
        navigate(page);
    }
    return (
        <section>
            <div className="w-full mx-auto px-6 pt-16 pb-8 md:px-16 py-8 bg-gray-100"> {/* Set background to white */}
                <div className="gap-10 w-full grid grid-cols-1 md:grid-cols-3 xmd:grid-cols-7  md:gap-2">
                    {/* ABOUT SHOPERY */}
                    <div className="col-span-1 xmd:col-span-2 flex flex-col gap-2 md:gap-1 p-2 text-black"> {/* Set text to black */}
                        <img src={FooterData.shopery.logo} alt="Shopery Logo" className="w-32" />
                        <p className="text-black text-base font-normal">{FooterData.shopery.para}</p>
                        <div className="flex flex-row gap-4 items-center text-sm lg:text-base">
                            <span className="text-black-900 underline decoration-green-600 decoration-3 underline-offset-8 font-medium">
                                {FooterData.shopery.number}
                            </span>
                            <p className="text-gray-500 font-medium">or</p>
                            <span className="text-black-900 underline decoration-green-600 decoration-3 underline-offset-8 font-medium">
                            <a href="https://mail.google.com">{FooterData.shopery.email}</a>
                            </span>
                        </div>
                    </div>

                    {/* MY ACCOUNT */}
                    <div className="col-span-1 md:col-span-1 flex flex-col gap-1 md:gap-4 p-2 text-black"> {/* Set text to black */}
                        <h2 className="text-black text-lg font-medium">{FooterData.myAccount.title}</h2>
                        <ul className="text-black text-base flex flex-col gap-2">
                            {FooterData.myAccount.para.map((item, index) => (
                                <li key={index} onClick={() => { handleClick(item.path) }} className="hover:text-black cursor-pointer">{item.title}</li>
                            ))}
                        </ul>
                    </div>

                    {/* HELPS */}
                    <div className="col-span-1 md:col-span-1 flex flex-col gap-1 md:gap-4 p-2 text-black"> {/* Set text to black */}
                        <h2 className="text-black text-lg font-medium">{FooterData.helps.title}</h2>
                        <ul className="text-black text-base flex flex-col gap-2">
                            {FooterData.helps.para.map((item, index) => (
                                <li key={index} onClick={() => { handleClick(item.path) }} className="hover:text-black cursor-pointer">{item.title}</li>
                            ))}
                        </ul>
                    </div>

                    {/* PROXY */}
                    <div className="col-span-1 md:col-span-1 flex flex-col gap-1 md:gap-4 p-2 text-black"> {/* Set text to black */}
                        <h2 className="text-black text-lg font-medium">{FooterData.proxy.title}</h2>
                        <ul className="text-black text-base flex flex-col gap-2">
                            {FooterData.proxy.para.map((item, index) => (
                                <li key={index} onClick={() => { handleClick(item.path) }} className="hover:text-black cursor-pointer">{item.title}</li>
                            ))}
                        </ul>
                    </div>

                    {/* DOWNLOAD */}
                    <div className="md:col-span-2 flex flex-col gap-2 md:gap-4 p-2 text-black-900"> {/* Set text to black */}
                        <h2 className="text-black-900 text-lg font-medium whitespace-nowrap">Download our Mobile App</h2>
                        <div className="flex flex-col xxs:flex-row gap-2">
                            <a href='https://apps.apple.com' className="flex flex-row bg-white-100 px-1 py-2 rounded-md gap-2 justify-center items-center">
                                <div className="flex">
                                    <FaApple className="h-[45px] w-[45px] lg:h-[30px] lg:w-[30px] xl:h-[40px] xl:w-[40px]" style={{ color: 'black' }} />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-gray-500 text-md lg:text-sm font-normal whitespace-nowrap">Download on the</p>
                                    <p className="text-black text-lg font-medium">App Store</p>
                                </div>
                            </a>

                            <a href='https://play.google.com' className="flex flex-row bg-white-100 px-2 py-2 rounded-md gap-1 justify-center items-center">
                                <div className="flex">
                                    <IoLogoGooglePlaystore className="h-[40px] w-[40px] lg:h-[25px] lg:w-[25px] xl:h-[40px] xl:w-[40px]" style={{ color: 'black' }} />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-gray-500 text-md lg:text-sm font-normal whitespace-nowrap">Download on the</p>
                                    <p className="text-black text-lg font-medium">Google Play</p>
                                </div>
                            </a>
                        </div>
                    </div>




                </div>
            </div>


            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="grid grid-cols-1 md:grid-cols-1 xmd:grid-cols-3 gap-4 items-center">
                    {/* MESSAGE on the left side */}
                    <div className="col-span-1 md:col-span-1 xmd:col-span-2 flex justify-start">
                        <h2 className="text-black text-xs xlg:text-base">
                            Ecobazar eCommerce © 2021. All Rights Reserved
                        </h2>
                    </div>

                    {/* IMAGES on the right side */}
                    <div className="col-span-1 md:col-span-1 xmd:col-span-1 flex items-center justify-end space-x-2">
                        <img src={Img1} alt="Apple Pay" />
                        <img src={VisaImg} alt="Visa" />
                        <img src={DiscoverImg} alt="Discover" />
                        <img src={MastercardImg} alt="Mastercard" />
                        <img src={LockImg} alt="Lock" />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Footer2;
