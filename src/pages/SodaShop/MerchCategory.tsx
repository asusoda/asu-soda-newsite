"use client"

import Stars from "../../components/Stars"
import ProductCard from "../../components/SodaShop/ProductCard"

import { useParams } from "react-router-dom"

// Displays products for a specific category or subcategory
export default function CategoryPage() {
  const { categoryId, subcategoryId } = useParams()

  // Determine what we're displaying
  const isSubcategory = !!subcategoryId
  const displayCategory = subcategoryId || categoryId
  const breadcrumbCategory = categoryId

  // fetchProducts(categoryId, subcategoryId)

  return (
    <section className="section">
      {/* Fun Graphic perhaps here */}
      <div className="bg-gray-600 h-40 w-full flex items-center justify-center"></div>

      {/* Stars background*/}
      <Stars className="fixed inset-0 z-0 pointer-events-none opacity-60" />

      <div className="px-6 md:px-12 lg:px-24 py-12 p-4">
        {/* Breadcrumb Navigation */}
        {isSubcategory && (
          <nav className="mb-6 text-sm text-gray-400">
            <span>Shop</span>
            <span className="mx-2">›</span>
            <span className="capitalize">{breadcrumbCategory}</span>
            <span className="mx-2">›</span>
            <span className="capitalize text-white">{subcategoryId}</span>
          </nav>
        )}

        <div className="flex justify-between items-end mb-10 mt-12">
          <h1 className="text-white font-bold text-4xl md:text-6xl text-center rounded-xl">
            {displayCategory?.charAt(0).toUpperCase() + displayCategory?.slice(1)}
          </h1>

          {/* Filters */}
          <div className="pb-0 border-gray-700 rounded-lg">
            <div className="flex gap-4 justify-end">
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
              {/* Size filter for clothing */}
              {(categoryId === "clothing" || ["t-shirts", "sweatshirts"].includes(subcategoryId || "")) && (
                <div>
                  <label className="block text-sm mb-1">Size</label>
                  <select className="bg-gray-800 border border-gray-700 rounded px-3 py-2">
                    <option>All Sizes</option>
                    <option>XS</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>XXL</option>
                  </select>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Product cards */}
          {getProductsForCategory(categoryId, subcategoryId).map((item, index) => (
            <ProductCard key={index} product={item} index={index} isCarousel={false} />
          ))}
        </div>

        {/* Show subcategories if we're on a main category page */}
        {!isSubcategory && categoryId === "clothing" && (
          <div className="mt-12">
            <h2 className="section-header-text mb-6">Shop by Type</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-gray-700 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold mb-2">T-Shirts</h3>
                <p className="text-gray-400 mb-4">Comfortable and stylish tees</p>
                <a
                  href="/shop/category/clothing/t-shirts"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded inline-block"
                >
                  Shop T-Shirts
                </a>
              </div>
              <div className="border border-gray-700 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Sweatshirts</h3>
                <p className="text-gray-400 mb-4">Cozy hoodies and sweatshirts</p>
                <a
                  href="/shop/category/clothing/sweatshirts"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded inline-block"
                >
                  Shop Sweatshirts
                </a>
              </div>
              <div className="border border-gray-700 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Socks</h3>
                <p className="text-gray-400 mb-4">Fun and comfortable socks</p>
                <a
                  href="/shop/category/clothing/socks"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded inline-block"
                >
                  Shop Socks
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

// Helper functions remain the same...
function getCategoryDescription(categoryId: string | undefined, subcategoryId: string | undefined) {
  // Existing implementation
  return <p>Description</p>
}

function getProductsForCategory(categoryId: string | undefined, subcategoryId: string | undefined) {
  // Mock data for testing
  const baseProducts = [
    { name: "SoDA Logo T-Shirt", description: "Classic SoDA logo tee", price: "$24.99" },
    { name: "Code & Coffee Hoodie", description: "Perfect for coding sessions", price: "$49.99" },
    { name: "Binary Socks", description: "Socks with binary code pattern", price: "$12.99" },
    { name: "SoDA Enamel Pin", description: "Show your SoDA pride", price: "$8.99" },
    { name: "Laptop Sticker Pack", description: "Set of 5 SoDA stickers", price: "$15.99" },
    { name: "Algorithm Mug", description: "Coffee mug with algorithm jokes", price: "$18.99" },
  ]

  return baseProducts
}
