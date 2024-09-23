// ProductTabs.js
import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
//import sample from '../../data/common/sample'; // Ensure this path and data structure are correct

// Reusable Tab Button Component
const TabButton = ({ label, isActive, onClick }) => (
  <button
    className={`tab ${isActive ? 'border-b-2 border-blue-500' : ''} px-2 py-1`}
    onClick={onClick}
  >
    {label}
  </button>
);

TabButton.propTypes = {
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

// Reusable Content Display Component
const TabContent = ({ activeTab, tabs }) => {
  // Find the active tab based on the activeTab index
  const currentTab = tabs.find((tab) => tab.index === activeTab);

  // Check if currentTab exists and display its content
  if (!currentTab) {
    return <div>No content available.</div>;
  }

  return (
    <div className="tab-content">
      <h2 className="text-xl font-bold mb-2">{currentTab.title}</h2>
      {currentTab.content}
    </div>
  );
};

TabContent.propTypes = {
  activeTab: PropTypes.number.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};

// Main ProductTabs Component
const ProductTabs = ({ tabs = [] }) => {
  // Initialize the activeTab state to the first tab index or 1 if the array is empty
  const [activeTab, setActiveTab] = useState(tabs[0]?.index || 1);

  return (
    <div className="container mx-auto p-4">
      {/* Tabs Header */}
      <div className="tabs flex space-x-4 border-b mb-4">
        {tabs.map((tab) => (
          <TabButton
            key={tab.index}
            label={tab.label}
            isActive={activeTab === tab.index}
            onClick={() => setActiveTab(tab.index)}
          />
        ))}
      </div>

      {/* Tab Content */}
      <TabContent activeTab={activeTab} tabs={tabs} />
    </div>
  );
};

ProductTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ),
};

ProductTabs.defaultProps = {
  tabs: [], // Default to an empty array if no tabs are passed
};

export default ProductTabs;
