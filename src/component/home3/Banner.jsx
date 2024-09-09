import React from 'react'
import {BannerData} from '../../data/home3/BannerData'

function Banner() {
  return (
    <section>
        <div className="w-10/12 xmd:w-11/12 mx-auto bg-white-100">
             <ul className="flex flex-row items-center justify-center gap-6 p-4">
                {BannerData.map((item) => (
                    <li key={item.id} style={{backgroundImage: `url(${item.image})` , backgroundSize:'cover' , width:'400px' , height:'500px' , borderRadius:'8px'}} className="p-6 flex flex-col gap-4">
                       <h3 className={`${item.id !== 3 ? "text-gray-100 font-medium" : "text-black-900 font-semibold"} text-center text-base `}>{item.heading1}</h3>
                       <h3 className={`${item.id !== 3 ? "text-gray-100" : "text-black-900"} text-center text-3xl font-bold`}>{item.heading2}</h3>
                        {item.id === 2 && (
                            <h3 className="text-gray-100 text-center text-lg font-medium">{item.heading3_1}<span className="text-warning ml-2 font-semibold">{item.heading3_2}</span></h3>
                        )}


                        {item.id === 3 && (
                            <h3 className="text-black-900 text-center text-lg font-semibold">{item.heading3_1}<span className="text-yellow p-1 rounded-md font-medium ml-2 bg-black-900">{item.heading3_2}</span></h3>
                        )}

                        <div>
                            <button></button>
                        </div>


                    </li>
                ))}
             </ul>

        </div>
      
    </section>
  )
}

export default Banner
