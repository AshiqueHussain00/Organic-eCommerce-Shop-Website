import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BreadCrumbs from '../common/BreadCrumbs';
import NewsletterThree from '../common/NewsletterThree';
import Footer1 from '../common/footer/footer1';

const CheckoutPage = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [paymentMethod, setPaymentMethod] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [availableStates, setAvailableStates] = useState([]);

    // Full list of states for USA, Canada, and India
    const countryStates = {
        USA: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
        Canada: ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Northwest Territories', 'Nova Scotia', 'Nunavut', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan', 'Yukon'],
        India: ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal']
    };

    const handleCountryChange = (e) => {
        const country = e.target.value;
        setSelectedCountry(country);
        setAvailableStates(countryStates[country] || []);
    };

    const onSubmit = (data) => {
        if (!paymentMethod) {
            toast.error('Please select a payment method!', {
                position: 'top-right',
                autoClose: 3000,
            });
            return;
        }

        toast.success('Order placed successfully!', {
            position: 'top-right',
            autoClose: 3000,
        });
        console.log(data);
        reset();
        setPaymentMethod(''); // Reset payment method after form submission
    };

    return (
        <section className='w-full '>
            <BreadCrumbs />
            <div className="w-10/12 px-4 py-16 mx-auto">
                <ToastContainer />

                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {/* Billing Information */}
                    <div className="space-y-6 lg:col-span-2">
                        <h2 className="mb-4 text-2xl font-bold">Billing Information</h2>

                        {/* First Name, Last Name, and Company */}
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            <div>
                                <label>First Name</label>
                                <input
                                    type="text"
                                    placeholder="Your first name"
                                    {...register('firstName', { required: 'First name is required' })}
                                    className="w-full p-2 border rounded"
                                />
                                {errors.firstName && <span className="text-red-500">{errors.firstName.message}</span>}
                            </div>

                            <div>
                            <label>Last Name</label>
                                <input
                                    type="text"
                                    placeholder="Your last name"
                                    {...register('lastName', { required: 'Last name is required' })}
                                    className="w-full p-2 border rounded"
                                />
                                {errors.lastName && <span className="text-red-500">{errors.lastName.message}</span>}
                            </div>

                            <div>
                            <label>Company name (optional)</label>
                                <input
                                    type="text"
                                    placeholder="Company name"
                                    {...register('companyName')}
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                        </div>

                        {/* Address and ZIP */}
                        <div className="grid grid-cols-1 gap-4">
                            <div>
                                <label>Address</label>
                                <input
                                    type="text"
                                    placeholder="Street Address"
                                    {...register('streetAddress', { required: 'Street address is required' })}
                                    className="w-full p-2 border rounded"
                                />
                                {errors.streetAddress && <span className="text-red-500">{errors.streetAddress.message}</span>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
                            {/* Country */}
                            <div>
                                <label>Country</label>
                                <select
                                    {...register('country', { required: 'Country is required' })}
                                    className="w-full p-2 border rounded"
                                    onChange={handleCountryChange}
                                >
                                    <option value="" className='text-xs lg:text-sm'>Country / Region</option>
                                    <option value="USA" className='text-xs lg:text-sm'>USA</option>
                                    <option value="Canada" className='text-xs lg:text-sm'>Canada</option>
                                    <option value="India" className='text-xs lg:text-sm'>India</option>
                                   
                                </select>
                                {errors.country && <span className="text-red-500">{errors.country.message}</span>}
                            </div>

                            {/* State */}
                            <div>
                                <label>State</label>
                                <select
                                    {...register('state', { required: 'State is required' })}
                                    className="w-full p-2 border rounded"
                                    disabled={!selectedCountry}
                                >
                                    <option value="">State</option>
                                    {availableStates.map((state) => (
                                        <option key={state} value={state} className='text-xs lg:text-sm'>{state}</option>
                                    ))}
                                </select>
                                {errors.state && <span className="text-red-500">{errors.state.message}</span>}
                            </div>

                            <div>
                                <label>Zip Code</label>
                                <input
                                    type="text"
                                    placeholder="Zip Code"
                                    {...register('zipCode', { required: 'Zip Code is required' })}
                                    className="w-full p-2 border rounded"
                                />
                                {errors.zipCode && <span className="text-red-500">{errors.zipCode.message}</span>}
                            </div>
                        </div>

                        {/* Email and Phone */}
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label>Email</label>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    {...register('email', { required: 'Email is required' })}
                                    className="w-full p-2 border rounded"
                                />
                                {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                            </div>

                            <div>
                                <label>Phone Number</label>
                                <input
                                    type="text"
                                    placeholder="Phone number"
                                    {...register('phone', { required: 'Phone number is required' })}
                                    className="w-full p-2 border rounded"
                                />
                                {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
                            </div>
                        </div>

                        {/* Ship to different address */}
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" className="w-5 h-5" />
                            <label>Ship to a different address</label>
                        </div>

                        {/* Additional Info */}
                        <div>
                            <h3 className="mb-2 text-xl font-semibold">Additional Info</h3>
                            <textarea
                                placeholder="Notes about your order, e.g. special notes for delivery"
                                {...register('notes')}
                                className="w-full p-2 border rounded"
                                rows="4"
                            ></textarea>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="space-y-6">
                        <div className="p-4 border rounded-lg shadow-md flex flex-col gap-y-3">
                            <h2 className="mb-4 text-xl font-bold">Order Summary</h2>

                            {/* Order Items */}
                            <div className="flex items-center justify-between">
                                <img
                                    src="https://img.freepik.com/free-photo/pomegranate-fruit-isolated_144627-22111.jpg?w=740"
                                    alt="Green Capsicum"
                                    className="w-[60px] h-[60px] rounded"
                                />
                                <span>Green Capsicum x5</span>
                                <span>$70.00</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <img
                                    src="https://www.bigbasket.com/media/uploads/p/l/40296057_4-fresho-papaya.jpg"
                                    alt="Red Capsicum"
                                       className="w-[60px]] h-[60px] rounded"
                                />
                                <span>Red Capsicum x1</span>
                                <span>$14.00</span>
                            </div>

                            {/* Total */}
                            <div className="flex items-center justify-between mt-4">
                                <span>Total</span>
                                <span className="text-xl font-bold">$84.00</span>
                            </div>
                        </div>

                        {/* Payment Method */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold">Payment Method</h3>

                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="Cash on Delivery"
                                        onChange={() => setPaymentMethod('Cash on Delivery')}
                                        checked={paymentMethod === 'Cash on Delivery'}
                                        className="w-4 h-4 text-green-600 focus:ring-green-600"
                                    />
                                    <label className="ml-2">Cash on Delivery</label>
                                </div>

                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="Stripe"
                                        onChange={() => setPaymentMethod('Stripe')}
                                        checked={paymentMethod === 'Stripe'}
                                        className="w-4 h-4 text-green-600 focus:ring-green-600"
                                    />
                                    <label className="ml-2">Stripe</label>
                                </div>

                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="PayPal"
                                        onChange={() => setPaymentMethod('PayPal')}
                                        checked={paymentMethod === 'PayPal'}
                                        className="w-4 h-4 text-green-600 focus:ring-green-600"
                                    />
                                    <label className="ml-2">PayPal</label>
                                </div>

                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="Amazon Pay"
                                        onChange={() => setPaymentMethod('Amazon Pay')}
                                        checked={paymentMethod === 'Amazon Pay'}
                                        className="w-4 h-4 text-green-600 focus:ring-green-600"
                                    />
                                    <label className="ml-2">Amazon Pay</label>
                                </div>
                            </div>
                        </div>


                        <button type="submit" className="w-full p-4 rounded-lg bg-primary text-white-100">
                            Place Order
                        </button>
                    </div>
                </form>
            </div>
             
             <NewsletterThree/>
            <Footer1/>
        </section>
    );
};

export default CheckoutPage;
