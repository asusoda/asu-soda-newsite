import { Link, NavLink } from "react-router-dom"
import { ShoppingCart, Home, User } from "lucide-react" // Assuming you have lucide-react installed

export default function SodaShopHeader() {
  return (
    <header className="bg-[#1a1a1a] border-b border-gray-800 py-4 px-6 md:px-12 lg:px-24">
      <div className="flex justify-between items-center">
        {/* Logo and Home Link */}
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2 text-white hover:text-gray-300">
            <Home size={20} />
            <span>Back to SoDA</span>
          </Link>
        </div>

        {/* Shop Title */}
        <div className="text-center">
          <Link to="/shop" className="text-2xl font-bold text-white hover:text-gray-300">
            SoDA Shop
          </Link>
        </div>

        {/* User and Cart Icons */}
        <div className="flex items-center gap-4">
          <Link to="/shop/profile" className="text-white hover:text-gray-300 p-2 rounded-full hover:bg-gray-800">
            <User size={20} />
          </Link>
          <button className="text-white hover:text-gray-300 p-2 rounded-full hover:bg-gray-800">
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>

      {/* Shop Navigation */}
      <nav className="mt-4">
        <ul className="flex justify-center gap-8 text-gray-300">
          <li>
            <NavLink
              to="/shop"
              end
              className={({ isActive }) => (isActive ? "text-white border-b-2 border-white pb-1" : "hover:text-white")}
            >
              All Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop/category/clothing"
              className={({ isActive }) => (isActive ? "text-white border-b-2 border-white pb-1" : "hover:text-white")}
            >
              Clothing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop/category/accessories"
              className={({ isActive }) => (isActive ? "text-white border-b-2 border-white pb-1" : "hover:text-white")}
            >
              Accessories
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop/category/limited"
              className={({ isActive }) => (isActive ? "text-white border-b-2 border-white pb-1" : "hover:text-white")}
            >
              Limited Edition
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop/instructions"
              className={({ isActive }) => (isActive ? "text-white border-b-2 border-white pb-1" : "hover:text-white")}
            >
              Instructions
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
