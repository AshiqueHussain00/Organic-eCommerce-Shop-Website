import React, { useState } from 'react';
// import { vegetableData } from '../../data/common/vegetable-data'; // Assuming the vegetableData is imported correctly
import { CookingData  as vegetableData } from '../../data/common/CookingData';
// import { snacksData } from '../../data/common/snacks-data';
const Vegetable = () => {
    // State to track the selected product (initially null to show product list)
    const [selectedProduct, setSelectedProduct] = useState(null);
    console.log(selectedProduct);

    // Function to handle product selection
    const handleProductSelect = (productId) => {
        const product = vegetableData.find((item) => item.id === productId);
        setSelectedProduct(product);
    };

    // Function to handle image change on thumbnail click
    const handleImageChange = (imageSrc) => {
        setSelectedProduct((prevProduct) => (prevProduct ? {
            ...prevProduct,
            currentImage: imageSrc,
        } : null));
    };

    // If no product is selected, show the list of products
    if (!selectedProduct) {
        return (
            <div className="grid grid-cols-1 gap-6 p-6 mx-auto sm:grid-cols-2 lg:grid-cols-3 max-w-7xl">
                {vegetableData.map((product) => (
                    <div
                        key={product.id}
                        className="p-4 bg-white  border rounded-lg shadow hover:cursor-pointer"
                        onClick={() => handleProductSelect(product.id)}
                    >
                        <div className='w-full h-48 mb-4 '>
                        <img
                            src={product.images[0].main}
                            alt={product.name}
                            className=" w-full h-full object-contain  rounded-lg"
                        />

                        </div>
                        
                        <h2 className="text-xl font-bold">{product.name}</h2>
                        <p className="text-gray-600">{product.mainDec}</p>
                    </div>
                ))}
            </div>
        );
    }

    // Render the detailed view of the selected product
    return (
        <div className="max-w-5xl p-6 mx-auto bg-white rounded-lg shadow-lg product-container">
            {/* Back Button */}
            <button
                onClick={() => setSelectedProduct(null)}
                className="mb-4 text-blue-500 underline"
            >
                Back to Products
            </button>

            {/* Product Name and Brand */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b">
                
                <h1 className="text-3xl font-extrabold text-gray-900">{selectedProduct.name}</h1>
                <p className="text-xl font-semibold text-gray-700">{selectedProduct.brand}</p>
            </div>

            {/* Main Image and Thumbnails */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                    {/* Main Image */}
                    <img
                        src={selectedProduct.currentImage || selectedProduct.images[0].main}
                        alt={selectedProduct.name}
                        className="object-contain w-full rounded-lg shadow-lg h-96"
                    />
                    <div className="flex mt-4 space-x-2 thumbnails">
                        {selectedProduct.images[0].thumbnails.map((thumbnail, index) => (
                            <img
                                key={index}
                                src={thumbnail}
                                alt={`Thumbnail ${index + 1}`}
                                className="object-contain  w-16 h-16 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-500"
                                onClick={() => handleImageChange(thumbnail)}
                            />
                        ))}
                    </div>
                </div>

                {/* Product Information */}
                <div className="product-details">
                    <div className="mb-4 price-info">
                        <p className="text-2xl font-bold text-gray-900">
                            <span className="text-gray-500 line-through">${selectedProduct.price.original}</span>
                            <span className="ml-2 text-red-500">${selectedProduct.price.discounted}</span>
                        </p>
                        <p className="text-sm font-semibold text-green-600">{selectedProduct.promotions.discount}</p>
                    </div>

                    <div className="flex items-center mb-4">
                        <p className="text-lg font-semibold">Rating: {selectedProduct.rating} ★</p>
                        <p className="ml-4 text-gray-500">{selectedProduct.reviews} Reviews</p>
                    </div>

                    <div className="mb-4 product-description">
                        <p className="mb-2 text-gray-700">{selectedProduct.description.dec1}</p>
                        <p className="mb-2 text-gray-700">{selectedProduct.description.dec2}</p>
                        <ul className="pl-5 mb-2 text-gray-700 list-disc">
                            {selectedProduct.description.dec3.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <p className="text-gray-700">{selectedProduct.description.dec4}</p>
                    </div>

                    <div className="flex items-center mb-4 space-x-6 product-actions">
                        {selectedProduct.actions.map((action, index) => {
                            const ActionIcon = Object.values(action)[0];
                            return (
                                <div key={index} className="flex items-center space-x-2 cursor-pointer">
                                    <ActionIcon size={24} className="text-gray-600 transition hover:text-blue-500" />
                                </div>
                            );
                        })}
                    </div>

                    <div className="flex mt-4 space-x-6 social-media">
                        {selectedProduct.socialMedia.map((social, index) => {
                            const Icon = Object.values(social)[0];
                            return (
                                <a
                                    href={selectedProduct.socialLink[index]}
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

            <div className="pt-4 mt-8 border-t category-and-tags">
                <h2 className="mb-4 text-xl font-semibold">Category and Tags</h2>
                <div className="mb-4">
                    <span className="text-sm font-bold text-gray-900">Category: </span>
                    <span className="inline-block px-3 py-1 text-sm text-gray-800 bg-gray-200 rounded">{selectedProduct.category}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-sm font-bold text-gray-900">Tags: </span>
                    {selectedProduct.tags.map((tag, index) => (
                        <span key={index} className="inline-block px-3 py-1 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Additional Information */}
            <div className="pt-4 mt-8 border-t additional-info">
                <h2 className="text-xl font-semibold">Additional Information</h2>
                <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-4">
                    <p><span className="font-bold">Weight:</span> {selectedProduct.additionalInformation.weight}</p>
                    <p><span className="font-bold">Color:</span> {selectedProduct.additionalInformation.color}</p>
                    <p><span className="font-bold">Type:</span> {selectedProduct.additionalInformation.type}</p>
                    <p><span className="font-bold">Category:</span> {selectedProduct.additionalInformation.category}</p>
                    <p><span className="font-bold">Stock Status:</span> {selectedProduct.additionalInformation.stockStatus}</p>
                    <p><span className="font-bold">Stock Quantity:</span> {selectedProduct.additionalInformation.stockQuantity}</p>
                </div>
            </div>

            {/* Customer Feedback */}
            <div className="mt-8 customer-feedback">
                <h2 className="mb-4 text-xl font-semibold">Customer Feedback</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {selectedProduct.customerFeedback.map((feedback, index) => (
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

export default Vegetable;
