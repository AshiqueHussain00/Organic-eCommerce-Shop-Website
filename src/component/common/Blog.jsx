import React, { useState, useEffect } from 'react';
import LatestNews from './LatestNews';
import { blogData } from '../../data/common/blogData';
import { LuSettings2 } from "react-icons/lu";
import { Link } from 'react-router-dom'; // Import Link for navigation

const Blog = () => {
    const [sortedData, setSortedData] = useState(blogData);
    const [sortOrder, setSortOrder] = useState('Latest');
    const [searchTerm, setSearchTerm] = useState('');
    const [filterVisible, setFilterVisible] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    // Create category counts from data
    const categories = blogData.reduce((acc, post) => {
        acc[post.category] = (acc[post.category] || 0) + 1;
        return acc;
    }, {});

    const tags = ['Healthy', 'Low Fat', 'Vegetarian', 'Bread', 'Kid foods', 'Vitamins', 'Snacks', 'Tiffin', 'Meat', 'Lunch', 'Dinner'];

    // Combined list of searchable terms (categories and tags)
    const searchableTerms = [...Object.keys(categories), ...tags];

    // Filter data based on search term, category, and tags
    const filterData = (data) => {
        let filteredData = data;

        // Filter by search term (title, category, or tags)
        if (searchTerm) {
            const lowerSearch = searchTerm.toLowerCase();
            filteredData = filteredData.filter(post =>
                (post.title && post.title.toLowerCase().includes(lowerSearch)) ||
                (post.category && post.category.toLowerCase().includes(lowerSearch)) ||
                (post.tags && post.tags.some(tag => tag.toLowerCase().includes(lowerSearch)))
            );
        }

        return filteredData;
    };

    const handleFilter = (term) => {
        setSearchTerm(term);  // Set search term when a suggestion is clicked
    };

    useEffect(() => {
        // Apply filter and sorting when search term or sort order changes
        let filteredData = filterData(blogData);

        // Sort the filtered data
        if (sortOrder === 'Latest') {
            filteredData = filteredData.sort((a, b) => new Date(b.date) - new Date(a.date));
        } else {
            filteredData = filteredData.sort((a, b) => new Date(a.date) - new Date(b.date));
        }

        setSortedData(filteredData);
    }, [searchTerm, sortOrder]); // Dependencies include searchTerm and sortOrder

    useEffect(() => {
        if (searchTerm) {
            const lowerSearch = searchTerm.toLowerCase();
            const matchedSuggestions = searchableTerms.filter(term =>
                term.toLowerCase().includes(lowerSearch)
            );
            setSuggestions(matchedSuggestions);
            setShowSuggestions(true);
        } else {
            setSuggestions([]);
            setShowSuggestions(false);
        }
    }, [searchTerm]); // Only recalculate suggestions when searchTerm changes

    const handleSuggestionClick = (suggestion) => {
        setSearchTerm(suggestion);
        setShowSuggestions(false);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="w-10/12  dsx:w-10/12 flex flex-col  mx-auto p-4  sm:flex-col  md:flex-col   lg:flex-row lg: ">
            <div className="w-10/12 p-4  mx-auto  lg:w-1/4  "> {/* Sidebar on the left */}
                <button onClick={() => setFilterVisible(!filterVisible)} className="mb-4 flex items-center font-poppins text-[0.8rem] p-2 bg-primary text-white-200 text-white rounded-full ">
                    Filter <LuSettings2 className="ml-4" />
                </button>
                {filterVisible && (
                    <>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search by title, category, or tag..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                                onFocus={() => searchTerm && setShowSuggestions(true)}
                                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)} // Delay to allow click
                                className="mb-2 p-2 border rounded w-full"
                            />
                            {showSuggestions && suggestions.length > 0 && (
                                <ul className="absolute bg-white-400 border border-[rgb(25,209,46)] rounded w-full max-h-40 overflow-y-auto z-10">
                                    {suggestions.map((suggestion) => (
                                        <li
                                            key={suggestion} // Use suggestion as key
                                            className="p-2 hover:bg-primary hover:text-white-300 cursor-pointer"
                                            onClick={() => handleSuggestionClick(suggestion)}
                                        >
                                            {suggestion}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </>
                )}
                
                <div>
                    <h2 className="font-bold  mb-4 text-[1.1rem] ">Top Categories</h2>
                    {Object.keys(categories).map((category) => (
                        <ul
                            key={category} // Key added here
                            onClick={() => handleFilter(category)}
                            className='mb-2 flex items-center justify-between rounded p-2 cursor-pointer text-[0.8rem] hover:bg-primary hover:text-white-200'
                        >
                            <li className=" ">
                                {`${category} `}
                            </li>
                            <li>
                                {`(${categories[category]})`}
                            </li>
                        </ul>
                    ))}
                </div>
                <h2 className="font-bold  mb-4 text-[1.1rem] ">Popular Tags</h2>
                <div className='flex flex-wrap'>
                    {tags.map((tag) => (
                        <span
                            key={tag} // Use tag name as key
                            className="mb-2 cursor-pointer border-2 text-black-900 rounded-full ml-2 p-2 text-[0.8rem] font-poppins hover:bg-primary hover:text-white-200"
                            onClick={() => handleFilter(tag)}
                        >
                            {`${tag}`}
                        </span>
                    ))}
                </div>
                <h2 className="font-bold text-lg mb-4">Our Gallery</h2>
                <div className="grid grid-cols-2 gap-2 mb-4">
                    {blogData.slice(0, 8).map((post) => (
                        <img
                            key={post.id} // Ensure each post has a unique id
                            src={post.img}
                            alt="Gallery"
                            className="w-full h-24 object-cover rounded"
                        />
                    ))}
                </div>
                <h2 className="font-bold text-[1.1rem] mb-4">Recently Added</h2>
                <ul>
                    {blogData
                        .slice()
                        .sort((a, b) => new Date(b.date) - new Date(a.date))
                        .slice(0, 5)
                        .map((post) => (
                            <li key={post.id} className="mb-2 cursor-pointer">{post.title}</li>
                        ))}
                </ul>
            </div>
            <div className="mx-auto mt-4  flex-1 mr-8 sm:mt-0 lg:ml-4 "> {/* Content area on the right */}
                <div className="flex justify-between items-center mb-4">
                    <div className="sort-dropdown">
                        <label htmlFor="sort-by" className="mr-2 font-semibold">Sort By:</label>
                        <select
                            id="sort-by"
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                            className="border rounded p-2 cursor-pointer"
                        >
                            <option value="Latest">Latest</option>
                            <option value="Oldest">Oldest</option>
                        </select>
                    </div>
                    <h3>{sortedData.length} results Found</h3>
                </div>
               <div className='grid grid-rows-2'>
               <LatestNews 
               data={sortedData} 
               containerClasses="w-full mx-auto grid  grid-cols-1 md:grid-cols-2 gap-x-14 lg:gap-x-4"
               />
               </div>
            </div>
        </div>
    );
};

export default Blog;
