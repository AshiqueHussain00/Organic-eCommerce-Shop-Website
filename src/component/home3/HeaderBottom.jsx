import React from 'react'
import { HeaderBottomData } from '../../data/home3/HeaderBottomData';

function HeaderBottom() {
  return (
    <section>
         <div className="w-10/12 mx-auto  bg-white-100 text-black-800">
                 <ul className="w-full flex items-center justify-center p-4 gap-4">
                    {HeaderBottomData.map((item) => (
                       <li key = {item.id} className="flex flex-row  gap-3 hover:bg-primary">
                           <div>
                                <img src = {item.image} style={{width: '40px', height:'40px'}}></img>
                           </div>

                           <div>
                              <h4 className="text-gray-800 text-base font-semibold">{item.title}</h4>
                              <p className="text-gray-400 text-sm font-normal">{item.description}</p>
                           </div>
                       </li>
                    )) }
                 </ul>
         </div>
    </section>
  )
}

export default HeaderBottom;

