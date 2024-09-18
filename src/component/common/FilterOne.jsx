import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard'; // Assume you have this component implemented.

// Category options for filtering
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

const FilterOne = ({ products = [] }) => {
    // Local states for filters
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [category, setCategory] = useState('all');
    const [priceRange, setPriceRange] = useState([50, 1500]);
    const [rating, setRating] = useState([]);
    const [tags, setTags] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const ITEMS_PER_PAGE = 16;

    // Debugging Logs for Product Data and Filters
    useEffect(() => {
        console.log('Product Data:', products);
        console.log('Current Filters:', { category, priceRange, rating, tags });
    }, [products, category, priceRange, rating, tags]);

    // Effect for filtering products based on selected filters
    useEffect(() => {
        if (!products || products.length === 0) {
            console.error('No products available or products prop is undefined');
            setFilteredProducts([]);
            return;
        }

        let filtered = products;

        // Filter by category
        if (category !== 'all') {
            filtered = filtered.filter(product => product.category === category);
        }

        // Filter by price range
        filtered = filtered.filter(product => {
            if (!product.price || product.price.discounted === undefined) return false;
            return product.price.discounted >= priceRange[0] && product.price.discounted <= priceRange[1];
        });

        // Filter by rating
        if (rating.length > 0) {
            filtered = filtered.filter(product => rating.some(r => product.rating >= r));
        }

        // Filter by tags
        if (tags.length > 0) {
            filtered = filtered.filter(product => tags.some(tag => product.tags.includes(tag)));
        }

        console.log('Filtered products:', filtered);
        setFilteredProducts(filtered);
        setCurrentPage(1); // Reset pagination when filters change
    }, [category, priceRange, rating, tags, products]);

    // Handle price range change (separate for min and max)
    const handlePriceChange = (minOrMax, event) => {
        const value = Number(event.target.value);
        setPriceRange(prev =>
            minOrMax === 'min' ? [value, prev[1]] : [prev[0], value]
        );
    };

    // Handle rating checkbox change
    const handleRatingChange = (event) => {
        const value = Number(event.target.value);
        setRating(prev => prev.includes(value) ? prev.filter(r => r !== value) : [...prev, value]);
    };

    // Handle tag checkbox change
    const handleTagChange = (tag) => {
        setTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
    };

    // Handle pagination change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Pagination logic
    const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
    const paginatedProducts = filteredProducts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    return (
        <div className="flex p-4 space-x-4">
            {/* Filter Section */}
            <div className="w-1/4 space-y-6">
                <div>
                    <h4 className="font-bold">All Categories</h4>
                    <div className="space-y-2">
                        {categories.map(cat => (
                            <label key={cat.value} className="block">
                                <input
                                    type="radio"
                                    name="category"
                                    value={cat.value}
                                    checked={category === cat.value}
                                    onChange={() => setCategory(cat.value)}
                                    className="mr-2"
                                />
                                {cat.label}
                            </label>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="font-bold">Price</h4>
                    <div className="flex items-center justify-between space-x-2">
                        <input
                            type="range"
                            min="50"
                            max="1500"
                            value={priceRange[0]}
                            onChange={(e) => handlePriceChange('min', e)}
                            className="w-full"
                        />
                        <input
                            type="range"
                            min="50"
                            max="1500"
                            value={priceRange[1]}
                            onChange={(e) => handlePriceChange('max', e)}
                            className="w-full"
                        />
                    </div>
                    <div>Price: ${priceRange[0]} - ${priceRange[1]}</div>
                </div>

                <div>
                    <h4 className="font-bold">Rating</h4>
                    <div className="space-y-2">
                        {[5, 4, 3, 2, 1].map(r => (
                            <label key={r} className="block">
                                <input
                                    type="checkbox"
                                    value={r}
                                    checked={rating.includes(r)}
                                    onChange={handleRatingChange}
                                    className="mr-2"
                                />
                                {r} & up
                            </label>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="font-bold">Popular Tags</h4>
                    <div className="space-y-2">
                        {['Healthy', 'Low fat', 'Vegetarian', 'Kid foods', 'Vitamins', 'Bread'].map(tag => (
                            <label key={tag} className="block">
                                <input
                                    type="checkbox"
                                    value={tag}
                                    onChange={() => handleTagChange(tag)}
                                    className="mr-2"
                                />
                                {tag}
                            </label>
                        ))}
                    </div>
                </div>
            </div>

            {/* Product List Section */}
            <div className="w-3/4">
                <h3>Showing {filteredProducts.length} products</h3>
                {paginatedProducts.length === 0 ? (
                    <p>No products found</p>
                ) : (
                    <div className="grid grid-cols-4 gap-4">
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

export default FilterOne;
