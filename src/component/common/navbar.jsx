import React, { useState } from 'react'
import { useEffect } from 'react'
import { navData } from '../../data/common/navbar-links'
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaShoppingBag,
  FaRegUser
} from 'react-icons/fa'
import { CiSearch, CiLocationOn } from 'react-icons/ci'
import { PiPhoneCallLight } from 'react-icons/pi'
import { HiOutlineShoppingBag } from 'react-icons/hi2'
import { IoHeartOutline, IoReorderThreeOutline } from 'react-icons/io5'
import { allCategoryDropdown } from '../../data/common/navbar-links'
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/common/navbar/logo.svg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion';
import Sidebar from './Sidebar'
// import { FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const cartItems = useSelector(state => state.cart.cart)
  const wishlistItems = useSelector(state => state.wishlist.wishlistItems);

  const navigate = useNavigate()
  const location = useLocation()

  const [isOpen, setIsOpen] = useState(false)
  const [openDropdownId, setOpenDropdownId] = useState(null) // Track open dropdown
  const [isAllCategoriesOpen, setIsAllCategoriesOpen] = useState(false) // For mobile all categories

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleDropdown = id => {
    if (openDropdownId === id) {
      setOpenDropdownId(null) // Close the dropdown if clicked again
    } else {
      setOpenDropdownId(id) // Open the selected dropdown
    }
  }

  const toggleAllCategories = () => {
    setIsAllCategoriesOpen(!isAllCategoriesOpen)
  }

  useEffect(() => {
    setIsOpen(false)
    setIsAllCategoriesOpen(false)
  }, [location.pathname])


  const dropdownVariants = {
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
      },
    },
    closed: {
      opacity: 1,
      height: 0,
      transition: {
        duration: 0.3,
      },
    },
  };
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <section className='relative w-full mx-auto'>
      <div className='mt-8 mx-auto xs:max-h-[500px]'>
        <header className='bg-white-100 text-black-800'>
          {/* Store Location */}
          <div className='flex items-center justify-between h-6 mt-3 sm:px-6 lg:px-8'>
            <div className='flex items-center'>
              <CiLocationOn size={24} className='mr-2' />
              <span className='hidden sm:inline'>
                Store location: Lincoln-344, Illinois, Chicago, USA
              </span>
            </div>

            <div className='flex gap-x-3'>
              {/* Language and Currency Dropdowns */}
              <div className='relative'>
                <select className='px-2 bg-white-100'>
                  <option value='en'>Eng</option>
                  <option value='hn'>Hin</option>
                </select>
              </div>
              <div className='relative'>
                <select className='px-2 bg-white-100'>
                  <option value='usd'>USD</option>
                  <option value='inr'>INR</option>
                </select>
              </div>
            </div>
          </div>

          {/* Horizontal Line */}
          <hr className='my-4 border-gray-200 border-t-1' />

          {/* Main Navbar */}
          <div className='px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-16'>
              {/* Logo */}
              <div className='flex items-left'>
                <Link to='/home2'>
                  <img src={Logo} alt='Logo' className='h-10' />
                </Link>
              </div>

              {/* Search Bar */}
              <div className='items-center justify-center flex-grow hidden space-x-2 xlg:flex'>
                <div className='flex items-center p-1 bg-white border rounded-md border-sm'>
                  <CiSearch className='mr-2 text-3xl text-gray-900' />
                  <input
                    type='text'
                    placeholder='Search'
                    className='w-full text-black rounded-md focus:outline-none'
                  />
                  <button className='h-full px-4 py-2 rounded-md bg-primary text-white-100'>
                    Search
                  </button>
                </div>
              </div>

              {/* Customer Service & Phone */}
              <div className='hidden ml-auto space-x-1 xlg:flex items-right'>

                <PiPhoneCallLight className='text-5xl' />
                <span className='flex flex-col'>
                  <span>Customer Services</span>
                  <a href='tel:+18001234567' className='text-xl'>
                    (219) 555-0114
                  </a>
                </span>
              </div>

              {/* Mobile Menu Button */}
              <div className='flex space-x-4 xlg:hidden'>
                <div className='hidden sm:flex'>
                  <Link
                    to='/wishlist'
                    className='relative p-2 rounded-full hover:text-white-100 hover:bg-gray-700 '
                  >
                    <IoHeartOutline size={24} />
                    {wishlistItems.length !== 0 ? (
                      <span className='absolute bg-branding-success border border-white-100 text-white-100 text-[12px] w-[20px] h-[20px] grid place-items-center  rounded-full top-[-4px] right-0'>
                        {wishlistItems.length}
                      </span>
                    ) : (
                      ''
                    )}
                  </Link>

                  {isSidebarOpen && (
                  <div
                    className="fixed inset-0 z-40 w-full bg-opacity-50 bg-black-800"
                    onClick={toggleSidebar} // Clicking the background will close the sidebar
                  ></div>
                )}

                {/* Sidebar Component */}
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

                {/* Cart button that opens sidebar */}
                <Link
                  to="/"
                  className="relative p-2 rounded-full text-black-900 hover:text-white-100 hover:bg-gray-700"
                  onClick={toggleSidebar} // Also toggles the sidebar when clicked
                >
                  <HiOutlineShoppingBag size={24} />
                  {cartItems.length !== 0 ? (
                    <span className="absolute bg-branding-success border border-white-100 text-white-100 text-[12px] w-[20px] h-[20px] grid place-items-center rounded-full top-[-4px] right-0">
                      {cartItems.length}
                    </span>
                  ) : (
                    ""
                  )}
                </Link>

                  <Link
                    to='/profile'
                    className='p-2 rounded-full text-black-900 hover:text-white-100 hover:bg-gray-700 '
                  >
                    <FaRegUser size={24} />
                  </Link>
                </div>
                <button
                  onClick={toggleMenu}
                  aria-label='Toggle menu'
                  className='text-gray-800 focus:outline-none'
                >
                  {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
              </div>
            </div>
          </div>

          <nav className='hidden mt-2 bg-gray-800 xlg:flex text-white-100 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between w-full'>
              {/* Left-side Links */}
              <div className='flex justify-between'>
                <div className='flex space-x-4'>
                  {/* All Categories */}
                  <div className='relative h-full group'>
                    <div className='flex items-center'>
                      <span className='px-4 py-6 bg-primary'>
                        <IoReorderThreeOutline className='text-3xl' />
                      </span>
                      <span className='flex items-center px-12 py-6 tracking-wide bg-gray-700 gap-x-5'>
                        All Categories
                        <FaChevronDown />
                      </span>
                    </div>

                    {/* Dropdown */}
                    <div className='absolute z-[999] left-0 right-0 mt-2 overflow-hidden transition-all duration-700 ease-in-out max-h-0 group-hover:max-h-[600px]'>
                      <div className='border bg-white-100'>
                        {allCategoryDropdown.map((item, index) => {
                          const IconComponent = item.icon;
                          return (
                            <Link
                              to={item.path}
                              key={index}
                              className={`cursor-pointer flex gap-x-3 text-gray-500 items-center px-3 transition-all duration-200 hover:text-white-100 group hover:bg-primary ${item.title.toLowerCase() === 'view all category'
                                ? 'border'
                                : ''
                                }`}
                              onClick={() => navigate(`${item.path}`)}
                            >
                              <span className='py-3 text-3xl transition-all duration-200'>
                                <IconComponent />
                              </span>
                              <p className='w-full py-3 transition-all duration-200 text-black-900 hover:text-white-100'>
                                {item.title}
                              </p>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Other Navbar Links */}
                  {navData.map(item => (
                    <div
                      key={item.id}
                      className='relative flex items-center group'
                    >
                      {item.dropdown ? (
                        <p className='flex items-center px-3 py-4 font-medium rounded-md cursor-pointer hover:bg-gray-700'>
                          {item.title}
                          <FaChevronDown className='ml-2' />
                        </p>
                      ) : (
                        <Link
                          to={item.path}
                          className='flex items-center px-3 py-4 font-medium rounded-md cursor-pointer hover:bg-gray-700'
                        >
                          {item.title}
                        </Link>
                      )}

                      {item.dropdown && (
                        <div
                          className='absolute left-0 z-10 overflow-hidden transition-all duration-500 top-full max-h-0 group-hover:max-h-[400px]'
                        >
                          <div
                            className={`mt-4 bg-white-100 text-black-900 border-2 ${item.title.toLowerCase() === 'blog'
                              ? 'w-[500px] h-[200px]'
                              : 'w-[150px] h-auto'
                              }`}
                          >
                            <div
                              className={`${item.title.toLowerCase() === 'blog'
                                ? 'grid grid-cols-4 gap-1'
                                : ''
                                }`}
                            >
                              {item.dropdown.map(dropdownItem => (
                                <div
                                  key={dropdownItem.id}
                                  className='flex items-center w-full h-full mr-4 transition-all duration-500 hover:bg-primary hover:text-white-100'
                                >
                                  {item.title.toLowerCase() === 'blog' && (
                                    <Link to='/'>
                                      <img
                                        src={dropdownItem.image}
                                        alt={dropdownItem.title}
                                        className='object-cover w-24 h-24'
                                      />
                                    </Link>
                                  )}
                                  <Link
                                    to={dropdownItem.path}
                                    className='w-full px-5 py-3'
                                  >
                                    {dropdownItem.title}
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right-side Icons */}
              <div className='flex space-x-4'>
                <Link
                  to='/wishlist'
                  className='relative p-2 rounded-full text-white-100 hover:bg-gray-700'
                >
                  <IoHeartOutline size={24} />
                  {wishlistItems.length !== 0 && (
                    <span className='absolute bg-branding-success border border-white-100 text-white-100 text-[12px] w-[20px] h-[20px] grid place-items-center  rounded-full top-[-4px] right-0'>
                      {wishlistItems.length}
                    </span>
                  )}
                </Link>
                {/* 3-line menu button to open sidebar */}


                {/* Background overlay when sidebar is open */}
                {isSidebarOpen && (
                  <div
                    className="fixed z-40 w-full bg-opacity-50 -inset-4 bg-black-800"
                    onClick={toggleSidebar} // Clicking the background will close the sidebar
                  ></div>
                )}

                {/* Sidebar Component */}
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

                {/* Cart button that opens sidebar */}
                <Link
                  to="/"
                  className="relative p-2 rounded-full text-white-100 hover:text-white-100 hover:bg-gray-700"
                  onClick={toggleSidebar} // Also toggles the sidebar when clicked
                >
                  <HiOutlineShoppingBag size={24} />
                  {cartItems.length !== 0 ? (
                    <span className="absolute bg-branding-success border border-white-100 text-white-100 text-[12px] w-[20px] h-[20px] grid place-items-center rounded-full top-[-4px] right-0">
                      {cartItems.length}
                    </span>
                  ) : (
                    ""
                  )}
                </Link>

                <Link
                  to='/profile'
                  className='p-2 text-white rounded-full hover:bg-gray-700'
                >
                  <FaRegUser size={24} />
                </Link>
              </div>
            </div>
          </nav>
          {/* Icons */}
          <div className='flex justify-center pb-2 space-x-3 sm:hidden'>
            <Link
              to='/wishlist'
              className='relative p-2 rounded-full hover:text-white-100 hover:bg-gray-700 '
            >
              <IoHeartOutline size={24} />
              {wishlistItems.length !== 0 ? (
                <span className='absolute bg-branding-success border border-white-100 text-white-100 text-[12px] w-[20px] h-[20px] grid place-items-center  rounded-full top-[-4px] right-0'>
                  {wishlistItems.length}
                </span>
              ) : (
                ''
              )}
            </Link>

            {isSidebarOpen && (
                  <div
                    className="fixed z-40 w-full bg-opacity-50 -inset-3 bg-black-800"
                    onClick={toggleSidebar} // Clicking the background will close the sidebar
                  ></div>
                )}

                {/* Sidebar Component */}
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

                {/* Cart button that opens sidebar */}
                <Link
                  to="/"
                  className="relative p-2 rounded-full text-black-900 hover:text-white-100 hover:bg-gray-700"
                  onClick={toggleSidebar} // Also toggles the sidebar when clicked
                >
                  <HiOutlineShoppingBag size={24} />
                  {cartItems.length !== 0 ? (
                    <span className="absolute bg-branding-success border border-white-100 text-white-100 text-[12px] w-[20px] h-[20px] grid place-items-center rounded-full top-[-4px] right-0">
                      {cartItems.length}
                    </span>
                  ) : (
                    ""
                  )}
                </Link>

            <Link
              to='/profile'
              className='p-2 rounded-full text-black-900 hover:text-white-100 hover:bg-gray-700 '
            >
              <FaRegUser size={24} />
            </Link>
          </div>
          {/* Mobile Menu */}
          {isOpen && (
            <div className='absolute inset-0 z-50 px-2 pt-2  xlg:hidden top-[10rem] bg-white-100'>
              {/* All Categories for Mobile */}
              <button
                onClick={toggleAllCategories}
                className='flex items-center w-full px-3 py-2 font-medium text-left rounded-md bg-white-100 text-black-900 hover:text-white-100 hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white-100'
              >
                All Categories
                <FaChevronDown className='ml-auto' />
              </button>

              <motion.div
                initial={false}
                animate={isAllCategoriesOpen ? 'open' : 'closed'}
                variants={dropdownVariants}
                className='pl-4 overflow-hidden bg-white-100'
              >
                {allCategoryDropdown.map((item, index) => (
                  <Link
                    to={item.path}
                    key={index}
                    className='block px-3 py-2 text-gray-800 rounded-md hover:bg-gray-700 hover:text-white-100'
                  >
                    {item.title}
                  </Link>
                ))}
              </motion.div>

              {/* Mobile Links */}
              {navData.map(item => (
                <div key={item.id}>
                  {item.dropdown ? (
                    <div className=''>
                      <button
                        onClick={() => toggleDropdown(item.id)}
                        className='flex items-center w-full px-3 py-2 font-medium text-left rounded-md bg-white-100 text-black-900 hover:text-white-100 focus:text-white-100 hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
                      >
                        {item.title}
                        <FaChevronDown className='ml-auto' />
                      </button>

                      <motion.div
                        initial={false}
                        animate={openDropdownId === item.id ? 'open' : 'closed'}
                        variants={dropdownVariants}
                        className='pt-0 pl-4 overflow-hidden bg-white-100'
                      >
                        {item.dropdown.map(dropdownItem => (
                          <Link
                            key={dropdownItem.id}
                            to={dropdownItem.path}
                            className='block px-3 py-2 text-gray-800 rounded-md hover:bg-gray-700 hover:text-white-100'
                          >
                            {dropdownItem.title}
                          </Link>
                        ))}
                      </motion.div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className='block px-3 py-2 font-medium rounded-md hover:text-white-100 text-black-900 hover:bg-gray-700 bg-white-100'
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          )}
        </header>
      </div>
    </section >
  )
}

export default Navbar
