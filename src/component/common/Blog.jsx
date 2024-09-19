import React, { useState, useEffect } from 'react';
import LatestNews from './LatestNews';
import { blogData } from '../../data/common/blogData';

const Blog = () => {
    const [sortedData, setSortedData] = useState(blogData);
    const [sortOrder, setSortOrder] = useState('Latest');
    const [searchTerm, setSearchTerm] = useState('');
    const [filterVisible, setFilterVisible] = useState(false);

    // Create category counts from data
    const categories = blogData.reduce((acc, post) => {
        acc[post.category] = (acc[post.category] || 0) + 1;
        return acc;
    }, {});

    const tags = ['Healthy', 'Low Fat', 'Vegetarian'];

    const handleFilter = tag => {
        if (tag) {
            setSortedData(blogData.filter(post => post.tags && post.tags.includes(tag)));
        } else {
            setSortedData(blogData);
        }
    };

    useEffect(() => {
        if (sortOrder === 'Latest') {
            setSortedData([...blogData].sort((a, b) => new Date(b.date) - new Date(a.date)));
        } else {
            setSortedData([...blogData].sort((a, b) => new Date(a.date) - new Date(b.date)));
        }
    }, [sortOrder, blogData]);

    return (
        <div className="flex w-10/12 mx-auto">
            <div className="w-1/4 p-4 bg-gray-100"> {/* Sidebar on the left */}
                <button onClick={() => setFilterVisible(!filterVisible)} className="mb-4 p-2 bg-blue-500 text-white rounded">Filter</button>
                {filterVisible && (
                    <>
                        <input type="text" placeholder="Search by name..." onChange={e => setSearchTerm(e.target.value)} className="mb-2 p-2 border rounded w-full" />
                        <input type="text" placeholder="Search by category..." onChange={e => handleFilter(e.target.value)} className="mb-4 p-2 border rounded w-full" />
                    </>
                )}
                <h2 className="font-bold text-lg mb-4">Top Categories</h2>
                <ul>
                    {Object.keys(categories).map((category, idx) => (
                        <li key={idx} className="mb-2 cursor-pointer">{`${category} (${categories[category]})`}</li>
                    ))}
                </ul>
                <h2 className="font-bold text-lg mb-4">Popular Tags</h2>
                <ul>
                    {tags.map((tag, idx) => (
                        <li key={idx} className="mb-2 cursor-pointer" onClick={() => handleFilter(tag)}>{`${tag}`}</li>
                    ))}
                </ul>
                <h2 className="font-bold text-lg mb-4">Our Gallery</h2>
                <div className="grid grid-cols-2 gap-2 mb-4">
                    {blogData.slice(0, 8).map((post, idx) => (
                        <img key={idx} src={post.img} alt="Gallery" className="w-full h-24 object-cover rounded" />
                    ))}
                </div>
                <h2 className="font-bold text-lg mb-4">Recently Added</h2>
                <ul>
                    {blogData.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5).map((post, idx) => (
                        <li key={idx} className="mb-2 cursor-pointer">{post.title}</li>
                    ))}
                </ul>
            </div>
            <div className="flex-1 p-4"> {/* Content area on the right */}
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
                    <h3>{blogData.length} results Found</h3>
                </div>
                <LatestNews data={sortedData} />
            </div>
        </div>
    );
};

export default Blog;
