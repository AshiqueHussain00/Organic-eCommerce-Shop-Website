import React, { useState } from "react";
import { orderHistory } from "../../data/common/order-history"; // Ensure you have this data
import { Link } from "react-router-dom"; // Assuming you're using React Router
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Importing arrow icons
import { useLocation } from "react-router-dom";


const DashBoard = () => {


    const location = useLocation();
    const [currentPage, setCurrentPage] = useState(1);
    
    const [currentOrder, setCurrentOrder] = useState(orderHistory[0]); // Default to the first order
   
    const ordersPerPage = 6; // Show a maximum of 6 orders per page

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
                    <Link to="/account/settings">
                    <button
                        
                        className="w-full mt-2 text-primary"
                    >
                        Edit Profile
                    </button></Link>
                </div>

                {/* Right Sidebar: Billing Address */}
                <div className="text-left ml-2 w-full  p-4 bg-white border rounded-lg shadow-md">
                    <h3 className="text-base text-gray-500  ">BILLING ADDRESS</h3>
                    <h2 className="lg:text-lg text-base mt-3">{currentOrder.customerName}</h2>
                    <p className="text-base text-gray-500 mt-2">{currentOrder.billing.address}</p>
                    <p className="mt-2">{currentOrder.billing.email}</p>
                    <p className="mt-2">{currentOrder.billing.phone}</p>
                    <button
                        
                        className="mt-2 text-primary"
                    >
                        Edit Address
                    </button>
                </div>
            </div>

            <div className="flex flex-col justify-between gap-y-8 mt-8">
                <div className="overflow-x-auto">
                    <div className="flex justify-between items-center gap-x-4">
                        <h2 className="mb-4 text-2xl font-semibold text-left">Recent Order History</h2>
                        <Link
                            to={`/account/order-history`}
                            state={{ id: true }}
                            className="ml-4 text-primary transition-all duration-300 hover:text-branding-success hover:underline"
                        >
                            View All
                        </Link>
                    </div>


                    {/* Responsive Table for Larger Screens */}
                    <div className="hidden md:block xlg:text-base text-sm">
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
                            <div key={order.id} className="p-4 mb-4 flex flex-col gap-y-3 bg-white border rounded-lg shadow-md text-sm hover:shadow-lg">
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

         
        </div>
    );
};

export default DashBoard;
