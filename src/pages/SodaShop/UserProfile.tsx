"use client"

import ProductCarousel from "../../components/SodaShop/ProductCarousel"
import ProfileSideBar from "@/components/SodaShop/UserProfile/SideBar"

// Mock favorite products data
const mockFavoriteProducts = [
  { name: "SoDA Logo T-Shirt", description: "Classic SoDA logo tee", price: "$24.99" },
  { name: "Code & Coffee Hoodie", description: "Perfect for coding sessions", price: "$49.99" },
  { name: "Binary Socks", description: "Socks with binary code pattern", price: "$12.99" },
  { name: "SoDA Enamel Pin", description: "Show your SoDA pride", price: "$8.99" },
  { name: "Laptop Sticker Pack", description: "Set of 5 SoDA stickers", price: "$15.99" },
  { name: "Algorithm Mug", description: "Coffee mug with algorithm jokes", price: "$18.99" },
]

const user = [{ name: "Jubilee", classStanding: "Sophomore", balance: 500 }]

// User profile page for the shop
export default function ProfilePage() {
  return (
    <section className="section mt-[6%]">
      <div className="px-6 md:px-12 lg:px-24 py-12 w-[80%]">
        <h1 className="section-header-text mb-8">Your Profile</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <ProfileSideBar user={user} />
          </div>

          {/* Main Content */}
          <div className="md:col-span-2">
            {/* Favorites Box */}
            <div id="shopfavorites" className="border border-gray-700 rounded-lg p-6 mb-[10%]">
              <h2 className="text-3xl font-bold mb-6">Favorites</h2>

              {/* Favorites Carousel with hover disabled */}
              <ProductCarousel
                products={mockFavoriteProducts}
                emptyMessage="No favorite items yet! Start browsing and add items to your favorites."
                autoPlay={false}
                infinite={true}
                showDots={true}
                showArrows={true}
                enableHover={false} // Hover effect disabled for favorites
              />
            </div>

            {/* Points Information Box */}
            <div id="shoppointsbreakdown" className="border border-gray-700 rounded-lg p-6 mb-[10%]">
              <h2 className="text-3xl font-bold mb-4">Points Breakdown</h2>

              {/* Points Info */}
              <div className="space-y-4">
                {[1, 2, 3].map((order) => (
                  <div key={order} className="border border-gray-700 rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400">May 15, 2023</span>
                      <span className="font-bold">First General Meeting</span>
                      <span className="font-bold">+20</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-[5%]">
                <button className="text-blue-500 hover:underline cursor-pointer">See All</button>
              </div>
            </div>

            {/* Order History Box */}
            <div id="orderhistory" className="border border-gray-700 rounded-lg p-6 mb-[10%]">
              <h2 className="text-3xl font-bold mb-4">Order History</h2>

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
                      <span className="text-green-500">Ready for Pickup</span>
                      <button className="text-blue-500 hover:underline">View Details</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Profile Settings Box */}
            <div id="profilesettings" className="border border-gray-700 rounded-lg p-6 mb-[10%]">
              <h2 className="text-3xl font-bold mb-4">Profile Settings</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Display Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
                    defaultValue="Jubilee"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
                    defaultValue="jubilee@example.com"
                  />
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Save Changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
