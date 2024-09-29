import React, { useState, useEffect, useRef } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'; // Import necessary star icons
import img1 from '../../assets/home2/leaf.svg';
import img2 from '../../assets/home2/pricetag.svg';
import delivery from '../../assets/products/delivery.mp4';
import { GoPlay } from 'react-icons/go';

function ProductTab({ product }) {
  const [activeTab, setActiveTab] = useState('description');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const videoRef = useRef(null);
  const [showOverlay, setShowOverlay] = useState(true); // To control video overlay

  const handlePlay = () => {
    setShowOverlay(false); // Hide overlay
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  useEffect(() => {
    if (product) {
      setSelectedProduct(product);
    }
  }, [product]);

  // Render stars function
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-500" />);
      }
    }
    return stars;
  };

  // Render content based on active tab
  const renderContent = () => {
    if (!selectedProduct) {
      return <p>Product information is not available</p>;
    }

    switch (activeTab) {
      case 'description':
        return (
          <div>
            {selectedProduct.description ? (
              <>
                <p>{selectedProduct.description.dec1 || 'Description not available'}</p>
                <p>{selectedProduct.description.dec2 || 'Description not available'}</p>
                <p>{selectedProduct.description.dec3 || 'Description not available'}</p>
                <p>{selectedProduct.description.dec4 || 'Description not available'}</p>
              </>
            ) : (
              <p>Description not available</p>
            )}
          </div>
        );

      case 'additionalInfo':
        return (
          <div>
            <p className="mb-4 px-4"><strong>Weight:</strong> {selectedProduct.additionalInformation?.weight || 'N/A'}</p>
            <p className="mb-4 px-4"><strong>Color:</strong> {selectedProduct.additionalInformation?.color || 'N/A'}</p>
            <p className="mb-4 px-4"><strong>Type:</strong> {selectedProduct.additionalInformation?.type || 'N/A'}</p>
            <p className="mb-4 px-4"><strong>Stock Status:</strong> {selectedProduct.additionalInformation?.stockStatus || 'N/A'}</p>
            <p className="mb-4 px-4"><strong>Stock Quantity:</strong> {selectedProduct.additionalInformation?.stockQuantity || 'N/A'}</p>
          </div>
        );

      case 'feedback':
        return (
          <div>
            {selectedProduct.customerFeedback?.length > 0 ? (
              selectedProduct.customerFeedback.map((feedback, index) => (
                <div key={index} className="mb-4 flex items-start">
                  {/* Image */}
                  <img
                    src={feedback.reviewImg} 
                    alt={feedback.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p><strong>{feedback.name}</strong></p>
                    <p>{feedback.feedback}</p>
                    <p className="flex items-center gap-1">Rating: {renderStars(feedback.rating)}</p>
                    <hr className="my-4 border-gray-300 border-1 w-full" />
                  </div>
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
    <div className="w-full max-w-6xl mx-auto p-4">
      {/* Tabs Navigation */}
      <div className="flex justify-center border-b mb-4">
        {['description', 'additionalInfo', 'feedback'].map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 font-semibold ${activeTab === tab ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1).replace(/([A-Z])/g, ' $1')}
          </button>
        ))}
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-white">
        {/* Left Side: Tab Content */}
        <div>{renderContent()}</div>

        {/* Right Side: Video with Play Overlay */}
        {(activeTab === 'description' || activeTab === 'additionalInfo') && (
          <div className="flex flex-col items-center relative">
            <div className="relative w-full h-full">
              <video
                ref={videoRef}
                width="90%"
                height="300"
                src={delivery}
                title="Video Player"
                controls
                className="rounded-md"
              />
              {showOverlay && (
                <div
                  onClick={handlePlay}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer"
                >
                  <GoPlay className="text-white text-6xl" />
                </div>
              )}
            </div>

            {/* Promotion Section */}
            <div className="mt-4 bg-white text-black py-2 rounded-md text-sm border border-gray-300 w-full md:w-11/12 mx-auto">
              <div className="flex flex-col md:flex-row justify-between">
                {/* Discount Information */}
                <div className="p-1 mb-2 flex-1 mr-1 text-sm flex items-center">
                  <img src={img2} alt="Price Tag Icon" className="w-6 h-6 mr-1" />
                  <div>
                    <span className="font-bold">
                      {selectedProduct.promotions?.discount || 'No discount available'}
                    </span>
                    <br />
                    <span className="font-normal text-xs">Save your 64% money with us</span>
                  </div>
                </div>

                {/* Organic Information */}
                <div className="p-2 rounded mb-2 flex-1 ml-4 flex items-center">
                  <img src={img1} alt="Leaf Icon" className="w-6 h-6 mr-2" />
                  <div>
                    <span className="font-bold">
                      {selectedProduct.promotions?.organic || 'No organic details available'}
                    </span>
                    <br />
                    <span className="font-normal text-xs">100% Organic vegetables</span>
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
