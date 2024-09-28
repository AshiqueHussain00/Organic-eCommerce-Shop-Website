import React, { useState, useEffect } from 'react';
import img1 from '../../assets/home2/leaf.svg';
import img2 from '../../assets/home2/pricetag.svg';

function ProductTab({ product }) {
  const [activeTab, setActiveTab] = useState('description');
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    if (product) {
      setSelectedProduct(product);
    }
  }, [product]);

  const renderContent = () => {
    if (!selectedProduct) {
      return <p>Product information is not available</p>;
    }

    switch (activeTab) {
      case 'description':
        return (
          <div>
            <p>{selectedProduct.description?.dec1 || 'Description not available'}</p>
            <p>{selectedProduct.description?.dec2 || 'Description not available'}</p>
            <p>{selectedProduct.description?.dec3 || 'Description not available'}</p>
          </div>
        );
      case 'additionalInfo':
        return (
          <div>
            <p className="mb-4 px-4">
              <strong>Weight:</strong> {selectedProduct.additionalInformation?.weight || 'N/A'}
            </p>
            <p className="mb-4 px-4">
              <strong>Color:</strong> {selectedProduct.additionalInformation?.color || 'N/A'}
            </p>
            <p className="mb-4 px-4">
              <strong>Type:</strong> {selectedProduct.additionalInformation?.type || 'N/A'}
            </p>
            <p className="mb-4 px-4">
              <strong>Stock Status:</strong> {selectedProduct.additionalInformation?.stockStatus || 'N/A'}
            </p>
            <p className="mb-4 px-4">
              <strong>Stock Quantity:</strong> {selectedProduct.additionalInformation?.stockQuantity || 'N/A'}
            </p>
          </div>
        );
      case 'feedback':
        return (
          <div>
            {selectedProduct.customerFeedback?.length > 0 ? (
              selectedProduct.customerFeedback.map((feedback, index) => (
                <div key={index} className="mb-4">
                  <p><strong>{feedback.name}</strong></p>
                  <p>{feedback.feedback}</p>
                  <p>Rating: {feedback.rating} ⭐</p>
                  <hr className="my-4 border-gray-300" />
                </div>
              ))
            ) : (
              <p>No feedback available.</p>
            )}
          </div>
        );
      default:
        return <p>Content not available.</p>;
    }
  };

  if (!selectedProduct) {
    return <div>Loading product details...</div>;
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-4"> {/* Center and constrain width */}
      {/* Tabs Navigation */}
      <div className="flex justify-center border-b mb-4">
        <button
          className={`py-2 px-4 font-semibold ${activeTab === 'description' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'}`}
          onClick={() => setActiveTab('description')}
        >
          Description
        </button>
        <button
          className={`py-2 px-4 font-semibold ${activeTab === 'additionalInfo' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'}`}
          onClick={() => setActiveTab('additionalInfo')}
        >
          Additional Info
        </button>
        <button
          className={`py-2 px-4 font-semibold ${activeTab === 'feedback' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'}`}
          onClick={() => setActiveTab('feedback')}
        >
          Feedback
        </button>
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-white"> {/* Adjust grid for responsiveness */}
        {/* Left Side: Tab Content */}
        <div>{renderContent()}</div>

        {/* Right Side: Video */}
        {(activeTab === 'description' || activeTab === 'additionalInfo') && (
          <div className="flex flex-col items-center">
            <iframe
              width="90%" // Use full width on smaller screens
              height="300"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Video Player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-md"
            ></iframe>

            <div className="mt-4 bg-white text-black py-2 rounded-md text-sm border border-gray-300 w-full md:w-11/12 mx-auto"> {/* Responsive width */}
              <div className="flex flex-col md:flex-row justify-between"> {/* Responsive flex direction */}
                {/* Left section: Discount information with img1 */}
                <div className="p-1 mb-2 flex-1 mr-1 text-sm flex items-center">
                  <img src={img2} alt="Price Tag Icon" className="w-6 h-6 mr-1" />
                  <div>
                    <span className="font-bold">
                      {selectedProduct.promotions?.discount || 'No discount available'}
                    </span>
                    <br />
                    <span className="font-normal text-xs"> {/* Change to text-xs for small text */}
                      Save your 64% money with us
                    </span>
                  </div>
                </div>

                {/* Right section: Organic information with img2 */}
                <div className="p-2 rounded mb-2 flex-1 ml-4 flex items-center">
                  <img src={img1} alt="Leaf Icon" className="w-6 h-6 mr-2" />
                  <div>
                    <span className="font-bold">
                      {selectedProduct.promotions?.organic || 'No organic details available'}
                    </span>
                    <br />
                    <span className="font-normal text-xs"> {/* Change to text-xs for small text */}
                      100% Organic vegetables
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductTab;
