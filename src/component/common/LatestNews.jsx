import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IoPersonOutline } from "react-icons/io5";
import { GoTag } from "react-icons/go";
import { LiaCommentsSolid } from "react-icons/lia";

const LatestNews = ({ data }) => {
  return (
    <div className='w-full mx-auto xsm:w-[80%] xs:w-[70%] sm:w-[60%] mmd:w-full grid grid-cols-1 mmd:grid-cols-3 gap-x-4 lg:gap-x-6 xl:gap-x-8'>
      {data.map((item, index) => (
        <div
          data-aos="fade-right"
          key={index}
          className="news-item bg-white-200 flex flex-col mx-auto m-4 border p-4 rounded-lg shadow-md group"
        >
          <div className="relative">
            <div className='overflow-hidden rounded-lg'>
              <img
                src={item.img}
                alt={`news-${index}`}
                className="w-full h-48 object-cover rounded-lg transition-all duration-700 group-hover:scale-110"
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

          {/* Corrected the Link to use the item's id */}
          <Link
            to={`/blog/${item.id}`} // Dynamic path to the SingleBlog component
            className="mt-2 text-primary flex items-center group-hover:text-secondary group-hover:font-[700] transition-all"
          >
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
};

// LatestNews.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired, // Added id as required
//       img: PropTypes.string.isRequired,
//       date: PropTypes.string.isRequired,
//       category: PropTypes.string.isRequired,
//       postedBy: PropTypes.string.isRequired,
//       comments: PropTypes.number.isRequired,
//       p: PropTypes.string.isRequired, // Paragraph content
//     })
//   ).isRequired,
// };

export default LatestNews;
