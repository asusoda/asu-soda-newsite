"use client"

import type React from "react"

import { useState } from "react"

interface CartCheckoutBoxProps {
  cartItems: Array<{
    id: string
    name: string
    price: string
    quantity: number
  }>
  currentBalance?: number
}

export default function CartCheckoutBox({ cartItems, currentBalance = 500 }: CartCheckoutBoxProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  })

  // Calculate cart total
  const cartTotal = cartItems.reduce((total, item) => {
    return total + Number.parseFloat(item.price) * item.quantity
  }, 0)

  const remainingBalance = currentBalance - cartTotal

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleConfirmOrder = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement order confirmation logic
    console.log("Order confirmed:", { formData, cartItems, cartTotal })
    alert("Order functionality will be implemented with backend!")
  }

  const isFormValid = formData.firstName && formData.lastName && formData.email

  return (
    <div className="sticky top-10 space-y-6">
      {/* Cart Summary */}
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
        <div className="space-y-3 text-white">
          <div className="flex justify-between items-center">
            <span>Current Balance:</span>
            <span className="font-semibold">{currentBalance}</span>
          </div>

          <div className="flex justify-between items-center text-red-400">
            <span>- Cart Total:</span>
            <span className="font-semibold">{cartTotal.toFixed(2)}</span>
          </div>

          <hr className="border-gray-600" />

          <div className="flex justify-between items-center font-bold text-lg">
            <span>Remaining Balance:</span>
            <span className={remainingBalance >= 0 ? "text-green-400" : "text-red-400"}>
              {remainingBalance.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {/* Pickup Details Form */}
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
        <h3 className="text-white font-semibold mb-4">Please enter your details for pickup:</h3>

        <form onSubmit={handleConfirmOrder} className="space-y-4">
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <button
            type="submit"
            disabled={!isFormValid || remainingBalance < 0}
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold rounded-md transition-colors"
          >
            Confirm Order
          </button>

          {remainingBalance < 0 && (
            <p className="text-red-400 text-sm text-center">Insufficient balance. Please remove some items.</p>
          )}
        </form>
      </div>
    </div>
  )
}