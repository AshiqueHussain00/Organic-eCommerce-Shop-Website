import React, { useEffect } from 'react'
import { FiX } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";
import { VscHistory } from "react-icons/vsc";
import { GoHeart } from "react-icons/go";
import { BsHandbag } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import SidebardLink from './SidebardLink';
import { useLocation } from 'react-router-dom';

const navigation = [
    {
        id: 1,
        icon: MdDashboard,
        title: "Dashboard",
        path: "/account/dashboard",
    },
    {
        id: 2,
        icon: VscHistory,
        title: "Order History",
        path: "/account/order-history",
    },
    {
        id: 3,
        icon: GoHeart,
        title: "Wishlist",
        path: "/wishlist",
    },
    {
        id: 4,
        icon: BsHandbag,
        title: "Shopping Cart",
        path: "//shopping-cart",
    },
    {
        id: 5,
        icon: IoSettingsOutline,
        title: "Settings",
        path: "/account/settings",
    },
    {
        id: 6,
        icon: CiLogout,
        title: "Logout",
        path: "#",
    },

]



const ResponsiveSidebar = ({ sideOpen, setSideOpen, setIsLogout }) => {

   const location = useLocation();

   useEffect(()=> {

    setSideOpen(false)

   }, [location.pathname])

    return (
        <div
        
            className={`absolute border top-[-46px] left-0 h-[500px] rounded-lg sm:w-[340px] xs:w-[300px] w-[280px] bg-white-100 text-gray-900 shadow-lg transform transition-transform text-base duration-500 ease-in-out z-[5000] ${sideOpen ? "-translate-x-5" : "translate-x-[-500px]"
                }`}
                
        >
            {/* Cross button to close sidebar */}
            <div className='flex justify-end'>

            
            <button
                className="px-8 py-4 text-gray-800 w-max hover:text-gray-500"
                onClick={() => setSideOpen(false)}
            >
                <FiX size={28} />
            </button>
            </div>


            <div className='flex flex-col w-full py-2 text-gray-900 gap-y-3 ' >

                <h1 className='pl-6 pr-2 text-base leading-8 lg:text-xl smd:text-lg font-meidum'>
                    Navigation
                </h1>

                <div className='flex flex-col gap-y-2'>

                    {
                        navigation.map((nav) => {



                            return (
                                <SidebardLink nav={nav} key={nav.id} setIsLogout={setIsLogout} 

                                />
                            )

                        })
                    }

                </div>



            </div>

        </div>
    );
}

export default ResponsiveSidebar