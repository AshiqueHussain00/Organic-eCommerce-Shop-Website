import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/common/category';

const Category = () => {
  return (
    <div data-aos="fade-up" className='grid w-full grid-cols-2 xlg:grid-cols-6 mmd:grid-cols-5 md:grid-cols-4 xs:grid-cols-3 gap-y-6 xl:gap-x-6 gap-x-3'>
      {
        categories.map((category) => (
          <div key={category.id}>
            {/* Added Link here */}
            <Link to={category.path}>
              <div className='flex flex-col items-center px-2 py-4 transition-all duration-200 border border-gray-100 rounded-lg gap-y-4 xl:px-3 group hover:scale-90'>
                <div>
                  <img src={category.image} alt={category.title} />
                </div>
                <p className='text-sm xmd:text-[16px] xxl:text-lg text-gray-900 leading-[27px] font-medium transition-all duration-200 text-center'>
                  {category.title}
                </p>
              </div>
            </Link>
          </div>
        ))
      }
    </div>
  );
}

export default Category;
