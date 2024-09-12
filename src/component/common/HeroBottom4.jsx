import React from 'react'
import { HeaderBottomData } from '../../data/common/HeaderBottomData';

function HeroBottom4() {
    return (
        <section>
            <div className="w-11/12 mx-auto xmd:w-9/12 bg-white-200 text-black-800">

                <ul className="flex flex-wrap items-center justify-center gap-4 p-4 border rounded-lg shadow-xl xxl:w-full sm:gap-6 md:gap-0">
                    {HeaderBottomData.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <li
                                key={index}
                                className={`flex flex-col items-center justify-center xxl:items-start gap-3 p-4 hover:bg-primary hover:rounded-md focus:text-white-200 cursor-pointer group`}
                            >
                                <div className="flex items-center justify-center w-16 h-16 transition-all duration-300 ease-in-out border-2 rounded-full bg-gray-50 ">
                                    {/* Render icon as a component */}
                                    <IconComponent className="text-2xl transition-colors duration-300 ease-in-out text-primary " />
                                </div>

                                <div className="text-center xxl:text-start">
                                    <h4 className="items-center text-sm font-semibold text-gray-800 sm:text-base md:text-lg group-hover:text-white-200">{item.title}</h4>
                                    <p className="text-xs font-normal text-gray-500 sm:text-sm md:text-base group-hover:text-white-200">{item.description}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>


            </div>
        </section>



    )
}

export default HeroBottom4
