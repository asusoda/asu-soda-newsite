
import Stars from "../../components/Stars"
import { useParams } from "react-router-dom"

export default function ItemPage() {
  const { itemId, categoryId, subcategoryId } = useParams()

    // Determine what we're displaying
    const isSubcategory = !!subcategoryId
    const displayItem = itemId
    const breadcrumbCategory = categoryId

  return (
    <section className="section mt-[6%] border">

      {/* Stars background*/}
      <Stars className="fixed inset-0 z-0 pointer-events-none opacity-60" />

      <div className="px-6 md:px-12 lg:px-24 py-12 p-4 border w-[70%]">
        {/* Breadcrumb Navigation */}
          <nav className="mb-6 text-sm text-gray-400">
            <span>Shop</span>
            <span className="mx-2">›</span>
            <span className="capitalize">{breadcrumbCategory}</span>
            <span className="mx-2">›</span>
            <span className="capitalize text-white">{subcategoryId}</span>
          </nav>

        <div className="flex justify-between mb-10 mt-12 border gap-10">
          <div className="flex flex-col flex-1 ">
            <div className="bg-gray-500 h-50 border">
              <img></img>
            </div>
            <div>carousel</div>
          </div>
          <div>
            <h1 className="text-white font-bold text-2xl md:text-4xl text-center rounded-xl">
              {displayItem?.charAt(0).toUpperCase() + displayItem?.slice(1)}
            </h1>

            <div>
              Price
            </div>
            <div>
              Description
            </div>
            <div>
              Sizing Chart
            </div>

            <div className="flex gap-5">
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

            <button
                className={"bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"}>
                Add to Cart

            </button>

          </div>



      </div>
      </div>
    </section>
  )
  }
