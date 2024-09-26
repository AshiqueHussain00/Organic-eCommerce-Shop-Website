import React from 'react'
import { MdDashboard } from "react-icons/md";
import { VscHistory } from "react-icons/vsc";
import { GoHeart } from "react-icons/go";
import { BsHandbag } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { Link } from 'react-router-dom';
import SidebardLink from './SidebardLink';



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
        path: "/cart",
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

const Sidebar = () => {
    return (
        <div className='w-full py-4 flex flex-col gap-y-3 '>

            <h1 className='py-3 pl-3 pr-2 text-xl font-meidum leading-8'>
                Navigation
            </h1>

            <div className='flex flex-col gap-y-2'>

                {
                    navigation.map((nav) => {



                        return (
                            <SidebardLink nav={nav} key={nav.id}

                            />
                        )

                    })
                }

            </div>



        </div>
    )
}

export default Sidebar