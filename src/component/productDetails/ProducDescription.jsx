import React, { useState, useEffect } from 'react';

function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState('description');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Update selectedProduct whenever product prop changes
  useEffect(() => {
    if (product) {
      setSelectedProduct(product);
    }
  }, [product]);

  // Function to render content based on the active tab and selected product
  const renderContent = () => {
    if (!selectedProduct) {
      return <p>Product information is not available</p>; // Prevent error when selectedProduct is null
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
            <p>
              <strong>Weight:</strong> {selectedProduct.additionalInformation?.weight || 'N/A'}
            </p>
            <p>
              <strong>Color:</strong> {selectedProduct.additionalInformation?.color || 'N/A'}
            </p>
            <p>
              <strong>Type:</strong> {selectedProduct.additionalInformation?.type || 'N/A'}
            </p>
            <p>
              <strong>Stock Status:</strong> {selectedProduct.additionalInformation?.stockStatus || 'N/A'}
            </p>
            <p>
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
    return <div>Loading product details...</div>; // Display loading state
  }

  return (
    <div className="w-10/12 mx-auto">
     
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 bg-white">
        {/* Left Side: Tab Content */}
        <div>{renderContent()}</div>

        {/* Right Side: Video */}
        {(activeTab === 'description' || activeTab === 'additionalInfo') && (
          <div className="flex flex-col items-center">
            <iframe
              width="75%"
              height="200"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Video Player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-md"
            ></iframe>

            {/* Small Box below Video */}
            <div className="mt-4 bg-white-100 text-black-800 py-6 rounded-md text-sm font-semibold border border-gray-300 w-3/4 mx-auto">
              <div className="flex justify-between">
                <div className="p-2 mb-2 flex-1 mr-4 text-sm">
               
                  {selectedProduct.promotions?.discount || 'No discount available'}
                  <br />
                  Save your 64% money with us
                </div>
                <div className="p-2 rounded mb-2 flex-1 ml-4">
                  {selectedProduct.promotions?.organic || 'No organic details available'}
                  <br />
                  100% Organic vegetables
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductTabs;
