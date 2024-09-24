import React, { useState, useEffect } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import ProductCard from './ProductCard';

const categories = [
  { value: 'all', label: 'All Products' },
  { value: 'Fruits', label: 'Fresh Fruit' },
  { value: 'Vegetables', label: 'Vegetables' },
  { value: 'Cooking', label: 'Cooking' },
  { value: 'Snacks', label: 'Snacks' },
  { value: 'Beverages', label: 'Beverages' },
  { value: 'Beauty', label: 'Beauty & Health' },
  { value: 'Bread & Bakery', label: 'Bread & Bakery' },
];

const FilterOne = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState(products || []);
  const [category, setCategory] = useState('all');
  const [price, setPrice] = useState(1500);
  const [rating, setRating] = useState([]);
  const [tags, setTags] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Dropdown states for all filters
  const [showCategories, setShowCategories] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [showRating, setShowRating] = useState(false);
  const [showTags, setShowTags] = useState(false);

  const ITEMS_PER_PAGE = 12;

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  // Set default state for all filters based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setShowCategories(true);
        setShowPrice(true);
        setShowRating(true);
        setShowTags(true);
      } else {
        setShowCategories(false);
        setShowPrice(false);
        setShowRating(false);
        setShowTags(false);
      }
    };

    // Check the window size when component mounts
    handleResize();

    // Add event listener to handle screen resizing
    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    let filtered = products;

    if (category !== 'all') {
      filtered = filtered.filter(product => product.category === category);
    }

    filtered = filtered.filter(product => product.price.discounted <= price);

    if (rating.length > 0) {
      filtered = filtered.filter(product => rating.some(r => product.rating >= r));
    }

    if (tags.length > 0) {
      filtered = filtered.filter(product => tags.every(tag => product.tags.includes(tag)));
    }

    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [category, price, rating, tags, products]);

  const handlePriceChange = (event) => {
    setPrice(Number(event.target.value));
  };

  const handleRatingChange = (event) => {
    const value = Number(event.target.value);
    setRating(prev =>
      prev.includes(value) ? prev.filter(r => r !== value) : [...prev, value]
    );
  };

  const handleTagChange = (tag) => {
    setTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategorySelect = (value) => {
    setCategory(value);
    if (window.innerWidth < 1024) {
      setShowCategories(false); // Close dropdown on small screens after selection
    }
  };

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 5; i >= 1; i--) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i === Math.ceil(rating)) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-500" />);
      }
    }
    return stars;
  };

  return (
    <section className='relative w-full p-0 sm:p-4'>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        {/* Filter Section */}
        <div className="p-4 lg:col-span-1">
          <div>
            <div className="flex items-center justify-between">
              <h4 className="font-bold">All Categories</h4>
              <button onClick={() => setShowCategories(!showCategories)}>
                {showCategories ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>
            {showCategories && (
              <div className="mt-2 space-y-2">
                {categories.map(cat => (
                  <label
                    key={cat.value}
                    className="flex items-center cursor-pointer"
                    onClick={() => handleCategorySelect(cat.value)}
                  >
                    <input
                      type="radio"
                      name="category"
                      value={cat.value}
                      checked={category === cat.value}
                      onChange={() => setCategory(cat.value)}
                      className="hidden peer"
                    />
                    <div
                      className={`w-5 h-5 mr-2 border-2 rounded-full flex items-center justify-center border-gray-200 peer-checked:border-primary peer-checked:bg-white-100`}
                    >
                      {category === cat.value && (
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      )}
                    </div>
                    {cat.label}
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Price Filter */}
          <div className="mt-2">
            <div className="flex items-center justify-between">
              <h4 className="font-bold">Price</h4>
              <button onClick={() => setShowPrice(!showPrice)}>
                {showPrice ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>
            {showPrice && (
              <>
                <input
                  type="range"
                  min="5"
                  max="50"
                  value={price}
                  onChange={handlePriceChange}
                  className="w-2/3"
                />
                <div>Price: ${price}</div>
              </>
            )}
          </div>

          {/* Rating Filter */}
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <h4 className="font-bold">Rating</h4>
              <button onClick={() => setShowRating(!showRating)}>
                {showRating ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>
            {showRating && (
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map(r => (
                  <label key={r} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value={r}
                      checked={rating.includes(r)}
                      onChange={handleRatingChange}
                      className="mr-2"
                    />
                    <div className="flex items-center">
                      {renderStars(r)}
                      <span className="ml-2">{r} & up</span>
                    </div>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Popular Tags Filter */}
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <h4 className="font-bold">Popular Tags</h4>
              <button onClick={() => setShowTags(!showTags)}>
                {showTags ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>
            {showTags && (
              <div className="flex flex-wrap gap-2">
               {['Healthy', 'Low fat', 'Vegetarian', 'Kid foods', 'Vitamins', 'Bread', 'Meat', 'Snacks', 'Tiffin', 'Lunch', 'Dinner', 'Breakfast', 'Fruit'].map(tag => (
                  <button
                    key={tag}
                    className={`px-3 py-1 border rounded-full ${tags.includes(tag) ? 'bg-primary text-white' : 'bg-gray-200'}`}
                    onClick={() => handleTagChange(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Product Section */}
        <div className="p-4 lg:col-span-3">
          {filteredProducts.length === 0 ? (
            <div>No products found</div>
          ) : (
            <div className="grid grid-cols-1 gap-4 xsm:grid-cols-2 md:grid-cols-2 mmd:grid-cols-3">
              {paginatedProducts.map(product => (
                <ProductCard
                  product={product}
                  key={product.id}
                  imageSrc={product.images[0].main}
                  productName={product.name}
                  price={product.price.discounted}
                  oldPrice={product.price.original}
                  rating={product.rating}
                />
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                className={`px-3 py-1 border rounded-full ${currentPage === index + 1 ? 'bg-primary text-white' : 'bg-gray-200'}`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterOne;
