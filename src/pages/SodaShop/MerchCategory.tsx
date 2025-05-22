"use client"

import { useParams } from "react-router-dom"

// This component displays products for a specific category
export default function CategoryPage() {
  const { categoryId } = useParams()

  // You would typically fetch products based on the category ID

  return (
    <section className="section">
      <div className="px-6 md:px-12 lg:px-24 py-12">
        <h1 className="section-header-text mb-4">{categoryId?.charAt(0).toUpperCase() + categoryId?.slice(1)}</h1>

        {/* Filters */}
        <div className="mb-8 p-4 border border-gray-700 rounded-lg">
          <h2 className="text-lg font-bold mb-4">Filters</h2>
          <div className="flex flex-wrap gap-4">
            <div>
              <label className="block text-sm mb-1">Price Range</label>
              <select className="bg-gray-800 border border-gray-700 rounded px-3 py-2">
                <option>All Prices</option>
                <option>Under $25</option>
                <option>$25 - $50</option>
                <option>$50+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Sort By</label>
              <select className="bg-gray-800 border border-gray-700 rounded px-3 py-2">
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Most Popular</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Product cards */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="border border-gray-700 rounded-lg p-4">
              <div className="aspect-square bg-gray-800 rounded-md mb-4"></div>
              <h3 className="text-lg font-bold mb-2">
                {categoryId} Product {item}
              </h3>
              <p className="text-gray-400 mb-4">Product description goes here</p>
              <div className="flex justify-between items-center">
                <span className="font-bold">$24.99</span>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
