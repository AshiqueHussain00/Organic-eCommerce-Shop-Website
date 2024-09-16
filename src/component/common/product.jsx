import React, { useState } from 'react';
import { product } from '../../data/common/Product-data'; // Adjust this path

const Product = () => {
    const productData = product[0];
    
    // State to track the currently displayed image
    const [currentImage, setCurrentImage] = useState(productData.images[0].main);

    // Function to handle image change on thumbnail click
    const handleImageChange = (imageSrc) => {
        setCurrentImage(imageSrc);
    };

    return (
        <div className="max-w-5xl p-6 mx-auto bg-white rounded-lg shadow-lg product-container">
            {/* Product Name and Brand */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b">
                <h1 className="text-3xl font-extrabold text-gray-900">{productData.name}</h1>
                <img src={productData.brand} alt="Brand" className="w-16 h-16" />
            </div>

            {/* Main Image and Thumbnails */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                    {/* Main Image */}
                    <img
                        src={currentImage} // Use currentImage state
                        alt={productData.name}
                        className="object-cover w-full rounded-lg shadow-lg h-96"
                    />
                    <div className="flex mt-4 space-x-2 thumbnails">
                        {productData.images[0].thumbnails.map((thumbnail, index) => (
                            <img
                                key={index}
                                src={thumbnail}
                                alt={`Thumbnail ${index + 1}`}
                                className={`object-cover w-16 h-16 border-2 border-gray-200 rounded-lg hover:border-blue-500 cursor-pointer`}
                                onClick={() => handleImageChange(thumbnail)} // Change image on click
                            />
                        ))}
                    </div>
                </div>

                {/* Product Information */}
                <div className="product-details">
                    {/* Price */}
                    <div className="mb-4 price-info">
                        <p className="text-2xl font-bold text-gray-900">
                            <span className="text-gray-500 line-through">${productData.price.original}</span>
                            <span className="ml-2 text-red-500">${productData.price.discounted}</span>
                        </p>
                        <p className="text-sm font-semibold text-green-600">{productData.promotions.discount}</p>
                    </div>

                    {/* Rating and Reviews */}
                    <div className="flex items-center mb-4">
                        <p className="text-lg font-semibold">Rating: {productData.rating} ★</p>
                        <p className="ml-4 text-gray-500">{productData.reviews} Reviews</p>
                    </div>

                    {/* Description */}
                    <div className="mb-4 product-description">
                        <p className="mb-2 text-gray-700">{productData.description.dec1}</p>
                        <p className="mb-2 text-gray-700">{productData.description.dec2}</p>
                        <ul className="pl-5 mb-2 text-gray-700 list-disc">
                            {productData.description.dec3.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <p className="text-gray-700">{productData.description.dec4}</p>
                    </div>

                    {/* Actions (Like and Views) */}
                    <div className="flex items-center mb-4 space-x-6 product-actions">
                        {productData.actions.map((action, index) => {
                            const ActionIcon = Object.values(action)[0];
                            return (
                                <div key={index} className="flex items-center space-x-2 cursor-pointer">
                                    <ActionIcon size={24} className="text-gray-600 transition hover:text-blue-500" />
                                </div>
                            );
                        })}
                    </div>

                    {/* Social Media Links */}
                    <div className="flex mt-4 space-x-6 social-media">
                        {productData.socialMedia.map((social, index) => {
                            const Icon = Object.values(social)[0];
                            return (
                                <a
                                    href={productData.socialLink[index]}
                                    key={index}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 transition hover:text-blue-500"
                                >
                                    <Icon size={24} />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Category and Tags (Above Additional Information) */}
            <div className="pt-4 mt-8 border-t category-and-tags">
                <h2 className="mb-4 text-xl font-semibold">Category and Tags</h2>
                <div className="mb-4">
                    <span className="text-sm font-bold text-gray-900">Category: </span>
                    <span className="inline-block px-3 py-1 text-sm text-gray-800 bg-gray-200 rounded">{productData.category}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-sm font-bold text-gray-900">Tags: </span>
                    {productData.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="inline-block px-3 py-1 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Additional Information */}
            <div className="pt-4 mt-8 border-t additional-info">
                <h2 className="text-xl font-semibold">Additional Information</h2>
                <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-4">
                    <p><span className="font-bold">Weight:</span> {productData.additionalInformation.weight} kg</p>
                    <p><span className="font-bold">Color:</span> {productData.additionalInformation.color}</p>
                    <p><span className="font-bold">Type:</span> {productData.additionalInformation.type}</p>
                    <p><span className="font-bold">Category:</span> {productData.additionalInformation.category}</p>
                    <p><span className="font-bold">Stock Status:</span> {productData.additionalInformation.stockStatus}</p>
                    <p><span className="font-bold">Stock Quantity:</span> {productData.additionalInformation.stockQuantity}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-5 mb-4">
                    <span className="text-sm font-bold text-gray-900">Tags: </span>
                    {productData.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="inline-block px-3 py-1 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Customer Feedback */}
            <div className="mt-8 customer-feedback">
                <h2 className="mb-4 text-xl font-semibold">Customer Feedback</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {productData.customerFeedback.map((feedback, index) => (
                        <div key={index} className="p-4 rounded-lg shadow-lg bg-gray-50 feedback-item">
                            <div className="flex items-center mb-2">
                                <img
                                    src={feedback.reviewImg}
                                    alt={feedback.name}
                                    className="object-cover w-10 h-10 rounded-full"
                                />
                                <div className="ml-3">
                                    <p className="text-lg font-semibold">{feedback.name}</p>
                                    <p className="text-sm text-gray-500">Rating: {feedback.rating} ★</p>
                                </div>
                            </div>
                            <p className="text-gray-600">{feedback.feedback}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Product;
