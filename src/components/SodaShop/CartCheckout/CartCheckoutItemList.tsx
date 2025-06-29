"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Trash2, ChevronDown  } from "lucide-react"
import { useNavigate } from "react-router-dom"

interface CartItem {
  id: string
  name: string
  price: string
  quantity: number
  size?: string
  image?: string
}

interface CartCheckoutItemListProps {
  items: CartItem[]
  onRemoveItem?: (itemId: string) => void
  onUpdateQuantity?: (itemId: string, quantity: number) => void
}

export default function CartCheckoutItemList({ items, onRemoveItem, onUpdateQuantity }: CartCheckoutItemListProps) {
  const navigate = useNavigate()  
  const [showScrollIndicator, setShowScrollIndicator] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handleItemClick = (itemName: string) => {
    // Format the item name for URL (same pattern as ProductCard)
    const formattedName = encodeURIComponent(itemName.toLowerCase().replace(/\s+/g, "-"))
    navigate(`/shop/item/${formattedName}`)
  }

  const handleRemoveItem = (e: React.MouseEvent, itemId: string) => {
    e.stopPropagation() // Prevent item click when deleting
    onRemoveItem?.(itemId)
  }

  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>, itemId: string) => {
    e.stopPropagation()
    const newQuantity = Number.parseInt(e.target.value)
    onUpdateQuantity?.(itemId, newQuantity)
  }

  const checkScrollPosition = () => {
    const container = scrollContainerRef.current
    if (!container) return

    const { scrollTop, scrollHeight, clientHeight } = container
    const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10 // 10px threshold
    const hasScrollableContent = scrollHeight > clientHeight

    setShowScrollIndicator(hasScrollableContent && !isAtBottom)
    }

    useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    // Check initial scroll position
    checkScrollPosition()

    // Add scroll event listener
    container.addEventListener("scroll", checkScrollPosition)

    // Check when items change (in case items are added/removed)
    const resizeObserver = new ResizeObserver(checkScrollPosition)
    resizeObserver.observe(container)

    return () => {
      container.removeEventListener("scroll", checkScrollPosition)
      resizeObserver.disconnect()
    }
  }, [items])

  return (
    <div className="relative">
      {/* Scrollable Container */}
      <div ref={scrollContainerRef} className="space-y-4 overflow-y-auto" style={{ maxHeight: "550px" }}>
        {items.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 p-4 border border-gray-700 rounded-lg hover:bg-gray-800/50 transition-colors cursor-pointer"
            onClick={() => handleItemClick(item.name)}
          >
            {/* Product Image */}
            <div className="w-25 h-25 bg-gray-600 rounded-md flex-shrink-0">
              {item.image ? (
                <img
                  src={item.image || "/placeholder.svg?height=80&width=80"}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-md"
                />
              ) : (
                <div className="w-full h-full bg-gray-600 rounded-md" />
              )}
            </div>

            {/* Product Details */}
            <div className="flex-1 min-w-0 flex flex-col justify-between">
              <div className="flex justify-between items-center pt-1">
                <h3 className="font-semibold text-white text-xl truncate">{item.name}</h3>
                {/* Delete Button */}
                <button
                  onClick={(e) => handleRemoveItem(e, item.id)}
                  className="p-2 text-gray-400 hover:text-red-400 hover:bg-gray-700 rounded-md transition-colors"
                  aria-label="Remove item"
                >
                  <Trash2 size={20} />
                </button>
              </div>

              {item.size && <p className="text-gray-400 text-sm">Size: {item.size}</p>}

              <div className="flex justify-between">

              {/* Quantity Selector */}
                <div className="pb-1">
                  <label className="text-gray-400 text-sm mr-2">Qty:</label>
                  <select
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(e, item.id)}
                    className="bg-gray-800 border border-gray-700 rounded px-2 py-1 text-white text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="text-right"> {/* mt-auto pushes to bottom */}
                  <p className="text-lg">{item.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {items.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            <p className="text-lg">Your cart is empty</p>
            <p className="text-sm mt-2">Add some items to get started!</p>
          </div>
        )}
      </div>

      {/* Scroll Down Indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <div className="bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent pt-8 pb-2 px-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm animate-bounce">
              <ChevronDown size={16} />
              <span>Scroll down for more items</span>
              <ChevronDown size={16} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}