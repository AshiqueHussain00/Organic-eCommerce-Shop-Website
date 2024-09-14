import React from 'react'
import News1 from '../../assets/home4/news1.svg'
import News2 from '../../assets/home4/news2.svg'
import News3 from '../../assets/home4/news3.svg'
import { FaArrowRight } from "react-icons/fa";



const newsData = [
    {
        id: 1,
        img: News1,
        date: '23 JAN',
        heading: "Curabitur porttitor orci eget neque accumsan venenatis.",
        desc: 'Nulla libero lorem, euismod venenatis nibh sed, sodales dictum ex. Etiam nisi augue, malesuada et pulvinar at, posuere eu neque.'

    },
    {
        id: 2,
        img: News2,
        date: '23 JAN',
        heading: "Curabitur porttitor orci eget neque accumsan venenatis.",
        desc: 'Nulla libero lorem, euismod venenatis nibh sed, sodales dictum ex. Etiam nisi augue, malesuada et pulvinar at, posuere eu neque.'

    },

    {
        id: 3,
        img: News3,
        date: '23 JAN',
        heading: "Curabitur porttitor orci eget neque accumsan venenatis.",
        desc: 'Nulla libero lorem, euismod venenatis nibh sed, sodales dictum ex. Etiam nisi augue, malesuada et pulvinar at, posuere eu neque.'

    },


]

const LatestNewsSection = () => {
    return (
        <section className='w-full absolute z-50 bottom-[150px] xs:bottom-[120px] ssm:bottom-[60px] sm:bottom-[100px] xmd:bottom-[140px]  xxl:bottom-[150px] py-4 '>
            <div data-aos="fade-left" className="w-11/12 xmd:w-10/12 mx-auto flex flex-col gap-y-8 items-center">

            <h1 className='text-center text-4xl sm:text-[40px] font-semibold text-gray-900'>Latest News</h1>

                <div className=' w-full xsm:w-[80%] xs:w-[70%] sm:w-[60%] mmd:w-full grid grid-cols-1 mmd:grid-cols-3 gap-x-4 lg:gap-x-6 xl:gap-x-8'>
                    {newsData.map((item, index) => (
                        <div
                            key={index}
                            className="news-item flex flex-col bg-white-100  mx-auto m-4 border p-4 rounded-lg shadow-md group cursor-pointer
          "
                        >
                            <div className="relative">
                                <div className=' overflow-hidden rounded-lg'>

                               
                                <img
                                    src={item.img}
                                    alt={`news-${index}`}
                                    className="w-full object-cover rounded-lg transition-all duration-700  group-hover:scale-110"
                                />
                                 </div>
                                <div className="absolute bg-white-200 bottom-3 left-3 bg-white p-2 w-16 h-auto rounded-md shadow-md">
                                    <div className="flex flex-col items-center">
                                        <span className="text-gray-800 font-bold text-lg">
                                            {item.date.split(' ')[0]}
                                        </span>
                                        <span className="text-gray-600 text-sm">
                                            {item.date.split(' ')[1]}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-y-6  pt-6'>


                                <div className='flex flex-col gap-y-2'>

                                    <h2 className='text-lg font-medium leading-[27px]'>
                                        {item.heading}
                                    </h2>

                                    <p className='text-sm font-normal text-green-gray-scale-500'>
                                        {item.desc}
                                    </p>

                                </div>

                                <button className="read-more-btn flex items-center transition-colors duration-200 text-light-branding-success hover:text-branding-success">
                                    <span className="mr-2"><link rel="stylesheet" href="" />Read More</span>
                                    <FaArrowRight />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default LatestNewsSection