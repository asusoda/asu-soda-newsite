"use client"

import { useState, useEffect } from "react"
import { ChevronLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"
import CartCheckoutItemList from "../../components/SodaShop/CartCheckout/CartCheckoutItemList"
import CartCheckoutBox from "../../components/SodaShop/CartCheckout/CartCheckoutBox"

interface CartItem {
  id: string
  name: string
  price: string
  quantity: number
  size?: string
  image?: string
}

export default function CartCheckoutPage() {
  const navigate = useNavigate()
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [loading, setLoading] = useState(true)

  // Mock cart items - replace with actual API call
  useEffect(() => {
    // Simulate API call
    const fetchCartItems = async () => {
      try {
        // TODO: Replace with actual API call
        // const response = await fetch('/api/cart')
        // const data = await response.json()

        // Mock data for now
        const mockCartItems: CartItem[] = [
          {
            id: "1",
            name: "SoDA Logo T-Shirt",
            price: "24.99",
            quantity: 1,
            size: "M",
          },
          {
            id: "2",
            name: "Code & Coffee Hoodie",
            price: "49.99",
            quantity: 2,
            size: "L",
          },
          {
            id: "3",
            name: "Binary Socks",
            price: "12.99",
            quantity: 1,
            size: "L",
          },
          {
            id: "4",
            name: "Algorithm Mug",
            price: "18.99",
            quantity: 1,
          },
          {
            id: "5",
            name: "Laptop Sticker Pack",
            price: "15.99",
            quantity: 3,
          },
        ]

        setCartItems(mockCartItems)
      } catch (error) {
        console.error("Failed to fetch cart items:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchCartItems()
  }, [])

  const handleRemoveItem = async (itemId: string) => {
    try {
      // TODO: API call to remove item
      // await fetch(`/api/cart/${itemId}`, { method: 'DELETE' })

      // Update local state
      setCartItems((prev) => prev.filter((item) => item.id !== itemId))
    } catch (error) {
      console.error("Failed to remove item:", error)
    }
  }

  const handleUpdateQuantity = async (itemId: string, quantity: number) => {
    try {
      // TODO: API call to update quantity
      // await fetch(`/api/cart/${itemId}`, {
      //   method: 'PATCH',
      //   body: JSON.stringify({ quantity })
      // })

      // Update local state
      setCartItems((prev) => prev.map((item) => (item.id === itemId ? { ...item, quantity } : item)))
    } catch (error) {
      console.error("Failed to update quantity:", error)
    }
  }

  const handleBackToShopping = () => {
    navigate("/shop")
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading cart...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen text-white">
      <section className="max-w-5xl mx-auto px-6 py-12 mt-[10%]">
        {/* Back Navigation */}
        <nav className="mb-5">
          <button
            onClick={handleBackToShopping}
            className="flex items-center text-gray-400 hover:text-white transition-colors text-sm"
          >
            <ChevronLeft size={20} className="mr-1" />
            Back To Shopping
          </button>
        </nav>

        {/* Page Header */}
        <div className="mb-15">
          <h1 className="text-5xl font-bold mb-5">Checkout</h1>
          <p className="text-gray-400">
            Please enter your information for pickup. The email you provide will be used to follow up on the order.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex gap-10">
          {/* Cart Items - Left Side */}
          <div className="flex-[3]">
            <div className="max-h-[600px] overflow-y-auto pr-4">
              <CartCheckoutItemList
                items={cartItems}
                onRemoveItem={handleRemoveItem}
                onUpdateQuantity={handleUpdateQuantity}
              />
            </div>
          </div>

          {/* Checkout Box - Right Side */}
          <div className="flex-[2]">
            <CartCheckoutBox cartItems={cartItems} />
          </div>
        </div>
      </section>
    </div>
  )
}
