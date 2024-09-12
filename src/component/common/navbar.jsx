import React, { useState } from 'react';
import { navData } from '../../data/common/navbar-links';
import { FaBars, FaTimes, FaChevronDown,FaShoppingBag, FaRegUser, FaMapMarkerAlt} from 'react-icons/fa';
import { CiSearch } from "react-icons/ci";
import { PiPhoneCallLight } from "react-icons/pi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoHeartOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { IoReorderThreeOutline } from "react-icons/io5";
//import someModule from 'some-module';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Store Location */}
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="flex items-center justify-between h-16">
    <div className="flex items-center">
      <CiLocationOn size={24} className="mr-2" />
      <span>Store location: Lincoln-344, Illinois, Chicago, USA</span>
    </div>
    <div className="flex space-x-4">
      {/* Currency Dropdown */}
     
      {/* Language Dropdown */}
      <div className="relative">
        <select className="px-2 py-1 bg-white-100">
          <option value="en">Eng</option>
          <option value="hn">Hin</option>
          
        </select>
      </div>
       <div className="relative">
        <select className="px-2 py-1 bg-white-100">
          <option value="usd">USD</option>
          <option value="inr">INR</option>
          
        </select>
      </div>
    </div>
  </div>
</div>


      {/* Horizontal Line */}
      <hr className="border-t-1 border-gray-200 my-4" />

      <header className="bg-white-100 text-black-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-left">
              <img src="/public/logo.svg" alt="Logo" className="h-10" />
            </div>

            {/* Search Bar */}
            <div className="flex-grow flex items-center justify-center space-x-2">
           <div className="w-full md:w-96 p-1 bg-white rounded-md flex border border-sm items-center">
                  <CiSearch className="text-gray-900 text-3xl mr-2" />
    
                    {/* Input field */}
                      <input  
                   type="text" 
                 placeholder="Search" 
                    className="w-full text-black rounded-md focus:outline-none" 
              />

            {/* Search Button */}
                 <button className="bg-primary text-white px-4 py-2 rounded-md ">
                  Search
             </button>
                  </div>
                  </div>
                  <span className="ml-auto flex items-right space-x-2 ">
    {/* Phone Icon */}
             <PiPhoneCallLight className="text-5xl" />
                <span className="flex flex-col ">
             <span>Customer Services</span>
                <a href="tel:+18001234567" className="text-xl ">(219) 555-0114</a>
               </span>

          </span>
          

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} aria-label="Toggle menu" className="text-white focus:outline-none">
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="bg-gray-800 text-white-100 mt-4 max-w-7xl mx-auto px-4 sm:px-6 h-16">
      <div className="hidden lg:flex space-x-20 items-center justify-between h-full">
        {/* Left-side links */}
        <div className="flex space-x-6">
          <div className="h-full bg-primary flex items-center justify-center">
            <IoReorderThreeOutline size={34} />
          </div>
          {navData.map((item) => (
            <div key={item.id} className="group relative">
              <a
                href={item.path || '#'}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-md flex items-center"
              >
                {item.title}
                {item.dropdown && <FaChevronDown className="ml-2" />}
              </a>
              {item.dropdown && (
                <div className={`absolute center-0 mt-4 bg-white text-black-900 border-2 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    ${
                    item.title.toLowerCase() === "blog" ? "w-[500px] h-[150px]": "w-[100px]"
                  }
                `}>
                  <div className={`
                  ${
                    item.title.toLowerCase() === "blog" ? "grid grid-cols-4 gap-1 justify-center items-center": ""
                  }
                    `}>
                    {item.dropdown.map((dropdownItem) => (
                      <div key={dropdownItem.id}>
                          
                      {
                        item.title.toLowerCase() === "all categories" ? (<p></p>) : ( <span>   </span>)
                      }
            
                      <a
                      
                        href={dropdownItem.path || '#'}
                        className="flex items-center mt-2"
                      >
                        
                        {
                          item.title.toLowerCase() === "blog" ? (
                        <img
                          src={dropdownItem.image}
                          alt={dropdownItem.title}
                          className="w-24 h-24 object-cover"
                        />
                          ):""
                        }
                        
                        <span>{dropdownItem.title}</span>
                      </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right-side Icons */}
        <div className="flex space-x-4">
          <a href="/wishlist" className="text-white hover:bg-gray-700 p-2 rounded-full">
            <IoHeartOutline size={24} />
          </a>
          <a href="/cart" className="text-white hover:bg-gray-700 p-2 rounded-full">
            <HiOutlineShoppingBag size={24} />
          </a>
          <a href="/account" className="text-white hover:bg-gray-700 p-2 rounded-full">
            <FaRegUser size={24} />
          </a>
        </div>
      </div>
    </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navData.map((item) => (
                <div key={item.id}>
                  <a href={item.path || '#'} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
                    {item.title}
                  </a>
                  {item.dropdown && (
                    <div className="ml-4">
                      {item.dropdown.map((dropdownItem) => (
                        <a key={dropdownItem.id} href={dropdownItem.path || '#'} className="block px-4 py-2 text-white hover:bg-gray-700 flex items-center">
                          {dropdownItem.icon && <span className="mr-2">{dropdownItem.icon}</span>}
                          {dropdownItem.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Icons */}
            <div className="flex justify-center space-x-4 mt-4">
              <a href="/wishlist" className="text-white hover:bg-gray-700 p-2 rounded-full">
                <FaHeart size={24} />
              </a>
              <a href="/cart" className="text-white hover:bg-gray-700 p-2 rounded-full">
                <FaShoppingBag size={24} />
              </a>
              <a href="/account" className="text-white hover:bg-gray-700 p-2 rounded-full">
                <FaUser size={24} />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
