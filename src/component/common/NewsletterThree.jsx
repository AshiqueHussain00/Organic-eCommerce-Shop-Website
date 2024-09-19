import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from 'react-icons/fa';

const NewsletterThree = () => {
    return (
        <section>
            <div className='w-full bg-[rgb(237,236,236)]'>
            <div className="py-8  ">
            <div className="flex flex-col items-center px-4 mx-auto max-w-7xl sm:px-6  lg:flex-row lg:items-center lg:justify-between">
                {/* Newsletter Section */}
                <div className="flex flex-col w-full lg:flex-row lg:items-center lg:justify-between lg:gap-8">
                    {/* Text Section */}
                    <div className="max-w-xs mb-4 lg:mb-0 lg:max-w-sm lg:text-left lg:mr-6">
                        <h2 className="text-xl font-semibold text-gray-900">Subscribe our Newsletter</h2>
                        <p className="text-[0.8rem] text-gray-500">
                            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.
                        </p>
                    </div>

                    {/* Input and Button Section */}
                    <div className="flex  flex-col items-center w-[400px] sm:flex-row sm:w-auto lg:items-center lg:gap-2">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="w-full px-4 py-2 border border-gray-300 rounded-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                        <button className="w-full a px-4 py-2 mt-2 bg-primary rounded-full text-white-100 sm:mt-0 sm:ml-2 sm:w-auto hover:bg-gray-700">
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* Social Media Icons */}
                <div className="flex gap-4 mt-6 lg:mt-0 lg:ml-6">
                    <Link to="/" className="p-2 text-gray-500 border rounded-full hover:text-white-100 hover:bg-primary">
                        <FaFacebookF size={20} />
                    </Link>
                    <Link to="/" className="p-2 text-gray-500 border rounded-full hover:text-white-100 hover:bg-primary">
                        <FaTwitter size={20} />
                    </Link>
                    <Link to="/" className="p-2 text-gray-500 border rounded-full hover:text-white-100 hover:bg-primary">
                        <FaPinterestP size={20} />
                    </Link>
                    <Link to="/" className="p-2 text-gray-500 border rounded-full hover:text-white-100 hover:bg-primary">
                        <FaInstagram size={20} />
                    </Link>
                </div>
            </div>
        </div>
            </div>
        </section>
    );
};

export default NewsletterThree;
