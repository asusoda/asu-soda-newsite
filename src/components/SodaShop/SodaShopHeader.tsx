"use client"

import { Link, NavLink } from "react-router-dom"
import { Home, User } from "lucide-react" // Assuming you have lucide-react installed
import { useState, useEffect } from "react"

export default function SodaShopHeader() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY
      const scrollDifference = currentScrollY - lastScrollY

      // Show header when at top of page
      if (currentScrollY < 25) {
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
  }, [lastScrollY])

  return (
    <header
      className={`bg-[#1a1a1a] border-b border-gray-800 py-4 px-6 md:px-12 lg:px-24 w-full fixed top-0 z-50 ${
        isVisible
          ? "translate-y-0 transition-transform duration-200 ease-out" // FASTER reappear
          : "-translate-y-full transition-transform duration-400 ease-in" // NORMAL disappear
      }`}
    >
      <div className="border flex items-center justify-between h-16 px-4">
        {/* Logo and Home Link */}
        <div className="border flex items-center gap-4 w-[20%]">
          <Link to="/" className="flex items-center gap-2 text-white hover:text-gray-300">
            <Home size={20} />
            <span>Back to SoDA</span>
          </Link>
        </div>

        {/* Shop Title */}
        <div className="border flex-1 flex justify-center">
          <Link to="/shop" className="text-3xl font-bold text-white hover:text-gray-300 ">
            SoDA Shop Logo Here
          </Link>
        </div>

        {/* User and Balance Icons */}
        <div className="border flex items-right gap-4 w-[20%]">
          <Link
            to="/shop/profile"
            className="text-white hover:text-gray-300 p-2 rounded-full hover:bg-gray-800 ml-auto"
          >
            <User size={20} />
          </Link>
        </div>
      </div>

      {/* Shop Navigation */}
      <nav className="mt-4">
        <ul className="border flex justify-center gap-8 text-gray-300 text-xl">
          <li>
            <NavLink
              to="/shop/category/all"
              end
              className={({ isActive }) => (isActive ? "text-white border-b-2 border-white pb-1" : "hover:text-white")}
            >
              All Merch
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
