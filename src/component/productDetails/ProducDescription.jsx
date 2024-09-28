import React, { useState } from 'react';
import allproductData from '../../data/common/allproductData'; // Ensure this is correctly imported and has valid data

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState('description');

  // Function to render content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'description':
        return (
          <div>
            <p>{allproductData.description?.dec1 || 'Description not available'}</p>
            <p>{allproductData.description?.dec2 || 'Description not available'}</p>
            <p>{allproductData.description?.dec3 || 'Description not available'}</p>
          </div>
        );
      case 'additionalInfo':
        return (
          <div>
            <p>
              <strong>Weight:</strong> {allproductData?.additionalInformation?.weight || 'N/A'}
            </p>
            <p>
              <strong>Color:</strong> {allproductData?.additionalInformation?.color || 'N/A'}
            </p>
            <p>
              <strong>Type:</strong> {allproductData?.additionalInformation?.type || 'N/A'}
            </p>
            <p>
              <strong>Stock Status:</strong> {allproductData?.additionalInformation?.stockStatus || 'N/A'}
            </p>
            <p>
              <strong>Stock Quantity:</strong> {allproductData?.additionalInformation?.stockQuantity || 'N/A'}
            </p>
          </div>
        );
      case 'feedback':
        return (
          <div>
            {allproductData?.customerFeedback?.length > 0 ? (
              allproductData.customerFeedback.map((feedback, index) => (
                <div key={index} className="mb-4">
                  <p>
                    <strong>{feedback.name}</strong>
                  </p>
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

  return (
    <div className="p-4 w-11/12 mx-auto">
      {/* Tabs Navigation */}
      <div className="flex justify-center border-b mb-4">
        <button
          className={`py-2 px-4 font-semibold ${
            activeTab === 'description' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'
          }`}
          onClick={() => setActiveTab('description')}
        >
          Description
        </button>
        <button
          className={`py-2 px-4 font-semibold ${
            activeTab === 'additionalInfo' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'
          }`}
          onClick={() => setActiveTab('additionalInfo')}
        >
          Additional Info
        </button>
        <button
          className={`py-2 px-4 font-semibold ${
            activeTab === 'feedback' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'
          }`}
          onClick={() => setActiveTab('feedback')}
        >
          Feedback
        </button>
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 bg-white">
        {/* Left Side: Tab Content */}
        <div>{renderContent()}</div>

        {/* Right Side: Video - displayed only when activeTab is 'description' or 'additionalInfo' */}
        {(activeTab === 'description' || activeTab === 'additionalInfo') && (
          <div className="flex flex-col items-center">
            {/* Video */}
            <iframe
              width="75%"
              height="200"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Example video URL; replace with your actual video link
              title="Video Player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-md"
            ></iframe>

            {/* Small Box below Video */}
            <div className="mt-4 bg-white-100 text-black-800 py-6 rounded-md text-sm font-semibold border border-gray-300 w-3/4 mx-auto">
              <div className="flex justify-between">
                <div className="p-2 mb-2 flex-1 mr-4 text-sm">
                  {allproductData?.promotions?.discount || 'No discount available'}
                  <br />
                  Save your 64% money with us
                </div>
                <div className="p-2 rounded mb-2 flex-1 ml-4">
                  {allproductData?.promotions?.organic || 'No organic details available'}
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
};

export default ProductTabs;
