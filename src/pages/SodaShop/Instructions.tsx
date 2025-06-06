// Instructions page for the shop
export default function InstructionsPage() {
  return (
    <section className="section mt-[10%]">
      <div className="px-6 md:px-12 lg:px-24 py-12">
        <h1 className="section-header-text mb-8">Shop Instructions</h1>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {/* How to Order */}
            <div className="border border-gray-700 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">How to Order</h2>
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                    <p className="mb-2">
                      <strong>Earn Points</strong>
                    </p>
                    <p className="text-gray-400">Attend meetings and events to earn points</p>
                  </li>
                <li>
                  <p className="mb-2">
                    <strong>Browse Products</strong>
                  </p>
                  <p className="text-gray-400">Explore our categories and find the merch items you love.</p>
                </li>
                <li>
                  <p className="mb-2">
                    <strong>Add to Cart</strong>
                  </p>
                  <p className="text-gray-400">Click the "Add to Cart" button on any product you want to purchase.</p>
                </li>
                <li>
                  <p className="mb-2">
                    <strong>Review Your Cart</strong>
                  </p>
                  <p className="text-gray-400">
                    Click the cart icon to review your items and adjust quantities if needed.
                  </p>
                </li>
                <li>
                  <p className="mb-2">
                    <strong>Checkout</strong>
                  </p>
                  <p className="text-gray-400">Enter your information to complete your order.</p>
                </li>
              </ol>
            </div>

            {/* Shipping Information */}
            <div className="border border-gray-700 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Pickup Information</h2>
              <p className="mb-4">Pick up at next soda meeting</p>
      
            </div>

            {/* Returns & Exchanges */}
            <div className="border border-gray-700 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Returns & Exchanges</h2>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
