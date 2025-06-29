"use client"

import Stars from "../../components/Stars"
import { useParams } from "react-router-dom"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../components/ui/accordion"
import ItemImageCarousel from "../../components/SodaShop/ItemImageCarousel"

export default function ItemPage() {
  const { itemId, categoryId, subcategoryId } = useParams()

  // Determine what we're displaying
  const isSubcategory = !!subcategoryId
  const displayItem = itemId
  const breadcrumbCategory = categoryId

  return (
    <section className="section mt-[6%]">
      {/* Stars background*/}
      <Stars className="fixed inset-0 z-0 pointer-events-none opacity-60" />

      <div className="px-6 md:px-12 lg:px-24 py-12 p-4 w-[70%]">
        {/* Breadcrumb Navigation */}
        <nav className="mb-6 text-sm text-gray-400">
          <span>Shop</span>
          <span className="mx-2">›</span>
          <span className="capitalize">{breadcrumbCategory}</span>
          <span className="mx-2">›</span>
          <span className="capitalize text-white">{subcategoryId}</span>
        </nav>

        <div className="flex justify-between mb-10 mt-12 gap-10">
          <div className="flex flex-col flex-3 h-120">
            {/* Replace the placeholder with the ItemImageCarousel */}
            <ItemImageCarousel itemId={itemId || ""} className="w-full" />
          </div>

          <div className="flex-3 flex flex-col justify-center">
            <h1 className="text-white font-bold text-3xl md:text-5xl rounded-xl mb-3">
              {displayItem
                ?.split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </h1>
            <div className="text-2xl mb-12">500</div>

            {/* Accordion  */}
            <Accordion type="single" collapsible className="mb-4">
              <AccordionItem value="description" className="border-none">
                <AccordionTrigger>Description</AccordionTrigger>
                <AccordionContent>Item Description</AccordionContent>
              </AccordionItem>
              <AccordionItem value="sizing-chart">
                <AccordionTrigger>Sizing Chart</AccordionTrigger>
                <AccordionContent>insert sizing chart image here</AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="flex gap-5 mb-7">
              <select className={`bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white`}>
                <option>Size</option>
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option>
              </select>
              <select className={`bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white`}>
                <option>Quantity</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </select>
            </div>

            <button className={"bg-red-600 text-white text-xl px-4 py-3 rounded hover:bg-red-700 transition-colors"}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
