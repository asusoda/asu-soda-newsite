// User profile page for the shop
export default function ProfilePage() {
  return (
    <section className="section">
      <div className="px-6 md:px-12 lg:px-24 py-12">
        <h1 className="section-header-text mb-8">Your Profile</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="border border-gray-700 rounded-lg p-6">
              <div className="flex flex-col items-center mb-6">
                <div className="w-24 h-24 bg-gray-800 rounded-full mb-4"></div>
                <h2 className="text-xl font-bold">John Doe</h2>
                <p className="text-gray-400">Member since 2023</p>
              </div>

              <nav>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="block p-2 bg-gray-800 rounded text-white">
                      Order History
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block p-2 hover:bg-gray-800 rounded">
                      Shipping Addresses
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block p-2 hover:bg-gray-800 rounded">
                      Payment Methods
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block p-2 hover:bg-gray-800 rounded">
                      Account Settings
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2">
            <div className="border border-gray-700 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Order History</h2>

              {/* Order list */}
              <div className="space-y-4">
                {[1, 2, 3].map((order) => (
                  <div key={order} className="border border-gray-700 rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <span className="font-bold">Order #{order}0001</span>
                      <span className="text-gray-400">May 15, 2023</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>3 items</span>
                      <span className="font-bold">$78.97</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-500">Delivered</span>
                      <button className="text-blue-500 hover:underline">View Details</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
