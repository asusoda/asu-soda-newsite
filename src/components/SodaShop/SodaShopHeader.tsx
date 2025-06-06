"use client"

import { Link, NavLink } from "react-router-dom"
import { Home, User, ShoppingCart, Search, ChevronDown } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import CartPopup from "./CartPopup"

export default function SodaShopHeader() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isCartOpen, setIsCartOpen] = useState(true)
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setIsCartOpen(true)
  }

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsCartOpen(false)
    }, 300) // Reduced delay for better UX
  }

  // Mock cart items - replace with your actual cart data
  const cartItems = [
    { id: "1", name: "SoDA Logo T-Shirt", price: "24.99", quantity: 1, size: "M" },
    { id: "2", name: "Code & Coffee Hoodie", price: "49.99", quantity: 2 },
  ]

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY
      const scrollDifference = currentScrollY - lastScrollY

      // Show header when at top of page
      if (currentScrollY < 80) {
        setIsVisible(true)
      }
      // Show header if cart is open
      else if (isCartOpen === true) {
        setIsVisible(true)
      }
      // Scrolling down - move header up at same rate as scroll
      else if (scrollDifference > 0) {
        // Header moves up at the same rate as user scrolls down
        setIsVisible(false)
      }
      // Scrolling up - header appears faster than scroll rate
      else if (scrollDifference < 0) {
        const reappearSpeed = 2
        // Header reappears faster than the scroll rate
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", controlHeader)

    return () => {
      window.removeEventListener("scroll", controlHeader)
    }
  }, [lastScrollY, isCartOpen])

  return (
    <header
      className={`bg-[#1a1a1a] border-b border-gray-800 py-2 sm:py-4 px-4 sm:px-6 md:px-12 lg:px-24 w-full fixed top-0 z-50 ${
        isVisible
          ? "translate-y-0 transition-transform duration-250 ease-out" // FASTER reappear
          : "-translate-y-full transition-transform duration-400 ease-in" // NORMAL disappear
      }`}
    >
      <div className="flex items-center justify-between h-12 sm:h-16 px-2 sm:px-4">
        {/* Logo and Home Link */}
        <div className="flex items-center gap-4 w-[20%]">
          <Link to="/" className="flex items-center gap-2 text-white hover:text-gray-300">
            <Home size={20} />
            <span>Back to SoDA</span>
          </Link>
        </div>

        {/* Shop Title */}
        <div className="flex-1 flex justify-center">
          <Link to="/shop" className="text-xl sm:text-2xl md:text-3xl font-bold text-white hover:text-gray-300">
            SoDA Shop Logo Here
          </Link>
        </div>

        {/* User and Balance Icons */}
        <div className="flex items-right gap-4 w-[20%]">
          <Link
            to="/shop/profile"
            className="text-white hover:text-gray-300 p-2 rounded-full hover:bg-gray-800 ml-auto flex gap-4"
          >
            <div>Hi, Jubilee</div>
            <User size={30} />
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-between py-3 px-2 sm:px-4">
        {/* Left Placeholder */}
        <div className="w-[20%] sm:w-[10%] md:w-[15%]"></div>

        {/* Center Nav */}
        <nav className="flex-1 flex justify-center">
          <ul className="flex justify-center gap-5 sm:gap-6 md:gap-10 text-gray-300 text-base sm:text-lg md:text-xl">
            <li>
              <NavLink
                to="/shop/category/all"
                end
                className={({ isActive }) =>
                  isActive ? "text-white border-b-2 border-white pb-1" : "hover:text-white"
                }
              >
                All Merch
              </NavLink>
            </li>
            <li className="relative group">
              <div className="relative">
                <NavLink
                  to="/shop/category/clothing"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white border-b-2 border-white pb-1 flex items-center"
                      : "hover:text-white flex items-center"
                  }
                >
                  Clothing
                  <ChevronDown size={16} className="ml-1 group-hover:rotate-180 transition-transform duration-200" />
                </NavLink>
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 bg-white text-black rounded-md shadow-lg overflow-hidden w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <NavLink
                    to="/shop/category/clothing/t-shirts"
                    className={({ isActive }) =>
                      isActive ? "block px-4 py-2 bg-gray-100 hover:bg-gray-200" : "block px-4 py-2 hover:bg-gray-100"
                    }
                  >
                    T-Shirts
                  </NavLink>
                  <NavLink
                    to="/shop/category/clothing/sweatshirts"
                    className={({ isActive }) =>
                      isActive ? "block px-4 py-2 bg-gray-100 hover:bg-gray-200" : "block px-4 py-2 hover:bg-gray-100"
                    }
                  >
                    Sweatshirts
                  </NavLink>
                  <NavLink
                    to="/shop/category/clothing/socks"
                    className={({ isActive }) =>
                      isActive ? "block px-4 py-2 bg-gray-100 hover:bg-gray-200" : "block px-4 py-2 hover:bg-gray-100"
                    }
                  >
                    Socks
                  </NavLink>
                  <div className="border-t border-gray-200">
                    <NavLink
                      to="/shop/category/clothing"
                      className="block px-4 py-2 hover:bg-gray-100 flex items-center justify-between"
                    >
                      See All Clothing
                      <span className="ml-2">→</span>
                    </NavLink>
                  </div>
                </div>
              </div>
            </li>
            <li className="relative group">
              <div className="relative">
                <NavLink
                  to="/shop/category/accessories"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white border-b-2 border-white pb-1 flex items-center"
                      : "hover:text-white flex items-center"
                  }
                >
                  Accessories
                  <ChevronDown size={16} className="ml-1 group-hover:rotate-180 transition-transform duration-200" />
                </NavLink>
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 bg-white text-black rounded-md shadow-lg overflow-hidden w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <NavLink
                    to="/shop/category/accessories/pins"
                    className={({ isActive }) =>
                      isActive ? "block px-4 py-2 bg-gray-100 hover:bg-gray-200" : "block px-4 py-2 hover:bg-gray-100"
                    }
                  >
                    Pins
                  </NavLink>
                  <NavLink
                    to="/shop/category/accessories/stickers"
                    className={({ isActive }) =>
                      isActive ? "block px-4 py-2 bg-gray-100 hover:bg-gray-200" : "block px-4 py-2 hover:bg-gray-100"
                    }
                  >
                    Stickers
                  </NavLink>
                  <div className="border-t border-gray-200">
                    <NavLink
                      to="/shop/category/accessories"
                      className="block px-4 py-2 hover:bg-gray-100 flex items-center justify-between"
                    >
                      See All Accessories
                      <span className="ml-2">→</span>
                    </NavLink>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <NavLink
                to="/shop/instructions"
                className={({ isActive }) =>
                  isActive ? "text-white border-b-2 border-white pb-1" : "hover:text-white"
                }
              >
                Instructions
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Right Icons */}
        <div className="flex gap-6 text-white px-3 w-[20%] sm:w-[10%] md:w-[15%] items-right">
          {/* Search Button */}
          <button className="ml-auto hover:text-gray-300">
            <Search />
          </button>

          {/* Cart Button */}
          <div className="relative">
            <button
              className="hover:text-gray-300 flex items-center"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <ShoppingCart size={24} />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>

            {/* Cart Popup */}
            <div
              className={`absolute right-0 top-full mt-2 z-50 ${
                isCartOpen ? "pointer-events-auto" : "pointer-events-none"
              }`}
              onMouseEnter={isCartOpen ? handleMouseEnter : undefined}
              onMouseLeave={isCartOpen ? handleMouseLeave : undefined}
            >
              <CartPopup isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} items={cartItems} />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
