import React from 'react'
import { HeaderBottomData } from '../../data/common/HeaderBottomData';


function HeroBottom4() {
    return (
   
       <div data-aos="fade-up" className='w-full absolute z-50 bottom-[-220px] xsm:bottom-[-200px] md:bottom-[-140px] xlg:bottom-[-100px]'>
            <div className="w-11/12 mx-auto xmd:w-10/12 bg-white-200 text-black-800 rounded-xl ">

                <ul className="grid md:grid-cols-4 grid-cols-2   shadow-xl rounded-xl">
                    {HeaderBottomData.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <li
                                key={index}
                                className={`flex flex-col items-center justify-center xxl:items-start gap-3 border px-2 xs:px-4 xl:px-8 py-10 transition-all duration-200 hover:bg-primary  focus:text-white-200 cursor-pointer group
                                    ${
                                        index === 0 ? "md:rounded-l-xl rounded-tl-xl" : ""
                                    
                                    }
                                     ${
                                        index === 1 ? "md:rounded-none rounded-tr-xl" : ""
                                    
                                    }
                                     ${
                                        index === 2 ? "md:rounded-none rounded-bl-xl" : ""
                                    
                                    }

                                     ${
                                        index === 3 ? "md:rounded-r-xl rounded-br-xl" : ""
                                    }

                                    `}
                            >
                                <div className="flex items-center justify-center w-16 h-16 transition-all duration-300 ease-in-out border-2 rounded-full bg-gray-50 ">
                                    {/* Render icon as a component */}
                                    <IconComponent className="text-2xl transition-colors duration-300 ease-in-out text-primary " />
                                </div>

                                <div className="text-center xxl:text-start flex flex-col gap-y-2">
                                    <h4 className="items-center text-sm md:text-[16px] font-semibold text-gray-800 sm:text-base lg:text-lg group-hover:text-white-200">{item.title}</h4>
                                    <p className="text-xs font-normal text-gray-500 sm:text-sm md:text-base group-hover:text-white-200">{item.description}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>


            </div>

            </div>
       



    )
}

export default HeroBottom4
