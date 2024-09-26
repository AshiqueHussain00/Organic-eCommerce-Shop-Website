import React from 'react'
import ErrorImage from '../../assets/error/ErrorImage.svg';
import { NavLink } from 'react-router-dom';
import BreadCrumbs from '../common/BreadCrumbs';
function Error404() {
    return (
        <section> 
              <BreadCrumbs/>
            <div className="w-10/12 mx-auto p-6">
                <div className="flex flex-col gap-4 xmd:gap-2 justify-center items-center">
                    <div className="">
                        <img src={ErrorImage} className="object-contain h-[200px] md:h-[400px] w-[500px]"></img>
                    </div>
                    <div className="w-full xmd:w-[60%] flex flex-col text-center">
                    <h2 className="text-black-900 text-2xl md:text-4xl font-bold">Oops! page not found</h2>
                    <p className="text-xs md:text-base xmd:text-lg text-gray-600">Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. Maecenas sagittis tortor at metus mollis</p>
                    </div>

                    <div>
                    <NavLink to="/" className="text-white-200 text-base md:text-lg bg-light-branding-success p-2 rounded-full">Back to Home</NavLink>
                    </div>
                    
                </div>
            </div>

        </section>
    )
}

export default Error404
