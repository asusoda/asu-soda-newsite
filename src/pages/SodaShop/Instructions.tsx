// Instructions page for the shop
export default function InstructionsPage() {
  return (
    <section className="section">
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
                    <strong>Browse Products</strong>
                  </p>
                  <p className="text-gray-400">Explore our categories and find the items you love.</p>
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
                  <p className="text-gray-400">Enter your shipping and payment information to complete your order.</p>
                </li>
              </ol>
            </div>

            {/* Shipping Information */}
            <div className="border border-gray-700 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
              <p className="mb-4">We ship to all 50 US states and select international locations.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Standard Shipping (5-7 business days): $5.99</li>
                <li>Express Shipping (2-3 business days): $12.99</li>
                <li>Free shipping on orders over $50 (US only)</li>
              </ul>
            </div>

            {/* Returns & Exchanges */}
            <div className="border border-gray-700 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Returns & Exchanges</h2>
              <p className="mb-4">We want you to be completely satisfied with your purchase.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Returns accepted within 30 days of purchase</li>
                <li>Item must be unworn and in original condition</li>
                <li>Contact support@sodashop.com to initiate a return</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
