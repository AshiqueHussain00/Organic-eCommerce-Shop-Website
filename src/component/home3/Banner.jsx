import React, { useState, useEffect } from 'react'
import arrow from '../../assets/home3/banner/Arrow.svg'
import { BannerData } from '../../data/home3/BannerData'

function Banner() {

    const [days, setDays] = useState('00');
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');

    const deadline = "September, 11, 2024";

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
            <div className="w-10/12 xmd:w-11/12 mx-auto bg-white-100">
                <ul className="flex flex-row flex-wrap items-center justify-center gap-6 p-2 xxs:p-4">


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
                                <div className="text-gray-100 text-center">
                                    <div className="text-xl sm:text-2xl md:text-3xl font-normal flex justify-center gap-2 sm:gap-4">
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
                                <h3 className="text-gray-100 text-center text-sm sm:text-base md:text-lg font-medium">
                                    {item.heading3_1}
                                    <span className="text-warning ml-1 sm:ml-2 font-semibold">{item.heading3_2}</span>
                                </h3>
                            )}

                            {item.id === 3 && (
                                <h3 className="text-black-900 text-center text-sm sm:text-base md:text-lg font-semibold">
                                    {item.heading3_1}
                                    <span className="text-yellow-50 p-2 rounded-md font-semibold ml-1 sm:ml-2 bg-black-900">
                                        {item.heading3_2}
                                    </span>
                                </h3>
                            )}

                            <div className="flex items-center justify-center mt-4 sm:mt-5 md:mt-6">
                                <button className="flex items-center text-xs sm:text-sm bg-white-100 px-3 py-2 sm:px-5 sm:py-3 rounded-3xl font-bold text-green-600">
                                    Shop Now
                                    <span className="ml-2">
                                        <img src={arrow} alt="arrow" />
                                    </span>
                                </button>
                            </div>
                        </li>
                    ))}


                </ul>

            </div>

        </section>
    )
}

export default Banner
