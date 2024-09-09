import React from 'react'
import { HeaderBottomData } from '../../data/home3/HeaderBottomData';

function HeaderBottom() {
  return (
    <section>
         <div className="w-10/12 mx-auto  bg-white-200 text-black-800">
                 <ul className="flex items-center justify-center p-4 gap-5">
                    {HeaderBottomData.map((item) => (
                       <li key = {item.id} className="flex flex-row gap-3 p-2 hover:bg-primary hover:rounded-md  focus:text-white-200 cursor-pointer  group">
                           <div>
                                <img src = {item.image} style={{width: '45px', height:'45px'}} className="group-hover:bg-transparent"></img>
                           </div>

                           <div className="">
                              <h4 className="text-gray-800 text-base font-semibold group-hover:text-white-200">{item.title}</h4>
                              <p className="text-gray-400 text-sm font-normal group-hover:text-white-200 ">{item.description}</p>
                           </div>
                       </li>
                    )) }
                 </ul>
         </div>
    </section>
  )
}

export default HeaderBottom;

