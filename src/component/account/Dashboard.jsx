import React, { useState } from "react";
import { orderHistory } from "../../data/common/order-history"; // Ensure you have this data
import { Link } from "react-router-dom"; // Assuming you're using React Router
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Importing arrow icons

const DashBoard = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isEditProfileOpen, setEditProfileOpen] = useState(false);
    const [isEditAddressOpen, setEditAddressOpen] = useState(false);
    const [currentOrder, setCurrentOrder] = useState(orderHistory[0]); // Default to the first order
    const [editedName, setEditedName] = useState(currentOrder.customerName); // State for edited name
    const [editedProfilePic, setEditedProfilePic] = useState(currentOrder.customerImg); // State for edited profile pic
    const [editedAddress, setEditedAddress] = useState(currentOrder.billing.address); // State for edited address
    const ordersPerPage = 10; // Show a maximum of 10 orders per page

    // Calculate total pages
    const totalPages = Math.ceil(orderHistory.length / ordersPerPage);

    // Get current orders based on pagination
    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = orderHistory.slice(indexOfFirstOrder, indexOfLastOrder);

    // Pagination handler
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Function to determine status color
    const getStatusColor = (status) => {
        switch (status) {
            case "Completed":
                return "text-green-600"; // Green for completed
            case "Pending":
                return "text-yellow-600"; // Yellow for pending
            case "Cancelled":
                return "text-red-600"; // Red for cancelled
            default:
                return "text-gray-600"; // Default color
        }
    };

    const handleEditProfile = () => {
        setEditProfileOpen(true);
    };

    const handleEditAddress = () => {
        setEditAddressOpen(true);
    };

    const saveProfileChanges = () => {
        // Logic to save changes to the profile
        const updatedOrder = { ...currentOrder, customerName: editedName, customerImg: editedProfilePic };
        setCurrentOrder(updatedOrder); // Update the current order with new values
        setEditProfileOpen(false); // Close the modal
    };

    const saveAddressChanges = () => {
        // Logic to save changes to the address
        const updatedOrder = { ...currentOrder, billing: { ...currentOrder.billing, address: editedAddress } };
        setCurrentOrder(updatedOrder); // Update the current order with new values
        setEditAddressOpen(false); // Close the modal
    };

    // Handle file upload for profile picture
    const handleProfilePicChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setEditedProfilePic(reader.result); // Set the profile picture state to the uploaded image URL
            };
            reader.readAsDataURL(file); // Read the file as a data URL
        }
    };

    return (
        <div className="w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between gap-y-8">
                {/* Left Sidebar: Customer Profile */}
                <div className="w-full p-4 bg-white border rounded-lg shadow-md">
                    <img 
                        src={currentOrder.customerImg} 
                        alt="Customer" 
                        className="w-24 h-24 rounded-full mx-auto mb-4" 
                    />
                    <h3 className="text-lg font-semibold text-center">{currentOrder.customerName}</h3>
                    <p className="text-center text-gray-500">Customer</p>
                    <button 
                        onClick={handleEditProfile} 
                        className="w-full mt-2 text-primary"
                    >
                        Edit Profile
                    </button>
                </div>

                {/* Right Sidebar: Billing Address */}
                <div className="text-left ml-2 w-full  p-4 bg-white border rounded-lg shadow-md">
                    <h3 className="text-base text-gray-500  ">BILLING ADDRESS</h3>
                    <h2 className="text-lg mt-3">{currentOrder.customerName}</h2>
                    <p className="text-base text-gray-500 mt-2">{currentOrder.billing.address}</p>
                    <p className="mt-2">{currentOrder.billing.email}</p>
                    <p className="mt-2">{currentOrder.billing.phone}</p>
                    <button 
                        onClick={handleEditAddress} 
                        className="mt-2 text-primary"
                    >
                        Edit Address
                    </button>
                </div>
            </div>

            <div className="flex flex-col justify-between gap-y-8 mt-8">
                <div className="overflow-x-auto">
                    <h2 className="mb-4 text-2xl font-semibold text-left">Recent Order History</h2>
                    {/* Responsive Table for Larger Screens */}
                    <div className="hidden md:block">
                        <table className="min-w-full border-collapse table-auto">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="px-4 py-2 text-left border">Order ID</th>
                                    <th className="px-4 py-2 text-left border">Date</th>
                                    <th className="px-4 py-2 text-left border">Total</th>
                                    <th className="px-4 py-2 text-left border">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentOrders.map((order) => (
                                    <tr key={order.id}>
                                        <td className="px-4 py-2 border">#{order.orderId}</td>
                                        <td className="px-4 py-2 border">{order.date}</td>
                                        <td className="px-4 py-2 border">
                                            ${order.totalPrice} ({order.NoOfProducts} Products)
                                        </td>
                                        <td className="px-4 py-2 border">
                                            <div className="flex items-center justify-between">
                                                <span className={getStatusColor(order.status)}>{order.status}</span>
                                                <Link
                                                    to={`/account/order-history/order-detail/${order.orderId}`}
                                                    state={{ id: true }}
                                                    className="ml-4 text-primary transition-all duration-300 hover:text-branding-success hover:underline"
                                                >
                                                    View Details
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Card Layout for Smaller Screens */}
                    <div className="md:hidden">
                        {currentOrders.map((order) => (
                            <div key={order.id} className="p-4 mb-4 bg-white border rounded-lg shadow-md hover:shadow-lg">
                                <div className="flex justify-between">
                                    <h3 className="font-semibold">{order.orderId}</h3>
                                    <Link to={`/account/order-history/order-detail/${order.orderId}`} state={{ id: true }} className="text-primary">
                                        View Details
                                    </Link>
                                </div>
                                <p className="text-gray-600">Date: {order.date}</p>
                                <p className="text-gray-600">Total: ${order.totalPrice} ({order.NoOfProducts} Products)</p>
                                <p className={`font-semibold ${getStatusColor(order.status)}`}>
                                    Status: {order.status}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center mt-4">
                    <div className="flex items-center pagination">
                        <button
                            className={`mx-1 p-2 bg-gray-300 rounded-full hover:bg-primary ${currentPage === 1 ? "cursor-not-allowed" : ""} group`}
                            onClick={() => paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            <FaArrowLeft className={`w-4 h-4 ${currentPage < totalPages ? "text-black-900 group-hover:text-white-100" : "text-gray-600"}`} />
                        </button>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index}
                                className={`mx-1 px-3 py-1 bg-gray-300 rounded-full ${currentPage === index + 1 ? "bg-primary text-white-100" : ""}`}
                                onClick={() => paginate(index + 1)}
                            >
                                {index + 1}
                            </button>
                        ))}
                        <button
                            className={`mx-1 p-2 bg-gray-300 rounded-full hover:bg-primary ${currentPage === totalPages ? "cursor-not-allowed" : ""} group`}
                            onClick={() => paginate(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            <FaArrowRight className={`w-4 h-4 ${currentPage < totalPages ? "text-black-900 group-hover:text-white-100" : "text-gray-600"}`} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Edit Profile Modal */}
            {isEditProfileOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-80 z-50">
                    <div className="bg-white-200 p-6 rounded shadow-lg">
                        <h3 className="text-lg font-semibold ">Edit Profile</h3>
                        <input 
                            type="text" 
                            value={editedName} 
                            onChange={(e) => setEditedName(e.target.value)} 
                            placeholder="Enter your name" 
                            className="mt-2 p-2 border rounded w-full"
                        />
                        <input 
                            type="file" 
                            accept="image/*" // Accept only image files
                            onChange={handleProfilePicChange} // Handle file input change
                            className="mt-2 p-2 border rounded w-full"
                        />
                        <button onClick={saveProfileChanges} className="mt-4  px-4 py-2 bg-primary text-white-200 rounded hover:bg-white-200 hover:text-black-800">
                            Save
                        </button>
                        <button onClick={() => setEditProfileOpen(false)} className="mt-2 ml-4 px-4 py-2 bg-gray-500 text-white-200 rounded hover:bg-white-200 hover:text-black-800">
                            Cancel
                        </button>
                    </div>
                </div>
            )}

            {/* Edit Address Modal */}
            {isEditAddressOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded shadow-lg">
                        <h3 className="text-lg font-semibold ">Edit Address</h3>
                        <textarea 
                            value={editedAddress} 
                            onChange={(e) => setEditedAddress(e.target.value)} 
                            placeholder="Enter your address" 
                            className="mt-2 p-2 border rounded w-full h-24"
                        />
                        <button onClick={saveAddressChanges} className="mt-4  px-4 py-2 bg-primary text-white-200 rounded hover:bg-white-200 hover:text-black-800">
                            Save
                        </button>
                        <button onClick={() => setEditAddressOpen(false)} className="mt-2 ml-4 px-4 py-2 bg-gray-500 text-white-200 rounded hover:bg-white-200 hover:text-black-800">
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DashBoard;
