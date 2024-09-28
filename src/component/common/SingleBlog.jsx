// SingleBlog.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogData } from '../../data/common/blogData'; // Adjust the path if needed
import { GoTag } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import { LuDot } from "react-icons/lu";
import { BsLink } from "react-icons/bs";
import { LiaCommentsSolid } from "react-icons/lia";
import { FaFacebook, FaTwitter, FaInstagram, FaShare } from "react-icons/fa";
import Saleofmonth from './Saleofmonth';
import fruits from "../../assets/home5/countdown/fruits.svg";
const saleData = {
  image: fruits,
  heading1: 'SUMMER SALES',
  heading2: 'Fresh Fruit',
  isTimer: false,
  deadline: '2024-09-30T23:59:59', // Example deadline
  discount: 56, // 50% discount
};

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
  const [timeOpened, setTimeOpened] = useState(new Date());
  const [timeAgo, setTimeAgo] = useState('');

   // State to manage form inputs
   const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State to manage checkbox for saving name and email
  const [saveInfo, setSaveInfo] = useState(false);

  // State to manage comments
  const [comments, setComments] = useState([]);

  // State to manage showing more comments
  const [visibleComments, setVisibleComments] = useState(6);

  // Load name and email from localStorage on initial render
  useEffect(() => {
    const savedName = localStorage.getItem('name');
    const savedEmail = localStorage.getItem('email');
    if (savedName && savedEmail) {
      setFormData({ ...formData, name: savedName, email: savedEmail });
      setSaveInfo(true);
    }
  }, []);

   // Function to handle checkbox change
   const handleCheckboxChange = (e) => {
    setSaveInfo(e.target.checked);
  };

  // Function to handle form input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Function to get current date
  const getCurrentDate = () => {
    const date = new Date();
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Function to handle new comment submission
  const handleAddComment = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Check if all fields are filled
    if (!name || !email || !message) {
      alert('All fields are required!');
      return;
    }

    // Save name and email to localStorage if the checkbox is checked
    if (saveInfo) {
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
    } else {
      // If the checkbox is unchecked, remove the stored data
      localStorage.removeItem('name');
      localStorage.removeItem('email');
    }
    // Properly define newComment
    const newComment = {
      id: comments.length + 1,
      name,
      email,
      date: getCurrentDate(),
      message,
      image: `https://ui-avatars.com/api/?name=${name}&background=random`, // Avatar service based on name
    };

    // Add the new comment to the state
    setComments([newComment, ...comments]);

    // Reset form data after adding the comment
    setFormData({ name: '', email: '', message: '' });
  };

  // Function to load more comments
  const handleLoadMore = () => {
    setVisibleComments((prev) => prev + 6);
  };
  
 

  
  useEffect(() => {
    const intervalId = setInterval(() => {
      updateTimeAgo();
    }, 60000); // Update every minute

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  
  // Create category counts from data
  const categories = blogData.reduce((acc, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1;
    return acc;
  }, {});

  const tags = ['Healthy', 'Low Fat', 'Vegetarian', 'Bread', 'Kid foods', 'Vitamins', 'Snacks', 'Tiffin', 'Meat', 'Lunch', 'Dinner'];

  // Combined list of searchable terms (categories and tags)
  const searchableTerms = [...Object.keys(categories), ...tags];
  // Function to calculate "time ago" in a human-readable format
  const updateTimeAgo = () => {
    const now = new Date();
    const timeDifference = Math.floor((now - timeOpened) / 1000); // Time difference in seconds

    let timeAgoText = '';
    if (timeDifference < 60) {
      timeAgoText = 'Just now';
    } else if (timeDifference < 3600) {
      const minutes = Math.floor(timeDifference / 60);
      timeAgoText = `${minutes} min ago`;
    } else if (timeDifference < 86400) {
      const hours = Math.floor(timeDifference / 3600);
      timeAgoText = `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (timeDifference < 2592000) {
      const days = Math.floor(timeDifference / 86400);
      timeAgoText = `${days} day${days > 1 ? 's' : ''} ago`;
    } else {
      const months = Math.floor(timeDifference / 2592000);
      timeAgoText = `${months} month${months > 1 ? 's' : ''} ago`;
    }

    setTimeAgo(timeAgoText);
  };
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
    <div className="w-10/12 dsx:w-10/12 flex flex-col-reverse  mx-auto p-4  sm:flex-col-reverse md:flex-col-reverse  lg:flex-row lg: ">
      {/* Main Content */}
      <div className="flex-1 mr-8 mx-auto">
        {/* Big Image */}
        <img loading='lazy' src={blog.img} alt={readMore.title} className="w-full h-auto rounded-lg mb-4" />

        {/* Icons: Tag, Human, Comments */}
        <div className="flex items-center mb-2 text-gray-700 ">
          <GoTag className="mr-1" />
          <span className="mr-4 text-primary text-[0.6rem] sm:text-[0.6rem] md:text-[0.8rem] lg:text-[1rem]">{blog.category}</span>
          <IoPersonOutline className="mr-1" />
          <span className="mr-4 text-primary text-[0.6rem] sm:text-[0.6rem] md:text-[0.8rem] lg:text-[1rem]">By {blog.postedBy}</span>
          <LiaCommentsSolid className="mr-1 " />
          <span className='text-primary text-[0.6rem] sm:text-[0.6rem] md:text-[0.8rem] lg:text-[1rem]'>{blog.comments} Comments</span>
        </div>

        {/* Title */}
        <h1 className=" font-bold mb-4 text-xl sm:text-xl md:text-2xl lg:text-3xl">{readMore.title}</h1>

        {/* Below Title: Admin Info and Social Icons */}
        <div className="dsx:flex dsx:justify-between dsx:justify-between  lg:flex justify-between  mb-4 ">
        <div className="flex items-center">
      <img
        loading="lazy"
        src={readMore.adminImg}
        alt={blog.postedBy}
        className="w-12 h-12 rounded-full mr-3"
      />
      <div className=''>
        <p className="font-semibold">{blog.postedBy}</p>
        <p className="text-sm text-gray-600">
          {blog.date} • Opened {timeAgo}
        </p>
      </div>
      
    </div>
          {/* Right Side: Social Icons */}
          <div className="flex items-center gap-1 space-x-2">
            {/* Assuming readMore.urls has [facebook, twitter, instagram, share] */}
            {readMore.urls[0] && (
              <a href={readMore.urls[0]} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-primary hover:text-white-200">
               <FaFacebook />
              </a>
            )}
            {readMore.urls[1] && (
              <a href={readMore.urls[1]} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-primary hover:text-white-200  ">
                <FaTwitter  />
              </a>
            )}
            {readMore.urls[2] && (
              <a href={readMore.urls[2]} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-primary hover:text-white-200">
                <FaInstagram  />
              </a>
            )}
            <button
    onClick={() => {
      if (navigator.share) {
        navigator.share({
          title: 'Check this out!',
          text: 'Check this awesome content!',
          url: window.location.href,
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
      } else {
        // Fallback for devices/browsers that do not support Web Share API
        alert('Web Share API is not supported in this browser.');
      }
    }}
    className="text-gray-600"
  >
    <BsLink size={30}  className='p-2 rounded-full hover:bg-primary hover:text-white-200'/>
  </button>

          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="my-4" />

        {/* Subtitle */}
        <h2 className="text-base font-semibold mb-4 sm:text-lg md:text-xl lg:text-2xl">{readMore.subTitle}</h2>

        {/* Paragraphs (para1) */}
        {readMore.para1.map((paragraph, index) => (
          <p key={index} className="text-sm font-poppins text-gray-700 mb-4 sm:text-sm text-justify md:text-base lg:text-lg">{paragraph}</p>
        ))}

        {/* Two Images */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {readMore.insideImg.slice(0, 2).map((imgSrc, index) => (
            <img
            loading='lazy'
              key={`inside-img-${index}`}
              src={imgSrc}
              alt={`Inside blog ${index + 1}`}
              className="w-full h-48 object-cover rounded"
            />
          ))}
        </div>

        {/* Optional para2 */}
        {readMore.para2 && (
  <p className=" text-sm font-poppins text-gray-700 mb-4 sm:text-sm text-justify md:text-base lg:text-lg">{readMore.para2}</p>
)}
 <div className='mx-auto'>
 <Saleofmonth
        image={saleData.image}
        heading1={saleData.heading1}
        heading2={saleData.heading2}
        isTimer={saleData.isTimer}
        deadline={saleData.deadline}
        discount={saleData.discount}
        textColor="text-gray-100"
      />
 </div>
 <div className="comment-section">
      <h3 className="text-2xl font-poppins font-bold mb-4">Leave a Comment</h3>
      
      {/* Comment Form */}
      <form onSubmit={handleAddComment} className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <label htmlFor="name">Full Name <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          /></label>
          
          <label htmlFor="email">Email<input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          /></label>
          
        </div>
       <label htmlFor="message">Message <textarea
          name="message"
          placeholder="Your Comment"
          value={formData.message}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded h-32"
          required
        ></textarea></label>
        {/* Save Info Checkbox */}
        <div className="mt-4 flex items-center">
          <input
            type="checkbox"
            id="saveInfo"
            checked={saveInfo}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          <label htmlFor="saveInfo" className="text-sm">
            Save my name and email in this browser for next time I comment
          </label>
        </div>
        <button
          type="submit"
          className="mt-4  px-4 py-2 rounded-full bg-white-200 border-2 hover:text-white-200 hover:bg-primary text-black-900"
        >
          Post Comment
        </button>
      </form>

      {/* Displaying Comments */}
      <h3 className="text-xl font-bold mb-4">Comments</h3>
      {comments.slice(0, visibleComments).map((comment) => (
        <div key={comment.id} className="comment-item border-b-2 p-4 mb-6 flex items-start space-x-4">
          <img
            src={comment.image}
            alt={comment.name}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <div className='flex items-center'>
            <span className="font-semibold font-poppins">{comment.name}</span>
            <LuDot />
            <span className="text-base text-gray-500 font-poppins">{comment.date}</span>
            </div>
            <p className="mt-2 font-poppins text-gray-700">{comment.message}</p>
          </div>
        </div>
      ))}

      {/* Load More Button */}
      {comments.length > visibleComments && (
        <button
          onClick={handleLoadMore}
          className="bg-primary text-whitte-200 px-4 py-2 rounded "
        >
          Load More
        </button>
      )}
    </div>
      </div>

      {/* Sidebar on the Right */}
      <div className="mx-auto w-10/12 p-4  lg:w-1/4 ">
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
        <h2 className="font-bold text-[1.1rem] mb-2 border-black-500 border-b-2 ">Top Categories</h2>
        <ul className="text-sm mb-4 ">
          {Object.keys(categories).map((category) => (
            <li
              key={category}
              className='mb-2 flex items-center justify-between text-[0.8rem] rounded p-2 cursor-pointer hover:bg-primary hover:text-white-200'
              onClick={() => handleCategoryClick(category)} // Navigate on category click
            >
              <span>{category}</span>
              <span>({categories[category]})</span>
            </li>
          ))}
        </ul>

        <hr className="my-4" />

        {/* Popular Tags */}
        <h2 className="font-bold text-[1.1rem] mb-2 border-black-500 border-b-2 ">Popular Tags</h2>
        <div className="flex flex-wrap mb-4">
          {tags.map((tag) => (
            <Link
              to={`/blog?category=${encodeURIComponent(tag)}`}
              key={tag}
              className="mb-2 cursor-pointer border-2 text-black-900 rounded-full ml-2 p-2 text-[0.8rem] font-poppins hover:bg-primary hover:text-white-200"
            >
              {tag}
            </Link>
          ))}
        </div>

        <hr className="my-4" />

        {/* Our Gallery */}
        <h2 className="font-bold text-lg mb-2 border-black-500 border-b-2">Our Gallery</h2>
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
      </div>
    </div>
  );
};

export default SingleBlog;
