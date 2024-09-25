import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import menu and cross icons
import Sidebar from "./Sidebar"; // Import Sidebar component

const SidebarToggle = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };



  return (
    <div >
      {/* 3-line menu button to open sidebar */}
      {!isSidebarOpen && (
        <button
          className="fixed z-50 text-white top-4 right-4"
          onClick={toggleSidebar}
        >
          <FiMenu size={28} />
        </button>
      )}

      {/* Background overlay when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-900 bg-opacity-70"
          onClick={toggleSidebar} // Clicking the background will close the sidebar
        ></div>
      )}

      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default SidebarToggle;
