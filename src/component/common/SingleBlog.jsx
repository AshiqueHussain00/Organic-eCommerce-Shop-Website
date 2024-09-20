// SingleBlog.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogData } from '../../data/common/blogData'; // Adjust the path if needed
import { GoTag } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import { LiaCommentsSolid } from "react-icons/lia";
import { FaFacebook, FaTwitter, FaInstagram, FaShare } from "react-icons/fa";

const SingleBlog = () => {
  const { id } = useParams();
  const blogId = parseInt(id, 10);
  const blog = blogData.find((post) => post.id === blogId);
  const navigate = useNavigate();

  // State variables for sidebar functionality
  const [sortedData, setSortedData] = useState(blogData);
  const [sortOrder, setSortOrder] = useState('Latest');
  const [searchTerm, setSearchTerm] = useState('');
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

  const filterData = (data) => {
    let filteredData = data;
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

  useEffect(() => {
    let filteredData = filterData(blogData);
    if (sortOrder === 'Latest') {
      filteredData = [...filteredData].sort((a, b) => new Date(b.date) - new Date(a.date));
    } else {
      filteredData = [...filteredData].sort((a, b) => new Date(a.date) - new Date(b.date));
    }
    setSortedData(filteredData);
  }, [searchTerm, sortOrder]);

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
  }, [searchTerm]);

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
    // Optionally, you can navigate to a filtered blog list page here
    navigate(`/blog?category=${encodeURIComponent(suggestion)}`);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle category click
  const handleCategoryClick = (category) => {
    navigate(`/blog?category=${encodeURIComponent(category)}`);
  };

  if (!blog) {
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold">Blog Not Found</h2>
        <p>The blog you're looking for does not exist.</p>
        <Link to="/blog">
          <button className="mt-4 p-2 bg-blue-500 text-white rounded">Back to Blog List</button>
        </Link>
      </div>
    );
  }

  const { readMore } = blog;

  return (
    <div className="flex max-w-6xl mx-auto p-4">
      {/* Main Content */}
      <div className="flex-1 mr-8">
        {/* Big Image */}
        <img src={blog.img} alt={readMore.title} className="w-full h-auto rounded-lg mb-4" />

        {/* Icons: Tag, Human, Comments */}
        <div className="flex items-center mb-2 text-gray-700">
          <GoTag className="mr-1" />
          <span className="mr-4">{blog.category}</span>
          <IoPersonOutline className="mr-1" />
          <span className="mr-4">By {blog.postedBy}</span>
          <LiaCommentsSolid className="mr-1" />
          <span>{blog.comments} Comments</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-4">{readMore.title}</h1>

        {/* Below Title: Admin Info and Social Icons */}
        <div className="flex justify-between items-center mb-4">
          {/* Left Side: Admin Info */}
          <div className="flex items-center">
            <img src={readMore.adminImg} alt={blog.postedBy} className="w-12 h-12 rounded-full mr-3" />
            <div>
              <p className="font-semibold">{blog.postedBy}</p>
              <p className="text-sm text-gray-600">{blog.date} • Opened ago 6 min</p>
            </div>
          </div>
          {/* Right Side: Social Icons */}
          <div className="flex space-x-2">
            {/* Assuming readMore.urls has [facebook, twitter, instagram, share] */}
            {readMore.urls[0] && (
              <a href={readMore.urls[0]} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                <FaFacebook size={20} />
              </a>
            )}
            {readMore.urls[1] && (
              <a href={readMore.urls[1]} target="_blank" rel="noopener noreferrer" className="text-blue-400">
                <FaTwitter size={20} />
              </a>
            )}
            {readMore.urls[2] && (
              <a href={readMore.urls[2]} target="_blank" rel="noopener noreferrer" className="text-pink-600">
                <FaInstagram size={20} />
              </a>
            )}
            {readMore.urls[3] && (
              <a href={readMore.urls[3]} target="_blank" rel="noopener noreferrer" className="text-gray-600">
                <FaShare size={20} />
              </a>
            )}
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="my-4" />

        {/* Subtitle */}
        <h2 className="text-xl font-semibold mb-4">{readMore.subTitle}</h2>

        {/* Paragraphs (para1) */}
        {readMore.para1.map((paragraph, index) => (
          <p key={index} className="mb-4 text-gray-700">{paragraph}</p>
        ))}

        {/* Two Images */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {readMore.insideImg.slice(0, 2).map((imgSrc, index) => (
            <img
              key={`inside-img-${index}`}
              src={imgSrc}
              alt={`Inside blog ${index + 1}`}
              className="w-full h-48 object-cover rounded"
            />
          ))}
        </div>

        {/* Optional para2 */}
        {readMore.para2 && (
  <p className="mb-4 text-gray-700">{readMore.para2}</p>
)}

      </div>

      {/* Sidebar on the Right */}
      <aside className="w-1/4 p-4 bg-gray-100 rounded-lg shadow-md">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by title, category, or tag..."
          value={searchTerm}
          onChange={handleSearchChange}
          onFocus={() => searchTerm && setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)} // Delay to allow click
          className="mb-4 p-2 border rounded w-full"
        />
        {showSuggestions && suggestions.length > 0 && (
          <ul className="absolute bg-white border border-green-500 rounded w-full max-h-40 overflow-y-auto z-10 mb-4">
            {suggestions.map((suggestion, idx) => (
              <li
                key={`${suggestion}-${idx}`} // Ensure unique keys even if suggestions repeat
                className="p-2 hover:bg-primary hover:text-white cursor-pointer"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}

        <hr className="my-4" />

        {/* Top Categories */}
        <h2 className="font-bold text-lg mb-2">Top Categories</h2>
        <ul className="text-sm mb-4">
          {Object.keys(categories).map((category) => (
            <li
              key={category}
              className='flex justify-between mb-2 rounded p-2 cursor-pointer hover:bg-primary hover:text-white'
              onClick={() => handleCategoryClick(category)} // Navigate on category click
            >
              <span>{category}</span>
              <span>({categories[category]})</span>
            </li>
          ))}
        </ul>

        <hr className="my-4" />

        {/* Popular Tags */}
        <h2 className="font-bold text-lg mb-2">Popular Tags</h2>
        <div className="flex flex-wrap mb-4">
          {tags.map((tag) => (
            <Link
              to={`/blog?category=${encodeURIComponent(tag)}`}
              key={tag}
              className="mb-2 mr-2 cursor-pointer border-2 text-black rounded-full px-3 py-1 text-sm hover:bg-primary hover:text-white"
            >
              {tag}
            </Link>
          ))}
        </div>

        <hr className="my-4" />

        {/* Our Gallery */}
        <h2 className="font-bold text-lg mb-2">Our Gallery</h2>
        <div className="grid grid-cols-2 gap-2 mb-4">
          {blogData.slice(0, 8).map((post) => (
            <img
              key={post.id}
              src={post.img}
              alt={`Gallery ${post.id}`}
              className="w-full h-24 object-cover rounded"
            />
          ))}
        </div>

        <hr className="my-4" />

        {/* Recently Added */}
        <h2 className="font-bold text-lg mb-2">Recently Added</h2>
        <ul className="text-sm">
          {blogData
            .slice()
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 5)
            .map((post) => (
              <li key={post.id} className="mb-2 cursor-pointer hover:text-primary">
                <Link to={`/blog/${post.id}`}>
                  {post.title}
                </Link>
              </li>
            ))}
        </ul>
      </aside>
    </div>
  );
};

export default SingleBlog;
