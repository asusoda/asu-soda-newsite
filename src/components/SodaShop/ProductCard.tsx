"use client"

import { Heart } from 'lucide-react'
import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom";

interface Product {
  name: string
  description: string
  price: string
}

interface ProductCardProps {
  product: Product
  index: number
  isCarousel?: boolean
  disableHover?: boolean
}

export default function ProductCard({ product, index, isCarousel = false, disableHover = false }: ProductCardProps) {
  // Reference to measure the card's container width
  const cardRef = useRef<HTMLDivElement>(null)
  const [isCompact, setIsCompact] = useState(false)
  const navigate = useNavigate();

  const handleClick = () => {
    // Replace spaces with dashes, encode special characters, etc.
    const formattedName = encodeURIComponent(product.name.toLowerCase().replace(/\s+/g, "-"));
    navigate(`/shop/item/${formattedName}`);
  };

  // Check container width on mount and resize
  useEffect(() => {
    if (!cardRef.current || !isCarousel) return

    const checkWidth = () => {
      const width = cardRef.current?.clientWidth || 0
      setIsCompact(width < 250)
    }

    // Initial check
    checkWidth()

    // Add resize listener
    window.addEventListener("resize", checkWidth)

    // Cleanup
    return () => window.removeEventListener("resize", checkWidth)
  }, [isCarousel])

  return (
    <div
      ref={cardRef}
      className={`border border-gray-700 rounded-lg p-4 relative ${disableHover ? "" : "group"} ${
        isCarousel ? "w-full" : "min-w-80"
      }`}
    >
      <div onClick={handleClick} className="cursor-pointer">
      <div className="aspect-square bg-gray-800 rounded-md mb-4"></div>

      {/* Product info - adjust layout based on available space */}
      <div className={`flex ${isCompact ? "flex-col" : "items-center"}`}>
        <h3
          className={`font-bold flex-auto ${isCompact ? "text-lg mb-2" : "text-xl"} ${isCarousel ? "truncate" : ""}`}
          title={product.name}
        >
          {product.name}
        </h3>
        {!isCompact && (
          <div className="transition-opacity duration-300">
            <button className="text-white p-2 rounded-full bg-gray-800 hover:bg-gray-700">
              <Heart size={18} />
            </button>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between mt-2">
        <span className="font-bold">{product.price}</span>
        {isCompact && (
          <button className="text-white p-2 rounded-full bg-gray-800 hover:bg-gray-700">
            <Heart size={16} />
          </button>
        )}
      </div>

      {/* Expanded overlay card - appears on hover (only if hover is enabled) */}
      {!disableHover && (
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-blue-900 rounded-lg p-4 z-10 shadow-xl pointer-events-none group-hover:pointer-events-auto border border-gray-300 ${
            isCarousel ? "group-hover:scale-105" : "h-[113%] group-hover:scale-110"
          }`}
          style={{ transformOrigin: "center" }}
        >
          <div className="aspect-square bg-gray-800 rounded-md mb-4"></div>
          <div className="flex items-center">
            <h3 className="text-xl font-bold flex-auto text-white truncate" title={product.name}>
              {product.name}
            </h3>
            <div>
              <button className="text-white p-2 rounded-full bg-gray-800 hover:bg-gray-700">
                <Heart size={18} />
              </button>
            </div>
          </div>

          <div className="flex flex-col text-med">
            <span className="font-bold mb-2 text-white">{product.price}</span>
            <div className={`flex ${isCompact ? "flex-col gap-2" : "gap-3"}`}>
              <select
                className={`bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white ${
                  isCompact ? "w-full" : ""
                }`}
              >
                <option>Size</option>
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option>
              </select>
              <button
                className={`bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors ${
                  isCompact ? "w-full" : "flex-1"
                }`}
              >
                {isCompact ? "Add" : "Quick Add To Cart"}
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  )
}
