export default function SodaShopHome() {
  return (
    <>
      {/* Hero Section */}
      <section className="section">
        <div className="flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 py-12">
          <h1 className="section-header-text mb-4">Welcome to the SoDA Shop</h1>
          <p className="hero-small-text text-center max-w-3xl">Find all your favorite SoDA merchandise and more!</p>

          {/* Hero content - Featured product, banner, etc. */}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="section">
        <div className="px-6 md:px-12 lg:px-24">
          <h2 className="section-header-text mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Featured product cards */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="border border-gray-700 rounded-lg p-4">
                <div className="aspect-square bg-gray-800 rounded-md mb-4"></div>
                <h3 className="text-lg font-bold mb-2">Featured Product {item}</h3>
                <p className="text-gray-400 mb-4">Product description goes here</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Preview Section */}
      <section className="section">
        <div className="px-6 md:px-12 lg:px-24">
          <h2 className="section-header-text mb-8">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Category cards */}
            <div className="border border-gray-700 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Clothing</h3>
              <p className="text-gray-400 mb-4">T-shirts, hoodies, and more</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Browse Clothing</button>
            </div>
            <div className="border border-gray-700 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Accessories</h3>
              <p className="text-gray-400 mb-4">Stickers, pins, and more</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Browse Accessories</button>
            </div>
            <div className="border border-gray-700 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Limited Edition</h3>
              <p className="text-gray-400 mb-4">Special items with limited availability</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                Browse Limited Edition
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}