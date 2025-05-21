import { Helmet } from "react-helmet-async"
import { useEffect } from "react"

// You can create a custom header specifically for the SodaShop page
import SodaShopHeader from "../components/SodaShop/Header"

export default function SodaShop() {
  // This effect will run when the component mounts
  useEffect(() => {
    // If you want this to behave like an external link that opens in a new tab,
    // you could uncomment this code:
    /*
    window.open("https://your-external-sodashop-url.com", "_blank");
    return;
    */

    // Alternatively, you could redirect to an external site:
    /*
    window.location.href = "https://your-external-sodashop-url.com";
    return;
    */

    // Or you can just keep it as a regular page with custom styling to make it feel different

    // This will hide the default navbar when on the SodaShop page
    const navbar = document.querySelector("nav")
    if (navbar) {
      navbar.style.display = "none"
    }

    // Restore navbar when component unmounts
    return () => {
      if (navbar) {
        navbar.style.display = "flex" // or whatever the original display value was
      }
    }
  }, [])

  return (
    <>
      {/* SEO Metadata */}
      <Helmet>
        <title>SoDA Shop</title>
        <meta name="description" content="SoDA Shop - Get your SoDA merchandise and more!" />
        <meta
          name="keywords"
          content="soda shop, merchandise, asu, arizona state university, software developers association"
        />
      </Helmet>

      {/* Custom Header for SodaShop - different from other pages */}
      <SodaShopHeader />

      {/* Hero Section */}
      <section className="section">
        <div className="flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 py-12">
          <h1 className="section-header-text mb-4">Welcome to the SoDA Shop</h1>
          <p className="hero-small-text text-center max-w-3xl">Find all your favorite SoDA merchandise and more!</p>

          {/* 
            ADD YOUR HERO CONTENT HERE
            - You could add a featured product
            - A banner image
            - Special promotions
          */}
        </div>
      </section>

      {/* Products Section */}
      <section className="section">
        <div className="px-6 md:px-12 lg:px-24">
          <h2 className="section-header-text mb-8">Our Products</h2>

          {/* 
            ADD YOUR PRODUCTS GRID HERE
            - Product cards
            - Filtering options
            - Sorting controls
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Product card placeholders */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="border border-gray-700 rounded-lg p-4">
                <div className="aspect-square bg-gray-800 rounded-md mb-4"></div>
                <h3 className="text-lg font-bold mb-2">Product {item}</h3>
                <p className="text-gray-400 mb-4">Product description goes here</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section">
        <div className="px-6 md:px-12 lg:px-24">
          <h2 className="section-header-text mb-8">Shop by Category</h2>

          {/* 
            ADD YOUR CATEGORIES HERE
            - Category cards or buttons
            - Images representing each category
          */}
        </div>
      </section>

      {/* Featured Items Section */}
      <section className="section">
        <div className="px-6 md:px-12 lg:px-24">
          <h2 className="section-header-text mb-8">Featured Items</h2>

          {/* 
            ADD YOUR FEATURED ITEMS HERE
            - Special or limited edition items
            - Best sellers
            - New arrivals
          */}
        </div>
      </section>

      {/* Shopping Cart Section */}
      <section className="section">
        <div className="px-6 md:px-12 lg:px-24">
          <h2 className="section-header-text mb-8">Your Cart</h2>

          {/* 
            ADD YOUR SHOPPING CART HERE
            - Cart items
            - Quantity controls
            - Checkout button
          */}
        </div>
      </section>
    </>
  )
}
