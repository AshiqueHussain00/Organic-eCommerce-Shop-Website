
import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import './home4Common.css'

const bannerData = [
    {
        id: 1,
        name: "Milk",
        class: "milk-bg",
        title: "100% Fresh Cow Milk",
        desc: "Starting at $14.99"
    },
    {
        id: 2,
        name: "Drinks",
        class: "drink-bg",
        title: "Drink Sale",
        desc: "Water & Soft Drink"
    },
    {
        id: 3,
        name: "Breakfast",
        class: "breakfast-bg",
        title: "100% Organic",
        desc: "Quick Breakfast"
    },
]

const Banner = () => {
    return (
        <section  className='w-full relative  bg-white-100 py-20'>

            {/* --------- container ------------ */}

            <div data-aos="fade-right" className=' w-11/12 xmd:w-10/12 mx-auto   grid justify-items-center grid-cols-1 gap-y-6 mmd:grid-cols-3 gap-x-2 lg:gap-x-4 xl:gap-x-6 '>

                {
                    bannerData.map((card) => (

                        <div key={card.id} className={`${card.class} flex rounded-lg w-[95%] xsm:w-[85%] xs:w-[75%] sm:w-[60%] mmd:w-full 
                         ${card.id === 2 ? "justify-end " : "justify-start"
                            }
                        `}>
                            <div key={card.id} className={` flex flex-col gap-y-4 h-[255px] mmd:pl-6 xs:pl-12 pl-10 xlg:pr-4 xmd:pr-1 pr-2  py-8 w-[65%] xxl:w-[55%] b
                          
                        `}>
                                <p className={`
                            ${card.name.toLowerCase() === "milk" ? "xlg:text-3xl text-2xl text-white-100 font-semibold" : "text-sm font-medium text-gray-900"

                                    }
                                `}>
                                    {card.title}
                                </p>

                                <p className={`
                            ${card.name.toLowerCase() === "milk" ? "text-sm font-medium text-white-100" : "xlg:text-3xl text-2xl  font-semibold"

                                    }
                                `}>
                                    {card.desc}
                                </p>
                                <div>
                                    <button className='flex gap-x-2 mmd:gap-x-1 lg:gap-x-3 items-center bg-white-100 text-primary transition-all duration-200  hover:text-white-100 hover:bg-primary lg:px-5 mmd:px-3 px-4 py-2 rounded-3xl'>

                                        Shop Now
                                        <FaArrowRight />

                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>

        </section>
    )
}

export default Banner