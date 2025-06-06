

import { X } from "lucide-react"
import { Trash2 } from 'lucide-react';


interface CartItem {
  id: string
  name: string
  price: string
  quantity: number
  size?: string
}

interface CartPopupProps {
  isOpen: boolean
  onClose: () => void
  items?: CartItem[]
}

export default function CartPopup({ isOpen, onClose, items = [] }: CartPopupProps) {
  return (
    <div
      className={`
        bg-white text-black rounded-md shadow-lg
        transition-all duration-250 ease-in-out
        ${
          isOpen
            ? "opacity-100 visible transform translate-y-0 pointer-events-auto"
            : "opacity-0 invisible transform -translate-y-2 pointer-events-none"
        }
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <h3 className="font-semibold">Cart ({items.length})</h3>
        <button onClick={onClose} className="hover:bg-gray-200 p-1 rounded">
          <X size={16} />
        </button>
      </div>

      {/* Cart Items */}
      <div className="max-h-64 overflow-y-auto w-90"> {/* NEED TO CHANGE THIS TO DYANMIC SIZING? */}
        {items.length === 0 ? (
          <div className="p-5 text-center text-gray-500">Your cart is empty</div>
        ) : (
          items.map((item) => (
            <div key={item.id} className="p-4 border-b hover:bg-gray-50">
  <div className="grid grid-cols-[auto_1fr_auto] gap-2 items-start">
    <div className="bg-gray-400 aspect-square w-16 sm:w-20"> {/* Responsive width */}
    </div>
    <div className="flex-1 min-w-0"> {/* min-w-0 prevents text overflow */}
      <h4 className="font-medium truncate">{item.name}</h4>
      <p className="text-sm text-gray-500">Size: {item.size}</p>
      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
    </div>
    <div className="flex flex-col justify-between items-end h-full min-h-[4rem]"> {/* min-h ensures minimum space */}
      <button className="p-1 hover:bg-gray-200 rounded">
        <Trash2 size={15} color={"#a3a3a3"} />
      </button>
      <div className="text-right mt-auto"> {/* mt-auto pushes to bottom */}
        <p className="font-medium">{item.price}</p>
      </div>
    </div>
  </div>
</div>
          ))
        )}
      </div>

      {/* Footer */}
      {items.length > 0 && (
        <section className="text-right text-sm px-4">
          <div className="py-4 ">
            <div className="">
              <p className="">Your Balance: 500</p>
            </div>
            <div className="">
              <p className="text-soda-red">- Cart Total: 200</p>
            </div>
            <div className="">
              <p className="font-bold">Remaining Balance: 300</p>
            </div>
          </div>
          <div className="py-4 border-t">
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">View Cart</button>
          </div>
        </section>
      )}
    </div>
  )
}
