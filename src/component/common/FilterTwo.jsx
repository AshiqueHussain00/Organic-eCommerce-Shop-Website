import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard"; // Assume you have this component implemented.
import Select from "react-select";
import Saleofmonth from "./Saleofmonth";
import fruits from '../../assets/home5/countdown/fruits.svg'
import NewsletterThree from './NewsletterThree'
// List of categories provided
const categories = [
  { value: "all", label: "All Products" },
  { value: "Fruits", label: "Fresh Fruit" },
  { value: "Vegetables", label: "Vegetables" },
  { value: "Cooking", label: "Cooking" },
  { value: "Snacks", label: "Snacks" },
  { value: "Beverages", label: "Beverages" },
  { value: "Beauty-health", label: "Beauty & Health" },
  { value: "Bread & Bakery", label: "Bread & Bakery" },
];

const ITEMS_PER_PAGE = 16; // Default number of products to show per page

const FilterTwo = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [category, setCategory] = useState(categories[0]); // Default to 'All Products'
  const [priceRange, setPriceRange] = useState({
    value: "all",
    label: "Select Price",
  });
  const [rating, setRating] = useState({
    value: "all",
    label: "Select Rating",
  });
  const [sortOrder, setSortOrder] = useState("latest"); // latest, price-low-to-high, price-high-to-low, highest-rating, lowest-rating
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const [itemsPerPage, setItemsPerPage] = useState(ITEMS_PER_PAGE); // Number of products per page

  const handleRemoveFilter = (filterType) => {
    if (filterType === "category") {
      setCategory(categories[0]); // Reset to default category
    } else if (filterType === "priceRange") {
      setPriceRange({ value: "all", label: "Select Price" }); // Reset price range
    } else if (filterType === "rating") {
      setRating({ value: "all", label: "Select Rating" }); // Reset rating
    }
  };

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    let filtered = products;

    if (category.value !== "all") {
      filtered = filtered.filter(
        (product) => product.category === category.value
      );
    }

    if (priceRange.value !== "all") {
      const [minPrice, maxPrice] = priceRange.value.split("-").map(Number);
      filtered = filtered.filter(
        (product) =>
          product.price.discounted >= minPrice &&
          product.price.discounted <= maxPrice
      );
    }

    if (rating.value !== "all") {
      filtered = filtered.filter(
        (product) => product.rating >= parseFloat(rating.value)
      );
    }

    switch (sortOrder) {
      case "price-low-to-high":
        filtered = filtered.sort(
          (a, b) => a.price.discounted - b.price.discounted
        );
        break;
      case "price-high-to-low":
        filtered = filtered.sort(
          (a, b) => b.price.discounted - a.price.discounted
        );
        break;
      case "lowest-rating":
        filtered = filtered.sort((a, b) => a.rating - b.rating);
        break;
      case "highest-rating":
        filtered = filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "latest":
        filtered = filtered.sort((a, b) => b.id.localeCompare(a.id));
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [category, priceRange, rating, sortOrder, products, itemsPerPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const sortOrderLabel = {
    latest: "Latest",
    "price-low-to-high": "Price Low to High",
    "price-high-to-low": "Price High to Low",
    "lowest-rating": "Lowest Rating",
    "highest-rating": "Highest Rating",
  };

  // Pagination logic
  const renderPagination = () => {
    const pages = [];
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    if (totalPages <= 1) return null; // No need for pagination if only 1 page

    // Create first few pages, ellipses, and last few pages
    const visiblePages = [1, 2, 3, totalPages - 1, totalPages]; // Always show first, second, third, second-last, and last

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || Math.abs(currentPage - i) < 2) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`mx-1 px-3 py-2 rounded-full ${
              currentPage === i ? "bg-branding-success text-white-200" : "text-black-800 hover:bg-primary hover:text-white-200"
            }`}
          >
            {i}
          </button>
        );
      } else if (
        visiblePages.includes(i) &&
        !pages.some((page) => page.key === `${i}-ellipses`)
      ) {
        pages.push(
          <span key={`${i}-ellipses`} className="mx-2">
            ...
          </span>
        );
      }
    }

    return (
      <div className="flex items-center space-x-2 font-poppins">
        {/* Previous Button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-2 bg-gray-400 rounded-full hover:bg-primary text-white-200"
        >
          {"<"}
        </button>

        {/* Page Buttons */}
        {pages}

        {/* Next Button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-2 bg-gray-400 rounded-full hover:bg-primary text-white-200"
        >
          {">"}
        </button>
      </div>
    );
  };

  return (
   <section>
    <div>
    <div className="flex flex-col w-10/12 mx-auto font-poppins ">
      <Saleofmonth
        image={fruits}
        heading1="BEST DEALS"
        heading2="Sale of the Month"
        isTimer={true}
        deadline="September 25, 2024"
         discount="56%"
      />
      {/* Top Filters Section: Horizontally aligned */}
      <div className="flex flex-wrap items-center justify-between w-full mb-6">
        {/* Left Side Filters */}
        <div className="flex flex-wrap space-x-4 mb-4 lg:mb-0 w-full lg:w-auto">
          {/* Category Filter */}
          <div className="flex-grow min-w-max">
            <Select
              options={categories}
              onChange={setCategory}
              value={category}
              placeholder="Select Category"
            />
          </div>

          {/* Price Range Filter */}
          <div className="flex-grow min-w-max">
            <Select
              options={[
                { value: "all", label: "All Prices" },
                { value: "0-20", label: "$0 - $20" },
                { value: "20-50", label: "$20 - $50" },
                { value: "50-100", label: "$50 - $100" },
                { value: "100-200", label: "$100 - $200" },
              ]}
              onChange={setPriceRange}
              value={priceRange}
              placeholder="Select Price"
            />
          </div>

          {/* Rating Filter */}
          <div className="flex-grow min-w-max">
            <Select
              options={[
                { value: "all", label: "All Ratings" },
                { value: "1", label: "1 Star & Up" },
                { value: "2", label: "2 Stars & Up" },
                { value: "3", label: "3 Stars & Up" },
                { value: "4", label: "4 Stars & Up" },
                { value: "5", label: "5 Stars" },
              ]}
              onChange={setRating}
              value={rating}
              placeholder="Select Rating"
            />
          </div>
        </div>

        {/* Right Side Filters */}
        <div className="flex flex-wrap space-x-4 w-full lg:w-auto">
          {/* Sort Order Dropdown */}
          <div className="flex items-center space-x-2 min-w-max">
            <span className="text-gray-700">Sort By:</span>
            <select
              className="p-2 border rounded"
              onChange={(e) => setSortOrder(e.target.value)}
              value={sortOrder}
            >
              <option value="latest">{sortOrderLabel[sortOrder]}</option>
              <option value="price-low-to-high">Price Low to High</option>
              <option value="price-high-to-low">Price High to Low</option>
              <option value="highest-rating">Highest Rating</option>
              <option value="lowest-rating">Lowest Rating</option>
            </select>
          </div>

          {/* Items Per Page Dropdown */}
          <div className="flex items-center space-x-2 min-w-max">
            <span className="text-gray-700">Show:</span>
            <select
              className="p-2 border rounded"
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
              value={itemsPerPage}
            >
              <option value={8}>8</option>
              <option value={16}>16</option>
              <option value={32}>32</option>
            </select>
          </div>
        </div>
      </div>


            {/* Display active filters with close buttons */}
      
            <div className="mb-4 flex items-center justify-between  ">
  <div className="flex items-center">
    <span className="mr-4 ">Active Filters:</span>
    <div className="flex flex-wrap items-center mt-1">
      {category.value !== "all" && (
        <button
          className="mr-2 mb-2 inline-flex items-center px-3 py-1  text-black-900 text-sm font-bold"
          onClick={() => handleRemoveFilter("category")}
        >
          {category.label} <span className="ml-2 font-bold">✕</span>
        </button>
      )}
      {priceRange.value !== "all" && (
        <button
          className="mr-2 mb-2 inline-flex items-center px-3 py-1 text-black-900 text-sm font-bold"
          onClick={() => handleRemoveFilter("priceRange")}
        >
          {priceRange.label} <span className="ml-2">✕</span>
        </button>
      )}
      {rating.value !== "all" && (
        <button
          className="mr-2 mb-2 inline-flex items-center px-3 py-1 bg-gray-200 text-gray-800 text-sm font-medium border rounded"
          onClick={() => handleRemoveFilter("rating")}
        >
          {rating.label} <span className="ml-2">✕</span>
        </button>
      )}
    </div>
  </div>
  <h3> {filteredProducts.length} results found</h3>
</div>

      {/* Products Display Section */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {paginatedProducts.map((product) => (
            <ProductCard
            key={product.id}
            imageSrc={product.images[0].main}
            productName={product.name}
            price={product.price.discounted}
            oldPrice={product.price.original}
            rating={product.rating}
            onAddToCart={() => handleAddToCart(product.name)}
            isSale={!!product.promotions.discount}
            saleText={product.promotions.discount}
          />
        ))}
      </div>

      {/* Pagination Section */}
      <div className="flex justify-center mt-8">
        {renderPagination()}
      </div>
     
    </div>
    </div>
    <div className="p-4">
     <NewsletterThree/>
     </div>
   </section>
  );
};

export default FilterTwo;
