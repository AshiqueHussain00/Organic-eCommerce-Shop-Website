import React from 'react';
import { HeaderBottomData } from '../../data/home3/HeaderBottomData';

function HeaderBottom() {
  return (
    <section>
      <div className="w-11/12 mx-auto xmd:w-11/12 bg-white-200 text-black-800">
        <ul className="flex flex-wrap items-center justify-center gap-2 p-4 border rounded-lg shadow-xl sm:gap-20">
          {HeaderBottomData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <li
                key={index}
                className="flex flex-col items-center justify-center gap-2 p-2 border-b-4 cursor-pointer border-white-100 xxl:flex-row group hover:border-primary hover:border-b-4"
              >
                <div className="flex items-center justify-center w-16 h-16 transition-all duration-300 ease-in-out bg-gray-100 border-2 rounded-full group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                  {/* Render icon as a component */}
                  <IconComponent className="text-2xl transition-colors duration-300 ease-in-out text-primary group-hover:text-white-100" />
                </div>

                <div className="text-center">
                  <h4 className="text-sm font-semibold text-gray-800 sm:text-base item-center ">
                    {item.title}
                  </h4>
                  <p className="text-xs font-normal text-gray-500 sm:text-sm ">
                    {item.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default HeaderBottom;
