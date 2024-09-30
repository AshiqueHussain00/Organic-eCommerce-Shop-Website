import React, { useState, useEffect } from 'react';
import BG from '../../../assets/common/newsletter/BG.svg';

const PopupNewsletter = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [dontShow, setDontShow] = useState(false);

  // Check sessionStorage on component mount
  useEffect(() => {
    const dontShowAgain = sessionStorage.getItem('dontShowNewsletter');
    if (!dontShowAgain) {
      setShowPopup(true);
    }
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed with:", email);
    setShowPopup(false);
  };

  const handleCheckboxChange = () => {
    setDontShow(!dontShow);
  };

  const closePopup = () => {
    if (dontShow) {
      sessionStorage.setItem('dontShowNewsletter', 'true');
    }
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black-900 bg-opacity-90 p-4">
          <div className="p-2 relative bg-white-200 rounded-lg overflow-hidden flex flex-col md:flex-row w-full max-w-4xl h-auto md:h-[40vh]">
            
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 bg-white-100 text-gray-800 rounded-full p-2 shadow hover:bg-gray-200 focus:outline-none"
            >
              ✕
            </button>

            {/* Left Side: Background Image */}
            <div
              className="w-full bg-contain mx-auto md:w-1/3 h-[200px] md:h-full md:bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${BG})` }}
            ></div>

            {/* Right Side: Content */}
            <div className="w-full md:w-2/3 p-6 md:p-8 flex flex-col justify-center items-center">
              <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center">Subscribe to our Newsletter</h1>
              <p className="text-gray-400 text-center mb-6 text-sm md:text-base">
                Subscribe to our newsletter and save your <span className="text-[rgb(217,135,68)] font-bold">20%</span> <span className='text-[rgb(217,135,68)] font-bold'> money</span> with a discount code today.
              </p>

              {/* Subscription Form */}
              <form onSubmit={handleSubscribe} className="w-full">
                <div className="relative w-full">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary text-sm md:text-base"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-0 bottom-0 bg-primary text-white px-4 md:px-6 py-2 rounded-full hover:bg-white-600 border-2 transition"
                  >
                    Subscribe
                  </button>
                </div>
              </form>

              {/* Do Not Show Checkbox */}
              <div className="mt-4">
                <label className="flex items-center space-x-2 text-sm md:text-base">
                  <input
                    type="checkbox"
                    checked={dontShow}
                    onChange={handleCheckboxChange}
                    className="form-checkbox text-primary focus:ring-primary"
                  />
                  <span className="text-gray-600">Do not show this window again</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupNewsletter;
