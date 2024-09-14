import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import bestdeal1 from '../../assets/home4/bestdeal1.svg';
import bestdeal2 from '../../assets/home4/bestdeal2.svg';
import { GoArrowRight } from "react-icons/go";

const BestDealSection = () => {
    const [timeLeft, setTimeLeft] = useState({});
    const [showCountdown, setShowCountdown] = useState(false);
    const [isVisible, setIsVisible] = useState(true); // State to handle visibility based on scroll

    const countdownDate = useRef(new Date().getTime() + 1000 * 60 * 60 * 24 * 9);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const distance = countdownDate.current - now;

            if (distance <= 0) {
                setTimeLeft({});
                setShowCountdown(false);
            } else {
                setShowCountdown(true);

                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            }
        };

        calculateTimeLeft();
        const intervalId = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(intervalId);
    }, []);


    return (
        <section
            className='relative w-full bg-gray-50'

        >
            <div data-aos="fade-up"
                className='flex flex-col items-center justify-center w-11/12 gap-10 pt-10 mx-auto xl:flex-row'
                
            >
                <div data-aos="fade-right"
                    className="flex justify-center"
                    
                >
                    <img
                        src={bestdeal1}
                        alt='best Deal'
                    />
                </div>
                <div data-aos="fade-up"
                    className='text-center align-bottom'
                    
                >
                    <h3 className='text-primary'>Best Deal</h3>
                    <h1 className="mt-5 mb-4 text-2xl leading-[40px] md:text-4xl lg:text-3xl text-black-900 font-semibold">
                        Our Special Products Deal of the Month
                    </h1>
                    {showCountdown && (
                        <div
                            className="p-2 text-sm text-center sm:text-2xl text-primary"
                            
                        >
                            <div className="flex justify-center gap-1 sm:gap-4">
                                <div className="flex flex-col gap-y-1 items-center py-3 xs:px-5 px-3 rounded-lg bg-white-100">
                                    <span className='text-3xl'>{
                                        timeLeft.days < 10 ? `0${timeLeft.days}` : `${timeLeft.days}`
                                    }</span>
                                    <span className="text-sm text-green-gray-scale-500 ">Days</span>
                                </div>
                                <span className='pt-5'>:</span>
                                <div className="flex flex-col gap-y-1 items-center py-3 xs:px-5 px-3 rounded-lg bg-white-100">
                                    <span className='text-3xl'>{timeLeft.hours}</span>
                                    <span className="text-sm text-green-gray-scale-500">Hours</span>
                                </div>
                                <span className='pt-5'>:</span>
                                <div className="flex flex-col gap-y-1 items-center py-3 xs:px-5 px-3 rounded-lg bg-white-100">
                                    <span className='text-3xl'>{timeLeft.minutes}</span>
                                    <span className="text-sm text-green-gray-scale-500">Mins</span>
                                </div>
                                <span className='pt-5 '>:</span>
                                <div className="flex flex-col gap-y-1 items-center py-3 xs:px-5 px-3 rounded-lg bg-white-100">
                                    <span className='text-3xl'>{timeLeft.seconds}</span>
                                    <span className="text-sm text-green-gray-scale-500">Secs</span>
                                </div>
                               
                            </div>
                        </div>
                    )}
                     <div className='flex justify-center mt-6'>
                                    <button className="px-4 py-2 flex items-center gap-2 text-white rounded-full shadow-lg transition-all duration-200 text-white-100 bg-light-branding-success hover:bg-branding-success ">
                                        <span className='font-poppins text-white-300'>Shop now</span>
                                        <span className='font-poppins text-white-300'><GoArrowRight /></span>
                                    </button>

                                </div>
                </div>
                <div data-aos="fade-left"
                    className="flex justify-center"
                   
                >
                    <img
                        src={bestdeal2}
                        alt='best Deal'
                    />
                </div>
            </div>
        </section>
    );
};

export default BestDealSection;
