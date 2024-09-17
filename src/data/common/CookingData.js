import React, { useState } from "react";
import Filter from "filter-data";

// Sample product data
const products = [
  {
    id: 1,
    name: "Fresh Apple",
    category: "Fresh Fruit",
    price: 200,
    rating: 4.5,
    tags: ["Healthy", "Vegetarian"],
  },
  {
    id: 2,
    name: "Broccoli",
    category: "Vegetables",
    price: 150,
    rating: 4.0,
    tags: ["Low fat", "Vegetarian", "Healthy"],
  },
  {
    id: 3,
    name: "Olive Oil",
    category: "Cooking",
    price: 500,
    rating: 5.0,
    tags: ["Healthy"],
  },
  {
    id: 4,
    name: "Chips",
    category: "Snacks",
    price: 50,
    rating: 3.5,
    tags: ["Kid foods"],
  },
  {
    id: 5,
    name: "Orange Juice",
    category: "Beverages",
    price: 120,
    rating: 4.2,
    tags: ["Healthy", "Low fat"],
  },
  {
    id: 6,
    name: "Shampoo",
    category: "Beauty & Health",
    price: 250,
    rating: 4.8,
    tags: ["Vitamins"],
  },
  {
    id: 7,
    name: "Whole Wheat Bread",
    category: "Bread & Bakery",
    price: 80,
    rating: 4.3,
    tags: ["Bread", "Healthy"],
  },
];

const FilterSidebar = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [priceRange, setPriceRange] = useState([50, 1500]);
  const [selectedRating, setSelectedRating] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  const categories = [
    "All Products",
    "Fresh Fruit",
    "Vegetables",
    "Cooking",
    "Snacks",
    "Beverages",
    "Beauty & Health",
    "Bread & Bakery",
  ];

  const tags = ["Healthy", "Low fat", "Vegetarian", "Kid foods", "Vitamins", "Bread"];

  // Filter the products using filter-data package
  const filterConditions = {
    category: selectedCategory === "All Products" ? undefined : selectedCategory,
    price: { $between: priceRange },
    rating: selectedRating.length > 0 ? { $in: selectedRating } : undefined,
    tags: selectedTags.length > 0 ? { $in: selectedTags } : undefined,
  };

  // Apply filters using filter-data
  const filteredProducts = Filter(products, filterConditions);

  return (
    <div className="flex">
      {/* Sidebar with filters */}
      <div className="p-4 bg-white rounded-lg shadow-md w-80">
        <h2 className="mb-4 text-lg font-bold">Filters</h2>

        {/* Category Filter */}
        <div className="mb-4">
          <h3 className="font-semibold">All Categories</h3>
          <ul>
            {categories.map((category) => (
              <li key={category} className="mt-2">
                <label>
                  <input
                    type="radio"
                    value={category}
                    checked={selectedCategory === category}
                    onChange={() => setSelectedCategory(category)}
                  />
                  <span className="ml-2">{category}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Filter */}
        <div className="mb-4">
          <h3 className="font-semibold">Price</h3>
          <input
            type="range"
            min={50}
            max={1500}
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], parseInt(e.target.value)])
            }
          />
          <div className="mt-2">
            Price: ${priceRange[0]} - ${priceRange[1]}
          </div>
        </div>

        {/* Rating Filter */}
        <div className="mb-4">
          <h3 className="font-semibold">Rating</h3>
          <ul>
            {[5, 4, 3, 2, 1].map((rating) => (
              <li key={rating} className="mt-2">
                <label>
                  <input
                    type="checkbox"
                    checked={selectedRating.includes(rating)}
                    onChange={() =>
                      setSelectedRating((prev) =>
                        prev.includes(rating)
                          ? prev.filter((r) => r !== rating)
                          : [...prev, rating]
                      )
                    }
                  />
                  <span className="ml-2">{rating} & up</span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Tag Filter */}
        <div className="mb-4">
          <h3 className="font-semibold">Popular Tags</h3>
          <div className="flex flex-wrap">
            {tags.map((tag) => (
              <label key={tag} className="mt-2 mr-2">
                <input
                  type="checkbox"
                  checked={selectedTags.includes(tag)}
                  onChange={() =>
                    setSelectedTags((prev) =>
                      prev.includes(tag)
                        ? prev.filter((t) => t !== tag)
                        : [...prev, tag]
                    )
                  }
                />
                <span className="ml-1">{tag}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Product List */}
      <div className="flex-grow p-4 product-list">
        <h2 className="mb-4 text-lg font-bold">Products</h2>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="p-4 mb-4 border rounded-lg">
              <h2 className="text-lg font-bold">{product.name}</h2>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
              <p>Rating: {product.rating} ⭐</p>
              <p>Tags: {product.tags.join(", ")}</p>
            </div>
          ))
        ) : (
          <p>No products found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default FilterSidebar;
