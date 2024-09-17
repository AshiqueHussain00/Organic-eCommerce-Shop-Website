import React, { useState } from 'react';
import { navData } from '../../data/common/navbar-links';
import { FaBars, FaTimes, FaChevronDown, FaShoppingBag, FaRegUser } from 'react-icons/fa';
import { CiSearch, CiLocationOn } from "react-icons/ci";
import { PiPhoneCallLight } from "react-icons/pi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoHeartOutline, IoReorderThreeOutline } from "react-icons/io5";
import { allCategoryDropdown } from '../../data/common/navbar-links';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/common/navbar/logo.svg'
import { Link } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();
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
    <section className="relative w-full mx-auto">
      <div className=" mt-8 mx-auto xs:max-h-[500px] ">
        <header className="bg-white-100 text-black-800  ">
          {/* Store Location */}
          <div className="flex items-center justify-between h-6 sm:px-6 lg:px-8 mt-3">

            <div className="flex items-center">
              <CiLocationOn size={24} className="mr-2" />
              <span className="hidden sm:inline">Store location: Lincoln-344, Illinois, Chicago, USA</span>
            </div>


            <div className="flex  gap-x-3 ">
              {/* Language and Currency Dropdowns */}
              <div className="relative">
                <select className="px-2  bg-white-100 ">
                  <option value="en">Eng</option>
                  <option value="hn">Hin</option>
                </select>
              </div>
              <div className="relative">
                <select className="px-2 bg-white-100">
                  <option value="usd">USD</option>
                  <option value="inr">INR</option>
                </select>
              </div>
            </div>

          </div>

          {/* Horizontal Line */}
          <hr className="my-4 border-gray-200 border-t-1" />

          {/* Main Navbar */}
          <div className="px-4 sm:px-6 lg:px-8  ">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-left">
                <img src={Logo} alt="Logo" className="h-10" />
              </div>

              {/* Search Bar */}
              <div className="items-center justify-center flex-grow hidden space-x-2 md:flex">
                <div className="flex items-center p-1 bg-white border rounded-md border-sm ">
                  <CiSearch className="mr-2 text-3xl text-gray-900" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full text-black rounded-md focus:outline-none"
                  />
                  <button className="h-full px-4 py-2 rounded-md bg-primary text-white-100">
                    Search
                  </button>
                </div>
              </div>

              {/* Customer Service & Phone */}
              <div className="hidden ml-auto space-x-1 sm:flex items-right">
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

          {/* Desktop Menu  -------- 3rd row -- */}
          <nav className="hidden  mt-2 bg-gray-800 lg:flex text-white-100 sm:px-6 lg:px-8 ">

            <div className="flex items-center justify-between w-full ">
              {/* Left-side Links */}
              <div className="flex justify-between">

                <div className="flex space-x-4">
                  {/* ----------- all category -------- */}
                  <div
                    className="relative group h-full  ">


                    <div className="  flex items-center ">
                      <span className='px-4 py-6 bg-primary '>
                        <IoReorderThreeOutline className='text-3xl' />
                      </span>


                      <span className='px-12 py-6 bg-gray-700 flex gap-x-5 items-center tracking-wide'>
                        All Categories
                        <FaChevronDown />
                      </span>
                    </div>

                    <div className='  right-0 left-0 absolute  z-[999] overflow-hidden  h-0 group-hover:h-auto'>

                      <div className='border mt-4 bg-white-100'>



                        {
                          allCategoryDropdown.map((item, index) => {
                            const IconComponent = item.icon;
                            return (

                              <Link key={index} className={
                                ` cursor-pointer flex gap-x-3 text-gray-500 items-center px-3 transition-all duration-200 hover:text-white-100 group hover:bg-primary
          ${item.title.toLowerCase() === "view all category" ? "border" : ""
                                }
        `
                              } onClick={() => navigate(`${item.path}`)}>
                                <span className='text-3xl  transition-all duration-200 py-3   '>
                                  <IconComponent />
                                </span>
                                <p className='transition-all duration-200 py-3 w-full text-black-900 hover:text-white-100 '
                                >{item.title}</p>
                              </Link>
                            )
                          })
                        }

                      </div>
                    </div>





                  </div>

                  {/* ---------- all navbar links -------------- */}

                  {navData.map((item) => (
                    <div key={item.id} className="relative group flex items-center ">
                      {
                        item.dropdown ? (
                          <p

                            className="flex items-center cursor-pointer  px-3 py-4  font-medium rounded-md hover:bg-gray-700 "
                          >
                            {item.title}
                            <FaChevronDown className="ml-2" />
                          </p>
                        ) : (
                          <Link to={item.path} className="flex items-center cursor-pointer  px-3 py-4  font-medium rounded-md hover:bg-gray-700 ">
                            {item.title}
                          </Link>
                        )
                      }

                      {item.dropdown && (
                        <div
                          className={`absolute top-full left-0 mt-4 bg-white-200 text-black-900 border-2 p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100 z-10
        ${item.title.toLowerCase() === 'blog' ? 'w-[500px] h-[200px]' : 'w-[150px]'}`}
                        >
                          <div className={`${item.title.toLowerCase() === 'blog' ? 'grid grid-cols-4 gap-1' : ''}`}>
                            {item.dropdown.map((dropdownItem) => (
                              <div key={dropdownItem.id} className="flex items-center mr-4">
                                {item.title.toLowerCase() === 'blog' && (
                                  <Link to="/">
                                    <img
                                      src={dropdownItem.image}
                                      alt={dropdownItem.title}
                                      className="object-cover w-24 h-24"
                                    />
                                  </Link>
                                )}
                                <Link to={dropdownItem.path} className="ml-1 bg-red-300">{dropdownItem.title}</Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

              </div>


              {/* Right-side Icons */}
              <div className="flex space-x-4">
                <a href="/wishlist" className="p-2 text-white rounded-full hover:bg-gray-700">
                  <IoHeartOutline size={24} />
                </a>
                <a href="/cart" className="p-2 text-white rounded-full hover:bg-gray-700">
                  <HiOutlineShoppingBag size={24} />
                </a>
                <a href="/account" className="p-2 text-white rounded-full hover:bg-gray-700">
                  <FaRegUser size={24} />
                </a>
              </div>
            </div>
          </nav>

          {/* Mobile Menu */}
          {isOpen && (
  <div className="bg-gray-800 md:hidden text-white-100">
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      {/* All Categories Dropdown */}
      <div className="relative group h-full">
      
        

          <span className="px-2 py-2 items-center ">
            All Categories
            
          </span>
          
       

        {/* All Categories Dropdown Menu */}
        <div className={`right-0 left-0 absolute z-[999] overflow-hidden h-0 group-hover:h-auto max-h-[500px]`}>
          <div className="border mt-4 bg-white-100">
            {allCategoryDropdown.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={index}
                  className={`cursor-pointer flex gap-x-3 text-gray-500 items-center px-3 transition-all duration-200 hover:text-white-100 group hover:bg-primary
                    ${item.title.toLowerCase() === "view all category" ? "border" : ""}`}
                  onClick={() => navigate(`${item.path}`)}
                >
                  <span className="text-xl transition-all duration-200 py-3">
                    <IconComponent />
                  </span>
                  <p className="transition-all duration-200 py-3 w-full text-black-900 hover:text-white-100">
                    {item.title}
                  
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Other Navbar Links */}
      {navData.map((item) => (
        <div key={item.id}>
          <a
            href={item.path || '#'}
            onClick={() => toggleDropdown(item.id)} // Toggle dropdown on click
            className="flex items-center justify-between block px-3 py-2 text-base font-medium rounded-md hover:bg-gray-700"
          >
            {item.title}
            {item.dropdown && <FaChevronDown />}
          </a>
          
          {item.dropdown && openDropdownId === item.id && (
            <div className="ml-4">
              {item.dropdown.map((dropdownItem) => (
                <a key={dropdownItem.id} href={dropdownItem.path || '#'} className="block px-4 py-2 hover:bg-gray-700">
                  {/* Check if the item contains an image */}
                  {dropdownItem.image && (
                    <img
                      src={dropdownItem.image}
                      alt={dropdownItem.title}
                      className="w-30 h-30 object-cover rounded-md" // Ensure the image is visible and responsive
                    />
                  )}
                  {dropdownItem.title}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
</div>
          )}

        </header>
      </div>
    </section>
  );
};

export default Navbar;
