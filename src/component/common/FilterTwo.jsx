import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard'; // Assume you have this component implemented.
import Select from 'react-select';

// List of categories provided
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

const ITEMS_PER_PAGE = 16; // Number of products to show per page

const FilterTwo = ({ products }) => {
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [category, setCategory] = useState(categories[0]); // Default to 'All Products'
    const [priceRange, setPriceRange] = useState({ value: 'all', label: 'Select Price' });
    const [rating, setRating] = useState({ value: 'all', label: 'Select Rating' });
    const [sortOrder, setSortOrder] = useState('latest'); // latest, price-low-to-high, price-high-to-low, highest-rating, lowest-rating
    const [currentPage, setCurrentPage] = useState(1); // Track current page

    // Calculate total number of pages based on filtered products
    const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

    // Calculate the products to show on the current page
    const paginatedProducts = filteredProducts.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    // Filter function that filters products based on category, price, and rating
    useEffect(() => {
        let filtered = products;

        // Filter by category
        if (category.value !== 'all') {
            filtered = filtered.filter(product => product.category === category.value);
        }

        // Filter by price range
        if (priceRange.value !== 'all') {
            const [minPrice, maxPrice] = priceRange.value.split('-').map(Number);
            filtered = filtered.filter(product => product.price.discounted >= minPrice && product.price.discounted <= maxPrice);
        }

        // Filter by rating
        if (rating.value !== 'all') {
            filtered = filtered.filter(product => product.rating >= parseFloat(rating.value));
        }

        // Sort by selected order
        switch (sortOrder) {
            case 'price-low-to-high':
                filtered = filtered.sort((a, b) => a.price.discounted - b.price.discounted);
                break;
            case 'price-high-to-low':
                filtered = filtered.sort((a, b) => b.price.discounted - a.price.discounted);
                break;
            case 'lowest-rating':
                filtered = filtered.sort((a, b) => b.rating - a.rating);
                break;
            case 'highest-rating':
                filtered = filtered.sort((a, b) => a.rating - b.rating);
                break;
            case 'latest':
                filtered = filtered.sort((a, b) => b.id.localeCompare(a.id)); // Assuming id represents product creation order
                break;
            default:
                break;
        }

        setFilteredProducts(filtered);
        setCurrentPage(1); // Reset to first page when filters change
    }, [category, priceRange, rating, sortOrder, products]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Map sort order to label
    const sortOrderLabel = {
        'latest': 'Latest',
        'price-low-to-high': 'Price Low to High',
        'price-high-to-low': 'Price High to Low',
        'highest-rating': 'Highest Rating',
        'lowest-rating': 'Lowest Rating',
    };

    return (
        <div className="flex flex-col p-4">
            {/* Top Filters Section: Horizontally aligned */}
            <div className="flex justify-between items-center w-full mb-6 space-x-4">
                {/* Category Filter */}
                <div className="flex-1">
                    <Select
                        options={categories} // Using the provided categories
                        onChange={setCategory}
                        value={category}
                        placeholder="Select By Category"
                    />
                </div>

                {/* Price Range Filter */}
                <div className="flex-1">
                    <Select
                        options={[
                            { value: 'all', label: 'All Prices' },
                            { value: '0-20', label: '$0 - $20' },
                            { value: '20-50', label: '$20 - $50' },
                            { value: '50-100', label: '$50 - $100' },
                            { value: '100-200', label: '$100 - $200' },
                        ]}
                        onChange={setPriceRange}
                        value={priceRange}
                        placeholder="Select Price"
                    />
                </div>

                {/* Rating Filter */}
                <div className="flex-1">
                    <Select
                        options={[
                            { value: 'all', label: 'All Ratings' },
                            { value: '1', label: '1 Star & Up' },
                            { value: '2', label: '2 Stars & Up' },
                            { value: '3', label: '3 Stars & Up' },
                            { value: '4', label: '4 Stars & Up' },
                            { value: '5', label: '5 Stars' },
                        ]}
                        onChange={setRating}
                        value={rating}
                        placeholder="Select Rating"
                    />
                </div>

                {/* Sort Order Dropdown */}
                <div className="flex-1">
                    <select
                        className="w-full border rounded p-2"
                        onChange={(e) => setSortOrder(e.target.value)}
                        value={sortOrder}
                    >
                        <option value="latest">Latest</option>
                        <option value="price-low-to-high">Price Low to High</option>
                        <option value="price-high-to-low">Price High to Low</option>
                        <option value="highest-rating">Highest Rating</option>
                        <option value="lowest-rating">Lowest Rating</option>
                    </select>
                </div>
            </div>

            {/* Sort Order Display */}
            <div className="mb-4">
                <h4>Sort By: {sortOrderLabel[sortOrder]}</h4>
            </div>

            {/* Product List */}
            <div className="w-full">
                <h3>Showing {filteredProducts.length} products</h3>
                <div className="grid grid-cols-4 gap-4"> {/* Adjusted grid-cols-4 for 4 products per row */}
                    {paginatedProducts.map(product => (
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

                {/* Pagination Controls */}
                <div className="flex justify-center mt-8 space-x-2">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            className={`px-3 py-1 border rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Dummy function to mimic adding to cart
const handleAddToCart = (productName) => {
    alert(`Added ${productName} to cart!`);
};

export default FilterTwo;
