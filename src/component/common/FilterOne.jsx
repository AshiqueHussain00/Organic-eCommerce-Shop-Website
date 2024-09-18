import React, { useState, useEffect } from 'react';
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

    const ITEMS_PER_PAGE = 16; // Define the number of items per page

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

        console.log('Filtered Products:', filtered); // Debugging statement

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
                    <input
                        type="range"
                        min="5"
                        max="50"
                        value={price}
                        onChange={handlePriceChange}
                        className=""
                    />
                    <div>Price: ${price}</div>
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
