import React from "react";
import { FiX } from "react-icons/fi"; // Import cross icon
import { Link } from "react-router-dom"; // Import Link for navigation

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-[460px] bg-white-100 shadow-lg transform transition-transform duration-500 ease-in-out z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Cross button to close sidebar */}
      <button
        className="absolute text-black-800 top-4 right-4 hover:text-gray-700"
        onClick={toggleSidebar}
      >
        <FiX size={28} />
      </button>

      <div className="flex flex-col justify-between h-full p-6">
        {/* Cart Content */}
        <div className="cart-items">
          <h2 className="mb-4 text-lg font-bold">Shopping Cart</h2>

          {/* Product 1 */}
          <div className="flex items-center mb-4 cart-item">
            <img
              src="https://via.placeholder.com/50"
              alt="Fresh Indian Orange"
              className="object-cover w-12 h-12 mr-4 rounded"
            />
            <div>
              <p className="text-gray-700">Fresh Indian Orange</p>
              <p className="text-gray-500">1 kg - $12.00</p>
            </div>
          </div>

          {/* Product 2 */}
          <div className="flex items-center mb-4 cart-item">
            <img
              src="https://via.placeholder.com/50"
              alt="Green Apple"
              className="object-cover w-12 h-12 mr-4 rounded"
            />
            <div>
              <p className="text-gray-700">Green Apple</p>
              <p className="text-gray-500">1 kg - $14.00</p>
            </div>
          </div>
        </div>

        {/* Checkout Button - Positioned at the bottom */}
        <div className="mt-auto checkout">
          <div className="flex items-center justify-between mb-4">
            <p className="font-bold text-gray-900">2 Products</p>
            <p className="font-bold text-gray-900">$26.00</p>
          </div>
          {/* Link to Checkout Page */}
          <Link to="/cart">
            <button
              className="w-full py-2 font-bold border-2 rounded-full bg-primary text-white-100 hover:bg-white-100 hover:border-primary hover:text-primary"
              onClick={toggleSidebar} // Close the sidebar when clicking the Checkout button
            >
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
