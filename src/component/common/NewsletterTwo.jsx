import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram, FaRegEnvelopeOpen } from 'react-icons/fa';

const NewsletterTwo = () => {
    return (
        <div className="py-8 bg-black-900">
        <div className="flex flex-col items-center px-4 mx-auto max-w-7xl sm:px-6 lg:px-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Newsletter Section */}
            <div className="flex flex-col w-full lg:flex-row lg:items-center lg:justify-between lg:gap-2">
                 {/* Text Section */}
                 <div className="flex items-start gap-4 mb-4 lg:mb-0 lg:max-w-sm lg:text-left lg:mr-6">
                        <div>
                        <FaRegEnvelopeOpen className="text-primary " size={70} />
                        </div>
                        <div className="max-w-xs">
                            <h2 className="text-xl font-semibold text-white-100">Subscribe to our Newsletter</h2>
                            <p className="text-sm text-gray-500">
                            Pellentesque eu nibh eget mauris congue mattis matti.
                            </p>
                        </div>
                    </div>
                {/* Input and Button Section */}
                <div className="flex flex-col items-center w-full sm:flex-row sm:w-auto lg:items-center lg:gap-2">
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full px-4 py-2 border border-gray-300 rounded-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                    <button className="w-full px-4 py-2 mt-2 rounded-full bg-white-100 text-black-900 sm:mt-0 sm:ml-2 sm:w-auto hover:bg-primary hover:text-white-100">
                        Subscribe
                    </button>
                </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-6 lg:mt-0 lg:ml-6">
                <Link to="/" className="p-2 text-gray-500 rounded-full border-black-900 hover:text-white-100 hover:bg-primary">
                    <FaFacebookF size={20} />
                </Link>
                <Link to="/" className="p-2 text-gray-500 rounded-full border-black-900 hover:text-white-100 hover:bg-primary">
                    <FaTwitter size={20} />
                </Link>
                <Link to="/" className="p-2 text-gray-500 rounded-full border-black-900 hover:text-white-100 hover:bg-primary">
                    <FaPinterestP size={20} />
                </Link>
                <Link to="/" className="p-2 text-gray-500 rounded-full border-black-900 hover:text-white-100 hover:bg-primary">
                    <FaInstagram size={20} />
                </Link>
            </div>
        </div>
    </div>
);
};

export default NewsletterTwo;
