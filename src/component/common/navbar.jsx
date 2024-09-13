import React, { useState } from 'react';
import { navData } from '../../data/common/navbar-links';
import { FaBars, FaTimes, FaChevronDown, FaShoppingBag, FaRegUser } from 'react-icons/fa';
import { CiSearch, CiLocationOn } from "react-icons/ci";
import { PiPhoneCallLight } from "react-icons/pi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoHeartOutline, IoReorderThreeOutline } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdownId, setOpenDropdownId] = useState(null); // Track open dropdown

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (id) => {
    if (openDropdownId === id) {
      setOpenDropdownId(null); // Close the dropdown if clicked again
    } else {
      setOpenDropdownId(id); // Open the selected dropdown
    }
  };

  return (
    <section className="relative mx-auto">
      <div className="w-11/12 xmd:w-10/12 mt-8 mx-auto xs:max-h-[500px] sm:px-6 lg:px-8">
        <header className="bg-white-100 text-black-800">
          {/* Store Location */}
          <div className="flex items-center justify-between h-6">
            <div className="flex items-center">
              <CiLocationOn size={24} className="mr-2" />
              <span className="hidden sm:inline">Store location: Lincoln-344, Illinois, Chicago, USA</span>
            </div>
            <div className="flex space-x-1">
              {/* Language and Currency Dropdowns */}
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

          {/* Horizontal Line */}
          <hr className="border-t-1 border-gray-200 my-4" />

          {/* Main Navbar */}
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-left">
                <img src="/public/logo.svg" alt="Logo" className="h-10" />
              </div>

              {/* Search Bar */}
              <div className="hidden md:flex flex-grow items-center justify-center space-x-2">
                <div className="p-1 bg-white rounded-md flex border border-sm items-center ">
                  <CiSearch className="text-gray-900 text-3xl mr-2" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full text-black rounded-md focus:outline-none"
                  />
                  <button className="bg-primary h-full px-4 py-2 text-white-100 rounded-md">
                    Search
                  </button>
                </div>
              </div>

              {/* Customer Service & Phone */}
              <div className="hidden sm:flex ml-auto items-right space-x-1">
                <PiPhoneCallLight className="text-5xl" />
                <span className="flex flex-col">
                  <span>Customer Services</span>
                  <a href="tel:+18001234567" className="text-xl">(219) 555-0114</a>
                </span>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button onClick={toggleMenu} aria-label="Toggle menu" className="text-gray-800 focus:outline-none">
                  {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex bg-gray-800 text-white-100 mt-2 h-16">
            <div className="flex items-center justify-between w-full">
              {/* Left-side Links */}
              <div className="flex space-x-4">
                <div className="h-full px-4 py-4 bg-primary">
                  <IoReorderThreeOutline size={34} />
                </div>
                {navData.map((item) => (
                  <div key={item.id} className="group relative">
                    <a
                      href={item.path || '#'}
                      className="px-3 py-6 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-md flex items-center"
                    >
                      {item.title}
                      {item.dropdown && <FaChevronDown className="ml-2" />}
                    </a>
                    {item.dropdown && (
                      <div
                        className={`absolute top-full left-0 mt-4 bg-white-200 text-black-900 border-2 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100 z-50 dropdown-animation
                          ${item.title.toLowerCase() === 'blog' ? 'w-[500px] h-[200px]' : 'w-[150px]'}`}
                      >
                        <div className={`${item.title.toLowerCase() === 'blog' ? 'grid grid-cols-4 gap-1' : ''}`}>
                          {item.dropdown.map((dropdownItem) => (
                            <div key={dropdownItem.id} className="flex items-center mr-4">
                              {item.title.toLowerCase() === 'blog' && (
                                <img
                                  src={dropdownItem.image}
                                  alt={dropdownItem.title}
                                  className="w-24 h-24 object-cover"
                                />
                              )}
                              <span className="ml-2">{dropdownItem.title}</span>
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
          <div className="md:hidden bg-gray-800 text-white-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navData.map((item) => (
                <div key={item.id}>
                  <a
                    href={item.path || '#'}
                    onClick={() => toggleDropdown(item.id)} // Toggle dropdown on click
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 flex justify-between items-center"
                  >
                    {item.title}
                    {item.dropdown && <FaChevronDown />}
                  </a>
                  {item.dropdown && openDropdownId === item.id && (
                    <div className="ml-4">
                      {item.dropdown.map((dropdownItem) => (
                        <a key={dropdownItem.id} href={dropdownItem.path || '#'} className="block px-4 py-2 hover:bg-gray-700">
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
        )}

        </header>
      </div>
    </section>
  );
};

export default Navbar;
