import Stars from "../../components/Stars"

export default function SodaShopHome() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Stars background*/}
      <Stars className="fixed inset-0 z-0 pointer-events-none opacity-60" />

      {/* Main content*/}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="mt-[10%] section">
          <div className="flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 py-12">
            <h1 className="section-header-text mb-4 text-4xl font-bold">Welcome to the SoDA Shop</h1>
            <p className="hero-small-text text-center max-w-3xl text-gray-300">
              Find all your favorite SoDA merchandise and more!
            </p>

            {/* Hero content - Featured product, banner, etc. */}
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="section">
          <div className="px-6 md:px-12 lg:px-24">
            <h2 className="section-header-text mb-8 text-3xl font-bold">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Featured product cards */}
              {[1, 2, 3].map((item) => (
                <div key={item} className="border border-gray-700 rounded-lg p-4 bg-gray-800/50 backdrop-blur-sm">
                  <div className="aspect-square bg-gray-700 rounded-md mb-4"></div>
                  <h3 className="text-lg font-bold mb-2">Featured Product {item}</h3>
                  <p className="text-gray-400 mb-4">Product description goes here</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Preview Section */}
        <section className="section">
          <div className="px-6 md:px-12 lg:px-24">
            <h2 className="section-header-text mb-8 text-3xl font-bold">Shop by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Category cards */}
              <div className="border border-gray-700 rounded-lg p-6 text-center bg-gray-800/50 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-2">Clothing</h3>
                <p className="text-gray-400 mb-4">T-shirts, hoodies, and more</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
                  Browse Clothing
                </button>
              </div>
              <div className="border border-gray-700 rounded-lg p-6 text-center bg-gray-800/50 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-2">Accessories</h3>
                <p className="text-gray-400 mb-4">Stickers, pins, and more</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
                  Browse Accessories
                </button>
              </div>
              <div className="border border-gray-700 rounded-lg p-6 text-center bg-gray-800/50 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-2">Limited Edition</h3>
                <p className="text-gray-400 mb-4">Special items with limited availability</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
                  Browse Limited Edition
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}


/* to do list: 
  h̶o̶v̶e̶r̶ ̶f̶u̶n̶c̶t̶i̶o̶n̶a̶l̶i̶t̶y̶ ̶f̶o̶r̶ ̶t̶h̶e̶ ̶p̶r̶o̶d̶u̶c̶t̶ ̶b̶o̶x̶e̶s̶
  c̶a̶r̶t̶ ̶p̶o̶p̶u̶p̶,̶ make it pop up when wuick add to cart is pulled up
  insturction page
  individual item pages
  checkout/cart page
  profile page

  mobile layout adjustments

  fix hovering product boxed functionality when choosing the size
  ssvg for coins? points? 
  add pages? on merch category page

  need to clean up code, making product cards into components
  make pages fade into each other
*/