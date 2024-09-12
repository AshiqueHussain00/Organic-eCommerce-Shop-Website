import React from 'react';
import PropTypes from 'prop-types';
import { IoPersonOutline } from "react-icons/io5";
import { GoTag } from "react-icons/go";
import { LiaCommentsSolid } from "react-icons/lia";
import { FaArrowRight } from "react-icons/fa";

const LatestNews = ({ data }) => {
  return (
    <div className="latest-news w-10/12   mx-auto  flex flex-wrap ">
      {data.map((item, index) => (
        <div
          key={index}
          className="news-item flex flex-col  mx-auto m-4 border p-4 rounded-lg shadow-md
          xs:w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 xxl:w-1/4 space-x-1"
        >
          <div className="relative">
            <div className=' overflow-hidden rounded-lg'>


              <img
                src={item.img}
                alt={`news-${index}`}
                className="w-full object-cover rounded-lg transition-all duration-700  group-hover:scale-110"
              />
            </div> <img
              src={item.img}
              alt={`news-${index}`}
              className="w-full object-cover rounded-lg"
            />
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
          <div className="news-details mt-2 flex justify-between items-center text-sm text-gray-700">
            <div className="flex items-center space-x-2">
              <div className="category flex items-center text-gray-500">
                <GoTag className="text-gray-500 mr-1" />
                <span className="font-bold">{item.category}</span>
              </div>
              <div className="posted-by flex items-center">
                <IoPersonOutline className="text-gray-500 mr-1" />
                <span>By {item.postedBy}</span>
              </div>
              <div className="comments flex items-center">
                <LiaCommentsSolid className="text-gray-500 mr-1" />
                <span>{item.comments} Comments</span>
              </div>
            </div>
          </div>
          <p className="paragraph mt-2 text-gray-600 font-poppins font-semibold hover:text-[rgb(0,178,7)]">
            {item.p}
          </p>
          <button className="read-more-btn mt-4 flex items-center text-green-600 hover:text-[rgb(0,178,7)]">
            <span className="mr-2"><link rel="stylesheet" href="" />Read More</span>
            <FaArrowRight />
          </button>
        </div>
      ))}
    </div>
  );
};

LatestNews.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      postedBy: PropTypes.string.isRequired,
      comments: PropTypes.number.isRequired,
      p: PropTypes.string.isRequired, // Added p for paragraph
    })
  ).isRequired,
};

export default LatestNews;
