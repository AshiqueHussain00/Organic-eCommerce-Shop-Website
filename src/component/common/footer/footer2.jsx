import React from 'react'
import { FaApple, FaLock } from 'react-icons/fa'
import { IoLogoGooglePlaystore } from 'react-icons/io5'
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter, FaHeart, FaEye } from 'react-icons/fa'; // Icons from react-icons
import { FaCcDiscover, FaCcMastercard, } from 'react-icons/fa6';
import { FaApplePay } from "react-icons/fa";
import { SiVisa } from "react-icons/si";
import Logo from '../../../assets/home2/Bazarlogo.svg'
import Img1 from '../../../assets/home2/image1.svg'
// import VisaImg from '../../../assets/home2/image2.svg'
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
            <div className="w-full px-6 py-8 pt-16 pb-8 mx-auto bg-gray-100 md:px-16"> {/* Set background to white */}
                <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-3 xmd:grid-cols-7 md:gap-2">
                    {/* ABOUT SHOPERY */}
                    <div className="flex flex-col col-span-1 gap-2 p-2 text-black xmd:col-span-2 md:gap-1"> {/* Set text to black */}
                        <img src={FooterData.shopery.logo} alt="Shopery Logo" className="w-32" />
                        <p className="text-base font-normal text-black">{FooterData.shopery.para}</p>
                        <div className="flex flex-row items-center gap-4 text-sm lg:text-base">
                            <span className="font-medium underline text-black-900 decoration-green-600 decoration-3 underline-offset-8">
                                {FooterData.shopery.number}
                            </span>
                            <p className="font-medium text-gray-500">or</p>
                            <span className="font-medium underline text-black-900 decoration-green-600 decoration-3 underline-offset-8">
                            <a href="https://mail.google.com">{FooterData.shopery.email}</a>
                            </span>
                        </div>
                    </div>

                    {/* MY ACCOUNT */}
                    <div className="flex flex-col col-span-1 gap-1 p-2 text-black md:col-span-1 md:gap-4"> {/* Set text to black */}
                        <h2 className="text-lg font-medium text-black">{FooterData.myAccount.title}</h2>
                        <ul className="flex flex-col gap-2 text-base text-black">
                            {FooterData.myAccount.para.map((item, index) => (
                                <li key={index} onClick={() => { handleClick(item.path) }} className="cursor-pointer hover:text-black">{item.title}</li>
                            ))}
                        </ul>
                    </div>

                    {/* HELPS */}
                    <div className="flex flex-col col-span-1 gap-1 p-2 text-black md:col-span-1 md:gap-4"> {/* Set text to black */}
                        <h2 className="text-lg font-medium text-black">{FooterData.helps.title}</h2>
                        <ul className="flex flex-col gap-2 text-base text-black">
                            {FooterData.helps.para.map((item, index) => (
                                <li key={index} onClick={() => { handleClick(item.path) }} className="cursor-pointer hover:text-black">{item.title}</li>
                            ))}
                        </ul>
                    </div>

                    {/* PROXY */}
                    <div className="flex flex-col col-span-1 gap-1 p-2 text-black md:col-span-1 md:gap-4"> {/* Set text to black */}
                        <h2 className="text-lg font-medium text-black">{FooterData.proxy.title}</h2>
                        <ul className="flex flex-col gap-2 text-base text-black">
                            {FooterData.proxy.para.map((item, index) => (
                                <li key={index} onClick={() => { handleClick(item.path) }} className="cursor-pointer hover:text-black">{item.title}</li>
                            ))}
                        </ul>
                    </div>

                    {/* DOWNLOAD */}
                    <div className="flex flex-col gap-2 p-2 md:col-span-2 md:gap-4 text-black-900"> {/* Set text to black */}
                        <h2 className="text-lg font-medium text-black-900 whitespace-nowrap">Download our Mobile App</h2>
                        <div className="flex flex-col gap-2 xxs:flex-row">
                            <a href='https://apps.apple.com' className="flex flex-row items-center justify-center gap-2 px-1 py-2 rounded-md bg-white-100">
                                <div className="flex">
                                    <FaApple className="h-[45px] w-[45px] lg:h-[30px] lg:w-[30px] xl:h-[40px] xl:w-[40px]" style={{ color: 'black' }} />
                                </div>
                                <div className="flex flex-col">
                                    <p className="font-normal text-gray-500 text-md lg:text-sm whitespace-nowrap">Download on the</p>
                                    <p className="text-lg font-medium text-black">App Store</p>
                                </div>
                            </a>

                            <a href='https://play.google.com' className="flex flex-row items-center justify-center gap-1 px-2 py-2 rounded-md bg-white-100">
                                <div className="flex">
                                    <IoLogoGooglePlaystore className="h-[40px] w-[40px] lg:h-[25px] lg:w-[25px] xl:h-[40px] xl:w-[40px]" style={{ color: 'black' }} />
                                </div>
                                <div className="flex flex-col">
                                    <p className="font-normal text-gray-500 text-md lg:text-sm whitespace-nowrap">Download on the</p>
                                    <p className="text-lg font-medium text-black">Google Play</p>
                                </div>
                            </a>
                        </div>
                    </div>




                </div>
            </div>


            <div className="w-full px-4 py-4 mx-auto sm:px-6 lg:px-8">
                <div className="grid items-center grid-cols-1 gap-4 md:grid-cols-1 xmd:grid-cols-3">
                    {/* MESSAGE on the left side */}
                    <div className="flex justify-start col-span-1 md:col-span-1 xmd:col-span-2">
                        <h2 className="text-xs text-black xlg:text-base">
                            Ecobazar eCommerce © 2021. All Rights Reserved
                        </h2>
                    </div>

                    {/* IMAGES on the right side */}
                    <div className="flex items-center justify-end col-span-1 space-x-2 md:col-span-1 xmd:col-span-1">
                        <img src={Img1} alt="Apple Pay" />
                        {/* <img src={VisaImg} alt="Visa" /> */}
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
