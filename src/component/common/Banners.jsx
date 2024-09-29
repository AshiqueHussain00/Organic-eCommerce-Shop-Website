import React, { useState, useEffect } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { BannerData } from '../../data/common/BannerData'
import { Link } from 'react-router-dom';

function Banners() {

    const [days, setDays] = useState('00');
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');

    const deadline = "October, 02, 2024";

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();

        setDays(String(Math.floor(time / (1000 * 60 * 60 * 24))).padStart(2, '0'));
        setHours(String(Math.floor((time / (1000 * 60 * 60)) % 24)).padStart(2, '0'));
        setMinutes(String(Math.floor((time / 1000 / 60) % 60)).padStart(2, '0'));
        setSeconds(String(Math.floor((time / 1000) % 60)).padStart(2, '0'));
    };
    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <section>
            <div className="w-10/12 pt-5 pb-10 mx-auto xmd:w-11/12 bg-white-100">
                <ul data-aos="fade-left" className="flex flex-row flex-wrap items-center justify-center gap-6 p-2 xxs:p-4">


                    {BannerData.map((item) => (
                        <li
                            key={item.id}
                            style={{
                                backgroundImage: `url(${item.image})`,
                                backgroundSize: 'cover',
                                borderRadius: '8px',
                            }}
                            className="p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 w-full xxs:w-[350px]  sm:w-[400px] h-[350px] xxs:h-[375px] sm:h-[475px] md:h-[500px] rounded-md"
                        >
                            <h3 className={`${item.id !== 3 ? "text-gray-100 font-medium" : "text-black-900 font-semibold"} text-center text-xs sm:text-sm md:text-base`}>
                                {item.heading1}
                            </h3>
                            <h3 className={`${item.id !== 3 ? "text-gray-100" : "text-black-900"} text-center text-lg sm:text-2xl md:text-3xl font-bold`}>
                                {item.heading2}
                            </h3>

                            {item.id === 1 && (
                                <div className="text-center text-gray-100">
                                    <div className="flex justify-center gap-2 text-xl font-normal sm:text-2xl md:text-3xl sm:gap-4">
                                        <div className="flex flex-col items-center">
                                            <span>{days}</span>
                                            <span className="text-[10px] sm:text-xs">DAYS</span>
                                        </div>
                                        <span>:</span>
                                        <div className="flex flex-col items-center">
                                            <span>{hours}</span>
                                            <span className="text-[10px] sm:text-xs">HOURS</span>
                                        </div>
                                        <span>:</span>
                                        <div className="flex flex-col items-center">
                                            <span>{minutes}</span>
                                            <span className="text-[10px] sm:text-xs">MINUTES</span>
                                        </div>
                                        <span>:</span>
                                        <div className="flex flex-col items-center">
                                            <span>{seconds}</span>
                                            <span className="text-[10px] sm:text-xs">SECONDS</span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {item.id === 2 && (
                                <h3 className="text-sm font-medium text-center text-gray-100 sm:text-base md:text-lg">
                                    {item.heading3_1}
                                    <span className="ml-1 font-semibold text-warning sm:ml-2">{item.heading3_2}</span>
                                </h3>
                            )}

                            {item.id === 3 && (
                                <h3 className="text-sm font-semibold text-center text-black-900 sm:text-base md:text-lg">
                                    {item.heading3_1}
                                    <span className="p-2 ml-1 font-semibold rounded-md text-yellow-50 sm:ml-2 bg-black-900">
                                        {item.heading3_2}
                                    </span>
                                </h3>
                            )}

                            <div className="flex items-center justify-center mt-4 sm:mt-5 md:mt-6">
                                <Link to='/shop1'>
                                    <button className='flex items-center px-4 py-2 font-semibold transition-all duration-200 gap-x-2 mmd:gap-x-1 lg:gap-x-3 bg-white-100 text-primary hover:text-white-100 hover:bg-primary lg:px-5 mmd:px-3 rounded-3xl'>

                                        Shop Now
                                        <FaArrowRight />

                                    </button>
                                </Link>
                            </div>
                        </li>
                    ))}


                </ul>

            </div>

        </section>
    )
}

export default Banners;
