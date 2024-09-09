import React from 'react'
import { HeaderBottomData } from '../../data/home3/HeaderBottomData';

function HeaderBottom() {
  return (
    <section>
         <div className="w-10/12 mx-auto  bg-white-200 text-black-800">
                 <ul className="flex items-center flex-wrap justify-center p-4 gap-4 sm:gap-6">
                    {HeaderBottomData.map((item) => (
                       <li key = {item.id} className="flex flex-col items-center justify-center xxl:flex-row gap-3 p-2 hover:bg-primary hover:rounded-md   focus:text-white-200 cursor-pointer  group">
                           <div>
                                <img src = {item.image}  className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 group-hover:bg-transparent"></img>
                           </div>

                           <div className="text-center">
                              <h4 className="text-gray-800 text-sm sm:text-base item-center font-semibold group-hover:text-white-200">{item.title}</h4>
                              <p className="text-gray-500 text-xs sm:text-sm font-normal group-hover:text-white-200 ">{item.description}</p>
                           </div>
                       </li>
                    )) }
                 </ul>
         </div>
    </section>
  )
}

export default HeaderBottom;

