import React from 'react'
import News1 from '../../assets/home4/news1.svg'
import News2 from '../../assets/home4/news2.svg'
import News3 from '../../assets/home4/news3.svg'
import LatestNews from '../common/LatestNews'
import { blogData } from '../../data/common/blogData'
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

                <LatestNews data={blogData}/>
            </div>
            
        </section>
    )
}

export default LatestNewsSection