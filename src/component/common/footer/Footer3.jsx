import React from 'react'
import { FaApple } from 'react-icons/fa'
import { IoLogoGooglePlaystore } from 'react-icons/io5'

function Footer3() {
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
        }
    }
  return (
    <section>
         <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 xmd:grid-cols-7 gap-2 md:gap-2 p-6 md:p-16  bg-black-900">
                
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
            <div className="md:col-span-1 flex flex-col gap-1 md:gap-4 p-2">
                <h2 className="text-white-200 text-lg font-medium">{FooterData.myAccount.title}</h2>
                <ul className="text-gray-500 text-base flex flex-col gap-2">
                    {FooterData.myAccount.para.map((item , index) => (<li key={index} className="hover:text-white-200 cursor-pointer">{item}</li>))}
                </ul>
            </div>

                 {/* HELPS */}
            <div className="md:col-span-1 flex flex-col gap-1 md:gap-4 p-2">
                <h2 className="text-white-200 text-lg font-medium">{FooterData.helps.title}</h2>
                <ul className="text-gray-500  text-base flex flex-col gap-2">
                    {FooterData.helps.para.map((item , index) => (<li key={index} className="hover:text-white-200 cursor-pointer">{item}</li>))}
                </ul>
            </div>
                
                {/* PROXY */}
            
            <div className="md:col-span-1 flex flex-col gap-1 md:gap-4 p-2">
                <h2 className="text-white-200 text-lg font-medium">{FooterData.proxy.title}</h2>
                <ul className="text-gray-500 text-base  flex flex-col gap-2">
                    {FooterData.proxy.para.map((item , index) => (<li key={index} className="hover:text-white-200 cursor-pointer">{item}</li>))}
                </ul>
            </div>

                  {/* DOWNLOAD */}
            <div className="md:col-span-2 flex flex-col gap-2 md:gap-4 p-2">
                <h2 className="text-white-200 text-lg font-medium whitespace-nowrap">Download our Mobile App</h2>
                <div className="flex flex-col xxs:flex-row gap-2">

                <div className="flex flex-row bg-gray-700 px-1 py-2 rounded-md gap-2 justify-center">
                        <div className="flex">
                            <FaApple className="h-[45px] w-[45px] lg:h-[25px] lg:w-[25px]" style = {{color: 'white'}}/>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-gray-500 text-md lg:text-sm font-normal whitespace-nowrap">Download on the</p>
                            <p className="text-white-200 text-lg   font-medium">App Store</p>
                        </div>
                    </div>
                    
                    <div className="flex flex-row  bg-gray-700 px-1 py-1 rounded-md gap-1 justify-center">
                        <div className="flex">
                            <IoLogoGooglePlaystore className="h-[40px] w-[40px] lg:h-[25px] lg:w-[25px] xl:h-[40px] xl:w-[40px]" style = {{color: 'white'}}/>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-gray-500 text-md lg:text-sm xl: font-normal whitespace-nowrap">Download on the</p>
                            <p className="text-white-200 text-lg  font-medium">Google play</p>
                        </div>
                    </div>

                   
                </div>
            </div>
             
         </div>
    </section>
  )
}

export default Footer3
