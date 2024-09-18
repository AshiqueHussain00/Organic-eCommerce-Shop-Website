import React, { useState, useEffect } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'; // Import star icons
import ProductCard from './ProductCard'; // Ensure this component is implemented properly.

const categories = [
  { value: 'all', label: 'All Products' },
  { value: 'Fruits', label: 'Fresh Fruit' },
  { value: 'Vegetables', label: 'Vegetables' },
  { value: 'Cooking', label: 'Cooking' },
  { value: 'Snacks', label: 'Snacks' },
  { value: 'Beverages', label: 'Beverages' },
  { value: 'Beauty-health', label: 'Beauty & Health' },
  { value: 'Bread & Bakery', label: 'Bread & Bakery' },
];

const FilterOne = ({ products }) => {
  // State management
  const [filteredProducts, setFilteredProducts] = useState(products || []);
  const [category, setCategory] = useState('all'); // Default to 'all' categories
  const [price, setPrice] = useState(1500); // Default single price
  const [rating, setRating] = useState([]); // Array for multiple ratings filter
  const [tags, setTags] = useState([]); // Array for tags filter
  const [currentPage, setCurrentPage] = useState(1); // Pagination state

  const ITEMS_PER_PAGE = 12; // Define the number of items per page

  // UseEffect to set initial filtered products to all products
  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  // Filter products based on selected filters (category, price, rating, tags)
  useEffect(() => {
    if (!products || products.length === 0) {
      setFilteredProducts([]);
      return;
    }

    let filtered = products;

    // Apply category filter
    if (category !== 'all') {
      filtered = filtered.filter(product => product.category === category);
    }

    // Apply price filter
    filtered = filtered.filter(product => product.price.discounted <= price);

    // Apply rating filter
    if (rating.length > 0) {
      filtered = filtered.filter(product => rating.some(r => product.rating >= r));
    }

    // Apply tags filter
    if (tags.length > 0) {
      filtered = filtered.filter(product => tags.every(tag => product.tags.includes(tag)));
    }

    

    // Set the filtered products and reset pagination to the first page
    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [category, price, rating, tags, products]);

  // Handle price change
  const handlePriceChange = (event) => {
    setPrice(Number(event.target.value));
  };

  // Handle rating filter changes
  const handleRatingChange = (event) => {
    const value = Number(event.target.value);
    setRating(prev =>
      prev.includes(value) ? prev.filter(r => r !== value) : [...prev, value]
    );
  };

  // Handle tag filter changes
  const handleTagChange = (tag) => {
    setTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  // Handle pagination
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  // Render stars for rating
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
    <section className='relative w-full p-4'>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        {/* Filter Section */}
        <div className="p-4lg:col-span-1">
          <div>
            <h4 className="font-bold">All Categories</h4>
            <div className="space-y-2">
              {categories.map(cat => (
                <label
                  key={cat.value}
                  className="flex items-center cursor-pointer"
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
          </div>

          <div className="mt-4">
            <h4 className="font-bold">Price</h4>
            <input
              type="range"
              min="5"
              max="50"
              value={price}
              onChange={handlePriceChange}
              className="w-2/3"
            />
            <div>Price: ${price}</div>
          </div>

          <div className="mt-4">
            <h4 className="font-bold">Rating</h4>
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
          </div>

          <div className="mt-4">
            <h4 className="font-bold">Popular Tags</h4>
            <div className="flex flex-wrap gap-2">
              {['Healthy', 'Low fat', 'Vegetarian', 'Kid foods', 'Vitamins', 'Bread', 'Meat', 'Snacks', 'Tiffin', 'Lunch', 'Dinner', 'Breakfast', 'Fruit'].map(tag => (
                <button
                  key={tag}
                  onClick={() => handleTagChange(tag)}
                  className={`px-4 py-2 rounded-full border ${tags.includes(tag) ? 'bg-primary text-white-100' : 'bg-gray-50 text-gray-700'}`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product List Section */}
        <div className="p-4 bg-white-100 lg:col-span-3">
          <h3 className="text-lg font-bold">Showing {filteredProducts.length} products</h3>
          {paginatedProducts.length === 0 ? (
            <p>No products found</p>
          ) : (
            <div className="grid grid-cols-1 gap-4 xsm:grid-cols-2 md:grid-cols-2 mmd:grid-cols-3">
              {paginatedProducts.map(product => (
                <ProductCard
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
                className={`px-3 py-1 border rounded-full ${currentPage === index + 1 ? 'bg-primary text-white-100' : 'bg-gray-200'}`}
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