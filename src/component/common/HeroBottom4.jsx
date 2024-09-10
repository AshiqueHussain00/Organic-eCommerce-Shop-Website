import React from 'react'
import { HeaderBottomData } from '../../data/home3/HeaderBottomData';

function HeroBottom4() {
    return (
        <section>
            <div className="w-full xmd:w-10/12 mx-auto  bg-white-200 text-black-800">

                <ul className="xxl:w-full flex flex-row items-center flex-wrap justify-center p-4 gap-4 sm:gap-6 md:gap-0">
                    {HeaderBottomData.map((item, index) => (
                        <li
                            key={item.id}
                            className={`flex flex-col items-center justify-center xxl:items-start gap-3 p-2 hover:bg-primary hover:rounded-md focus:text-white-200 cursor-pointer group`}
                        >
                            <div>
                                <img src={item.image} className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 group-hover:bg-transparent" alt={item.title}></img>
                            </div>

                            <div className="text-center xxl:text-start">
                                <h4 className="text-gray-800 text-sm sm:text-base md:text-lg items-center font-semibold group-hover:text-white-200">{item.title}</h4>
                                <p className="text-gray-500 text-xs sm:text-sm md:text-base font-normal group-hover:text-white-200">{item.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>


            </div>
        </section>



    )
}

export default HeroBottom4
