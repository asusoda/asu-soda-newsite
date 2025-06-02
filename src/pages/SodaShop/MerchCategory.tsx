import Stars from "../../components/Stars"

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
      <div className="bg-gray-600 h-45 w-full flex items-center justify-center">
      </div>

      {/* Stars background*/}
      <Stars className="fixed inset-0 z-0 pointer-events-none opacity-60" />

      <div className="border px-6 md:px-12 lg:px-24 py-12 p-4">
        {/* Breadcrumb Navigation */}
        {isSubcategory && (
          <nav className="border mb-6 text-sm text-gray-400">
            <span>Shop</span>
            <span className="mx-2">›</span>
            <span className="capitalize">{breadcrumbCategory}</span>
            <span className="mx-2">›</span>
            <span className="capitalize text-white">{subcategoryId}</span>
          </nav>
        )}
        
        <h1 className="border text-white font-bold text-3xl md:text-5xl text-center py-4 mb-0 w-max rounded-xl mb-6 ">
          {displayCategory?.charAt(0).toUpperCase() + displayCategory?.slice(1)}
          {isSubcategory && (
            <span className="border text-lg text-gray-400 ml-2">
              in {breadcrumbCategory?.charAt(0).toUpperCase() + breadcrumbCategory?.slice(1)}
            </span>
          )}
        </h1>

        {/* Category Description */}
        <div className="mb-8">{getCategoryDescription(categoryId, subcategoryId)}</div>

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

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Product cards */}
          {getProductsForCategory(categoryId, subcategoryId).map((item, index) => (
            <div key={index} className="border border-gray-700 rounded-lg p-4 relative group hover:w-[110%]">
              <div className="aspect-square bg-gray-800 rounded-md mb-4"></div>
              <h3 className="text-lg font-bold mb-2">{item.name}</h3>
              <p className="text-gray-400 mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="font-bold">${item.price}</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded opacity-0 invisible hover:bg-blue-700 group-hover:visible transition-all duration-200 z-50">Add to Cart</button>
              </div>
            </div>
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

// Helper function to get category descriptions
function getCategoryDescription(categoryId: string | undefined, subcategoryId: string | undefined) {
  if (subcategoryId) {
    switch (subcategoryId) {
      case "t-shirts":
        return (
          <p className="text-gray-300">
            Discover our collection of comfortable and stylish SoDA t-shirts, perfect for any occasion.
          </p>
        )
      case "sweatshirts":
        return (
          <p className="text-gray-300">
            Stay cozy with our premium SoDA hoodies and sweatshirts, ideal for those chilly coding sessions.
          </p>
        )
      case "socks":
        return <p className="text-gray-300">Step up your sock game with our fun and comfortable SoDA-themed socks.</p>
      case "pins":
        return <p className="text-gray-300">Show your SoDA pride with our collection of enamel pins and badges.</p>
      case "stickers":
        return (
          <p className="text-gray-300">
            Decorate your laptop, water bottle, or anywhere else with our awesome SoDA stickers.
          </p>
        )
      default:
        return <p className="text-gray-300">Explore our {subcategoryId} collection.</p>
    }
  }

  switch (categoryId) {
    case "clothing":
      return (
        <p className="text-gray-300">
          Discover our full range of SoDA apparel, from comfortable t-shirts to cozy hoodies.
        </p>
      )
    case "accessories":
      return (
        <p className="text-gray-300">
          Complete your SoDA look with our collection of pins, stickers, and other accessories.
        </p>
      )
    case "all":
      return <p className="text-gray-300">Browse our complete collection of SoDA merchandise.</p>
    default:
      return <p className="text-gray-300">Explore our {categoryId} collection.</p>
  }
}

// Helper function to get products for a category/subcategory
function getProductsForCategory(categoryId: string | undefined, subcategoryId: string | undefined) {
  // This is where you would typically fetch products from an API
  // For now, we'll return mock data based on the category

  const baseProducts = [
    { name: "SoDA Logo T-Shirt", description: "Classic SoDA logo tee", price: "24.99" },
    { name: "Code & Coffee Hoodie", description: "Perfect for coding sessions", price: "49.99" },
    { name: "Binary Socks", description: "Socks with binary code pattern", price: "12.99" },
    { name: "SoDA Enamel Pin", description: "Show your SoDA pride", price: "8.99" },
    { name: "Laptop Sticker Pack", description: "Set of 5 SoDA stickers", price: "15.99" },
    { name: "Algorithm Mug", description: "Coffee mug with algorithm jokes", price: "18.99" },
  ]

  if (subcategoryId) {
    // Filter products based on subcategory
    switch (subcategoryId) {
      case "t-shirts":
        return baseProducts
          .filter((p) => p.name.includes("T-Shirt"))
          .concat([
            { name: "Vintage SoDA Tee", description: "Retro-style SoDA shirt", price: "26.99" },
            { name: "Vintage SoDA Tee", description: "Retro-style SoDA shirt", price: "26.99" },
            { name: "Vintage SoDA Tee", description: "Retro-style SoDA shirt", price: "26.99" },
            { name: "Vintage SoDA Tee", description: "Retro-style SoDA shirt", price: "26.99" },
            { name: "Code Ninja T-Shirt", description: "For the stealthy programmer", price: "24.99" },
          ])
      case "sweatshirts":
        return baseProducts
          .filter((p) => p.name.includes("Hoodie"))
          .concat([
            { name: "SoDA Zip-Up Hoodie", description: "Comfortable zip-up hoodie", price: "54.99" },
            { name: "Debug Mode Sweatshirt", description: "When you're in debug mode", price: "44.99" },
          ])
      case "socks":
        return baseProducts
          .filter((p) => p.name.includes("Socks"))
          .concat([
            { name: "Colorful Code Socks", description: "Bright and fun coding socks", price: "14.99" },
            { name: "SoDA Logo Socks", description: "Classic SoDA logo socks", price: "11.99" },
          ])
      case "pins":
        return baseProducts
          .filter((p) => p.name.includes("Pin"))
          .concat([
            { name: "JavaScript Pin", description: "Show your JS love", price: "7.99" },
            { name: "Python Pin", description: "For Python enthusiasts", price: "7.99" },
          ])
      case "stickers":
        return baseProducts
          .filter((p) => p.name.includes("Sticker"))
          .concat([
            { name: "Individual SoDA Sticker", description: "Single logo sticker", price: "3.99" },
            { name: "Programming Language Pack", description: "Stickers for all languages", price: "19.99" },
          ])
      default:
        return baseProducts
    }
  }

  if (categoryId === "clothing") {
    return baseProducts.filter(
      (p) => p.name.includes("T-Shirt") || p.name.includes("Hoodie") || p.name.includes("Socks"),
    )
  }

  if (categoryId === "accessories") {
    return baseProducts.filter((p) => p.name.includes("Pin") || p.name.includes("Sticker") || p.name.includes("Mug"))
  }

  return baseProducts
}
