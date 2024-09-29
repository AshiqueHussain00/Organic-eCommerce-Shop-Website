import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from 'react-icons/fa';

const NewsletterThree = () => {
    return (
        <section>
            <div className='w-full bg-[rgb(237,236,236)]'>
                <div className="p-5 mx-auto max-w-7xl">
                    <div className="flex flex-col items-center gap-6 pt-3 pb-3 lg:flex-row lg:justify-between ">
                        {/* Newsletter Section */}
                        <div className="flex flex-col items-center w-full lg:flex-row lg:items-center lg:justify-between lg:gap-8">
                            {/* Text Section */}
                            <div className="text-center lg:text-left lg:mr-6">
                                <h2 className="text-xl font-semibold text-gray-900">Subscribe to our Newsletter</h2>
                                <p className="text-sm text-gray-500">
                                    Stay updated with the latest news. Join our newsletter!
                                </p>
                            </div>

                            {/* Input and Button Section */}
                            <div className="flex flex-col items-center mt-4 sm:flex-row sm:w-auto lg:gap-2 lg:mt-0">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full px-20 py-2 border border-gray-300 rounded-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                />
                                <button className="w-full px-4 py-2 mt-2 rounded-full text-white-100 sm:w-auto sm:mt-0 sm:ml-2 bg-primary hover:bg-gray-700">
                                    Subscribe
                                </button>
                            </div>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex justify-center gap-4 lg:justify-start">
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
