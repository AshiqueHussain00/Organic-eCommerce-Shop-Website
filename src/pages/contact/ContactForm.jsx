import React, { useState, useEffect } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { useForm } from 'react-hook-form'
import {
    FaMapMarkerAlt,
    FaEnvelope,
    FaWhatsapp,
    FaFacebookF,
    FaInstagram,
    FaPinterestP,
    FaTwitter
} from 'react-icons/fa'
import { Link } from 'react-router-dom' // Import Link from react-router-dom
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css' // Import the styles for toast
import NewsletterThree from '../../component/common/NewsletterThree'
import Footer1 from '../../component/common/footer/footer1'
import BreadCrumbs from '../../component/common/BreadCrumbs'

const ContactForm = () => {
    const [mapCenter, setMapCenter] = useState({ lat: 40.7128, lng: -74.006 }) // Default: New York City

    const containerStyle = {
        width: '100%',
        height: '400px'
    }
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()

    // Function to handle form submission
    const onSubmit = () => {
        // Show success toast
        toast.success('Message sent successfully!', {
            position: 'top-center',
            autoClose: 3000, // Auto close after 3 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
        })

        reset() // Reset form after submission
    }

    return (
        <div className='min-h-screen bg-gradient-to-r from-blue-100 to-white-400'>
            {/* Contact Form Section */}
            <ToastContainer />
            <BreadCrumbs/>
            <div className='flex justify-center mb-16 ' data-aos='zoom-in'>
                <div className='w-full max-w-4xl p-10 mt-10 rounded-lg shadow-md bg-white-100'>
                    <h1 className='mb-8 text-2xl font-bold text-center'>
                        Send us a message
                    </h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='grid grid-cols-1 gap-6 mb-6 md:grid-cols-2'>
                            {/* First Name */}
                            <div>
                                <label
                                    className='block mb-1 text-sm font-medium'
                                    htmlFor='firstName'
                                >
                                    First name*
                                </label>
                                <input
                                    type='text'
                                    id='firstName'
                                    {...register('firstName', {
                                        required: 'First name required'
                                    })}
                                    className='w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300'
                                    placeholder='First name'
                                />
                                {errors.firstName && (
                                    <p className='mt-1 text-sm text-red-500'>
                                        {errors.firstName.message}
                                    </p>
                                )}
                            </div>

                            {/* Last Name */}
                            <div>
                                <label
                                    className='block mb-1 text-sm font-medium'
                                    htmlFor='lastName'
                                >
                                    Last name*
                                </label>
                                <input
                                    type='text'
                                    id='lastName'
                                    {...register('lastName', {
                                        required: 'Last name is required'
                                    })}
                                    className='w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300'
                                    placeholder='Last name'
                                />
                                {errors.lastName && (
                                    <p className='mt-1 text-sm text-red-500'>
                                        {errors.lastName.message}
                                    </p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    className='block mb-1 text-sm font-medium'
                                    htmlFor='email'
                                >
                                    Email*
                                </label>
                                <input
                                    type='email'
                                    id='email'
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value:
                                                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                            message: 'Invalid email address'
                                        }
                                    })}
                                    className='w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300'
                                    placeholder='Email'
                                />
                                {errors.email && (
                                    <p className='mt-1 text-sm text-red-500'>
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label
                                    className='block mb-1 text-sm font-medium'
                                    htmlFor='phoneNumber'
                                >
                                    Phone number
                                </label>
                                <input
                                    type='tel'
                                    id='phoneNumber'
                                    {...register('phoneNumber', {
                                        required: 'Number is requires'
                                    })}
                                    className='w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300'
                                    placeholder='Phone number'
                                />
                                {errors.phoneNumber && (
                                    <p className='mt-1 text-sm text-red-500'>
                                        {errors.phoneNumber.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Message */}
                        <div className='mb-6'>
                            <label
                                className='block mb-1 text-sm font-medium'
                                htmlFor='message'
                            >
                                Your message*
                            </label>
                            <textarea
                                id='message'
                                {...register('message', { required: 'Message is required' })}
                                className='w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300'
                                placeholder='Your message'
                                rows='5'
                            ></textarea>
                            {errors.message && (
                                <p className='mt-1 text-sm text-red-500'>
                                    {errors.message.message}
                                </p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div className='text-center'>
                            <button
                                type='submit'
                                className='px-6 py-2 rounded-full bg-primary text-white-100 hover:bg-black-900 focus:outline-none focus:ring focus:ring-green-300'
                            >
                                Send message
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Contact Information Section */}
            <div className='flex flex-col items-center' >
                <div className='items-center ' data-aos="zoom-in-up">
                <div
                    className='grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-3'
                    data-aos='zoom-in-up'
                >
                    {/* Location Card */}
                    <div className='flex flex-col items-center p-5 text-center rounded-lg shadow-md bg-white-100'>
                        <FaMapMarkerAlt className='mb-4 text-3xl text-primary' />
                        <h2 className='mb-2 text-xl font-semibold'>Roorkee</h2>
                        <p className='mb-2'>
                            {' '}
                            <span className='font-bold'>H.O:</span> Roorkee, Haridwar,
                            Uttarakhand, 247667
                        </p>
                        <p>
                            <span className='font-bold'>B.O:</span> Dayanand Nagar,
                            Bahadurgarh, HR - 124507
                        </p>
                    </div>

                    {/* Email Card */}
                    <div className='flex flex-col items-center p-8 text-center rounded-lg shadow-md bg-white-100'>
                        <FaEnvelope className='mb-4 text-3xl text-primary' />
                        <h2 className='mb-2 text-xl font-semibold'>Email</h2>
                        <p>hello@mypahadidukan.com</p>
                    </div>

                    {/* WhatsApp Card */}
                    <div className='flex flex-col items-center p-8 text-center rounded-lg shadow-md bg-white-100'>
                        <FaWhatsapp className='mb-4 text-3xl text-primary' />
                        <h2 className='mb-2 text-xl font-semibold'>Whatsapp Us</h2>
                        <p>+91 84286 11319</p>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className='flex justify-center mt-8 mb-5 space-x-8' >
                    <Link
                        to='#'
                        className='p-2 text-gray-600 transition duration-300 scale-95 border rounded-full border-black-900 hover:text-white-100 hover:bg-primary hover:border-white-100'
                    >
                        <FaFacebookF size={25} />
                    </Link>
                    <Link
                        to='#'
                        className='p-2 text-gray-600 transition duration-300 scale-95 border rounded-full border-black-900 hover:text-white-100 hover:bg-primary hover:border-white-100'
                    >
                        <FaInstagram size={25} />
                    </Link>
                    <Link
                        to='#'
                        className='p-2 text-gray-600 transition duration-300 scale-95 border rounded-full border-black-900 hover:text-white-100 hover:bg-primary hover:border-white-100'
                    >
                        <FaTwitter size={25} />
                    </Link>
                    <Link
                        to='#'
                        className='p-2 text-gray-600 transition duration-300 scale-95 border rounded-full border-black-900 hover:text-white-100 hover:bg-primary hover:border-white-100'
                    >
                        <FaPinterestP size={25} />
                    </Link>
                </div>
                </div>
                {/* Google Map Embed */}
                <div className="relative w-full h-[50vh]" data-aos="zoom-in-up">
                    <iframe
                        className="absolute inset-0 w-full h-full"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.5263208281!2d76.76357549901142!3d28.643684629087257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1727593232149!5m2!1sen!2sin"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>


            </div>
            <NewsletterThree />
            <Footer1 />
        </div>
    )
}

export default ContactForm
