"use client"

import { Link, NavLink } from "react-router-dom"
import { Home, User } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { Search } from 'lucide-react';

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
      className={`bg-[#1a1a1a] border-b border-gray-800 py-2 sm:py-4 px-4 sm:px-6 md:px-12 lg:px-24 w-full fixed top-0 z-50 ${
        isVisible
          ? "translate-y-0 transition-transform duration-200 ease-out" // FASTER reappear
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
            <div>Hi, Jubilee</div> {/* need to make this change based on user name? or balance? i am not sure */}
            <User size={30} /> {/* profile picture? */}
          </Link>
        </div>
      </div>

  <div className="flex items-center justify-between py-3 px-2 sm:px-4">
    {/* Left Placeholder */}
    <div className="w-[20%] sm:w-[10%] md:w-[15%]"></div>

    {/* Center Nav */}
    <nav className="flex-1 flex justify-center">
      <ul className="flex justify-center gap-4 sm:gap-6 md:gap-8 text-gray-300 text-base sm:text-lg md:text-xl">
        <li>
          <NavLink to="/shop/category/all" end className={({ isActive }) => (isActive ? "text-white border-b-2 border-white pb-1" : "hover:text-white")}>
            All Merch
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop/category/clothing" className={({ isActive }) => (isActive ? "text-white border-b-2 border-white pb-1" : "hover:text-white")}>
            Clothing
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop/category/accessories" className={({ isActive }) => (isActive ? "text-white border-b-2 border-white pb-1" : "hover:text-white")}>
            Accessories
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop/instructions" className={({ isActive }) => (isActive ? "text-white border-b-2 border-white pb-1" : "hover:text-white")}>
            Instructions
          </NavLink>
        </li>
      </ul>
    </nav>

    {/* Right Icons */}
    <div className="flex gap-6 text-white hover:text-gray-300 px-3 hover:bg-gray-800 cursor-pointer w-[20%] sm:w-[10%] md:w-[15%] items-right ">
      <ul className="ml-auto">  
        <Search/>
      </ul>
      <ul>
        <ShoppingCart size={24} />
      </ul>
    </div>
</div>
      
    </header>
  )
}